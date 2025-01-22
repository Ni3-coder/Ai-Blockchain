const express = require('express');
const axios = require('axios');
const { utils } = require('ethers');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
require('dotenv').config();

const app = express();
const apiKey = process.env.API_KEY;

class Block {
    constructor(timeStamp, blockReward) {
        this.timeStamp = timeStamp;
        this.blockReward = blockReward;
    }
}

const fetchData = async() => {
    try {
        const listOfBlocks = [];
        for (let blockNumber = 17667730; blockNumber < 17668230; blockNumber++) {
            const apiUrl = `https://api.etherscan.io/api?module=block&action=getblockreward&blockno=${blockNumber}&apikey=${apiKey}`;
            const response = await axios.get(apiUrl);
            if (response.data.status === '1') {
                const rewardEther = utils.formatEther(response.data.result.blockReward);
                const timeStamp = response.data.result.timeStamp;
                const block = new Block(timeStamp, rewardEther);
                listOfBlocks.push(block);
            }
        }
        await exportToCsv(listOfBlocks);
        console.log('Data exported to CSV file successfully!');
    } catch (error) {
        console.log('Error:', error.message);
    }
};

const exportToCsv = async(data) => {
    try {
        const csvWriter = createCsvWriter({
            path: 'block_data.csv',
            header: [
                { id: 'timeStamp', title: 'timestamp' },
                { id: 'blockReward', title: 'blockReward' }
            ],
        });

        await csvWriter.writeRecords(data);
        console.log('CSV file created successfully!');
    } catch (error) {
        console.log('Error:', error.message);
    }
};

(async() => {
    try {
        await fetchData();
        app.listen(3000, () => {
            console.log('Server is running');
        });
    } catch (error) {
        console.log('Error:', error.message);
    }
})();
Block Data Fetcher

This project fetches Ethereum block rewards and timestamps for a specified range of blocks using the Etherscan API, then exports the data to a CSV file. It is built with Node.js, Express, and the ethers.js library.

Prerequisites

Ensure you have the following installed:

Node.js (v14 or higher)

npm (Node package manager)

Setup Instructions

Clone the Repository

git clone <repository-url>
cd <repository-folder>

Install Dependencies
Run the following command to install the required Node.js packages:

npm install

Set Up Environment Variables
Create a .env file in the project root directory and add your Etherscan API key:

API_KEY=your_etherscan_api_key

Replace your_etherscan_api_key with your actual API key from Etherscan.

Run the Application
Execute the following command to start fetching data and exporting it to a CSV file:

node app.js

Access the CSV File
After the script runs successfully, a file named block_data.csv will be generated in the project root directory.

File Structure

.
├── app.js                 # Main application file
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Dependency tree lockfile
├── .env                   # Environment variables
├── block_data.csv         # Output CSV file (generated after execution)

How It Works

The fetchData function retrieves block data for a specific range of blocks (17667730 to 17668230 in this case) using the Etherscan API.

For each block:

The block reward is converted from wei to ether.

The block timestamp and reward are stored in an object.

The collected data is written to a CSV file using the csv-writer library.

Dependencies

express: Web framework for Node.js (used here for demonstration purposes).

axios: HTTP client for making API requests.

ethers: Ethereum library for handling blockchain data and utility functions.

csv-writer: Library for exporting data to CSV files.

dotenv: Module to manage environment variables.

Example Output (CSV File)

timestamp,blockReward
1672531200,2.0
1672531260,2.1
...

Error Handling

If the Etherscan API returns an error, or if the API key is invalid or missing, the script logs an error message.

Any issues during the CSV creation process are also logged.

Notes

Modify the block range (17667730 to 17668230) in the fetchData function to fetch data for a different range.

Ensure your Etherscan API key has sufficient credits to handle the number of requests being made.

License

This project is licensed under the MIT License.

Contributing

Contributions are welcome! Please submit a pull request or open an issue for any changes or improvements.

If you have any questions or encounter issues, feel free to reach out.


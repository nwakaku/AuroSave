# AuroSave

```Set beneficiaries to the assets in your wallet.  tokens, ERC-1115 or  NFTs will automatically transfer upon death or loss of keys.

```

Use it was a living will or as a backup for a lost private keys, trust that your assets are not lost forever in your wallet

## documentation 

The `AuroSave` smart contract Set beneficiaries to the assets in your wallet.  tokens, ERC-1115 or  NFTs will automatically transfer upon death or loss of keys. It supports inheritance of various types of assets, including ERC20 tokens, ERC721 tokens, and ERC1155 tokens.

### Contract Overview

The `AuroSave` contract is an ERC721-compliant contract that extends the functionality of the ERC721 standard. It includes features to register legacies, specify beneficiaries, and execute inheritance based on predefined conditions.

The contract includes the following main components:

- **Structs**:
  - `Legacy`: A struct that defines the details of a legacy, including the testator (the owner of the legacy), the token type (ERC20, ERC721, or ERC1155), the beneficiary, the amount (for ERC20 and ERC1155), and the token ID (for ERC721 and ERC1155).
  
- **Mappings**:
  - `executionDay`: Maps a testator's address to the day of will execution (0-364) based on a timestamp.
  - `executionList`: Maps the day of will execution (0-364) to a list of testators to be executed on that day.
  - `legacies`: Maps a testator's address to an array of legacy IDs.
  - `legacyNFTs`: Maps a legacy ID to its corresponding `Legacy` struct.
  
- **Events**:
  - `AddLegacy`: Triggered when a testator registers a new legacy.
  - `RemoveLegacy`: Triggered when a testator removes a registered legacy.
  - `NewExecutionDay`: Triggered when a testator changes their execution day.
  - `LegacyTransferFailed`: Triggered when the transfer of a legacy to the beneficiary fails.
  - `Executed`: Triggered when a will has been carried out.

- **Modifiers**:
  - `InvalidLegacy()`: Custom error indicating an invalid legacy registration.
  - `NoLegacyRegistered()`: Custom error indicating that no legacies are registered for a testator.

- **Functions**:
  - `addLegacy()`: Allows a testator to register a new legacy. The testator specifies the token type, beneficiary, amount (if applicable), and token ID (if applicable).
  - `removeLegacy()`: Allows a testator to remove a previously registered legacy.
  - `checkIn()`: Allows a testator to check in and update their execution day. This function needs to be called at least once before the inheritance execution.
  - `getBeneficiaryLegacies()`: Retrieves an array of legacies where the caller is the beneficiary.

### Usage

1. Testator Registration:
   - Testators can register their legacies using the `addLegacy()` function. They need to specify the token type (ERC20, ERC721, or ERC1155), beneficiary address, amount (if applicable for ERC20 and ERC1155), and token ID (if applicable for ERC721 and ERC1155).

2. Legacy Removal:
   - Testators can remove a previously registered legacy by calling the `removeLegacy()` function and providing the position of the legacy in their list of legacies.

3. Check-In:
   - Before the execution of legacies, testators need to call the `checkIn()` function at least once to update their execution day. This function assigns the testator to a specific execution day based on the timestamp of the contract interaction.

4. Execution:
   - Once the testators have checked in, the inheritance execution can take place. The execution is triggered automatically based on the execution day. When the execution day arrives

## BlockChain Deployed

| Name Of Chain                 | Contract Address                           |
| ---------------------------   | ------------------------------------------ |
| Aurora mainnet Blockchain     | 0xc343e84c6ae02121EC97aE1F1FDC23B44cD9B8eb |




[Video Demo](https://vimeo.com/840667331?share%253Dcopy) |
[Live Site](https://main-AuroSave.vercel.app/) |

## Run Locally

Clone the project

```bash
  git clone https://github.com/nwakaku/main_AuroSave
```

Go to the project directory

```bash
  cd frontend
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn run dev
```

## Authors

- [@Wisdom_Chris](https://www.github.com/nwakaku)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Technologies

This project is built with the following open source libraries, frameworks and languages. User choice of framework used, available in plain js or typescript.
| Tech | Description |
| --------------------------------------------- | ------------------------------------------------------------------ |
| ------ | ------ React Frontend Environment ------ |
| [Next JS](https://nextjs.org/) | React Framework |
| ------ | ------ CSS Framework ------ |
| [Tailwind](https://tailwindcss.com/) | A utility-first CSS framework |
| ------ | ------ Ethereum Development Environment ------ |
| [Hardhat](https://hardhat.org/) | Ethereum development environment for professionals |
| ------ | ------ Included Libraries ------ |
| [WAGMI](https://wagmi.sh/) | A set of React Hooks for Web3 |
| [RainbowKit](https://www.rainbowkit.com/docs/introduction) | RainbowKit is a React library that makes it easy to add wallet connection to your dapp. |
| [ChainlinkAutomation](https://automation.chain.link/) | Automatic Execution service for your smart contracts

## Details

Connect your wallet and "Add new beneficiary"
On the model pop up you will fill in the following

`Token Address` - (token, ERC1155 or ERC721) That you want to send to the beneficiary.

`Beneficiary` - Set the address of where you want the above asset sent to. Starts with 0x..

`Amount` - For ERC20 tokens, set how many tokens. For ERC721 set amount to 1

`Token ID`- For tokens it is set to 0. For ERC1155 and ERC721 tokens, token 1 and above specific to your NFT.

Upon approving and submitting the beneficiary, you must `check in yearly` to keep the assets in current wallet or the Chainlink Automation will execute the transaction

When you set the beneficiary, an NFT with the details is sent the wallet address letting them know about the details. When the contract executes or the beneficiary is removed the NFT will be burned.

You can remove all beneficiaries with the `remove beneficiaries` button that will clear out beneficiaries and execution data.

## Roadmap

- Drop down options for existing tokens in wallet (Pull wallet assets)

- Give a grace period before execution

- Send a reminder to email/calendar when check in date is coming up

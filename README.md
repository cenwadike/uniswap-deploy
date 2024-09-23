# Uniswap V2 deployment

## Clone repository

```bash
git clone github.com/cenwadike/uniswap-deploy
``` 

## Install dependencies

```bash
npm i
```

## Set environment variable

- cp .env.copy .env

- provide **PRIVATE_KEY**

## Deploy contracts

### Local deployment

```bash
npx hardhat run --network localhost scripts/local-deploy.js
```

### Sepolia deployment

```bash
npx hardhat run --network SepoliaTestNetwork scripts/sepolia-deploy.js
```

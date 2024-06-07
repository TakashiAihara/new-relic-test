# Project Setup and Start Guide

## Prepare Environment Variables

1. Copy the `.env.sample` file to `.env`:

   ```sh
   cp .env.sample .env
   ```

2. Input your `NEW_RELIC_LICENSE_KEY` into the `.env` file.

## Start the Service

1. Install [pnpm](https://pnpm.io/).

2. Install the necessary packages and start the service:

   ```sh
   pnpm i
   pnpm start
   ```

## Make a Request

1. Once the service is running, send a request with the following command:

   ```sh
   curl http://localhost:3000
   ```

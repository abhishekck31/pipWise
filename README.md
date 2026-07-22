# pipWise

pipWise is a minimal Next.js trading journal for capturing trades, reviewing performance, and reflecting on market decisions.

## Features

- Track trades with entry, exit, and P&L details
- Capture journal notes and mood for each session
- Use Prisma models for persistence and NextAuth-compatible auth scaffolding
- Follow a strict black, white, red, and green visual system for signal-driven interfaces

## Getting started

1. Install dependencies
   ```bash
   npm install
   ```
2. Create the local environment file if needed
   ```bash
   cp .env.example .env
   ```
3. Run Prisma generate if your database is available
   ```bash
   npx prisma generate
   ```
4. Start the development server
   ```bash
   npm run dev
   ```

## Scripts

- npm run dev
- npm run build
- npm run test
- npm run lint
- npm run typecheck

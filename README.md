# PlaceMind AI

PlaceMind AI is a Next.js dashboard for exploring student placement data through charts, KPIs, dataset uploads, and a chat-style insight experience.

## What it does

- Upload placement data from a CSV file
- Review key placement KPIs such as placement rate and salary range
- Explore dashboard and analytics views with Recharts visualizations
- Ask natural-language style questions in the chat screen
- Start with the bundled sample dataset and replace it with your own data

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Recharts
- Papa Parse

## App routes

- `/` - landing page
- `/upload` - upload a CSV dataset
- `/dashboard` - KPI cards, charts, and summary table
- `/analytics` - deeper analysis and comparison charts
- `/chat` - question-driven insights over the loaded dataset

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Available scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Data format

The app expects placement data with fields like:

- `sl_no`
- `gender`
- `ssc_p`
- `hsc_p`
- `hsc_s`
- `degree_p`
- `degree_t`
- `workex`
- `etest_p`
- `specialisation`
- `mba_p`
- `status`
- `salary`

A sample dataset is already bundled in `lib/placement-data.ts`, so the app works immediately even before you upload a file.

## Environment variables

The web app itself can run with the sample dataset and does not require an API key.

There is also an optional CLI helper script, `chat.js`, which uses Groq. If you want to use that script, create a `.env` file with:

```env
GROQ_API_KEY=your_groq_api_key
```

The `.env` file is already ignored by git.

## Project structure

```text
app/                 Next.js app router pages
components/          Reusable UI and dashboard components
lib/                 Data context and placement analytics helpers
public/              Static assets
styles/              Extra styling assets
chat.js              Optional CLI chat helper
```

## Notes

- CSV upload is handled on the client with Papa Parse
- Uploaded data is stored in React context during the session
- Charts and KPIs update from the currently loaded dataset

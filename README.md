# Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

[Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)

### Create your project

Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

```markdown
npx create-next-app@latest crypto-price-tracker-app --typescript --eslint
cd crypto-price-tracker-app
```

### Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

```markdown
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```markdown
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js}",
    "./configs/**/*.{js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./styles/globals.css` file.

```markdown
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Dependencies

### Heroicons

Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
Available as basic SVG icons and via first-party React and Vue libraries.

NPM:

```markdown
https://www.npmjs.com/package/@heroicons/react
```

Install:

```markdown
npm install @heroicons/react
```

### Date FNS

date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.

NPM:

```markdown
https://www.npmjs.com/package/date-fns
```

Install:

```markdown
npm i date-fns
```

### Tailwindcss Forms

A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.

NPM:

```markdown
https://www.npmjs.com/package/@tailwindcss/forms
```

Install:

```markdown
npm install -D @tailwindcss/forms
```

Start your build process:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Hero Section

```markdown
Ovulation Calculator
```

```markdown
Determine your ovulation cycle.
```

```markdown
Use this calculator to pinpoint your most fertile days by identifying when you are likely ovulating. Menstrual periods can vary from person to person and month to month, so this tool can help you better understand your own cycle.
```

## Footer Section

```markdown
Powered by Code of Relevancy
```

```markdown
https://linktr.ee/codeofrelevancy?utm_source=weather-app&utm_medium=cpc&utm_campaign=promotion
```

## Calculator Section

```markdown
Last period
```

```markdown
Choose the starting date of your most recent menstrual cycle.
```

```markdown
Cycle length
```

```markdown
Enter the number of days in your menstrual cycle.
```

```markdown
Quick selections
```

```markdown
Start over
```

```markdown
Reset the form with ease and begin anew with just one simple click.
```

## Outcomes Section

```markdown
Outcomes
```

```markdown
Start tracking your ovulation today and take control of your fertility journey.
```

```markdown
Fertile Window
```

```markdown
The fertile window is the time period in which a woman is most likely to conceive, typically occurring around the time of ovulation.
```

```markdown
Ovulation Date
```

```markdown
Ovulation date is the day in a woman's menstrual cycle when an egg is released from the ovary and can potentially be fertilized.
```

```markdown
Next Period Date
```

```markdown
The Next Period Date is the date when a women's menstrual cycle is expected to begin again after the previous period.
```

```markdown
Pregnancy Test Date
```

```markdown
A pregnancy test date refers to the date on which a woman takes a pregnancy test to determine if she is pregnant.
```

```markdown
Expected Due Date
```

```markdown
The expected due date (EDD) is the date that a pregnant woman's baby is expected to be born. The actual due date may vary by a few days or weeks.
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

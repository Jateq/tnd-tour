# TND-Tour Documentation

Welcome to TND-Tour - Your Ultimate Travel Companion! 🌍✈️

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
    - [1. Simple authorization](#1-simple-authorization)
    - [2. Fly with us](#2-fly-with-us)
    - [3. Find the perfect stay](#3-find-the-perfect-stay)
    - [4. Membership](#4-membership)
    - [5. Profile](#5-profile)
- [Technologies Used](#technologies-used)
    - [Frontend](#frontend)
    - [Frameworks](#frameworks)
    - [Platforms](#platforms)
    - [UI](#ui)
    - [Code Quality](#code-quality)
    - [Database](#database)
    - [Miscellaneous](#miscellaneous)
  
- [Installation](#installation-want-to-run-locally)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

TND-Tour is an all-in-one travel platform designed to make your travel experience seamless and enjoyable. Whether you're a solo traveler, a couple on a romantic getaway, or a family planning a vacation, TND-Tour has got you covered.

## Features

### 1. Simple Authorization

You don't need waste time on registering to the site 🤖
🤖
🤖
. Google account is all that you need to give us. Read our Privacy Policy if you interested on what information we take.

### 2. Fly with Us

Yes! TND its not just about planning, its about taking actions. With our Fasterst TND-airlines, you can reach and plan your best trip all over the world. Flights are available every day  🥳🥳🥳

### 3. Find the perfect Stay

We are making good connections with all over the world with Hotels, Hostels, Apartments, so all you need to do is reserve the place in one simple click!

### 4. Membership

Stay tuned for our best Membership plans, with bonuses for guides, flights and stays. We will help with everything you need. Checkout the new Premium plan at our main page navigation tool!

### 5. Profile

Simple and enjoyable user experience is one of the key factors in our web application, everything you can find at your profile section, so you will not miss none of your flights or stays reserved.

## Technologies Used

### Frontend

- React.js 

### Frameworks
 - Next.js – React framework for building performant apps with the best developer experience
 - Auth.js – Handle user authentication with ease with providers like Google, Twitter, GitHub, etc


### Platforms
 - [Github](https://github.com/jateq/tnd-tour) - code source of our project
- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git
- [Workbox](https://ducanh-next-pwa.vercel.app/docs/next-pwa/getting-started) - Service worker and cache storage logic for PWA. Service workers are specialized JavaScript assets that act as proxies between web browsers and web servers. Strategies for interaction between a service worker's fetch event and the Cache interface.

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Headless UI](https://headlessui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Heroicons](https://heroicons.com/) – Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.

### Code Quality

- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js

### Database

- For simplicity mock-api


### Miscellaneous

- [Vercel Analytics](https://vercel.com/analytics) – Track unique visitors, pageviews, and more in a privacy-friendly way
- [Air Astana](https://airastana.com/kaz/en-us) - Inspiration for our navigation tool
- [Parallax effect](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwju7omo9JSDAxVePxAIHQ3VBBoQwqsBegQIDBAG&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DalGnk3iMaYE&usg=AOvVaw2uK30av8grZsn4egOEH4d_&opi=89978449) - Good looking effect




## Installation, want to run locally?

To install TND-Tour on your local machine, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/jateq/tnd-tour.git
```
2. Navigate to the project directory and install dependencies: 

```bash
cd tnd-tour
pnpm install
```
3. Next, set up environmental variables. Download `.env.example` file as `.env.local`, and make some changes in `.env.local`:

```
GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_CLIENT_SECRET
```
 You can find them in google console. Consent your OAuth credentials and create project.


* Create a Google OAuth app through the [instructions here](https://refine.dev/blog/nextauth-google-github-authentication-nextjs/#for-googleprovider-make-sure-you-have-a-google-account). For "Authorized redirect URIs", ignore the production URI for now. Don't forget to publish the Google app in order for others to be able to sign-in. Paste the obtained Google Client ID to the `GOOGLE_CLIENT_ID` field, and the Google Client Secret to the `GOOGLE_CLIENT_SECRET` field.
* Populate the `NEXTAUTH_SECRET` field with a string you can [generate here](https://generate-secret.vercel.app/32).


4. Run. While in the project folder, launch the development server:
```
> npm run dev
```
Congratulations! App now should be available at [`http://localhost:3000`](http://localhost:3000).


## Usage

1. Login to your account TND-Tour.
2. Explore destinations, plan your trips, and enjoy the moment.
3. Find the best opportunities and open unforgettable memories

## Contributing

We welcome contributions from the community. If you find a bug, have a feature request, or want to contribute code, pls send a pull request.

## License

TND-Tour is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Happy Traveling! 🌟✈️


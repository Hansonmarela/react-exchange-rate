# React Exchange Rate

This project is a currency conversion platform built using React, Redux, and Material-UI. It allows users to convert currencies to and from Ghana Cedis and other currencies.

## Table of Contents
- [Features](#features)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication (login, logout)
- Password reset functionality
- Currency conversion with real-time exchange rates
- Responsive design for mobile and desktop

## Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/react-exchange-rate.git
2. Navigate to the project directory:
   cd react-exchange-rate
3.Install dependencies:
  npm install
4. Start the development server:
   npm start


## Project Structure
react-exchange-rate/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── SignUp.js
│   │   ├── ForgotPassword.js
│   │   ├── ResetPassword.js
│   │   ├── PasswordResetSuccess.js
│   │   ├── CurrencyConverter.js
│   │   └── OtpCode.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── ...
├── package.json
└── README.md


## Dependencies
- React
- Redux
- Material-UI
- Axios
- React Router DOM
- Styled-components

## Environment Variables
- Create a .env file in the root of your project to store environment variables.

## Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Deployment
The app can be deployed on platforms like Vercel or Netlify.

To deploy on Vercel:

Install Vercel CLI:
npm install -g vercel

Deploy:
vercel

## Design
The designs for this project were created using Figma. You can view the designs by following this link https://bit.ly/3W5zabN

![login](https://github.com/user-attachments/assets/872b5907-44d6-4f5d-a2f4-19c930ccdc08)
![sign up](https://github.com/user-attachments/assets/b51c4ccd-3d14-40e9-93eb-5bed43c000b6)
![forgot-password](https://github.com/user-attachments/assets/279d6ca1-c65c-424b-97e1-bf8c17710f6a)
![otp-code](https://github.com/user-attachments/assets/14f5efd5-f274-463f-adb2-2df9cfe44d43)
![reset-password](https://github.com/user-attachments/assets/0c0e8652-c5cc-47d4-be73-50a4ae4a1b9f)
![password reset-success](https://github.com/user-attachments/assets/8ee70478-9187-4239-ad18-89e681af63bb)
![Currency converter](https://github.com/user-attachments/assets/5f3d6363-e729-4753-a2f6-56035e0b6543)


# Contact Page with Next.js

This project is a simple contact page built with Next.js, React, and Axios. It allows users to submit their contact information and messages.

## Features

- Form validation using React's useRef hook
- Form submission using Axios to a Google Apps Script endpoint
    ### Google Sheets Integration
    This Next.js application integrates with Google Sheets using Google Apps Script to store form submission data. The Google Apps Script receives form data from the Next.js application and appends it to a specified Google Sheets document.
    
    #### Setup
    - Create a new Google Sheets document to store form data.
    - Open the Google Apps Script editor by going to Extensions -> Apps Script.
    - Copy and paste the provided Google Apps Script code into the editor.
    - Deploy the script as a web app by clicking on the Deploy button and selecting New deployment.
    - Set the deployment type to Web app and configure the access permissions as needed.
    - Copy the deployed web app URL.
    #### Usage
    In your Next.js application, update the axios.post URL to point to the deployed Google Apps Script web app URL.
    When the form is submitted in your Next.js application, the form data will be sent to the Google Apps Script, which will append it to the specified Google Sheets document.
    #### Example
    For example, to integrate with a Google Sheets document with the URL https://docs.google.com/spreadsheets/d/18Esdvonxkrsyz_-AO3GxPye4rWQ5TpMo/edit#gid=0, you would      set the axios.post URL as follows:
    ```bash
    axios.post('https://script.google.com/macros/s/AKfycbx4NDJukssSvcU8LVy9QmBjAlFIMdh7WIoSt1qR-Hf7tBRspdJ7-bUu6083A_aV3WCOu1/exec', formData)
    ```
- Toast notifications for success and error messages using react-toastify
- Lottie animation for visual appeal

## Installation and Setup

1. Fork this repository
2. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ContactFormAssignment.git
   ```
3. Install dependencies
    ```bash
    npm install
    ```
4. Run the development server
    ``` bash
    npm run dev
    ```
5. Open http://localhost:3000 to view the application in your browser.
6. To see the data entered by the user, <br>
Link for the sheet is:<br>
    ```bash
    https://docs.google.com/spreadsheets/d/18Esdo5myeZOaHl2vonxkrsyz_-AO3GxPye4rWQ5TpMo/edit?usp=sharing
    ```

## Usage
1. Fill out the form fields with your name, email, phone number, and message.
2. Click the "Submit" button to submit the form.
3. Success and error messages will be displayed using toast notifications.

## Deployment
This project is deployed to Vercel or any other hosting provider that supports Next.js applications. For deployment to Vercel, simply push your changes to the main branch, and Vercel will automatically deploy the application.<br>
##### Live link to the Project:<br>
https://contactform-assign.vercel.app/


## Credits
- Next.js - The React framework for production
- React - A JavaScript library for building user interfaces
- Axios - Promise based HTTP client for the browser and Node.js
- Lottie - Render After Effects animations natively on Web, Android and iOS, and React Native
- react-toastify - React component for toast notifications

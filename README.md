# NYIT-attendance-app
CSCI 380 - M01 - Individual Project

---

## Get start
  * install the required libraries<br>
  ```
  sudo ./setup.sh
  ```
  <br>

  * Create a Google API: <a href="https://console.developers.google.com/apis/dashboard"> here </a>
  * Note: <br>
    a. Use your own API key. Never share with anyone else. <br>
    b. Use ```host.exp.exponent``` as the “Package name” or "Bundle ID" in the Google Cloud Console, otherwise you will face ```Error 400: redirect_uri_mismatch```.<br>
    c. Use ```openssl rand -base64 32 | openssl sha1 -c``` to generate openssl key

## Run the app
  ```
  cd <directory of your project>
  npm start 'OR' npm run android 'OR' expo start

  ```

  - If on android simulator:
  ```npm run android```

  - If on ios simulator:
  ```npm run ios```

  - If on web:
  ```npm run web```
  
  <br>

## Reference
  1. Generate QR Code with React Native: <a herf="https://www.npmjs.com/package/react-native-custom-qr-codes"> here</a>
  2. Scan QR Code with React Native: <a href="https://github.com/moaazsidat/react-native-qrcode-scanner"> here</a>
  3. Wifi controlling with React Native: <a href="https://www.npmjs.com/package/react-native-wifi-reborn"> here</a>
  4. Expo login Google with NYIT credential: <a href="https://blog.expo.io/google-sign-in-with-react-native-and-expo-9cac6c392f0e"> here</a>
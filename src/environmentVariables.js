/**
 * Temporary environmental file until we set up
 * process capabilitys
 * */
 const FACEBOOK_KEY = process.env.FACEBOOK_KEY,
 GOOGLE_DEVELOPER_TOKEN = process.env.GOOGLE_DEVELOPER_TOKEN,
 GOOGLE_KEY = process.env.GOOGLE_KEY,
 GOOGLE_OAUTH2_KEY = process.env.GOOGLE_OAUTH2_KEY,
 PAYPAL_SUBSCRIPTION_OPTIONS= {
  "client-id": "Adh0bup-e8bWSRZg8F-50TL1vOjqWOmYN8YEz2MsoEcBeMUdJ-eg58iHObqLhA_AED-TXgtGdq0QK17y",
  currency: "USD",
  intent: "subscription",
  "disable-funding": "credit",
  vault: true
},
 PAYPAL_PAYMENT_OPTIONS= {
  "client-id": "Adh0bup-e8bWSRZg8F-50TL1vOjqWOmYN8YEz2MsoEcBeMUdJ-eg58iHObqLhA_AED-TXgtGdq0QK17y",
  currency: "USD",
  intent: "capture",
  "disable-funding": "credit",
  vault: true
},
SERVER_URL = 'https://web-ads-dev-server.herokuapp.com',
// SERVER_URL = 'https://webadsserver.herokuapp.com',
// SERVER_URL = 'http://localhost:8000',
STATIC_URL = 'https://auto-ads-media-storage.s3.us-west-2.amazonaws.com/frontend-static/';

export { FACEBOOK_KEY, GOOGLE_DEVELOPER_TOKEN, GOOGLE_KEY, GOOGLE_OAUTH2_KEY, PAYPAL_SUBSCRIPTION_OPTIONS, PAYPAL_PAYMENT_OPTIONS, SERVER_URL, STATIC_URL };

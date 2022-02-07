/**
 * Temporary environmental file until we set up
 * process capabilitys
 * */
 const FACEBOOK_KEY = process.env.FACEBOOK_KEY,
 GOOGLE_DEVELOPER_TOKEN = process.env.GOOGLE_DEVELOPER_TOKEN,
 GOOGLE_KEY = process.env.GOOGLE_KEY,
 GOOGLE_OAUTH2_KEY = process.env.GOOGLE_OAUTH2_KEY,
SERVER_URL = 'https://web-ads-dev-server.herokuapp.com';
// SERVER_URL = 'https://webadsserver.herokuapp.com';
// SERVER_URL = 'http://localhost:8000',
STATIC_URL = 'https://auto-ads-media-storage.s3.us-west-2.amazonaws.com/frontend-static/';

export { FACEBOOK_KEY, GOOGLE_DEVELOPER_TOKEN, GOOGLE_KEY, GOOGLE_OAUTH2_KEY, SERVER_URL, STATIC_URL };

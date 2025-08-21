'use strict';

const OTPAuth = require('otpauth');
const dotenv = require('@dotenvx/dotenvx');

dotenv.config();

/**
 * Gets the baseUrl to use for the environment and context the tests are running in
 */
const baseURL = process.env.FALCON_BASE_URL ?? 'https://falcon.us-2.crowdstrike.com/';

/**
 * @param {string} role
 */
async function getUserCredentials(role) {
  let email = process.env.FALCON_USERNAME;
  let password = process.env.FALCON_PASSWORD;
  let secret = process.env.FALCON_AUTH_SECRET;

  return { email, password, secret };
}

/**
 * Generates a time-based one-time password
 * @param {string} secret - Secret key for 2FA
 */
function getTotp(secret) {
  const totp = new OTPAuth.TOTP({
    algorithm: 'SHA1',
    digits: 6,
    period: 30,
    secret,
  });

  return totp.generate();
}

module.exports = {
  baseURL,
  getUserCredentials,
  getTotp
};

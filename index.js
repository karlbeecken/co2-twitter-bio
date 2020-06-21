require('dotenv').config()
const Twitter = require('twitter-lite')

const client = new Twitter({
    subdomain: "api", // "api" is the default (change for other subdomains)
    version: "1.1", // version "1.1" is the default (change for other subdomains)
    consumer_key: process.env.CONSUMER_KEY, // from Twitter.
    consumer_secret: process.env.CONSUMER_KEY_SECRET, // from Twitter.
    access_token_key: process.env.ACCESS_TOKEN_KEY, // from your User (oauth_token)
    access_token_secret: process.env.ACCESS_TOKEN_SECRET // from your User (oauth_token_secret)
  })

client
  .get("account/verify_credentials")
  .then(results => {
    console.log("results", results)
  })
  .catch(console.error)

client
  .post("account/update_profile", {
      description: process.env.DESCRIPTION
  })
  .then(results => {
    console.log("results", results)
  })
  .catch(console.error)

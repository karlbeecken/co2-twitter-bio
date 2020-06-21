require('dotenv').config()
const Twitter = require('twitter-lite')
const axios = require('axios')

const client = new Twitter({
    subdomain: "api", // "api" is the default (change for other subdomains)
    version: "1.1", // version "1.1" is the default (change for other subdomains)
    consumer_key: process.env.CONSUMER_KEY, // from Twitter.
    consumer_secret: process.env.CONSUMER_KEY_SECRET, // from Twitter.
    access_token_key: process.env.ACCESS_TOKEN_KEY, // from your User (oauth_token)
    access_token_secret: process.env.ACCESS_TOKEN_SECRET // from your User (oauth_token_secret)
  })

axios.get('http://www.hqcasanova.com/co2/')
  .then(function (rsp) {
    console.log("current:", rsp.data)
    client
    .post("account/update_profile", {
      description: process.env.DESCRIPTION + " " + rsp.data
    })
    .then(results => {
      console.log("new bio:", results.description)
    })
    .catch(console.error)
  })
  .catch(console.error)


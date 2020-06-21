 <p align="center">
  <h1 align="center">co2-twitter-bio 🔥</h1>
  <p align="center">A Twitter bot that updates your Twitter bio with weekly atmospheric CO2 levels.<p>
</p>

## Usage
To use this Twitter bot you'll need a Twitter developer account. Apply for one here: https://developer.twitter.com/en/apply-for-access

Then you will need to create a new app with consumer key, consumer secret, access token key and access token secret.

You'll have to save them into GitHub Actions Secrets with the following names:

- `CONSUMER_KEY`
- `CONSUMER_KEY_SECRET`
- `ACCESS_TOKEN_KEY`
- `ACCESS_TOKEN_SECRET`

Then you have to create another secret called `DESCRIPTION` with your desired Twitter bio. It should end with something like "current co2 level:" as the current atmospheric CO2 level will be appended at the end.

For example my bio template looks like this: "/dev/null | climate activist @FridayForFuture | born at 379ppm – currently".

**Note**: you don't need to append a space to the end of the `DESCRIPTION` secret, as the bot does this for you automatically.

That's it! 🎉 Now every day at 1 am your Twitter bio should update with the current atmospheric CO2 level informing other people about climate change. 🔥

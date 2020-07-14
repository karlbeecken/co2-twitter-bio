 <p align="center">
  <h1 align="center">co2-twitter-bio 🔥</h1>
  <p align="center">A Twitter bot that updates your Twitter bio/location with weekly atmospheric CO2 levels.<p>
</p>

## Usage
To use this Twitter bot you'll need a Twitter developer account. Apply for one here: https://developer.twitter.com/en/apply-for-access

_Hint: If you tell Twitter that you only want to use the API for educational purposes, you'll usually get access without further questions 🤫_

Then you will need to create a new app and set the app Permissions to **Read and Write**. You will need the following keys: <br>
*consumer key*, *consumer key secret*, *access token key* and *access token secret*
(consumer keys may also be labeled as API key)

You'll have to save them into GitHub Actions Secrets with the following names:

- `CONSUMER_KEY`
- `CONSUMER_KEY_SECRET`
- `ACCESS_TOKEN_KEY`
- `ACCESS_TOKEN_SECRET`

Then you have to create another secret called `DESCRIPTION` with your desired Twitter bio/location prefix. It should end with something like "current co2 level:" as the current atmospheric CO2 level will be appended at the end.

For example my bio template looks like this: `"/dev/null | climate activist @FridayForFuture | born at 379ppm – currently"`

If you want to use the location field of your Twitter profile instead of the description, you can set the secret `TARGET` to `location` (it defaults to `description` so you don't have to worry about setting it when you are using it with the description) Then the the current atmospheric CO2 level will be appended to the set `DESCRIPTION` and saved in the location field.

Fun fact: the Twitter location field has a client side max of 30 chars but with the API you can set up to 150 chars. 🤯 This means that you can set up to 139 chars as your location prefix.

**Note**: you don't need to append a space to the end of the `DESCRIPTION` secret, as the bot does this for you automatically

That's it! 🎉 Now every day at 1 am your Twitter bio/location should update with the current atmospheric CO2 level informing other people about climate change 🔥

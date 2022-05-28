var AuthDetails = {};
try {
  AuthDetails = require("../resources/auth.json");
} catch (e: any) {
  console.log(
    "Please create an auth.json like auth.json.example with a bot token or an email and password.\n" +
      e.stack
  ); // send message for error - no token
}

if (!AuthDetails.hasOwnProperty("bot_token")) {
  //attempt to populate from ENV variables. useful for remote cloud deploys
  AuthDetails = {
    bot_token: process.env.bot_token,
  };
}

exports.getAuthDetails = () => {
  return AuthDetails;
};

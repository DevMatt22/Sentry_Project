import { Client, ClientOptions } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";
import { displayASCIIArt } from "./assets/ascii_art";

const AuthDetails = require("./auth/auth.ts").getAuthDetails();

const client = new Client({
  intents: [],
});

displayASCIIArt();
console.log("Sentry is starting...");

checkValidToken();

ready(client);
interactionCreate(client);

function checkValidToken(): void {
  if (
    !AuthDetails.hasOwnProperty("bot_token") ||
    AuthDetails.bot_token === ""
  ) {
    console.error(
      "Please create an auth.json or specify environmental variables, the bot cannot run without a bot_token"
    ); // send message for error - no token
    process.exit();
  } else {
    client.login(AuthDetails.bot_token);
  }
}

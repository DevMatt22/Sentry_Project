import { Client, ClientOptions } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";
import { display } from "./assets/ascii_art";

const token =
  "OTc5ODY2OTcyNDEyMDUxNDg4.GTSoR1.phC0KhQMjPJHTx3-ULr_RSVhLCYOE5U1Y4TI_I";

console.log("Sentry is starting...");

const client = new Client({
  intents: [],
});


display();
ready(client);
interactionCreate(client);
client.login(token);

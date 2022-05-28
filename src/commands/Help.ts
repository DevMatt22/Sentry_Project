import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "src/Command";


export const Help: Command = {

    name: "help",
    description: "Returns all the commands available",
    type:"CHAT_INPUT",

    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = "Hello there !";
    
        await interaction.followUp({
          ephemeral: true,
    
          content,
        });
      },
    
};
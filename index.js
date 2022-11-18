const { Client, GatewayIntentBits } = require("discord.js")
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ]
})
client.on("ready", () => {
  console.log("Ready")
})
client.on("messageCreate", message => {
  console.log(message.content)
const content = message.content.toLowerCase()
const contentSplit = content.split(" ")
  if (content === "i hate philip" ) {
    message.reply("FUCK YOU") 
  } else if (content === "say the n word philip" || content === "philip say the n word") {
    message.reply("🖕")
  } else if (content === "philip you love your minecraft gf gabi" || content === "philips minecraft gf is gabi") {
    const num = Math.ceil(Math.random() * 3)
    if (num === 1) message.reply("https://tenor.com/view/headlock-fight-wrestle-sisters-friends-gif-17643961")
    if (num === 2) message.reply("https://tenor.com/view/sleep-headlock-youre-done-be-quiet-aggressive-gif-8613658")
    if (num === 3) message.reply("I WILL SLAP YOU WITH A RULER!!!!!")
  else if (content === "philip just keep pick pick picking those cherries" || content === "philip just keep pick pick pick picking those cherries") {
    message.reply(":sob: SHUTTTTTTTTTTTTT UPPPPPPPPPPPPPPPPPP") 
    message.channel.send("https://tenor.com/view/leaves-leaves-room-leaves-chat-left-escape-gif-24873136")
  } else if (message.content === ";responses") {
    message.reply('__**Responses**__/n*no capitals required*/n/nTrigger: "I hate Philip" /nResponse: "FUCK YOU"/n/nTrigger: "Say the N word Philip" OR "Philip say the N word"/nResponse: ":middle_finger:"/n/nTrigger: "Philip you love your Minecraft gf Gabi" OR "Philips minecraft gf is Gabi"/nResponse: Headlock GIF OR Agressive Headlock GIF OR I "WILL SLAP YOU WITH A RULER!!!!!"/n/nTrigger: "Philip just keep pick pick picking those cherries" OR "Philip just keep pick pick pick picking those cherries"/nResponse: ":sob: SHUTTTTTTTTTTTTT UPPPPPPPPPPPPPPPPPP" AND Leaving GIF/n/n**Feel free to recommend more in <#998774406828527677**')
  }
  }
  else { for (var i = 0; i < contentSplit.length; i=i+1) {
      if (contentSplit[i] === "philip") {
      message.reply("YOU TALKING ABOUT ME???? I. WILL. SLAP. YOU.")
        break
    } 
  }
         }
  })
client.login(process.env.TOKEN)
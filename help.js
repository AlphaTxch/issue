exports.run = async (client, message, args) => {
    return message.channel.send({embed: {
        color: 7948427, 
        description: `**Here are my current ranking commands**:\n`
        + `\`${client.config.prefix}help\` - Shows this list of commands.\n`
        + `\`${client.config.prefix}setrank <Roblox-Username> <rank name/number>\` - Ranks the user in the Roblox group to the specified rank number or name.\n`
        + `\`${client.config.prefix}promote <Roblox-username>\` - Moves the user **1** rank up in the Roblox group.\n`
        + `\`${client.config.prefix}demote <Roblox-Username>\` - Moves the user **1** rank down in the Roblox group.\n`
        + `\`${client.config.prefix}fire <Roblox-Username>\` - Moves a user to the LOWEST rank possible.\n`
        + `\`${client.config.prefix}shout <message>\` - Posts a group shout.\n`
        + `\`${client.config.prefix}clearshout\` - Clears the group shout.\n`
        + `\`${client.config.prefix}currentshout\` - Shows the current group shout.\n`
        + `\`${client.config.prefix}accept-join <Roblox-username>\` - Accepts a user's join request.\n`
        + `\`${client.config.prefix}deny-join <Roblox-username>\` - Denies a user's join request... 
        + `\`${client.config.prefix}ban <Discord-username>\` - Ban's a user. 
        + `\`${client.config.prefix}kick  <discord-username>\` - Kick's a user. 
        
                                  
   **Note: You need the Ranking Permission role to shout and clear the shout and promote/demote people...** `,
       
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
    }});
}
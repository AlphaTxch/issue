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
        + `\`${client.config.prefix}deny-join <Roblox-username>\` - Denies a user's join request... \n` 
        + `\`${client.config.prefix}ban <Discord-username>\` - Ban's a user. /n` 
        + `\`${client.config.prefix}kick  <Discord-username>\` - Kick's a user. (You need ADMINISTRATOR Perms to run this.) \n`
        
                                  
  + `\` Note: You need the Ranking Permmision role to rank people and shout in the group!** \n` 
       
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
    }});
}

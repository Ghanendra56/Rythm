module.exports = async (client, guild) => {
  let channel = guild.channels.cache.find(
    channel =>
    channel.type === "text" &&
    channel.permissionsFor(guild.me).has("SEND_MESSAGES")
  );
  channel.send(`**Thank you for adding me! :white_check_mark:**
     \`-\` My prefix here is \`!\`
     \`-\` You can see a list of commands by typing \`!help\` / \`!commands\`
     \`-\` If you need help, feel free to join our support server at **https://discord.gg/4X2hYdZqn2**`);
  /**
   * @INFO
   * Bot Coded by SyntaxError The Dev 💜#3044 
   * @INFO
   * Work for Syntax Codes | https://bit.ly/Web_Syntax
   * @INFO
   * Please mention Him / Syntax Codes Inc., when using this Code!
   * @INFO
   */
}

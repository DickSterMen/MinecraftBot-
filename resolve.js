    if(cmd === `${prefix}server`){

        if(args != null){

            let url =  `https://api.mcsrvstat.us/2/${args}`
            let favicon = `https://eu.mc-api.net/v3/server/favicon/${args}`
            console.log(chalk.greenBright.bold(`[CONSOLE] > ${message.author.tag} Executed the ?server ${args} command from ${message.guild.name} -> ( ${message.guild.id}).`));

            request({
                url: url,
                JSON: true
            },(error, response, body) =>{

                if(!body){
                    return message.channel.send("This IP seems invalid or down.");
                }
                var data = JSON.parse(body)


                var icon = data.icon;
                var ip = data.ip;
                var port = data.port;
                var ping = data.debug.ping;
                var srv = data.debug.srv;

                
                var pp = data.debug.proxypipe;
                
                
                if(!ping){
                    return message.channel.send("This IP seems invalid or down.");

                }else{
                    var motd = data.motd.clean;
                    var online = data.players.online;
                    var max = data.players.max;
                    var version = data.version;
                    var software = data.software;
                    
                    try{
                        var plugins = data.plugins.names;
                        if(plugins.indexOf("IPWhitelist") > -1 ) {

                            if(software){
                                try{
                                    var info = data.info.clean;
                                    let botembed = new Discord.MessageEmbed()
                                    .setTitle(`>> ${args} | SERVER INFO <<`)
                                    .setColor("#17f138")
                                    .setThumbnail(favicon)
                                    .setFooter(`MinecraftBot created by Javapact`, bot.user.avatarURL)
                                    .addField(`✠ IP:`,"`   "+ip+"`")
                                    .addField(`✠ PORT:`,"`"   +port+"`")
                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                    .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                    .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                                    .addField(`✠ IPWL:`,"`   YES 😭`")
                                    return message.channel.send(botembed);
                                }catch(e){
                                let botembed = new Discord.MessageEmbed()
                                .setTitle(`>> ${args} | SERVER INFO <<`)
                                .setColor("#17f138")
                                .setThumbnail(favicon)
                                .setFooter(`MinecraftBot created by Javapact`, bot.user.avatarURL)
                                .addField(`✠ IP:`,"`   "+ip+"`")
                                .addField(`✠ PORT:`,"`"   +port+"`")
                                .addField(`✠ MOTD:`,"`"   +motd+"`")
                                .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                .addField(`✠ IPWL:`,"`   YES 😭`")
                                return message.channel.send(botembed);
                                }
    
                            }else{
                                try{
                                    var info = data.info.clean;
                                    let botembed = new Discord.MessageEmbed()
                                    .setTitle(`>> ${args} | SERVER INFO <<`)
                                    .setColor("#17f138")
                                    .setThumbnail(favicon)
                                    .setFooter(`MinecraftBot created by Javapact`, bot.user.avatarURL)
                                    .addField(`✠ IP:`,"`   "+ip+"`")
                                    .addField(`✠ PORT:`,"`"   +port+"`")
                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                    .addField(`✠ VERSION:`,"`"+   version+"`")
                                    .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                                    .addField(`✠ IPWL:`,"`   YES 😭`")
                                    return message.channel.send(botembed);
                                }catch (e){
                                    let botembed = new Discord.MessageEmbed()
                                    .setTitle(`>> ${args} | SERVER INFO <<`)
                                    .setColor("#17f138")
                                    .setThumbnail(favicon)
                                    .setFooter(`MinecraftBot created by Javapact`, bot.user.avatarURL)
                                    .addField(`✠ IP:`,"`   "+ip+"`")
                                    .addField(`✠ PORT:`,"`"   +port+"`")
                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                    .addField(`✠ VERSION:`,"`"+   version+"`")
                                    .addField(`✠ IPWL:`,"`   YES 😭`")
                                    return message.channel.send(botembed);
                                }
            
                                }
                        }else{
                            if(software){
                                try{
                                var info = data.info.clean;
                                let botembed = new Discord.MessageEmbed()
                                .setTitle(`>> ${args} | SERVER INFO <<`)
                                .setColor("#17f138")
                                .setThumbnail(favicon)
                                .setFooter(`MinecraftBot created by Javapact`, bot.user.avatarURL)
                                .addField(`✠ IP:`,"`   "+ip+"`")
                                .addField(`✠ PORT:`,"`"   +port+"`")
                                .addField(`✠ MOTD:`,"`"   +motd+"`")
                                .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                                .addField(`✠ IPWL:`,"`   NO 🔥`")
                                return message.channel.send(botembed);
                                }catch(e){
                                    let botembed = new Discord.MessageEmbed()
                                    .setTitle(`>> ${args} | SERVER INFO <<`)
                                    .setColor("#17f138")
                                    .setThumbnail(favicon)
                                    .setFooter(`MinecraftBot created by Javapact`, bot.user.avatarURL)
                                    .addField(`✠ IP:`,"`   "+ip+"`")
                                    .addField(`✠ PORT:`,"`"   +port+"`")
                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                    .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                    .addField(`✠ IPWL:`,"`   NO 🔥`")
                                    return message.channel.send(botembed);
                                }
    
                                }else{
                                    try{
                                        var info = data.info.clean;
                                        let botembed = new Discord.MessageEmbed()
                                        .setTitle(`>> ${args} | SERVER INFO <<`)
                                        .setColor("#17f138")
                                        .setThumbnail(favicon)
                                        .setFooter(`MinecraftBot created by Javapact`, bot.user.avatarURL)
                                        .addField(`✠ IP:`,"`   "+ip+"`")
                                        .addField(`✠ PORT:`,"`"   +port+"`")
                                        .addField(`✠ MOTD:`,"`"   +motd+"`")
                                        .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                        .addField(`✠ VERSION:`,"`"+   version+"`")
                                        .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                                        .addField(`✠ IPWL:`,"`   NO 🔥`")
                                        return message.channel.send(botembed);
                                    }catch (e){
                                        let botembed = new Discord.MessageEmbed()
                                        .setTitle(`>> ${args} | SERVER INFO <<`)
                                        .setColor("#17f138")
                                        .setThumbnail(favicon)
                                        .setFooter(`MinecraftBot created by Javapact`, bot.user.avatarURL)
                                        .addField(`✠ IP:`,"`   "+ip+"`")
                                        .addField(`✠ PORT:`,"`"   +port+"`")
                                        .addField(`✠ MOTD:`,"`"   +motd+"`")
                                        .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                        .addField(`✠ VERSION:`,"`"+    version+"`")
                                        .addField(`✠ IPWL:`,"`   NO 🔥`")
                                        return message.channel.send(botembed);

                                    }
            
                                }

                        }

                    }catch (e){
                        if(software){
                            try{
                                var info = data.info.clean;
                            let botembed = new Discord.MessageEmbed()
                            .setTitle(`>> ${args} | SERVER INFO <<`)
                            .setColor("#17f138")
                            .setThumbnail(favicon)
                            .setFooter(`MinecraftBot created by Javapact`, bot.user.avatarURL)
                            .addField(`✠ IP:`,"`   "+ip+"`")
                            .addField(`✠ PORT:`,"`"   +port+"`")
                            .addField(`✠ MOTD:`,"`"   +motd+"`")
                            .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                            .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                            .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                            return message.channel.send(botembed);
                            }catch(e){
                                let botembed = new Discord.MessageEmbed()
                                .setTitle(`>> ${args} | SERVER INFO <<`)
                                .setColor("#17f138")
                                .setThumbnail(favicon)
                                .setFooter(`MinecraftBot created by Javapact`, bot.user.avatarURL)
                                .addField(`✠ IP:`,"`   "+ip+"`")
                                .addField(`✠ PORT:`,"`"   +port+"`")
                                .addField(`✠ MOTD:`,"`"   +motd+"`")
                                .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                .addField(`✠ VERSION:`,"`"+   software+ " → "+ version+"`")
                                return message.channel.send(botembed);
                            }

                            }else{
                                try{
                                    var info = data.info.clean;
                            let botembed = new Discord.MessageEmbed()
                            .setTitle(`>> ${args} | SERVER INFO <<`)
                            .setColor("#17f138")
                            .setThumbnail(favicon)
                            .setFooter(`MinecraftBot created by Javapact`, bot.user.avatarURL)
                            .addField(`✠ IP:`,"`   "+ip+"`")
                            .addField(`✠ PORT:`,"`"   +port+"`")
                            .addField(`✠ MOTD:`,"`"   +motd+"`")
                            .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                            .addField(`✠ VERSION:`,"`"+   version+"`")
                            .addField(`✠ EXTRA INFO:`,"`"+   info+"`")
                            return message.channel.send(botembed);
                                }catch(e){
                                    let botembed = new Discord.MessageEmbed()
                                    .setTitle(`>> ${args} | SERVER INFO <<`)
                                    .setColor("#17f138")
                                    .setThumbnail(favicon)
                                    .setFooter(`MinecraftBot created by Javapact`, bot.user.avatarURL)
                                    .addField(`✠ IP:`,"`   "+ip+"`")
                                    .addField(`✠ PORT:`,"`"   +port+"`")
                                    .addField(`✠ MOTD:`,"`"   +motd+"`")
                                    .addField(`✠ PLAYERS:`,"`"+   online+"/"+max+"`")
                                    .addField(`✠ VERSION:`,"`"+   version+"`")
                                    return message.channel.send(botembed);
                                }
        
                            }
                    
                    }

                }


        
            });

        }else{
            return message.channel.send("Usage ?server {ip}");
        }
    }
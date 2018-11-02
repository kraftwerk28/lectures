'use strict';

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(
  '762563466:AAGRCXFvLoNOEVUrPSN-Zn2e4ggLJYDHL8o',
  { polling: true });

bot.on('text', (message) => {
  bot.sendMessage(message.chat.id, 'Hello!');
});

bot.onText(/\/push/, (message, match) => {
  bot.sendSticker(message.chat.id, 'CAADAgADMgADKIxPDen6wQyFw6RcAg');
});

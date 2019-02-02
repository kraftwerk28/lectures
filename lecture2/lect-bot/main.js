'use strict';

const TelegramBot = require('telegraf/telegraf');
const Session = require('telegraf/session');
const Scene = require('telegraf/scenes/base');
const Stage = require('telegraf/stage');
const { inlineKeyboard, callbackButton } = require('telegraf/markup');
const fetch = require('node-fetch');
const qs = require('querystring');

let schedule = null;

const keyboard = inlineKeyboard([
  callbackButton('Понедельник', 1),
  callbackButton('Вторник', 2),
  callbackButton('Среда', 3),
  callbackButton('Четверг', 4),
  callbackButton('Пятница', 5),
], { columns: 1 });

/*
const keyboard = {
  inline_keyboard: [
    [
      { text: 'Понедельник', callback_data: 1 },
      { text: 'Вторник', callback_data: 2 },
    ],
    [
      { text: 'Среда', callback_data: 3 },
      { text: 'Четверг', callback_data: 4 },
    ],
    [
      { text: 'Пятница', callback_data: 5 },
      { text: 'Суббота', callback_data: 6 },
    ],
  ]
};
*/

const getDay = (schedule, id) => {
  return schedule
    .filter(val => +val.day_number === +id && +val.lesson_week === 1)
    .map((val, i) => (i + 1) + '. ' + val.lesson_name)
    .join('\n');
}


const groupSelectScene = new Scene('groupSelect');

groupSelectScene.hears(/..-?\d\d/, async (ctx, next) => {
  const url1 = `http://api.rozklad.org.ua/v2/groups/${qs.escape(ctx.match[0])}`;
  console.log(url1);
  const groupData = await fetch(url1)
    .then(data => data.json())
    .then(data => data.data);

  if (groupData === undefined) {
    ctx.reply('Групп не найдено');
    return;
  }
  console.log('group id:', groupData.group_id);

  const url2 =
    `http://api.rozklad.org.ua/v2/groups/${groupData.group_id}/lessons`;
  schedule = await fetch(url2).then((res) => res.json()).then(d => d.data);

  ctx.reply('Select day', { reply_markup: keyboard })
    .then(msg => {
      Stage.enter('daySelect')(ctx);
    });
});


const daySelectScene = new Scene('daySelect');
daySelectScene.toDelete = null;

daySelectScene.on('callback_query', async ctx => {
  if (daySelectScene.toDelete) {
    console.log('deleting...');
    await ctx.deleteMessage(daySelectScene.toDelete);
  }

  const answer = getDay(schedule, ctx.callbackQuery.data);
  bot.telegram.answerCbQuery(ctx.callbackQuery.id);
  ctx.reply(answer).then(msg => { daySelectScene.toDelete = msg.message_id });
});


const bot = new TelegramBot(process.env.TOKEN);
const stg = new Stage([groupSelectScene, daySelectScene], { ttl: 10 });

bot.use(Session());
bot.use(stg.middleware());

bot.start(ctx => {
  ctx.reply('Введи название группы');
  Stage.enter('groupSelect')(ctx);
});

bot.catch('error', (err) => {
  console.log(err);
  process.exit(1);
});

bot.startPolling();

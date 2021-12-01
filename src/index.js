// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const bot = require('venom-bot')
const { db } = require('../src/models/banco')
const { step } = require('../src/models/stages')

bot.create().then(client => start(client))

// Instancia do wpp
function start(client) {
  //Parametros Wpp
  logQR: true

  client.onMessage(message => {
    let resp = step[getStage(message.from)].obj.execute(
      message.from,
      message.body,
      message.sender.name
    )
    for (let index = 0; index < resp.length; index++) {
      const element = resp[index]
      client.sendText(message.from, element)
    }
  })
}

function getStage(user) {
  if (db[user]) {
    //Se existir esse numero no banco de dados
    return db[user].stage
  } else {
    //Se for a primeira vez que entra e contato
    db[user] = {
      stage: 0,
      itens: []
    }
    return db[user].stage
  }
}

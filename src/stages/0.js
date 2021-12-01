const { menu0 } = require('../menu/opções')
const { db } = require('../models/banco')

function execute(user, msg, contato) {
  // Obtem a hora atual do PC para definir se vai ser Bom dia, tarde ou noite.
  stamp = new Date()
  hours = stamp.getHours()
  if (hours >= 18 && hours < 24) {
    time = 'Boa noite'
  } else if (hours >= 12 && hours < 18) {
    time = 'Boa tarde'
  } else if (hours >= 0 && hours < 12) {
    time = 'Bom dia'
  }

  Object.keys(opções.opção).forEach(value => {
    let element = opções.opção[value]
    opção += `${value} - ${element.descrição}`
  })

  return [
    '👋Eu sou a Drya, a *assistente virtual* da Precode. \n*Posso te ajudar?* ',
    opções
  ]
}

exports.execute = execute

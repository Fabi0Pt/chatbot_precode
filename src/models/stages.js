// Estagios que o cliente se encontra
var stages = {
  0: {
    descrição: 'Boas Vindas',
    obj: require('../stages/0')
  },

  1: {
    descrição: 'Full client',
    obj: require('../stages/0')
  }

  // 2: {
  //   descrição: 'Full',
  //   obj: 'arquivo2.js'
  // }
}

exports.step = stages

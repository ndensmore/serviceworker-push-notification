const push = require('web-push')

const publicKey =
  'BLOE5991_TKp5L3WHuGUFLmGSM8GOtuaNva7Xdk2tSY68MHlOtTpKOyFvLvDOQIFc4DrpVkazYIKzcSb0XTbqJI'
const privateKey = 'KibSpclmZ_yPKnv9kmiqtWrHlfK1fd2iZjyR8uFho9A'

let subscription = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/eGdq6WAWcbE:APA91bFrf0uw6bTzNyseOjheKJAUIc0-zprVX9cOGJWnub7zGp8X3OwIOTlu5x4tE8QhjGeTfOWK_Q7s9zmY-JZqWTx6pu-AYpw3Nbl7xCNMdVYN_8JzMnHZtr9lgTCNESUGULLGlW8m',
  expirationTime: null,
  keys: {
    p256dh:
      'BJ7ZcaSCDA3nivPuigDw0VsKRtenfUyyIjHIR5LEZlkyHaiATKhQp_XUKyzIFsnAy8y89a2p5hU8PZcEl7GrxfE',
    auth: 'fMusigcjpO-7ur8OlXyXtw'
  }
}

push
  .sendNotification(subscription, 'test message')
  .then(() => console.log('sent'))
  .catch((err) => console.error(err))

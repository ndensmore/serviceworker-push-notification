const push = require('web-push')

const publicKey =
  'BLOE5991_TKp5L3WHuGUFLmGSM8GOtuaNva7Xdk2tSY68MHlOtTpKOyFvLvDOQIFc4DrpVkazYIKzcSb0XTbqJI'
const privateKey = 'KibSpclmZ_yPKnv9kmiqtWrHlfK1fd2iZjyR8uFho9A'

let subscription = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/cg6IQEA6_Es:APA91bE-mxUBEmYfVdvlklkLKELx1mC72QxafW7BY5nf__mxmqPLmOHbQTzGZC_DTJKNLrFU0qZIeHPjej6Vhcptotk4__RK70IePZkBUnPDwx2YR_6FhRSyFRXuRhMSqRmxXi8OaoJl',
  expirationTime: null,
  keys: {
    p256dh:
      'BMENJa1ft9qkUV0u2CeJHKj5EcbDVJq37Z63yEiWqmdDC5FwBlyUu7n-OT5y1Wp0yGQ9UwY-fP774iYFPRJbRjg',
    auth: 'NbFZhyHKhRFEljJ7Ks0DPg'
  }
}

push
  .sendNotification(subscription, 'test message')
  .then(() => console.log('sent'))
  .catch((err) => console.error(err))

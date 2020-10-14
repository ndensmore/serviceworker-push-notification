const push = require('web-push')

// keys = push.generateVAPIDKeys()
// console.log(keys)
const publicKey =
  'BAnfc2MnohFebTMekcqaKja8lW2nsaqXK8rWGM2xUprqHJuo972S5YR9jPOlpzcckOCBIcDPxmWVC4YdgqYTCs0'
const privateKey = 'HWnjl4ruWzaEJQT2vd9uyDZtzEm1YY4owxNRm6Tmw_o'

let subscription = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/drCYrfkiWOE:APA91bHttKhdiwd8tkJVySyDB6BLf2lwDrsZjwrk3w5FweVy6Y_GbPaA8qPGUMfSc46LXhYYUrOC-gZETAGO_GfSY-EhkeTEXMsa1R6KHyruYKgr_HNv9bWltbW4w5YidgMJWHlsiamK',
  expirationTime: null,
  keys: {
    p256dh:
      'BGe-80SPDFMRmvjpmwbPsaRuptp_3tYNMOlH6ah5PUHOFvBnR8DbwBXI3G3331mDX-6zAqxOkNODBx-nOs32qHY',
    auth: '5Hw1MdtFLhJnmCCHCl53Sg'
  }
}

push.setVapidDetails('mailto:aditya@priyam@ril.com', publicKey, privateKey)

push
  .sendNotification(subscription, 'test message')
  .then(() => console.log('sent'))
  .catch((err) => console.error(err))

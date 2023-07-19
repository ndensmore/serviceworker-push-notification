self.addEventListener('push', (event) => {
  let config = {
    body: 'This is a demo notificaiton',
    icon: 'images/icon.jpg',
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 2
    },
    actions: []
  }
  event.waitUntil(
    self.registration.sendNotification('test notification', config)
  )
})

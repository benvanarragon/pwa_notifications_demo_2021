window.onload = () => {
    'use strict';





    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./serviceWorker.js');
    }
  }

  //this function is called when button on index is clicked
  //check if the permission = granted then we will show notificaiton

    function displayNotification(){

                //log in the console the status of our permission whether its granted or denied
    Notification.requestPermission(status => {
      console.log('notification permission status: ', status);
    });



      if(Notification.permission === 'granted'){
        navigator.serviceWorker.getRegistration()
          .then(reg => {
            reg.showNotification('Hello World!', options);
          });
      }
    }


  const options ={

    body: 'This is a notification body!',
    icon: 'images/hello-icon-512.png',
    vibrate: [100,50,100],
    badge: 'https://vanarragon.ca/nimage/icon.png',
    data: {primaryKey:1}, //lets us identify the notification
    actions: [
      {action: 'go', title: 'Go to the site', icon: 'https://vanarragon.ca/nimage/icon.png'},
      {action: 'close', title: 'No thanks', icon: 'https://vanarragon.ca/nimage/icon.png'},
    ]

  };
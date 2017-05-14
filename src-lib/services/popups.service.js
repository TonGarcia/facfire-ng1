angular.module('fac-fire.services', [])
  .service('FFPopup', function() {

    var Popups = {
      show: function() {
        // $ionicLoading.show({
        //   template: '<ion-spinner icon="android"></ion-spinner>'
        // });

        alert("oi");
      }
      // ,
      // hideModal: function() {
      //   return $ionicLoading.hide();
      // },
      // loading: function(msg) {
      //   // if(loadingShown()) return;
      //   if(!msg) msg = 'Sincronizando...';
      //   promise = $ionicLoading.show({
      //     template: '<ion-spinner icon="android"></ion-spinner> <br>' + msg
      //   });
      //
      //   return promise;
      // },
      // loadingShown: loadingShown,
      // message: function(icon, message) {
      //   var delay;
      //   if(message.length <= 35) delay = Popup.shotDelay;
      //   if(message.length >= 80) delay = Popup.longDelay;
      //   else delay = Popup.delay;
      //
      //   $ionicLoading.show({
      //     template: '<div class="message-popup" onclick="hideMessage()"><h1><i class="icon ' + icon + '"></i></h1><p>' + message + '</p></div>',
      //     scope: this
      //   });
      //   promise = $timeout(function() {
      //     $ionicLoading.hide();
      //   }, delay);
      //   return promise;
      // },
      // offlineMessage: function(msg) {
      //   if(!msg) msg = 'Não foi possível conectar ao servidor. ' + Popup.offline;
      //   this.message(Popup.errorIcon, msg);
      // },
      // backErrorMsg: function(error) {
      //   var errorMsg;
      //
      //   if(typeof error.data == 'string') errorMsg = error.data;
      //   else errorMsg = error.data.msg;
      //
      //   if(errorMsg.length > 20) errorMsg = errorMsg.substr(0, 35);
      //
      //   Popups.message(Popup.errorIcon, Popup.contactSupport + error.status + ' - ' + errorMsg);
      // }
    };
    
    return Popups;
    
  });
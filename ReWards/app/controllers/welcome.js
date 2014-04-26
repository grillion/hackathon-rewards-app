function openUserHomeWindow(){
    var userHomeWindow = Alloy.createController('userhome').getView();
    Alloy.Globals.navWindow.openWindow( userHomeWindow, {
        animated: true
    });
}

function beginFacebookLogin(){
    
}

function _btnFacebookClick(e) {
    Ti.API.info("[WelcomeContoller->_btnFacebookClick]");
    beginFacebookLogin();
}

//Welcome Window
$.btnFacebook.addEventListener('click', _btnFacebookClick );
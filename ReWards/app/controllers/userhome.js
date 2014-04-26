var fb = Alloy.Globals.Facebook;

function _btnLogoutClick(e) {
    Ti.API.info("[WelcomeContoller->_btnLogoutClick]");
    fb.logout();
    $.userhome.close();
}

$.userhome.setLayout("vertical");

var userID = Ti.App.Properties.getInt( "userId" );
$.userBarcode.setImage("http://local.rewards.com/User/"+ userID +"/barcode")

//Welcome Window
$.btnLogout.addEventListener('click', _btnLogoutClick );
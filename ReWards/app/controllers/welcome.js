var fb = Alloy.Globals.Facebook;

function openUserHomeWindow(){
    var userHomeWindow = Alloy.createController('userhome').getView();
    Alloy.Globals.navWindow.openWindow( userHomeWindow, {
        animated: true
    });
}

function beginFacebookLogin(){
	fb.addEventListener('login', function(e) {
	    if (e.success) {
	        alert('Logged In');
	    } else if (e.error) {
	        alert(e.error);
	    } else if (e.cancelled) {
	        alert("Canceled");
	    }
	});
    fb.authorize();
}

function _btnFacebookClick(e) {
    Ti.API.info("[WelcomeContoller->_btnFacebookClick]");
    beginFacebookLogin();
}

//Welcome Window
$.btnFacebook.addEventListener('click', _btnFacebookClick );
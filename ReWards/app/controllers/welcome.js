var fb = Alloy.Globals.Facebook,
	apiClient = Alloy.Globals.apiClient;

function openUserHomeWindow(){
    var userHomeWindow = Alloy.createController('userhome').getView();
    Alloy.Globals.navWindow.openWindow( userHomeWindow, {
        animated: true
    });
}

function beginFacebookLogin(){
	fb.addEventListener('login', loginHandler );
    fb.authorize();
}

function loginHandler(e){
	fb.removeEventListener('login', loginHandler );
    if (e.success) {
    	
    	var loginRes = apiClient.post( "/User?facebook_token=" + fb.getAccessToken() );
    	
    	loginRes.then( function( result ){
	    	console.log("RESULT:" + result);
	    	Ti.App.Properties.setInt( "userId", result.id );
	        var userHomeWindow = Alloy.createController('userhome').getView();
			Alloy.Globals.navWindow.openWindow( userHomeWindow );
    	});
    	
    } else if (e.error) {
        alert(e.error);
    } else if (e.cancelled) {
        alert("Canceled");
    }
}


function _btnFacebookClick(e) {
    Ti.API.info("[WelcomeContoller->_btnFacebookClick]");
    beginFacebookLogin();
}

//Welcome Window
$.btnFacebook.addEventListener('click', _btnFacebookClick );
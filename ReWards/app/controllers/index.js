function init(){
    
    var welcomeWindow = Alloy.createController('welcome').getView();
    
    Alloy.Globals.navWindow = Ti.UI.iOS.createNavigationWindow({
        top:0,
        left:0,
        width:"100%",
        height:"100%",
        zIndex:1000,
        backgroundColor:"#FFFFFF",
        tintColor:"white",
        window: welcomeWindow
    });
                              
    Alloy.Globals.navWindow.setOpacity(0);
    Alloy.Globals.navWindow.open();
    
    if( Ti.App.Properties.getInt( "userId", 0 ) != 0
        || fb.loggedIn ) {
        	
       var userHomeWindow = Alloy.createController('userhome').getView();
       Alloy.Globals.navWindow.openWindow( userHomeWindow );    	
    }

    Alloy.Globals.navWindow.animate({
        opacity: 1,
        duration: 1000
    },function(){
        $.index.remove( $.splash );
    });
}

function _postLayout() {
    Ti.API.info("[IndexContoller->_postLayout]");
    $.index.removeEventListener('postlayout', _postLayout ); //Prevent an infinirte loop
    setTimeout( init, 500 );
}
//Prepare to hide the splash screen
$.index.addEventListener('postlayout', _postLayout );


$.index.open(); //Display window

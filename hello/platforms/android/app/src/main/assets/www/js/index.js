var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    // Bind any cordova events here. Common events are: 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

Fingerprint.isAvailable(isAvailableSuccess, isAvailableError);

function isAvailableSuccess(result) {
    /*
    result depends on device and os. iPhone X will return 'face' other Android or iOS devices will return 'finger'  
    */
    alert("Fingerprint available");
}

function isAvailableError(error) {
    // 'error' will be an object with an error code and message
    alert(error.message);
}

Fingerprint.show({
    description: "Some biometric description"
}, successCallback, errorCallback);

function successCallback(){
    alert("Authentication successful");
}

function errorCallback(error){
    alert("Authentication invalid " + error.message);
}

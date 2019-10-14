var firebaseConfig = {
    apiKey: "AIzaSyC8VWP0c_GKTjHItv9JUi9XnMI0eUI1xJw",
    authDomain: "foodfly-6b05e.firebaseapp.com",
    databaseURL: "https://foodfly-6b05e.firebaseio.com",
    projectId: "foodfly-6b05e",
    storageBucket: "foodfly-6b05e.appspot.com",
    messagingSenderId: "834281128894",
    appId: "1:834281128894:web:7f109a039f88be566defef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Provider Google
var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var email = user.email;
        console.log(email + "signed in");
        $("#content")[0].load("foodcategory.html");
        $("#sidemenu")[0].close();
        // User is signed in.
        /*
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        */
        // ...
    } else {
        console.log("signed out");

        // User is signed out.
        // ...
    }
});

document.addEventListener('init', function (event) {
    var page = event.target;
    console.log(page.id);

    if (page.id === "tabbar") {
        //Code for tabbar
        $("#menubtn").click(function () {
            var menu = document.getElementById('menu');
            menu.open();
        });
    }

    if (page.id === "sidemenu") {
        //Code for sidemenu
        $("#signinsignupbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });
        $("#signoutbtn").click(function () {
            firebase.auth().signOut().then(function () {
                // Sign-out successful.
                $("#content")[0].load("tabbar.html");
                $("#sidemenu")[0].close();
            }).catch(function (error) {
                // An error happened.
                console.log(error.message);
            });
        });
        $("#categorybtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('foodcategory.html')
                .then(menu.close.bind(menu));
        });
        $("#listbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('resturantlist.html')
                .then(menu.close.bind(menu));
        });
        $("#menubtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('resturantmenu.html')
                .then(menu.close.bind(menu));
        });
        $("#conbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('orderconfirm.html')
                .then(menu.close.bind(menu));
        });
    }

    if (page.id === 'tab1') {
        $("#signinwithgoogle").click(function () {
            firebase.auth().signInWithRedirect(provider);
            firebase.auth().getRedirectResult().then(function (result) {
                if (result.credential) {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // ...
                }
                // The signed-in user info.
                var user = result.user;
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
        });
        $("#toggleSignIn").click(function () {
            if (firebase.auth().currentUser) {
                // [START signout]
                firebase.auth().signOut();
                // [END signout]
            } else {
                var email = document.getElementById('email').value;
                var password = document.getElementById('password').value;
                if (email.length < 4) {
                    alert('Please enter an email address.');
                    return;
                }
                if (password.length < 4) {
                    alert('Please enter a password.');
                    return;
                }
                // Sign in with email and pass.
                // [START authwithemail]
                firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // [START_EXCLUDE]
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                    document.getElementById('quickstart-sign-in').disabled = false;
                    // [END_EXCLUDE]
                });
                // [END authwithemail]
            }
            document.getElementById('quickstart-sign-in').disabled = true;
        });
    }

    if (page.id == 'tab2') {
        $('#toggleSignUp').click(function () {
            var email = document.getElementById('emailsignup').value;
            var password = document.getElementById('passwordsignup').value;
            //var fullname = document.getElementById('fullnamesignup').value;
            //var phone = document.getElementById('phonenumbersignup').value;
            if (email.length < 4) {
                alert('Please enter an email address.');
                return;
            }
            if (password.length < 4) {
                alert('Please enter a password.');
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
                // [END_EXCLUDE]
            });
        });
    }
});

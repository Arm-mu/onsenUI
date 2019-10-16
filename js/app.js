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

// firebase storage
var db = firebase.firestore();

// Provider Google
var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var email = user.email;
        console.log(email + "signed in");
        $("#content")[0].load("foodcategory.html");
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

    if (page.id === "swenMenu") {
        
        $("#chocobuc").click(function() {
            var val = $("#chocobuc").val()
            console.log(val);
            console.log("Clicked!");
            
            
        });
    }
    
    if (page.id === "restauranticecream") {
        db.collection("restaurantIcecream").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var item = `
                <ons-card>
                <img src="${doc.data().photoUrl}" style="width: 100%">
                <h2 class="card__title" style="font-weight: bold">${doc.data().name}</h2>
                <div class="card__content">somthing information like,<br>maybe number or food.</div>
                <div style="text-align: right">
                    <ons-button id="${doc.data().btn}" >Select</ons-button>
                </div>
            </ons-card>
                `;
                $("#resicecreamcarousel").append(item);
                $("#swenbtn").click(function () {
                    var content = document.getElementById('content');
                    var menu = document.getElementById('menu');
                    content.load('swenMenu.html')
                        .then(menu.close.bind(menu));
                });
                $("#dailybtn").click(function () {
                    var content = document.getElementById('content');
                    var menu = document.getElementById('menu');
                    content.load('dailyMenu.html')
                        .then(menu.close.bind(menu));
                });
            });
        });
    }

    if (page.id === "restaurantcake") {
        db.collection("restaurantCake").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var item = `
                <ons-card>
                <img src="${doc.data().photoUrl}" style="width: 100%">
                <h2 class="card__title" style="font-weight: bold">${doc.data().name}</h2>
                <div class="card__content">somthing information like,<br>maybe number or food.</div>
                <div style="text-align: right">
                    <ons-button id="${doc.data().btn}">Select</ons-button>
                </div>
            </ons-card>
                `;
                $("#rescakecarousel").append(item);
                $("#krispybtn").click(function () {
                    var content = document.getElementById('content');
                    var menu = document.getElementById('menu');
                    content.load('krispyMenu.html')
                        .then(menu.close.bind(menu));
                });
                $("#happybtn").click(function () {
                    var content = document.getElementById('content');
                    var menu = document.getElementById('menu');
                    content.load('happyMenu.html')
                        .then(menu.close.bind(menu));
                });
            });
        });
    }

    if (page.id === "restaurantbread") {
        db.collection("restaurantBread").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var item = `
                <ons-card>
                <img src="${doc.data().photoUrl}" style="width: 100%">
                <h2 class="card__title" style="font-weight: bold">${doc.data().name}</h2>
                <div class="card__content">somthing information like,<br>maybe number or food.</div>
                <div style="text-align: right">
                    <ons-button id="${doc.data().btn}">Select</ons-button>
                </div>
            </ons-card>
                `;
                $("#resbreadcarousel").append(item);
                $("#misterbtn").click(function () {
                    var content = document.getElementById('content');
                    var menu = document.getElementById('menu');
                    content.load('misterMenu.html')
                        .then(menu.close.bind(menu));
                });
                $("#dunkinbtn").click(function () {
                    var content = document.getElementById('content');
                    var menu = document.getElementById('menu');
                    content.load('dunkinMenu.html')
                        .then(menu.close.bind(menu));
                });
                $("#breadtalkbtn").click(function () {
                    var content = document.getElementById('content');
                    var menu = document.getElementById('menu');
                    content.load('breadtalkMenu.html')
                        .then(menu.close.bind(menu));
                });
            });
        });
    }

    if (page.id === 'foodcategory') {
        db.collection("recommended").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var item = `
                <ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recommended_item">
        <div class="thumbnail" style="background-repeat: no-repeat;
        background-size: 100px auto; background-position: center; background-color: rgba(255, 255, 255, 255); background-image: url('${doc.data().photoUrl}')">
        </div>
        <div class="recommended_item_title" id="item1_name">${doc.data().name}</div>
        </ons-carousel-item>
        `;
                $("#recomcarousel").append(item);
            });
        });

        $("#icecreamcatebtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('restauranticecream.html')
                .then(menu.close.bind(menu));
        });
        $("#cakecatebtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('restaurantcake.html')
                .then(menu.close.bind(menu));
        });
        $("#breadcatebtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('restaurantbread.html')
                .then(menu.close.bind(menu));
        });
    }

    if (page.id === "restaurantlist") {
        db.collection("restaurantList").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var item = `
                <ons-card>
                <img src="${doc.data().photoUrl}" style="width: 100%">
                <h2 class="card__title" style="font-weight: bold">${doc.data().name}</h2>
                <div class="card__content">somthing information like,<br>maybe number or food.</div>
                <div style="text-align: right">
                    <ons-button id="${doc.data().btn}">Select</ons-button>
                </div>
            </ons-card>
                `;
                $("#rescarousel").append(item);
                $("#misterbtn").click(function () {
                    console.log('work?');
                    var content = document.getElementById('content');
                    var menu = document.getElementById('menu');
                    content.load('misterMenu.html')
                        .then(menu.close.bind(menu));
                });
                $("#dunkinbtn").click(function () {
                    var content = document.getElementById('content');
                    var menu = document.getElementById('menu');
                    content.load('dunkinMenu.html')
                        .then(menu.close.bind(menu));
                });
                $("#breadtalkbtn").click(function () {
                    var content = document.getElementById('content');
                    var menu = document.getElementById('menu');
                    content.load('breadtalkMenu.html')
                        .then(menu.close.bind(menu));
                });
                $("#krispybtn").click(function () {
                    var content = document.getElementById('content');
                    var menu = document.getElementById('menu');
                    content.load('krispyMenu.html')
                        .then(menu.close.bind(menu));
                });
                $("#happybtn").click(function () {
                    var content = document.getElementById('content');
                    var menu = document.getElementById('menu');
                    content.load('happyMenu.html')
                        .then(menu.close.bind(menu));
                });
                $("#swenbtn").click(function () {
                    var content = document.getElementById('content');
                    var menu = document.getElementById('menu');
                    content.load('swenMenu.html')
                        .then(menu.close.bind(menu));
                });
                $("#dailybtn").click(function () {
                    var content = document.getElementById('content');
                    var menu = document.getElementById('menu');
                    content.load('dailyMenu.html')
                        .then(menu.close.bind(menu));
                });
            });
        });
    }

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
            content.load('restaurantlist.html')
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

//Swensen's Menu value
var chocobuc = function(chocobucvalue){
    console.log(chocobucvalue);
}
var vanibuc = function(vanibucvalue){
    console.log(vanibucvalue);
}
var cncbuc = function(cncbucvalue){
    console.log(cncbucvalue);
}
var matbuc = function(matbucvalue){
    console.log(matbucvalue);
}

/*var value = 120
var button = ` <ons-button  onclick="hey(),hoo(${value})">
+
</ons-button>`;*/
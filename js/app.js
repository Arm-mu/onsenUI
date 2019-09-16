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
        $("#homebtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });
        $("#loginbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('login.html')
                .then(menu.close.bind(menu));
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
        //Code for Tab 1
    }

});

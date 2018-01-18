var nav = '<!-- **************|   Navigation   |************--> ' +
    '<nav class="navbar font-1 fixed-top navbar-expand-lg navbar-dark black-txt-shadow blue-gradient bg-black">' +
    '<a class="navbar-brand all-caps text-center" ' +
    'href="http://danweatherbee-front-end-web-developer.com' +
    '">Developer<br />Dan Weatherbee<br />2018</a>' +
    '<img src="favicon.ico" class="center-block">' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"' +
    'aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span>' +
    '</button>' +
    '<div class="collapse navbar-collapse" id="navbarText">' +
    '<ul class="navbar-nav mr-auto">' +
    '<li class="nav-item active">' +
    '<i class="nav-link fa fa-refresh" aria-hidden="true" onClick="clearContentPage()"></i>' +
    '</li>' +
    '<li class="nav-item">' +
    '<i class="nav-link fa fa-save" aria-hidden="true" onClick="saveContentPage()"></i>' +
    '</li>' +
    '<li class="nav-item">' +
    '<i class="nav-link fa fa-edit" aria-hidden="true" onClick="builderObj.edit()"></i>' +
    '</li>' +
    '<li class="nav-item">' +
    '<i class="nav-link fa fa-gamepad" aria-hidden="true" onClick="playGame()"></i>' +
    '</li>' +
    '<li class="nav-item">' +
    '<i class="nav-link fa fa-cubes" aria-hidden="true" onClick="iframeCssPrettyObj.init()">Create Iframe</i>' +
    '</li>' +
    '</ul>' +
    '<span class="navbar-text white-text center-block">' +
    '<b>Dan Weatherbee</b> | <em>Web Developer</em> | ' +
    '<i class="fa fa-envelope-o" aria-hidden="true"> dan@jedi-clan.us</i> | ' +
    '<i class="fa fa-phone" aria-hidden="true"> Call: 1 - 250 307 6272</i>' +
    '</span>' +
    '</div>' +
    '</nav>',
    main = nav +
    '<!-- **************|   MAIN   |************-->' +
    '<main id="main" class="contaner-fluid animated fadeIn margin-body-top-5">' +
    '<!-- **************|  PARALLAX  |************--> ' +
    '<video class="main-parallax-video animated zoomIn" autoplay="true">' +
    '<source src="videos/mp4.mp4" type="video/mp4" />' +
    '</video>' +
    '<!-- **************|   EDIT   |************--> ' +
    '<h1 class="animated slideInRight black-txt-shadow white-txt text-center blue-gradient-btn" id="main-header-h1">' +
    'JsFramework Prototype V 1.0</h1>' +
    '<h2 class="text-center white-txt black-txt-shadow">' +


    '<br /><br /><br /><br />' +
    '|------------|   Paste Your Code In Here  Watch it Grow !!  |------------|' +
    '<br /><br /><br /><br /><br /><br />' +
    '<em>CODE GOES HERE</em>' +
    '<br /><br /><br /><br /><br /><br />' +
    '|------------|   Paste Your Code In Here  Watch it Grow !!  |------------|' +
    '<br /><br /><br /><br />' +

    '</h1>' +
    '<p class="animated slideInRight black-txt-shadow white-txt text-center blue-gradient-btn">' +
    'Created in Java Script using the MDB Bootstrap CSS framework for state of the art design<br /> --- with Administration built right in.' +
    '</p>' +

    // block 1 ==TODO build wether api for nav =====================>
    // block 1 ==TODO stop creating css and use bootstrap 100% text styling. =====================>
    '<!-- **************|   EDIT   |************--> ' +
    '</main>' +
    '<!-- **************|   FOOTER   |************--> ' +
    '<footer class="page-footer center-on-small-only blue-gradient container-fluid animated fadeInUp">' +
    '<!--Footer Links-->' +
    '<div class="container">' +
    '<div class="row">' +
    '<!--First column-->' +
    '<div class="col-md-4">' +
    '<h5 class="title mb-4 mt-3 font-bold">' +
    'None-Database Editable Website in Javascript</h5>' +
    '<p> * Great App for developers, edit online without tools and code it later.' +
    '<br /> * Paste html directly into container and it is injected via Javascript.' +
    '<br /> * With admin off the website feeds off Json file via API.' +
    '<br />This App is unbreakable - code can be rebuilt internally via Default button.' +
    '</p>' +
    '</div>' +
    '<!--/.First column-->' +
    '<hr class="clearfix w-100 d-md-none">' +
    '<!--Second column-->' +
    '<div class="col-md-2 mx-auto">' +
    '<h5 class="title mb-4 mt-3 font-bold">Dev Tools</h5>' +
    '<ul>' +
    '<i class="nav-link fa fa-refresh" aria-hidden="true" onClick="clearContentPage()"> Refresh</i>' +
    '</li>' +
    '<li>' +
    '<i class="nav-link fa fa-save" aria-hidden="true" onClick="saveContentPage()"> Save</i>' +
    '</li>' +
    '<li>' +
    '<i class="nav-link fa fa-edit" aria-hidden="true" onClick="editContentPage()"> Edit</i>' +
    '</li>' +
    '<li>' +
    '<i class="nav-link fa fa-gamepad" aria-hidden="true" onClick="playGame()"> Game</i>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '<!--/.Second column-->' +
    '<hr class="clearfix w-100 d-md-none">' +
    '<!--Third column-->' +
    '<div class="col-md-2 mx-auto">' +
    '<h5 class="title mb-4 mt-3 font-bold">Links</h5>' +
    '<ul>' +
    '<li><a href="#pricing-section">Pricing</a></li>' +
    '<li><a href="#new-link-section">new-link-section</a></li>' +
    '<li><a href="#new-link-section">new-link-section</a></li>' +
    '<li><a href="#new-link-section">new-link-section</a></li>' +
    '</ul>' +
    '</div>' +
    '<!--/.Third column-->' +
    '<hr class="clearfix w-100 d-md-none">' +
    '<!--Fourth column-->' +
    '<div class="col-md-2 mx-auto">' +
    '<h5 class="title mb-4 mt-3 font-bold ">Links</h5>' +
    '<ul>' +
    '<li><a href="#new-link-section">new-link-section</a></li>' +
    '<li><a href="#new-link-section">new-link-section</a></li>' +
    '<li><a href="#new-link-section">new-link-section</a></li>' +
    '<li><a href="#new-link-section">new-link-section</a></li>' +
    '</ul>' +
    '</div>' +
    '<!--/.Fourth column-->' +
    '</div>' +
    '</div>' +
    '<!--/.Footer Links-->' +
    '<hr>' +
    '<!--Call to action-->' +
    '<div class="call-to-action">' +
    '<ul>' +
    '<li>' +
    '<h5 class="mb-1">Register for free</h5>' +
    '</li>' +
    '<li><a href="" class="btn btn-danger btn-rounded">Sign up!</a></li>' +
    '</ul>' +
    '</div>' +
    '<!--/.Call to action-->' +
    '<hr>' +
    '<!--Social buttons-->' +
    '<div class="social-section text-center">' +
    '<ul>' +
    '<li>< a class = "btn-floating btn-sm btn-fb"><i class="fa fa-facebook"> </i></a></li>' +
    '<li><a class="btn-floating btn-sm btn-tw"><i class="fa fa-twitter"> </i></a></li>' +
    '<li><a class="btn-floating btn-sm btn-gplus"><i class="fa fa-google-plus"> </i></a></li>' +
    '<li><a class="btn-floating btn-sm btn-li"><i class="fa fa-linkedin"> </i></a></li>' +
    '<li><a class="btn-floating btn-sm btn-dribbble"><i class="fa fa-dribbble"> </i></a></li>' +
    '</ul>' +
    '</div>' +
    '<!--/.Social buttons-->' +
    '<!--Copyright-->' +
    '<div class="footer-copyright">' +
    '<div class="container-fluid">' +
    '© 2018 Copyright: <a href="http://danweatherbee-front-end-web-developer.com"> danweatherbee-front-end-web-developer.com </a>' +
    '</div>' +
    '</div>' +
    '<!--/.Copyright-->' +
    '</footer>' +
    '<!--/.Footer--></main>';
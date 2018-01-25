var navId = '#default-nav',
    nav = '<nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar" ' +
    'id="default-nav">' +
    '<button class="navbar-toggler"type="button"data-toggle="collapse"data-target="#navbarSupportedContent" ' +
    'aria-controls="navbarSupportedContent"aria-expanded="false"aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span></button>' +
    '<div class="collapse navbar-collapse"id="navbarSupportedContent">' +

    '<ul class="navbar-nav mr-auto">' +

    '<li class="nav-item active">' +
    '<a class="nav-link" onClick="location.reload()">' +
    'Admin' +
    '<span class="sr-only">(current)</span>' +
    '</a>' +
    '</li>' +
    '<li type="button" class="btn btn-md z-depth-1 btn-warning" onClick="site.renderApi()">Api</li>' +
    '<li type="button" class="btn btn-md z-depth-1 btn-warning" onClick="site.renderStorage()">Local</li>' +
    '<li type="button" class="btn btn-md z-depth-1 btn-warning" onClick="site.renderDefault()">Class</li>' +
    '<li type="button" class="btn btn-sm z-depth-1 btn-primary" onClick="site.sFile(site.model.tempD)">Save</li>' +
    '<li type="button" class="btn btn-sm z-depth-1 btn-success" onClick="site.renderParallax()">Parallax</li>' +
    '<a onClick="site.destroyParallax()"><i class="fa fa-close" area-attributes="hidden"></i></a>' +
    '<li type="button" class="btn btn-sm z-depth-1 btn-success" onClick="site.renderVideoIntro()">Video Intro</li>' +
    '<a onClick="site.destroyVideoIntro()"><i class="fa fa-close" area-attributes="hidden"></i></a>' +
    '<li type="button" class="btn btn-sm z-depth-1 btn-success" onClick="site.renderProjects()">Projects</li>' +
    '<a onClick="site.destroyProjects()"><i class="fa fa-close" area-attributes="hidden"></i></a>' +
    '<li type="button" class="btn btn-sm z-depth-1 btn-success" onClick="site.renderCommerce()">Commerce</li>' +
    '<a onClick="site.destroyCommerce()"><i class="fa fa-close" area-attributes="hidden"></i></a>' +
    '<li type="button" class="btn btn-sm z-depth-1 btn-success" onClick="site.renderFooter()">Footer</li>' +

    '</ul>' +

    '</div>' +
    '</nav>';
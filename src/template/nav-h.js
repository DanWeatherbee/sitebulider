var navHid = '#default-nav',
    navH = '<nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar grad-nav-h" ' +
    'id="default-nav"><img class="img-fluid z-depth-1-half rounded-circle animated pulse infinite" src="' + angryCatSrc + '" onClick="location.reload()">' +

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

    '<li class="nav-item">' +
    '<a class="nav-link" onClick="site.sFile(site.model.tempD)">' +
    '<i class="fa fa-save nav-link" aria-hidden="true">' +
    '</i>' +
    '</a>' +

    '<li class="btn btn-sm btn-outline-success" onClick="site.renderNav()">Nav bar</li>' +
    '<li class="btn btn-sm btn-outline-danger" onClick="site.destroyNav()"><i class="fa fa-close" area-attributes="hidden"></i></li>' +
    '<li class="btn btn-sm btn-outline-success" onClick="site.renderParallax()">Parallax</li>' +
    '<li class="nav-link" onClick="site.destroyParallax()"><i class="fa fa-close" area-attributes="hidden"></i></li>' +


    '<li class="btn btn-sm btn-outline-success" onClick="site.renderProjects()">Projects</li>' +
    '<li class="btn btn-sm btn-outline-danger" onClick="site.destroyProjects()"><i class="fa fa-close" area-attributes="hidden"></i></li>' +

    '<li class="btn btn-sm btn-outline-success" onClick="site.renderCommerce()">Commerce</li>' +
    '<li class="btn btn-sm btn-outline-danger" onClick="site.destroyCommerce()"><i class="fa fa-close" area-attributes="hidden"></i></li>' +

        '<li class="btn btn-sm btn-outline-success" onClick="site.renderVideoIntro()">Video Intro</li>' +
    '<li class="btn btn-sm btn-outline-danger" onClick="site.destroyVideoIntro()"><i class="fa fa-close" area-attributes="hidden"></i></li>' +


    '<li class="btn btn-sm btn-outline-success" onClick="site.renderFooter()">Footer</li>' +
    '<li class="btn btn-sm btn-outline-danger" onClick="site.destroyFooter()"><i class="fa fa-close" area-attributes="hidden"></i></li>' +

    '</ul>' +

    '</div>' +
    '</nav>';
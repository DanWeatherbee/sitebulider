var panelId = '#admin-panel',
    renderOptions = '<div class="container-fluid text-center" id="admin-panel">' +

    '<p class="card-title text-center">Admin Panel</p>' +
    '<p class="card-text text-center">Render Options</p>' +

    '<li type="button" class="btn btn-lg btn-warning" onClick="site.renderApi()">Api</li>' +
    '<li type="button" class="btn btn-lg btn-warning" onClick="site.renderStorage()">Local</li>' +
    '<li type="button" class="btn btn-lg btn-warning" onClick="site.renderDefault()">Class</li>' +


    '<p class="card-text text-center">Save Template</p>' +


    '<li type="button" class="btn btn-lg btn-success" onClick="site.sFile(site.model.tempD)">Save</li>' +


    '<p class="card-text text-center">Add Clones</p>' +



    '<li type="button" class="btn btn-lg btn-warning" onClick="site.renderParallax()">Parallax</li>' +
    '<li type="button" class="btn btn-lg btn-danger" onClick="site.destroyParallax()">Close</li>' +

    '<li type="button" class="btn btn-lg btn-warning" onClick="site.renderFooter()">Footer</li>' +
    '<li type="button" class="btn btn-lg btn-danger" onClick="site.destroyFooter()">Close</li>' +

    '<li type="button" class="btn btn-lg btn-warning" onClick="site.renderVideoIntro()">Video Intro</li>' +
    '<li type="button" class="btn btn-lg btn-danger" onClick="site.destroyVideoIntro()">Close</li>' +

    '<li type="button" class="btn btn-lg btn-warning" onClick="site.renderProjects()">Projects</li>' +
    '<li type="button" class="btn btn-lg btn-danger" onClick="site.destroyProjects()">Close</li>' +

    '<li type="button" class="btn btn-lg btn-warning" onClick="site.renderCommerce()">Commerce</li>' +
    '<li type="button" class="btn btn-lg btn-danger" onClick="site.destroyCommerce()">Close</li>' +


    '</div>';
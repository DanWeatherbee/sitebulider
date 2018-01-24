var panelId = '#admin-panel',
    renderOptions = '<div class="card text-center" id="admin-panel">' +

    '<p class="card-title text-center">Admin Panel</p>' +
    '<p class="card-text text-center">Render Options</p>' +
    '<ul>' +
    '<li type="button" class="btn btn-sm btn-warning black-txt-shadow" onClick="site.renderApi()">Api</li>' +
    '<li type="button" class="btn btn-sm btn-warning black-txt-shadow" onClick="site.renderStorage()">Local</li>' +
    '<li type="button" class="btn btn-sm btn-warning black-txt-shadow" onClick="site.renderDefault()">Class</li>' +
    '<p class="card-text text-center">Save Template</p>' +
    '<li type="button" class="btn btn-sm btn-success black-txt-shadow" onClick="site.sFile(site.model.tempD)">Save</li>' +
    '<p class="card-text text-center">Add Clones</p>' +
    '<li type="button" class="btn btn-sm btn-warning black-txt-shadow" onClick="site.renderParallax()">Parallax</li>' +
    '<li onClick="site.destroyParallax()"><i class="fa fa-close" style="color:red;font-size:2em;"></i></li>' +
    '</ul>' +
    '</div>';
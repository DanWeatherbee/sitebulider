var panelId = '#admin-panel',
    renderOptions = '<div class="card" id="admin-panel">' +
    '<p class="card-title">Admin Panel</p>' +
    '<p class="card-text">Render Options</p>' +
    '<li class="btn btn-lg btn-warning" onClick="site.renderApi()">Api</li>' +
    '<li class="btn btn-lg btn-warning" onClick="site.renderStorage()">Storage</li>' +
    '<li class="btn btn-lg btn-warning" onClick="site.renderDefault()">Class</li>' +
    '<li class="btn btn-lg btn-success" onClick="site.sFile(site.model.tempD)">Save</li>' +
    '<li class="btn btn-lg btn-danger" onClick="site.del(panelId)">Close</li>' +
    '</div>';
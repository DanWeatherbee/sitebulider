var cloneAdminModal = '<div class="modal-dialog modal-notify modal-warning modal-lg" id="admin-modal" role="document">' +
'<div class="modal-content">' +
'<div class="modal-header green-gradient-btn">' +
'<p class="font-large font-2">Admin Login</p>' +
'<img src="' +
me +
'" alt="Front End Ninja Dan Weatherbee"' +
' class="img-fluid z-depth-1-half rounded-circle animated pulse infinite">' +
'<button type="button" class="close" onClick="site.adminModalCloseClick()" aria-label="Close">' +
'<span aria-hidden="true" class="white-text">×</span>' +
'</button>' +
'</div>' +
'<div class="blue-gradient white-txt black-txt-shadow font-1 font-admin-modal">' +
'<div class="row">' +
'<div class="col-3 text-center">' +
'<div style="height: 10px"></div>' +
'<p class="title mb-0">Dan Weatherbee</p>' +
'<p class="white-txt" style="font-size: 13px">Web Developer</p>' +
'</div>' +
'<div class="col-9">' +
'<p>Welcome to my new Framework, simple, elegant and very useful.' +
' Build mock ups in minutes and deploy immediately within the website administration.' +
' No Java script knowledge necessary.</p>' +
'<p class="card-text">' +
myProfileImg +
'<strong>Give it a try! You will Love it!</strong>' +
'</p>' +
'</div>' +
'</div>' +
'</div>' +
'<div class="modal-footer blue-gradient-btn">' +
'<i class="fa fa-long-arrow-right animated slideInRight infinite">Do it! </i>' +
'<a class="btn blue-gradient-btn btn-lg animated pulse infinite" onClick="site.adminDefaultClick()">Default</a>' +
'<i class="fa fa-diamond ml-1"></i>' +
'</a>' +
'<a class="btn blue-gradient-btn btn-lg" onClick="site.adminEditedClick()">Edited</a>' +
'</div>' +
'</div>' +
'</div>';
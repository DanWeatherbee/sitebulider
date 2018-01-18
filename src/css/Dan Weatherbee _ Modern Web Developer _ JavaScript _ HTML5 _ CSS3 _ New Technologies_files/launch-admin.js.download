$('window').ready(function() {
    // app.editHeaderText();
    app.editMain();
    $('#root').prepend('<a href="#root" id="edit-btn-link"><i class="fa fa-edit edit-btns-edit-fixed" id="edit-content-page" onclick="editContentPage()"> Customize</i></a>');
    $('#root').prepend('<i class="fa fa-save edit-btns-save-fixed" id="save-content-page" onclick="saveContentPage()"> Save</i>');
    $('#root').prepend('<i class="fa fa-refresh edit-btns-default-fixed" id="default-content-page" onclick="clearContentPage()"> Default</i>');
    editContentPage();

    $('.edit-btns').hide();
    $('.fa-long-arrow-down').fadeIn();
    $('#edit-content-page').fadeIn();
});

var editContentPage = function() {
    $('.fa').fadeIn();
    $('#edit-content-page').hide();
};

var saveContentPage = function() {

    // Download databases. ===============================================
    var dbContentEdited = localStorage.getItem('ContentEdited');
    var dbContentDefault = localStorage.getItem('ContentDefault');
    // Download edited database.
    var defaultContentDB = new File([dbContentEdited], "ContentEdited.json");
    //saveAs(editedDB);
    // Download default database.
    var editedContentDB = new File([dbContentDefault], "ContentDefault.json");

    // Save to downloads folder.
    saveAs(defaultContentDB);
    saveAs(editedContentDB);
    $('#save-content-page').hide();
    $('#edit-content-page').fadeIn();
};

// Reset to default.
var clearContentPage = function() {
    localStorage.clear();
    location.reload();
};
// ==================================================================
var wowOn = function() {
    new WOW().init();
    console.log('wow initiated.');
};
$(document).ready(function() {
    setTimeout(wowOn, 300);
});
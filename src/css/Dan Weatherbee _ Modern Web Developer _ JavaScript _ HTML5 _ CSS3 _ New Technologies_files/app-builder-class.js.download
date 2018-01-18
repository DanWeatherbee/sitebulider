/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
builder Class
*/
CreateAppClass = function(
    CreateDB,
    siteContentStr,
    siteContentObj
) {
    var self = this;
    self.siteContentObj = CreateDB; // Model
    self.siteContentStr = JSON.stringify(self.siteContentObj);

    // to localstorage
    localStorage.setItem('ContentDefault', self.siteContentStr);


    // Download databases. ===============================================

    var dbContentEdited = localStorage.getItem('ContentEdited');
    var dbContentDefault =  localStorage.getItem('ContentDefault');

    // Download edited database.
    var editedContentDB = new File([dbContentEdited], "ContentEdited");
    //saveAs(editedDB);
   // Download default database.
    var defaultContentDB = new File([dbContentDefault], "ContentDefault");
// ==================================================================


    // // get from localstorage to load site.
    self.siteContentObj = JSON.parse(localStorage.getItem('ContentEdited'));
    if (!self.siteContentObj) {
        self.siteContentObj = JSON.parse(localStorage.getItem('ContentDefault'));
    };
};


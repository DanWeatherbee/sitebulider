/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
 Controls =============================================
*/
app.editMain = function(
    editMainTextBtn1,
    saveMainTextBtn1,
    editTextArea1
) {
    "use strict";
    var self = this;

    self.editMainTextBtn1 = '<i class="fa fa-edit edit-btns" id="edit-main-btn1" onclick="app.editMainText1()"></i>';
    self.saveMainTextBtn1 = '<i class="fa fa-save edit-btns" id="save-main-btn1" onclick="app.saveMainText1()"></i>';
    self.editTextArea1 = '<textarea class="form-control textarea-style white-txt-shadow center-block" rows="1" number="3" maxlength="100000" ' +
        'id="main-input1">' +
        self.siteContentObj.app.main[0].main +
        '</textarea>';

    app.editMainText1 = function() {
        if ($('#edit-main-btn1')) {
            $('#edit-main-btn1').remove();
        };
        $('.fa-briefcase').addClass('animated hinge');
        $('.fa-shopping-cart').addClass('animated hinge');
        $('#main').prepend(self.editTextArea1);
        $('#main').prepend(self.saveMainTextBtn1);
    }
    app.saveMainText1 = function() {
        var usrInput = $('#main-input1').val();
        self.siteContentObj.app.main[0].main = usrInput;
        $('#main').html('');
        $('#main').prepend(self.siteContentObj.app.main[0].main);
        $('#save-main-btn1').remove();
        $('#main-input1').remove();
        app.saveContentToDB();
        location.reload();
    }
    app.createMainText1 = function() {
        $('#edit-main-btn1').remove();
        $('#main').prepend(self.editMainTextBtn1);
    }
    self.createMainText1();
};
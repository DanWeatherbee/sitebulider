/*
 * ---------------------------------***-----------------------------------|
 *      JsFramework Copywrite Dan Weatherbee 2018   *
 *|=====    DON'T MESS WITH THIS ONE     ======|*
 *                         WEBSITE DEFAULT                         *
 *                          ****    ADMIN    ****                           *
 *                                     ====                                     *
 * -----------------------------------------------------------------------|
 */
// Variables begin ----------------------------------------------------|

//   PROTYPLE SUPER CLASS
var cloneMain = main,
    mold = {
        'cloneMain': cloneMain,
        'cloneAdminModal': cloneAdminModal
    },

    FactoryClass = function(
        // Dump in some material.
        material
    ) {
        // Load Factory
        this.material = material;
    };

FactoryClass.prototype.init = function() {
    $('#root').prepend(builderObj.material.cloneAdminModal);
};
FactoryClass.prototype.edit = function() {
    $('#main-header-h1').append(builderObj.material.cloneEditbox);
    $('#edit-box').html(builderObj.material.cloneMain);
};
FactoryClass.prototype.destroyEdit = function() {
    this.saveEdit();
    this.animateHinge($('#edit-form'));
    setTimeout(function() {
        $('#edit-form').remove();
    }, 3000);

};
FactoryClass.prototype.saveEdit = function() {
    // this works !! call save then destroy.
    var usrInput = $('#edit-box').val();
    localStorage.setItem('usrInput', usrInput);
    console.log('saved.');
};

FactoryClass.prototype.animateHinge = function(elem) {
    this.elem = elem;
    this.elem.addClass('animated hinge');
};

FactoryClass.prototype.baseImg = function(img) {
    this.img = img;
   // this.img.addClass('animated hinge');
};
var builderObj = new FactoryClass(mold);
builderObj.init();
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

var mold = {
    'cloneSideBarLeft': cloneSideBarLeft,
    'cloneBgVideoParallax': cloneBgVideoParallax,
    'cloneNav': cloneNav,
    'cloneTopBar': cloneTopBar,
    'cloneAdminModal': cloneAdminModal,
    'world': $
};

FactoryClass = function(
    // Dump in some material.
    material
) {
    // Load Factory
    this.material = material;
};

FactoryClass.prototype.init = function() {
    this.render();

};

FactoryClass.prototype.render = function() {
    this.renderCloneAdminModal();
    this.renderCloneBgVideoParallax();
};

FactoryClass.prototype.renderCloneAdminModal = function() {
    this.material.world('#root').append(site.material.cloneAdminModal);
};

FactoryClass.prototype.rendercloneTopBar = function() {
    this.material.world('#root').append(site.material.cloneTopBar);
};

FactoryClass.prototype.renderCloneBgVideoParallax = function() {
    this.material.videoSrcStr = 'videos/mp4.mp4';
    this.material.world('#root').append(site.material.cloneBgVideoParallax);
};

FactoryClass.prototype.renderCloneSideBarLeft = function() {
    this.material.world('#root').append(site.material.cloneSideBarLeft);
};

FactoryClass.prototype.renderNav = function() {
    this.material.world('#root').prepend(site.material.cloneNav);
};

FactoryClass.prototype.adminDefaultClick = function() {
    this.renderNav();
    this.rendercloneTopBar();
    this.renderCloneSideBarLeft();
};




FactoryClass.prototype.adminEditedClick = function() {
    alert('Edited was clicked!');
};

FactoryClass.prototype.adminModalCloseClick = function() {
    alert('Admin close modal was clicked!');
    site.material.world('#admin-modal').remove();
};

site = new FactoryClass(mold);
site.init();
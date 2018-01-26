/*        PROTYPLE Factory SUPER CLASS
 *         I you find the variable is not working because it is out of scope
 *         then you use site instead to use the object itself
 *         witch is instantiated outside of the scope of the function.
 *         If you create functions within functions
 *         use this for top level and site for the rest.
 */
var site,
    model = {
        'bgSrc': bgSrc,
        'tempD': tempD,
        'nav': nav,
        'angryCatSrc': angryCatSrc,
        'parallax': parallax,
        'footer': footer,
        'videoIntro': videoIntro,
        'renderOptions': renderOptions,
        'projects': projects,
        'commerce': commerce,
        'todoArray': todoArray,
        'app': $('#root'),
        'el': $,
        'db': localStorage
    },
    F = function(
        model
    ) {
        this.model = model;
    };
F.prototype.init = function() {
    this.model.app.append(
        this.model.renderOptions
    );

};
F.prototype.con = function(
    msg
) { // console.
    this.msg = msg;
    console.log(
        '%cHi Dan, this variable is ----> %s',
        prettycon,
        this.msg
    );
};
F.prototype.delDelay = function(
    id
) { // delete for close buttons
    this.id = id;
    setTimeout(function() {
        site.model.el(
            site.id
        ).remove();
    }, 3000);
};
F.prototype.del = function(
    id
) { // delete for close buttons
    this.id = id;
    this.model.el(
        this.id
    ).remove();
};
F.prototype.getT = function(
    template,
    res
) { // get template
    this.template = template;
    this.res = res;
    this.res = this.model.db.getItem('template');
    return this.res;
};
F.prototype.setT = function(
    template
) { //set template
    this.template = template;
    this.model.db.setItem(
        'template',
        this.model.tempD
    );
};
F.prototype.a = function(
    id,
    clone
) { // append
    this.id = id;
    this.clone = clone;
    this.clearHtml(this.id);
    this.model.el(
        id
    ).append(
        this.clone
    );
};
F.prototype.p = function(
    id,
    clone
) { // prepend
    this.id = id;
    this.clone = clone;
    this.clearHtml(this.id);
    this.model.el(
        id
    ).prepend(
        this.clone
    );
};
F.prototype.set = function(
    str1,
    str2
) { // record
    this.str1 = str1;
    this.str2 = str2;
    this.model.db.setItem(
        this.str1,
        this.str2
    );
};
F.prototype.get = function(
    str
) { // get
    this.str = str;
    this.model.db.getItem(this.str);
};
F.prototype.sFile = function(
    data,
    templateJson,
    yourEdits
) { // save to json.
    this.data = data;
    this.data = JSON.stringify(this.data);
    this.templateJson = new File(
        [this.data],
        "template.json", { type: "text/plain;charset=utf-8" }
    );
    saveAs(this.templateJson);
    this.setT(this.model.tempD);


};
F.prototype.sFileEdits = function(
    data,
    yourEdits
) { // save to json.

    this.data = data;
    this.data = JSON.stringify(this.data);
    this.yourEdits = new File(
        [this.data],
        "template.json", { type: "text/plain;charset=utf-8" }
    );
    saveAs(this.yourEdits);
    this.set('template', this.model.el('#edit-area').val());
};

F.prototype.renderStorage = function() { // render your edits.
    this.clearHtml(this.model.app);
    this.model.app.append(
        this.getT(
            'template'
        )); // load from localstorage.
    this.con(
        'rendering the site from storage.'
    );
    this.a(
        '#status-bar', this.getDate() +
        'Status | The site is rendering the site from the browsers loacalstorage.'
    );
    site.animateP('#status-bar');
};
F.prototype.getDate = function(
    d
) { // render your edits.
    this.d = d;
    this.d = new Date();
    return this.d;
};

F.prototype.renderDefault = function(
    template
) { // render default.
    this.template = template;
    this.clearHtml(
        this.model.app
    );
    this.a(
        '#root',
        this.model.tempD
    ); // load from Super Class.
    this.con(
        'rendering the site from your Class.'
    );
    this.a(
        '#status-bar', this.getDate() +
        'Status | The site is rendering the site from the internal code.'
    );
    site.animateP('#status-bar');
};
F.prototype.renderApi = function(
    template
) {
    this.template = template;
    this.getJ(
        'template.json'
    );
    this.con(
        'rendering the site from your api.'
    );
    this.a(
        '#status-bar', this.getDate() +
        'Status | The site is rendering the site from your api.'
    );
    site.animateP('#status-bar');
};
F.prototype.renderParallax = function() {
    this.model.app.append(this.model.parallax);
};
F.prototype.destroyParallax = function() {
    this.animateH(parallaxId);
};
F.prototype.renderFooter = function() {
    this.model.app.append(this.model.footer);
};
F.prototype.destroyFooter = function() {
    this.animateH(footerId);
};
F.prototype.renderVideoIntro = function() {
    this.model.app.append(this.model.videoIntro);
};
F.prototype.destroyVideoIntro = function() {
    this.animateH(videoIntroId);
};
F.prototype.renderProjects = function() {
    this.model.app.append(this.model.projects);
};
F.prototype.destroyProjects = function() {
    this.animateH(projectsId);
};
F.prototype.renderCommerce = function() {
    this.model.app.append(this.model.commerce);
};
F.prototype.destroyCommerce = function() {
    this.animateH(commerceId);
};
F.prototype.editSave = function(val) {
    this.val = this.model.el('#edit-area').val();
    this.set('template', this.val);
    this.a(
        '#status-bar', this.getDate() +
        'Status | Your edits were saved to your downloads folder under the name yourEdits.'
    );
    site.animateP('#status-bar');
};
F.prototype.editDownload = function() {
    this.editSave();
    this.sFileEdits(this.model.db.getItem('template'));
};
F.prototype.renderNav = function() {
    this.model.app.prepend(this.model.nav);
};

F.prototype.editNav = function() {
    this.model.el(editId).val(this.model.nav);
    this.a(
        '#status-bar', this.getDate() +
        'Status | A copy of the nav clone has been pasted into the edit area.'
    );
    site.animateP('#status-bar');
};
F.prototype.editTemplate = function() {
    this.model.el('#edit-area').val(this.model.db.getItem('template'));
    this.a(
        '#status-bar', this.getDate() +
        'Status | A copy of the template has been pasted into the edit area.'
    );
    site.animateP('#status-bar');
};
F.prototype.destroyNav = function() {
    this.animateH(navId);
};
F.prototype.destroyAdmin = function() {
    this.animateH(panelId);
};
F.prototype.clearHtml = function(
    id
) { // clear inner html.
    this.id = id;
    this.model.el(
        this.id
    ).html('');
};
F.prototype.getJ = function(
    file
) { // get json file template.json.
    this.file = file;
    fetch(
            this.file
        )
        .then(
            function(response) {
                if (response.status !== 200) {
                    site.con(
                        'Looks like there was a problem. Status Code: ' +
                        response.status
                    );
                    site.con(
                        'check to see if the json file is in the src folder.'
                    );
                    site.p(
                        '#root',
                        jsonError
                    );
                }
                response.json().then(function(data) {
                    site.con(data);
                    site.model.app.append(data); // Append the response.
                });
            }
        )
        .catch(function(err) {
            site.con('Fetch Error :-S', err);
        });
    this.con(
        'fetching json file template.json. getJ was called.'
    );
};

F.prototype.animateH = function(
    id
) { // Add animation.
    this.id = id;
    this.model.el(
        this.id
    ).addClass(
        'animated hinge'
    );
    this.delDelay(this.id);
};
F.prototype.animateP = function(
    id
) { // Add animation.

    this.id = id;
    this.model.el(
        this.id
    ).addClass(
        'animated pulse'
    );

    setTimeout(function() {
        site.model.el(
            site.id
        ).removeClass(
            'animated pulse'
        );
    }, 1000);


};

F.prototype.todos = function() { // load TODOS.
    this.model.todoArray.forEach(function(item) {
        site.con(item);
    });
};
site = new F(
    model
); // instantiate.
site.init();
//site.todos();
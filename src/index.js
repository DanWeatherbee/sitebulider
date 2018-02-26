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
        'edit': edit,
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
    this.renderDefault();
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

};

F.prototype.getDate = function(
    d
) { // render your edits.
    this.d = d;
    this.d = new Date();
    return this.d;
};


F.prototype.edit = function(val) {
    this.model.app.html('');
    this.model.app.append(this.model.edit);

    this.model.el('#edit-area').val(this.model.db.getItem(
        'template'
    ));
};

F.prototype.editSave = function(val) {
    this.val = this.model.el('#edit-area').val();

    this.model.db.setItem('template', this.val);

    this.model.db.getItem(
        'template'
    );

    site.animateH('.edit-container');
    setTimeout(function() {
        site.renderStorage();
    }, 2000);
};
F.prototype.renderStorage = function() { // render your edits.
    this.model.app.html('');
    this.model.app.append(
        this.model.db.getItem(
            'template'
        )); // load from localstorage.
    setTimeout(function() {
        $('.button-collapse').sideNav(); // side nav control initstantiate.
    }, 3000);
};

F.prototype.renderDefault = function(
    template
) { // render default.
    this.template = template;
    this.model.app.html('');
    this.a(
        '#root',
        this.model.tempD
    ); // load from Super Class.
    setTimeout(function() {
        $('.button-collapse').sideNav(); // side nav control initstantiate.
    }, 3000);
};

F.prototype.renderApi = function(
    template
) {
    this.template = template;
    this.model.app.html('');
    this.getJ(
        'template.json'
    );

    setTimeout(function() {
        $('.button-collapse').sideNav(); // side nav control initstantiate.
    }, 3000);
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
F.prototype.renderCarousel = function() {
    this.model.app.append(this.model.carousel);
};
F.prototype.destroyCarousel = function() {
    this.animateH(carouselId);
};

F.prototype.renderNav = function() {
    this.model.app.prepend(this.model.nav);
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
                    this.model.db.removeItem('template');
                    this.model.app.append(data); // Append the response.
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
$(".button-collapse").sideNav();
site.todos();
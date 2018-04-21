
var site,
    model = {
        'tempD': tempD,
        'edit': edit,
        'todoArray': todoArray,
        'app': $('body'),
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
    site.animateH('.md-form');

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


    // initialize scrollspy
    $('body').scrollspy({
        target: '.dotted-scrollspy'
    });

    // initialize lightbox
    $(function() {
        $("#mdb-lightbox-ui").load("../mdb-addons/mdb-lightbox-ui.html");
    });

    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });
    new WOW().init();
};

F.prototype.renderDefault = function(
    template
) { // render default.
    this.template = template;
    this.model.app.html('');
    this.model.app.append(this.model.edit, this.model.tempD); // load from Super Class.
    // initialize scrollspy
    $('body').scrollspy({
        target: '.dotted-scrollspy'
    });

    // initialize lightbox
    $(function() {
        $("#mdb-lightbox-ui").load("../mdb-addons/mdb-lightbox-ui.html");
    });

    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });
    new WOW().init();
    processor.doLoad()
};

F.prototype.renderApi = function(
    template
) {
    this.template = template;
    this.model.app.html('');
    this.getJ(
        'template.json'
    );
    // initialize scrollspy
    $('body').scrollspy({
        target: '.dotted-scrollspy'
    });

    // initialize lightbox
    $(function() {
        $("#mdb-lightbox-ui").load("../mdb-addons/mdb-lightbox-ui.html");
    });

    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });
    new WOW().init();
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
                        '#body',
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
//site.todos();
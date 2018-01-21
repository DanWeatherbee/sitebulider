    //   PROTYPLE Factory SUPER CLASS
    var site,
        model = {
            'tempD': tempD,
            'header': header,
            'parallax': parallax,
            'footer': footer,
            'angryCatImg': angryCatImg,
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
        this.con('init is running. line 19');
        this.render();
        this.events($('.navbar-brand').on('click', function() { // event 1
            location.reload();
        }));
    };
    F.prototype.con = function(msg) { // console.
        this.msg = msg;
        console.log('%cConsole %s', prettycon, this.msg);
    };
    F.prototype.d = function() { // delete
        this.con('dappete is running. line 32');
        setTimeout(function() { // time out for animations to run.

        }, 3000);
    };
    F.prototype.h = function() { // hinge
        this.con('animate is running. line 38');
        this.app.addClass('animated hinge');
    };
    F.prototype.c = function(clone) { // clone
        this.clone = clone;
        this.con('render is running. line 43');
        this.a('#root', this.model.header);
        this.a('#root', this.model.parallax);
        this.a('#root', this.model.footer);
        this.p('.kdb', this.model.angryCatImg);
    };
    F.prototype.getT = function(template, res) { // get template
        this.template = template;
        this.res = res;
        this.res = this.model.db.getItem('template');
        this.con('template is running. line 52');
        return this.res;
    };
    F.prototype.setT = function(template) { //set template
        this.template = template;
        this.model.db.setItem('template', this.model.tempD);
    };
    F.prototype.a = function(id, clone) { // append
        this.id = id;
        this.clone = clone;
        this.model.el(id).append(this.clone);
        this.con('render is running. line 60');
    };
    F.prototype.p = function(id, clone) { // prepend
        this.id = id;
        this.clone = clone;
        this.con('render is running. line 66');
        this.model.el(id).prepend(this.clone);
    };
    F.prototype.set = function(str1, str2) { // record
        this.str1 = str1;
        this.str2 = str2;
        this.model.db.setItem(this.str1, this.str2)
    };
    F.prototype.get = function(str) { // get
        this.str = str;
        this.model.db.getItem(this.str);
    };
    F.prototype.events = function(event) { // events
        this.event = event;
    };
    F.prototype.render = function(template) { // events
        this.template = template;
        this.setT('tempD', this.model.tempD);
        this.a('#root', this.getT());// load from localstorage
    };

    site = new F(model); // instantiate.
    site.con("%cJavascript %s", prettycon, copyright);
    site.init();
    //   PROTYPLE Factory SUPER CLASS
    var site,
        model = {
            'bgSrc': bgSrc,
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
        this.render(); // render from storage
    };
    F.prototype.con = function(msg) { // console.
        this.msg = msg;
        console.log('%cHi Dan, this variable is ----> %s', prettycon, this.msg);
    };
    F.prototype.d = function() { // delete
        //this.con('delete is running. line 32');
        setTimeout(function() { // time out for animations to run.

        }, 3000);
    };
    F.prototype.h = function() { // hinge
        //this.con('animate is running. line 38');
        this.app.addClass('animated hinge');
    };
    F.prototype.c = function(clone) { // clone
        this.clone = clone;
        //this.con('render is running. line 43');
        this.a('#root', this.model.header);
        this.a('#root', this.model.parallax);
        this.a('#root', this.model.footer);
        this.p('.kdb', this.model.angryCatImg);
    };
    F.prototype.getT = function(template, res) { // get template
        this.template = template;
        this.res = res;
        this.res = this.model.db.getItem('template');
        //this.con('template is running. line 52');
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
        //this.con('render is running. line 60');
    };
    F.prototype.p = function(id, clone) { // prepend
        this.id = id;
        this.clone = clone;
        //this.con('render is running. line 66');
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
    F.prototype.event = function(event) { // events
        this.event = event;
    };
    F.prototype.sFile = function(data, templateJson) { // save to json
        this.data = data;
        //this.con(this.data);
        this.data = JSON.stringify(this.data);
        //this.con(this.data);
        this.templateJson = new File([this.data], "template.json", { type: "text/plain;charset=utf-8" });
        saveAs(this.templateJson);
    };
    F.prototype.render = function(template) { // events
        this.template = template;
        // these should be in a save to storage function.
        this.setT('tempD', this.model.tempD); // save to localstorage
        this.set('bgSrc', this.model.bgSrc);
        // where to render from.
        //this.renderEdit();
        //this.renderDefault();
        this.renderApi();
        /*
         * Console Copyright display. ================|
         */
        // this.con(copyright); // load copyright
        /*
         * Console Copyright display. ================|
         */
        this.event($('.fa-save').on('click', function() { // event 1
            site.sFile(site.getT()); // from storage.
        }));
    };
    F.prototype.renderEdit = function() { // events
        this.a('#root', this.getT()); // load from localstorage
        this.con('rendering the site from storage.')
    };
    F.prototype.renderDefault = function(template) { // events
        this.template = template;
        this.a('#root', this.model.tempD); // load from Super Class
        this.con('rendering the site from your Super Class.');
    };
    F.prototype.renderApi = function(template) { // events
        this.template = template;
        this.getJ('template.json');
        this.con('rendering the site from your api.');
    };
    F.prototype.getJ = function(file) { // file
        this.file = file;
        fetch(this.file)
            .then(
                function(response) {
                    if (response.status !== 200) {
                        site.con('Looks like there was a problem. Status Code: ' +
                            response.status);
                        site.con('check to see if the json file is in the src folder.');
                        //==================== if there is no api function to write===|
                        site.a('#root', '<div class="container text-center"><h1 class="text-center">There was no file to load, check your src folder for the template json file. e.g. template.json. If it is not there click the create json button to make a new one. Place it in the src folder and test.</h1><a class="btn btn-lg btn-primary" id="create-json">Create Json</a></div>');

                        site.event($('#create-json').on('click', function() { // event 1
                            site.sFile(site.getT()); // get from storage.
                        }));
                        // =============================================|
                    }
                    response.json().then(function(data) {
                        //site.con(data);
                        site.a('#root', data); // Append the response.
                    });
                }
            )
            .catch(function(err) {
                site.con('Fetch Error :-S', err);
            });
        this.con('fetching json file template.json. getJ was called.');
    };

    site = new F(model); // instantiate.
    site.init();

    site.con('TODO try removing // out of img src. see if it still renders.');
    site.con('TODO add admin panel with controls.');
    site.con('TODO add log in first thing you see to get to admin panel.');
    site.con('TODO add json function.....Done!');
    site.con('TODO fix get json function.............Done!');
    site.con('TODO style the api msg and add background.');
    site.con('TODO create three buttons for rendering options. or 1 with drop down.');
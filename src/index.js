    //   PROTYPLE Factory SUPER CLASS
    var site,
        model = {
            'bgSrc': bgSrc,
            'tempD': tempD,
            'header': header,
            'parallax': parallax,
            'footer': footer,
            'renderOptions': renderOptions,
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
    F.prototype.del = function(id) { // delete for close buttons
        this.id = id;
        this.model.el(this.id).remove();
    };
    F.prototype.getT = function(template, res) { // get template
        this.template = template;
        this.res = res;
        this.res = this.model.db.getItem('template');
        return this.res;
    };
    F.prototype.setT = function(template) { //set template
        this.template = template;
        this.model.db.setItem('template', this.model.tempD);
    };
    F.prototype.a = function(id, clone) { // append
        this.id = id;
        this.clone = clone;
        this.clearHtml(this.id);
        this.model.el(id).append(this.clone);
    };
    F.prototype.p = function(id, clone) { // prepend
        this.id = id;
        this.clone = clone;
        this.clearHtml(this.id);
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
    F.prototype.sFile = function(data, templateJson) { // save to json.
        this.data = data;
        this.data = JSON.stringify(this.data);
        this.templateJson = new File([this.data], "template.json", { type: "text/plain;charset=utf-8" });
        saveAs(this.templateJson);
    };
    F.prototype.render = function(template) { // render template.
        this.template = template;
        //this.todos() // load todos.
        this.setT('tempD', this.model.tempD); // save to localstorage.
        this.set('bgSrc', this.model.bgSrc); // save to localstorage.
        this.model.app.append(this.model.renderOptions);
        this.con('rendering the site from your Super Class.');
    };
    F.prototype.renderStorage = function() { // render your edits.
        this.clearHtml(this.model.app);
        this.model.app.append(this.getT('template')); // load from localstorage.
        this.con('rendering the site from storage.');
        this.a('#nav-status', 'Rendering the site from Storage.');
    };
    F.prototype.renderDefault = function(template) { // render default.
        this.template = template;
        this.clearHtml(this.model.app);
        this.a('#root', this.model.tempD); // load from Super Class.
        this.con('rendering the site from your Class.');
        this.a('#nav-status', 'Rendering the site from Template.');
    };
    F.prototype.renderApi = function(template) { // render from api.
        this.template = template;
        this.getJ('template.json');
        this.con('rendering the site from your api.');
        this.a('#nav-status', 'Rendering the site from Api.');
    };
    F.prototype.clearHtml = function(id) { // clear inner html.
        this.id = id;
        this.model.el(this.id).html('');
        this.model.app.append(this.model.renderOptions);
    };
    F.prototype.getJ = function(file) { // get json file template.json.
        this.file = file;
        fetch(this.file)
            .then(
                function(response) {
                    if (response.status !== 200) {
                        site.con('Looks like there was a problem. Status Code: ' +
                            response.status);
                        site.con('check to see if the json file is in the src folder.');
                        site.p('#root', jsonError);
                    }
                    response.json().then(function(data) {
                        //site.con(data);
                        site.model.app(data); // Append the response.
                    });
                }
            )
            .catch(function(err) {
                site.con('Fetch Error :-S', err);
            });
        this.con('fetching json file template.json. getJ was called.');
    };
    F.prototype.todos = function(array) { // load TODOS
        this.array = [
            'TODO try removing // out of img src. see if it still renders.',
            'TODO add admin panel with controls.',
            'TODO add log in first thing you see to get to admin panel.',
            'TODO add json function.....Done!',
            'TODO fix get json function.............Done!',
            'TODO style the api msg and add background.',
            'TODO create three buttons for rendering options. or 1 with drop down.',
            'TODO create Status bar to relay console msgs.',
            'TODO add in some basic clones that all sites typically use. e.g. nav, footer, login etc.',
            'TODO display status msgs e.g. TODOS and errors on the main page.',
            'TODO add delete function to remove elements.'
        ];
        this.array.forEach(function(item) {
            site.con(item);
        });
    };
    site = new F(model); // instantiate.
    site.init();
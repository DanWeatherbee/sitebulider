<video width="300" height="200" autoplay="autoplay">
  <source src="video/supercoolvideo.mp4" type="video/mp4" />
</video>
controls is a boolean attribute:

Note: The values "true" and "false" are not allowed on boolean attributes. 
To represent a false value, the attribute has to be omitted altogether.
                                        /*
                                        * ---------------------------------***-----------------------------------|
                                        *      JsFramework Copywrite Dan Weatherbee 2018   *
                                        *           Create your own css sheet for Mock ups.        *
                                        *                 and add them inside helmet js.                   *
                                         *|=====    DON'T MESS WITH THIS ONE     ======|*
                                        *                         WEBSITE DEFAULT                         *
                                        *                             ****    CSS    ****                            *
                                        *                                      ====                                     *
                                        * -----------------------------------------------------------------------|
                                         */
Perfect Template for a Iframe Creation Class --DW-- | 2018

    // Create Iframe Class

    let cssPrettifyIframeBegin = '<div class="iframe-css-pretty-hide-cover center-block blue-gradient">' +
        '</div>' +
        '<iframe class="iframe-css-pretty animated zoomInDown center-block" ' +
        'width="auto" height="auto" src="' +
        'http://jshint.com/',
        formatType = '', // ============   css , html.
        cssPrettifyIframeEnd = '-beautify/' +
        ' scrolling="no" frameBorder="0">' +
        '</iframe>' +
        '<div class="iframe-css-pretty-hide-cover-bottom center-block blue-gradient">' +
        '</div>',
        // for nav links to hook up to.
        $elem = '<hr class="margin-bottom-3 margin-top-15" id="dev-tools-section">'; // elem to append to.
    // Object
    const prettyIframeObj = {
        'begin_frame': begin_frame,
        'format_type': format_type,
        'end_frame': end_frame,
        '$eleM': $eleM
    };
    // Class
    CreatePrettyIframe = function(
        obj
    ) {
        this.obj = obj;
        // pub methods
        this.init = function() {
            // do some stuff
            this.$elem.append(
                this.begin_frame,
                this.format_type,
                this.end_frame
            );

            this.init();
        };
    };
    // instantiate new obj using class.
    var iframeCssPrettyObj = new CreatePrettyIframe(prettyIframeObj);

    My best coding to date !
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
var createModal = function(
    argument
) {
    init = function() {};
};

var renderModal = function(
    argument
) {
    init = function() {};
};

var key = 'I love this shit!',
    name = 'Dan',
    height = '10 feet',
    age = '104',
    gender = 'male',
    mood = 'Angry this is taking to long!',

    //   PROTYPLE SUPER CLASS
    mold = {
        'key': key,
        'name': name,
        'height': height,
        'age': age,
        'gender': gender,
        'mood': mood
    },

    FactoryClass = function(
        // Dump in some material.
        material
    ) {
        // Load Factory
        this.material = material;
    };

FactoryClass.prototype.init = function() {
    // Send to client.
    alert('dan has been cloned successfuly!')
    alert('Hello ' + name + ' | height' + height + ' | Age' + age + ' | Gender ' + gender + ' | Mood' + mood + 'My first super class, I love programming.');
    // Get Paid.
};


// var builderObj = new FactoryClass(mold);

# Try Catch Statements

http://www.javascriptkit.com/javatutors/trycatch.shtml
Try Catch Statements use curlly brackets {}
try/catch/finally are so called exception handling statements in JavaScript. An exception is an error that occurs at runtime due to an illegal operation during execution. Examples of exceptions include trying to reference an undefined variable, or calling a non existent method. This versus syntax errors, which are errors that occur when there is a problem with your JavaScript syntax. Consider the following examples of syntax errors versus exceptions:

alert("I am missing a closing parenthesis //syntax error
alert(x) //exception assuming "x" isn't defined yet
undefinedfunction() //exception
try/catch/finally lets you deal with exceptions gracefully. It does not catch syntax errors, however (for those, you need to use the onerror event). Normally whenever the browser runs into an exception somewhere in a JavaScript code, it displays an error message to the user while aborting the execution of the remaining code. You can put a lid on this behaviour and handle the error the way you see fit using try/catch/finally. At its simplest you'd just use try/catch to try and run some code, and in the event of any exceptions, suppress them:



    var alertCheck = 'Checking to see if you exist you do exist... ',
        alertExist = 'I guess you do exist, awesome! ',
        alertCrap = 'Awww! Crap! An error has occurred! ',
        alertGood = 'Error checking complete, its all good :)! ' +
        ' -- Back to work! Take a break once and awhile bozo! ';
            try {
                alert(alertCrap + ' ' + e.message);
                // variable or function to test.
                db;
                alert(alertExist);
            } catch (e) {
                alert(alertCrap)
            } finally {
                alert(alertGood);
            };
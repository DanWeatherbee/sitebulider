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



var adminMsg,
    gameDW = '<a class="' +
    'btn btn-outline-default nav-link blue-gradient medium-txt black-txt-shadow text-center"' +
    ' id="game-play-btn2" ' +
    'onClick="playGame()">' +
    'Click to Replay - Hint: Use your arrow keys to play.' +
    '</a>' +
    '<iframe class="' +
    'ipad-big animated zoomInDown center-block' +
    ' width="800" height="800" ' +
    'src="app-p3-master/index.html" scrolling="no" frameBorder="0">' +
    '</iframe>',
    createAdminBtn,
    getJson,
    renderMain,
    alertCheck = 'Checking to see if you exist you do exist... ',
    alertExist = 'I guess you do exist, awesome! ',
    alertCrap = 'Awww! Crap! An error has occurred! ',
    alertGood = 'Error checking complete, its all good :)! ' +
    ' -- Back to work! Take a break once and awhile bozo! ',

    renderMain = function(db) {

        try {
            alert(alertCheck + 'builderObj.material.cloneMain line 37');
            // variable or function to test.
            builderObj.material.cloneMain;
            alert(alertExist);
            this.db = builderObj.material.cloneMain;
            console.log(JSON.parse(this.db));
            $('#root').append(this.db.main[0].main);
        } catch (e) {
            alert(alertCrap + ' ' + e.message + 'line 45');
        } finally {
            alert(alertGood);
        }

    },
    getJson = function(db) {

        /*
         *                 This is where we decide --
         *            load edited or default databases.
         *
         */
        this.db = 'ContentDefault.json';
        fetch(this.db)
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        adminMsg = 'There is no db fille to load. Create one and download it. Place it in the src folder.';
                        alert(adminMsg);

                    }

                    // Examine the text in the response
                    response.json().then(function(data) {});
                }
            )
            .catch(function(err) {

                console.log('Fetch Error :-S', err);
            });
    },
    //                                       LOAD FROM API           ----------------->








    //                                       LOAD FROM LOACALSTORAGE---->







    //                                       LAUNCH FRAMEWORK ----------------->

    createAdminBtn = function() {
        questionUser()
    },

    //                     DEFAULT/EDITED LOAD CONTROL  ------------>

    questionUser = function(answer) {
        this.answer = prompt("Do you wish to load site default?", "default");
        if (!answer === 'yes') {
            renderEdited();
            return;
        };
        renderDefault();
    },
    renderDefault = function() {

        try {
            alert(alertCheck + 'builderObj.material.cloneMain line 114');
            // variable or function to test.
            builderObj.material.cloneMain;
            alert(alertExist);
            renderMain(builderObj.material.cloneMain);
        } catch (e) {
            alert(alertCrap + ' ' + e.message + 'line 120')
            $('#root').append('<h1 class="blue-gradient-btn white-txt black-txt-shadow text-center font-xl">' +
                'Well this is embarassing something has gone wrong :( </h1>')
        } finally {
            alert(alertGood);
        };
    },
    renderEdited = function() {

    },
    init = function() {
        createAdminBtn();
    };


// TODO create error function.
/*
function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
};
*/
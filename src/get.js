getJson = function(db) {


    adminMsg = 'getJson loaded.';
    alert(adminMsg);
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
                response.json().then(function(data) {
                    adminMsg = 'api success.';
                    alert(adminMsg);
                    console.log(data);

                });
            }
        )
        .catch(function(err) {
            adminMsg = 'api failure.';
            alert(adminMsg);
            console.log('Fetch Error :-S', err);
        });
};
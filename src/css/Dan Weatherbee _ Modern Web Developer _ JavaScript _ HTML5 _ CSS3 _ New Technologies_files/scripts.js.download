var dbScripts = {
    "libs": [
        "js/core/lib/popper.min.js",
        "js/core/lib/bootstrap.min.js",
        "js/core/lib/mdb.min.js",
        "js/core/lib/file-save.js"
    ],
    "head": [
        "js/core/helmet/helmet.js"
    ]
};

dbScripts.appendScripts = function(
    src,
    doc,
    docCreate
) {
    var self = this;
    self.src = src;
    self.doc = doc;
    self.docCreate = docCreate;
    self.doc = document;
    self.docCreate = self.doc.createElement("script");
    self.docCreate.src = self.src;
    self.doc.body.append(self.docCreate);
};

dbScripts.init = function(
    libsArray,
    headArray
) {
    var self = this;
    self.libsArray = libsArray;
    self.headArray = headArray;
    self.libsArray = this.libs;
    self.headArray = this.head;
    self.libsArray.forEach(function(script) {
        self.appendScripts(script);
    });
    self.headArray.forEach(function(script) {
        self.appendScripts(script);
    });
};

dbScripts.init();

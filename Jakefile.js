
(function(){
    "use strict";
    
    var semver = require("semver");

    desc("Default Build");
    task("default",["version","lint"],function(){
        console.log("\n\nBUILD OK");

    });
    
    desc("Check Node Version");
    task("version",function(){
    console.log("Checking Node Version: .");
    var packageJson = require("./package.json");
    var expectedVersion = packageJson.engines.node;

    var actualVersion = process.version;
    if (semver.neq(actualVersion,expectedVersion)) {
        fail("Incorrect Node Version : expected node version : "+expectedVersion+" but was : "+actualVersion);
    }
    });

    desc("Lint the Code");
    task("lint",function(){
        console.log("Linting JavaScript:.");
        jake.exec("node node_modules/jshint/bin/jshint Jakefile.js",{interactive:true},complete);
    },{async:true});

}());

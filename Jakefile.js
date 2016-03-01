
(function(){
    "use strict";
    
    var semver = require("semver");
    var jshint = require("simplebuild-jshint");

    desc("Default Build");
    task("default",["version","lint"],function(){
        console.log("\n\nBUILD OK");

    });
    
    desc("Check Node Version");
    task("version",function(){
    console.log("Checking Node Version:");
    var packageJson = require("./package.json");
    var expectedVersion = packageJson.engines.node;

    var actualVersion = process.version;
    if (semver.neq(actualVersion,expectedVersion)) {
        fail("Incorrect Node Version : expected node version : "+expectedVersion+" but was : "+actualVersion);
    }
    });

    desc("Lint the Code");
    task("lint",function(){
        process.stdout.write("Linting JavaScript:");
        jshint.checkFiles({
            files:"Jakefile.js",
            options:{},
            globals:{}
        },complete,fail);
    },{async:true});

}());

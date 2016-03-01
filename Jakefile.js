/* globals jake:false,desc:false,task:false,complete:false,fail:false */

(function(){
    "use strict";
    
    var semver = require("semver");
    var jshint = require("simplebuild-jshint");
    
    /*General purpose Task*/
    desc("Default Build");
    task("default",["version","lint"],function(){
        console.log("\n\nBUILD OK");

    });

    desc("Run a localhost server");
    task("run",function(){
        console.log("Run http-server here");
        jake.exec("node node_modules/http-server/bin/http-server src",{interactive:true},complete);
    });
   
    /*Supporting Task*/
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
            options:{
                bitwise:true,
                curly:true,
                eqeqeq:true,
                forin:true, //Not recomended
                freeze:true,
                futurehostile:true,
                latedef:"nofunc",
                noarg:true,
                nocomma:true,
                nonbsp:true,
                nonew:true,
                strict:true,
                undef:true,


                node:true,
                browser:true
            },
            globals:{
            }
        },complete,fail);
    },{async:true});

}());

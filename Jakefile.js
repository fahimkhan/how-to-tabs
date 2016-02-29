
(function(){
    "use strict";
    

    desc("Default Build");
    task("default",[ "version" ],function(){
        console.log("\n\nBUILD OK");

    });
    
    desc("Check Node Version")
    task("version",function(){
    console.log("Checking Node Version: .");
    var packageJson = require("./package.json");
    var expectedVersion = "v"+packageJson.engines.node;

    var actualVersion = process.version;
    if (actualVersion !== expectedVersion) {
        fail("Incorrect Node Version : expected node version : "+expectedVersion+" but was : "+actualVersion);
    }
    });

}());


(function(){
    "use strict";
    console.log("\n\n BUILD OK");
    
    desc("Default Build");
    task("default",function(){
        console.log("Hello, I am the default task!!!!");    
    });

    desc("Pure stupidity");
    task("gooble",function(){
        console.log("Gooble , gooble");
    });
}());

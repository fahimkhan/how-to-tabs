// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

    var assert = require("./assert.js");
    var tabs = require("./tabs.js");

	
	describe("Tabs", function() {
		it("Sets a class on an element when an element has no existing class",function(){

			var element = addElement("div");
			tabs.initialize(element,"someClass");
			assert.equal(getClass(element),"someClass");
			removeElement(element);
		});

		it("Sets class on an element without erasing an existing class",function(){
			var element = addElement("div");
			element.setAttribute("class","existingClass");

			tabs.initialize(element,"newClass");

			assert.equal(getClass(element),"existingClass newClass");

			removeElement(element);

		});

		function getClass(element){
			return element.getAttribute("class");
		}

		function addElement(tagName){
			var element = document.createElement(tagName);
			document.body.appendChild(element);
			return element;
		}

		
		function removeElement(element){
			//Reset
			element.parentNode.removeChild(element);
		}
	});

}());

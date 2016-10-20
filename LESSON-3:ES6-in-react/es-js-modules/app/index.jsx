//import React from 'react' //Equivalent to this named import: var React = require('react')

//import {render} from 'react-dom' //Import specific modules. Equivalent to: var render = require('react-dom').render

//import {MyLibrary} from './libFile1' //Importing only one library

import {
	MyLibrary, 
	MyOtherLibrary
} from './libFile1'

//import MyLibrary from './libFile2'

//This is kinda like destructuring:

var obj = {MyLibrary: function() {}, MyOtherLibrary: function() {}}

//var {MyLibrary, myOtherLibrary} = obj

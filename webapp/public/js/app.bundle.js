webpackJsonp([0],[
/* 0 */
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./webapp/client/client.js */1);


/***/ },
/* 1 */
/*!*********************************!*\
  !*** ./webapp/client/client.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react/addons */ 2);
	var App = __webpack_require__(/*! ./components/application */ 4)
	
	React.render(
	  React.createElement(App),
	  document.querySelector('#js-reactMountingPoint')
	);


/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/*!**************************************************!*\
  !*** ./webapp/client/components/application.jsx ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react/addons */ 2);
	
	var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Application[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Application.prototype=Object.create(____SuperProtoOf____Class0);Application.prototype.constructor=Application;Application.__superConstructor__=____Class0;
	
	  function Application(props) {"use strict";
	    ____Class0.call(this,props);
	  }
	
	  Application.prototype.render=function() {"use strict";
	    return (
	      React.createElement("div", null, 
	        "Application!"
	      )
	    );
	  };
	
	
	
	module.exports = Application;


/***/ }
]);
//# sourceMappingURL=app.bundle.js.map
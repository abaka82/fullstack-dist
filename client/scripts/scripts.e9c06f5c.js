"use strict";function pageTitle(a,b){return{link:function(c,d){var e=function(a,c,e,f,g){var h="INSPINIA | Responsive Admin Theme";c.data&&c.data.pageTitle&&(h="INSPINIA | "+c.data.pageTitle),b(function(){d.text(h)})};a.$on("$stateChangeStart",e)}}}function sideNavigation(a){return{restrict:"A",link:function(b,c){a(function(){c.metisMenu()})}}}function iboxTools(a){return{restrict:"A",scope:!0,templateUrl:"views/common/ibox_tools.html",controller:["$scope","$element",function(b,c){b.showhide=function(){var b=c.closest("div.ibox"),d=c.find("i:first"),e=b.find("div.ibox-content");e.slideToggle(200),d.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down"),b.toggleClass("").toggleClass("border-bottom"),a(function(){b.resize(),b.find("[id^=map-]").resize()},50)},b.closebox=function(){var a=c.closest("div.ibox");a.remove()}}]}}function minimalizaSidebar(a){return{restrict:"A",template:'<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',controller:["$scope","$element",function(a,b){a.minimalize=function(){$("body").toggleClass("mini-navbar"),!$("body").hasClass("mini-navbar")||$("body").hasClass("body-small")?($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(400)},200)):$("body").hasClass("fixed-sidebar")?($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(400)},100)):$("#side-menu").removeAttr("style")}}]}}function iboxToolsFullScreen(a){return{restrict:"A",scope:!0,templateUrl:"views/common/ibox_tools_full_screen.html",controller:["$scope","$element",function(b,c){b.showhide=function(){var b=c.closest("div.ibox"),d=c.find("i:first"),e=b.find("div.ibox-content");e.slideToggle(200),d.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down"),b.toggleClass("").toggleClass("border-bottom"),a(function(){b.resize(),b.find("[id^=map-]").resize()},50)},b.closebox=function(){var a=c.closest("div.ibox");a.remove()},b.fullscreen=function(){var a=c.closest("div.ibox"),b=c.find("i.fa-expand");$("body").toggleClass("fullscreen-ibox-mode"),b.toggleClass("fa-expand").toggleClass("fa-compress"),a.toggleClass("fullscreen"),setTimeout(function(){$(window).trigger("resize")},100)}}]}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}pageTitle.$inject=["$rootScope","$timeout"],sideNavigation.$inject=["$timeout"],iboxTools.$inject=["$timeout"],minimalizaSidebar.$inject=["$timeout"],iboxToolsFullScreen.$inject=["$timeout"],angular.module("meanonlineshopApp",["meanonlineshopApp.auth","meanonlineshopApp.admin","meanonlineshopApp.constants","ngCookies","ngResource","ngSanitize","btford.socket-io","ui.router","validation.match","ui.bootstrap"]).config(["$urlRouterProvider","$locationProvider",function(a,b){a.otherwise("/"),b.html5Mode(!0)}]),angular.module("meanonlineshopApp").directive("pageTitle",pageTitle).directive("sideNavigation",sideNavigation).directive("iboxTools",iboxTools).directive("minimalizaSidebar",minimalizaSidebar).directive("iboxToolsFullScreen",iboxToolsFullScreen),angular.module("meanonlineshopApp.admin",["meanonlineshopApp.auth","ui.router"]),angular.module("meanonlineshopApp.auth",["meanonlineshopApp.constants","meanonlineshopApp.util","ngCookies","ui.router"]).config(["$httpProvider",function(a){a.interceptors.push("authInterceptor")}]),angular.module("meanonlineshopApp.util",[]),function(){function a(a,b,c,d,e,f,g){var h=f.safeCb,i={},j=e.userRoles||[];c.get("token")&&"/logout"!==a.path()&&(i=g.get());var k={login:function(a,e){var f=a.email,j=a.password;return b.post("/auth/local",{email:f,password:j}).then(function(a){return c.put("token",a.data.token),i=g.get(),i.$promise}).then(function(a){return h(e)(null,a),a})["catch"](function(a){return k.logout(),h(e)(a.data),d.reject(a.data)})},logout:function(){c.remove("token"),i={}},createUser:function(a,b){return g.save(a,function(d){return c.put("token",d.token),i=g.get(),h(b)(null,a)},function(a){return k.logout(),h(b)(a)}).$promise},changePassword:function(a,b,c){return g.changePassword({id:i._id},{oldPassword:a,newPassword:b},function(){return h(c)(null)},function(a){return h(c)(a)}).$promise},getCurrentUser:function(a){if(0===arguments.length)return i;var b=i.hasOwnProperty("$promise")?i.$promise:i;return d.when(b).then(function(b){return h(a)(b),b},function(){return h(a)({}),{}})},isLoggedIn:function(a){return 0===arguments.length?i.hasOwnProperty("role"):k.getCurrentUser(null).then(function(b){var c=b.hasOwnProperty("role");return h(a)(c),c})},hasRole:function l(a,b){var l=function(a,b){return j.indexOf(a)>=j.indexOf(b)};return arguments.length<2?l(i.role,a):k.getCurrentUser(null).then(function(c){var d=c.hasOwnProperty("role")?l(c.role,a):!1;return h(b)(d),d})},isAdmin:function(){return k.hasRole.apply(k,[].concat.apply(["admin"],arguments))},getToken:function(){return c.get("token")}};return k}a.$inject=["$location","$http","$cookies","$q","appConfig","Util","User"],angular.module("meanonlineshopApp.auth").factory("Auth",a)}();var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(){var a=function(){function a(b){_classCallCheck(this,a),this.users=b.query()}return a.$inject=["User"],_createClass(a,[{key:"delete",value:function(a){a.$remove(),this.users.splice(this.users.indexOf(a),1)}}]),a}();angular.module("meanonlineshopApp.admin").controller("AdminController",a)}(),angular.module("meanonlineshopApp.admin").config(["$stateProvider",function(a){a.state("admin",{url:"/admin",templateUrl:"app/admin/admin.html",controller:"AdminController",controllerAs:"admin",authenticate:"admin"})}]),function(a,b){a.module("meanonlineshopApp.constants",[]).constant("appConfig",{userRoles:["guest","user","admin"]})}(angular);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(){var a=function(){function a(b,c,d){_classCallCheck(this,a),this.$http=b,this.socket=d,this.awesomeThings=[],c.$on("$destroy",function(){d.unsyncUpdates("thing")})}return a.$inject=["$http","$scope","socket"],_createClass(a,[{key:"$onInit",value:function(){var a=this;this.$http.get("/api/things").then(function(b){a.awesomeThings=b.data,a.socket.syncUpdates("thing",a.awesomeThings)})}},{key:"addThing",value:function(){this.newThing&&(this.$http.post("/api/things",{name:this.newThing}),this.newThing="")}},{key:"deleteThing",value:function(a){this.$http["delete"]("/api/things/"+a._id)}}]),a}();angular.module("meanonlineshopApp").component("main",{templateUrl:"app/main/main.html",controller:a})}(),angular.module("meanonlineshopApp").config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/login"),a.state("index",{url:"/index","abstract":!0,templateUrl:"views/common/content.html",data:{pageTitle:"Example view"},authenticate:!0}).state("login",{url:"/login",templateUrl:"app/account/login/login.html",controller:"LoginController",controllerAs:"vm"}).state("logout",{url:"/logout?referrer",referrer:"login",controller:["$state","Auth",function(a,b){var c=a.params.referrer||a.current.referrer||"login";b.logout(),a.go(c)}]}).state("signup",{url:"/signup",templateUrl:"app/account/signup/signup.html",controller:"SignupController",controllerAs:"vm"}).state("index.settings",{url:"/settings",templateUrl:"app/account/settings/settings.html",controller:"SettingsController",controllerAs:"vm",authenticate:!0}).state("index.main",{url:"/main",template:"<main></main>",authenticate:!0}).state("index.minor",{url:"/minor",templateUrl:"minor.html",data:{pageTitle:"Example view"},authenticate:!0})}]).run(["$rootScope",function(a){a.$on("$stateChangeStart",function(a,b,c,d){"logout"===b.name&&d&&d.name&&!d.authenticate&&(b.referrer=d.name)})}]),angular.module("meanonlineshopApp").run(["$rootScope","$state",function(a,b){a.$state=b}]);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),SettingsController=function(){function a(b){_classCallCheck(this,a),this.errors={},this.submitted=!1,this.Auth=b}return a.$inject=["Auth"],_createClass(a,[{key:"changePassword",value:function(a){var b=this;this.submitted=!0,a.$valid&&this.Auth.changePassword(this.user.oldPassword,this.user.newPassword).then(function(){b.message="Password successfully changed."})["catch"](function(){a.password.$setValidity("mongoose",!1),b.errors.other="Incorrect password",b.message=""})}}]),a}();angular.module("meanonlineshopApp").controller("SettingsController",SettingsController);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),LoginController=function(){function a(b,c){_classCallCheck(this,a),this.user={},this.errors={},this.submitted=!1,this.Auth=b,this.$state=c}return a.$inject=["Auth","$state"],_createClass(a,[{key:"login",value:function(a){var b=this;this.submitted=!0,a.$valid&&this.Auth.login({email:this.user.email,password:this.user.password}).then(function(){b.$state.go("index.main")})["catch"](function(a){b.errors.other=a.message})}}]),a}();angular.module("meanonlineshopApp").controller("LoginController",LoginController),function(){function a(a,b,c,d,e){var f;return{request:function(a){return a.headers=a.headers||{},c.get("token")&&e.isSameOrigin(a.url)&&(a.headers.Authorization="Bearer "+c.get("token")),a},responseError:function(a){return 401===a.status&&((f||(f=d.get("$state"))).go("login"),c.remove("token")),b.reject(a)}}}a.$inject=["$rootScope","$q","$cookies","$injector","Util"],angular.module("meanonlineshopApp.auth").factory("authInterceptor",a)}(),function(){angular.module("meanonlineshopApp.auth").run(["$rootScope","$state","Auth",function(a,b,c){a.$on("$stateChangeStart",function(a,d){d.authenticate&&("string"==typeof d.authenticate?c.hasRole(d.authenticate,_.noop).then(function(d){return d?void 0:(a.preventDefault(),c.isLoggedIn(_.noop).then(function(a){b.go("login")}))}):c.isLoggedIn(_.noop).then(function(c){c||(a.preventDefault(),b.go("login"))}))})}])}(),function(){function a(a){return a("/api/users/:id/:controller",{id:"@_id"},{changePassword:{method:"PUT",params:{controller:"password"}},get:{method:"GET",params:{id:"me"}}})}a.$inject=["$resource"],angular.module("meanonlineshopApp.auth").factory("User",a)}(),angular.module("meanonlineshopApp").directive("footer",function(){return{templateUrl:"components/footer/footer.html",restrict:"E",link:function(a,b){b.addClass("footer")}}}),angular.module("meanonlineshopApp").directive("mongooseError",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){b.on("keydown",function(){return d.$setValidity("mongoose",!0)})}}});var NavbarController=function a(b){_classCallCheck(this,a),this.menu=[{title:"Home",state:"main"}],this.isCollapsed=!0,this.isLoggedIn=b.isLoggedIn,this.isAdmin=b.isAdmin,this.getCurrentUser=b.getCurrentUser};NavbarController.$inject=["Auth"],angular.module("meanonlineshopApp").controller("NavbarController",NavbarController),angular.module("meanonlineshopApp").directive("navbar",function(){return{templateUrl:"components/navbar/navbar.html",restrict:"E",controller:"NavbarController",controllerAs:"nav"}}),angular.module("meanonlineshopApp").factory("socket",["socketFactory",function(a){var b=io("",{path:"/socket.io-client"}),c=a({ioSocket:b});return{socket:c,syncUpdates:function(a,b,d){d=d||angular.noop,c.on(a+":save",function(a){var c=_.find(b,{_id:a._id}),e=b.indexOf(c),f="created";c?(b.splice(e,1,a),f="updated"):b.push(a),d(f,a,b)}),c.on(a+":remove",function(a){var c="deleted";_.remove(b,{_id:a._id}),d(c,a,b)})},unsyncUpdates:function(a){c.removeAllListeners(a+":save"),c.removeAllListeners(a+":remove")}}}]);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),SignupController=function(){function a(b,c){_classCallCheck(this,a),this.user={},this.errors={},this.submitted=!1,this.Auth=b,this.$state=c}return a.$inject=["Auth","$state"],_createClass(a,[{key:"register",value:function(a){var b=this;this.submitted=!0,a.$valid&&this.Auth.createUser({firstname:this.user.firstname,lastname:this.user.lastname,email:this.user.email,password:this.user.password}).then(function(){b.$state.go("index.main")})["catch"](function(c){c=c.data,b.errors={},angular.forEach(c.errors,function(c,d){a[d].$setValidity("mongoose",!1),b.errors[d]=c.message})})}}]),a}();angular.module("meanonlineshopApp").controller("SignupController",SignupController),function(){function a(a){var b={safeCb:function(a){return angular.isFunction(a)?a:angular.noop},urlParse:function(a){var b=document.createElement("a");return b.href=a,""===b.host&&(b.href=b.href),b},isSameOrigin:function(c,d){return c=b.urlParse(c),d=d&&[].concat(d)||[],d=d.map(b.urlParse),d.push(a.location),d=d.filter(function(a){return c.hostname===a.hostname&&c.port===a.port&&c.protocol===a.protocol}),d.length>=1}};return b}a.$inject=["$window"],angular.module("meanonlineshopApp.util").factory("Util",a)}();
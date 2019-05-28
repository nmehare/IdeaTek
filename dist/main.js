(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/posts/post-create/post-create.component */ "./src/app/components/posts/post-create/post-create.component.ts");
/* harmony import */ var _components_posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/posts/post-list/post-list.component */ "./src/app/components/posts/post-list/post-list.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/auth/auth.guard */ "./src/app/components/auth/auth.guard.ts");
/* harmony import */ var _components_login_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/logout/logout.component */ "./src/app/components/login/logout/logout.component.ts");










var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'logout', component: _components_login_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"] },
    { path: 'create', component: _components_posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__["PostCreateComponent"], canActivate: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'posts', component: _components_posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__["PostListComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main{\r\n    width: 80%;\r\n    margin: 1rem auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- header -->\n    <app-header></app-header>\n\n    <!-- routes will be rendered here -->\n    <main>\n    <router-outlet></router-outlet>\n    </main>\n    <!-- <main>\n        <app-post-create></app-post-create>\n        <app-post-list></app-post-list>\n    </main> -->\n    \n    <!-- footer -->\n    <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'IdeaTekClient';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/posts/post-list/post-list.component */ "./src/app/components/posts/post-list/post-list.component.ts");
/* harmony import */ var _components_posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/posts/post-create/post-create.component */ "./src/app/components/posts/post-create/post-create.component.ts");
/* harmony import */ var _components_posts_posts_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/posts/posts.service */ "./src/app/components/posts/posts.service.ts");
/* harmony import */ var _components_posts_posts1_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/posts/posts1.service */ "./src/app/components/posts/posts1.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user.service */ "./src/app/components/user.service.ts");
/* harmony import */ var _components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/auth/auth.guard */ "./src/app/components/auth/auth.guard.ts");
/* harmony import */ var _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/auth/auth.interceptor */ "./src/app/components/auth/auth.interceptor.ts");
/* harmony import */ var _components_login_logout_logout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/login/logout/logout.component */ "./src/app/components/login/logout/logout.component.ts");
/* harmony import */ var _components_shared_unique_email_validator_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/shared/unique-email-validator.directive */ "./src/app/components/shared/unique-email-validator.directive.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_13__["PostListComponent"],
                _components_posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_14__["PostCreateComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _components_login_logout_logout_component__WEBPACK_IMPORTED_MODULE_21__["LogoutComponent"],
                _components_shared_unique_email_validator_directive__WEBPACK_IMPORTED_MODULE_22__["UniqueEmailValidatorDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                    useClass: _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_20__["AuthInterceptor"],
                    multi: true
                }, _components_posts_posts_service__WEBPACK_IMPORTED_MODULE_15__["PostsService"], _components_posts_posts1_service__WEBPACK_IMPORTED_MODULE_16__["Posts1Service"], _components_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], _components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/components/auth/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/components/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.userService.isLoggedIn()) {
            this.router.navigateByUrl('/posts');
            this.userService.deleteToken();
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/auth/auth.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/components/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) { }, function (err) {
                if (err.error.auth == false) {
                    _this.router.navigateByUrl('/posts');
                }
            }));
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: #2f303ade;\r\n    color: white;\r\n    text-align: center;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMDNhZGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer>\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2019 Copyright:\n        Bringing your ideas to life!\n    </div>\n    <!-- Copyright -->\n  \n  </footer>\n  <!-- Footer -->"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <nav class=\"navbar navbar-expand-sm navbar-dark bg-dark fixed-top\">\n    <div class=\"container-fluid\">\n      <a [routerLink]=\"['home']\" class=\"navbar-brand\">\n        <h1><strong>IdeaTek</strong></h1>\n      </a>\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li><a [routerLink]=\"['/home']\" routerLinkActive=\"active\" class=\"nav-link\">Home</a></li>\n          <li><a [routerLink]=\"['/login']\" routerLinkActive=\"active\" class=\"nav-link\">Login</a></li>\n          <li><a [routerLink]=\"['/register']\" routerLinkActive=\"active\" class=\"nav-link\">Register</a></li>\n          <li><a [routerLink]=\"['/logout']\" routerLinkActive=\"active\" class=\"nav-link\">LogOut</a></li>\n          <li><a [routerLink]=\"['/posts']\" routerLinkActive=\"active\" class=\"nav-link\">Posts</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</mat-toolbar>\n\n<div class=\"container-fluid\">\n  <div class=\"row d-flex d-md-block flex-nowrap wrapper\">\n    <div class=\"col-md-1 float-left col-1 pl-0 pr-0 collapse width\" id=\"sidebar\">\n      <div class=\"list-group border-0 card text-center text-md-left\">\n        <a href=\"#\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-gear\"></i>\n          <span class=\"d-none d-md-inline\">Home</span></a>\n\n        <a [routerLink]=\"['/posts']\" class=\"list-group-item d-inline-block collapsed\" data-toggle=\"collapse\" data-parent=\"#sidebar\"\n          aria-expanded=\"false\"><i class=\"fa fa-dashboard\"></i> <span class=\"d-none d-md-inline\">Posts</span> </a>\n        <div class=\"collapse\" id=\"menu1\">\n          <a routerLink=\"/create\" class=\"list-group-item\" data-toggle=\"collapse\" aria-expanded=\"false\">Add New Posts</a>\n          <a [routerLink]=\"['/posts']\" class=\"list-group-item\" data-parent=\"#menu1\">View All</a>\n          <a href=\"#\" class=\"list-group-item\" data-parent=\"#menu1\">Subitem 3</a>\n        </div>\n        <a href=\"#\" class=\"list-group-item d-inline-block collapsed\" data-parent=\"#sidebar\"><i\n            class=\"fa fa-calendar\"></i> <span class=\"d-none d-md-inline\">Help</span></a>\n        </div>\n    </div>\n    <main class=\"col-md-10 col px-5 pl-md-2 pt-2 main mx-auto\">\n      <a href=\"#\" data-target=\"#sidebar\" data-toggle=\"collapse\" aria-expanded=\"false\"><i\n          class=\"fa fa-navicon fa-2x py-2 p-1\"></i></a>\n      <div class=\"page-header\">\n        <h3>Share and Get An Idea</h3>\n      </div>\n      <hr>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-title>\n  What Is An IdeaTek And Why?\n    </mat-card-title>\n    <mat-card-content>\n        <mat-list>\n            <mat-list-item >Idea is a thought is made-up of a bunch of activity through various, interconnected neural network in a brain.</mat-list-item>\n            <mat-list-item> Sometimes people do not share their creative ideas and they forget or die with it, but if you give them money motivation they will start sharing their ideas and one of their idea may change the world.\n              </mat-list-item>\n            <mat-list-item> According to the Neuroscience each and every individual get 10,000 ideas in a day.\n              </mat-list-item>\n              <mat-list-item> Important innovative Idea needs to be  valued, logged, shared with everyone.\n              </mat-list-item>\n              <mat-list-item>\n                  IdeaTek will give unique platform to log, share and sell the ideas.\n               \n              </mat-list-item>\n              <mat-list-item>\n                  Pool of these creative ideas may help individuals, companies, corporations to get benefited\n            \n              </mat-list-item>\n          </mat-list>\n        </mat-card-content>\n  </mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field,\r\ninput{\r\n    width:100%;\r\n    align-content:center;\r\n    \r\n}\r\n\r\n.main-div{\r\n    display:inline-block; \r\n  }\r\n\r\nmat-card-cvr{\r\n    top:50%; width:100%; text-align:center; position:fixed;\r\n }\r\n\r\ndiv {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 400px;\r\n    height: 200px;\r\n  }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFVBQVU7SUFDVixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksb0JBQW9CO0VBQ3RCOztBQUVGO0lBQ0ksT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxjQUFjO0NBQ3pEOztBQUVBO0lBQ0csa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLFxyXG5pbnB1dHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4ubWFpbi1kaXZ7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jazsgXHJcbiAgfVxyXG5cclxubWF0LWNhcmQtY3Zye1xyXG4gICAgdG9wOjUwJTsgd2lkdGg6MTAwJTsgdGV4dC1hbGlnbjpjZW50ZXI7IHBvc2l0aW9uOmZpeGVkO1xyXG4gfVxyXG5cclxuIGRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h4>Login component</h4>\n    <mat-card layout=\"row\" class=\"mat-card-cvr\">\n        <form (submit)=\"logIn(loginForm)\" #loginForm=\"ngForm\" id=\"loginForm\">\n            <mat-form-field>\n                <input matInput type='text' placeholder='Enter UserName' name=\"username\" ngModel required\n                    #username=\"ngModel\" minlength=\"5\">\n\n            </mat-form-field>\n            <mat-form-field>\n                <input type='password' rows=\"4\" placeholder='Enter Password' matInput name=\"password\" ngModel\n                    required #password=\"ngModel\">\n\n            </mat-form-field>\n            <button mat-raised-button color=\"primary\" type=\"submit\">Log In</button>\n        </form>\n    </mat-card>\n</div>\n\n<div class='alert' *ngIf=\"serverErrMsg\">\n    {{serverErrMsg}}\n\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/components/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logIn = function (form) {
        var _this = this;
        this.userService.logInNode(form.value).subscribe(function (res) {
            _this.userService.setToken(res['token']); //for jwt successful authentication
            alert("Logged-in successfully, redirecting to posts home page");
            _this.router.navigateByUrl('/posts');
        }, function (err) {
            _this.serverErrMsg = err.error.message;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/login/logout/logout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/login/logout/logout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/login/logout/logout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/login/logout/logout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/login/logout/logout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/login/logout/logout.component.ts ***!
  \*************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/components/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(userservice, router) {
        this.userservice = userservice;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.userservice.deleteToken();
        alert("You are logged Out, please login again to add posts");
        this.router.navigateByUrl('/posts');
        // this.router.navigate(['/posts']);
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/components/login/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/components/login/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/post-create/post-create.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/posts/post-create/post-create.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field,\r\ntextarea{\r\n    width:100%;\r\n    \r\n}mat-form-field,\r\ninput{\r\n    width:100%;\r\n    align-content:center;\r\n    \r\n}.main-div{\r\n    display:inline-block; \r\n  }mat-card-cvr{\r\n    top:50%; width:100%; text-align:center; position:fixed;\r\n }div {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 400px;\r\n    height: 200px;\r\n  }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFVBQVU7O0FBRWQsQ0FBQzs7SUFFRyxVQUFVO0lBQ1Ysb0JBQW9COztBQUV4QixDQUVBO0lBQ0ksb0JBQW9CO0VBQ3RCLENBRUY7SUFDSSxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLGNBQWM7Q0FDekQsQ0FFQTtJQUNHLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3RzL3Bvc3QtY3JlYXRlL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWF7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgXHJcbn1tYXQtZm9ybS1maWVsZCxcclxuaW5wdXR7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYWxpZ24tY29udGVudDpjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLm1haW4tZGl2e1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7IFxyXG4gIH1cclxuXHJcbm1hdC1jYXJkLWN2cntcclxuICAgIHRvcDo1MCU7IHdpZHRoOjEwMCU7IHRleHQtYWxpZ246Y2VudGVyOyBwb3NpdGlvbjpmaXhlZDtcclxuIH1cclxuXHJcbiBkaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/components/posts/post-create/post-create.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/posts/post-create/post-create.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Post create component</h2>\r\n\r\n<mat-card>\r\n    <form  (submit)=\"onAddPost(postForm)\" #postForm=\"ngForm\" id=\"newPost\">\r\n        <mat-form-field>\r\n            <input matInput type='text' placeholder=\"Enter Title\" name=\"title\" ngModel required #title=\"ngModel\" minlength=\"5\">\r\n            <mat-error *ngIf=\"title.invalid\">Please enter title</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <textarea rows=\"4\" matInput placeholder=\"Enter Content\"  required name=\"body\" ngModel #body=\"ngModel\" ></textarea>\r\n            <mat-error>Please enter content(optional)</mat-error>\r\n        </mat-form-field>\r\n        <button mat-raised-button color=\"primary\" type=\"submit\">Save Post</button>\r\n    </form>\r\n</mat-card>\r\n<!-- <p>{{ newPost }}</p> -->\r\n\r\n\r\n<!--h2>Post create component</h2>//below code fro two way binding uncomment and uncomment onáddPost method\r\n\r\n//textarea rows=\"6\" [value]=\"newPost\" #postInput></textarea>\r\n<mat-card>\r\n        <mat-form-field>\r\n                <input matInput type='text' [(ngModel)]=\"enteredTitle\" required #title=\"ngModel\">\r\n                <mat-error *ngIf=\"enteredTitle.invalid\">Please enter title</mat-error>\r\n            </mat-form-field>\r\n<mat-form-field>\r\n<textarea rows=\"6\" matInput [(ngModel)]=\"enteredContent\"></textarea>\r\n</mat-form-field>\r\n</mat-card>\r\n<hr>\r\n<button mat-raised-button color=\"primary\" (click)=\"onAddPost()\">Save Post</button>\r\n\r\n<p>{{ newPost }}</p-->"

/***/ }),

/***/ "./src/app/components/posts/post-create/post-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/posts/post-create/post-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/components/posts/posts.service.ts");
/* harmony import */ var _posts1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts1.service */ "./src/app/components/posts/posts1.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PostCreateComponent = /** @class */ (function () {
    // @Output() postCreated=new EventEmitter<Post>();//generic type pass additional info
    function PostCreateComponent(postsservice, posts1service, router) {
        this.postsservice = postsservice;
        this.posts1service = posts1service;
        this.router = router;
        // newPost = 'No Content';
        this.enteredContent = "";
        this.enteredTitle = "";
    }
    PostCreateComponent.prototype.ngOnInit = function () {
        throw new Error("Method not implemented.");
    };
    PostCreateComponent.prototype.onAddPost = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        //  alert("InsidePost Added");
        // const post:Post={
        //     title:form.value.title,
        //     content:form.value.content
        //};
        //this.postCreated.emit(post);
        this.posts1service
            .addPost(form.value.title, form.value.body)
            .subscribe(function (data) {
            _this.posts11 = data['post'];
            alert("Posts Added successfully, redirecting to posts home page");
            _this.router.navigateByUrl('/posts');
            console.log("data for addition");
            console.log(_this.posts11);
        }, (function (error) {
            _this.error = error;
            console.log("Please Login to Add a Post");
            console.log(_this.error);
        }) // error path
        );
        // this.posts1service.addPost(form.value.title,form.value.body);
        // alert("InsidePost Added end");
    };
    PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-create',
            template: __webpack_require__(/*! ./post-create.component.html */ "./src/app/components/posts/post-create/post-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.css */ "./src/app/components/posts/post-create/post-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"], _posts1_service__WEBPACK_IMPORTED_MODULE_3__["Posts1Service"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/post-list/post-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/posts/post-list/post-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    margin-top:1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIG1hcmdpbi10b3A6MXJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/posts/post-list/post-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/posts/post-list/post-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" routerLink=\"/create\">Create Post</button>\n<br>\n<strong>User needs to login to add a Post</strong>\n<br>\n<br>\n<mat-accordion multi='true' *ngIf=\"posts1.length > 0\">\n  <mat-expansion-panel *ngFor=\"let post of posts1\">\n    <mat-expansion-panel-header>\n      {{post.title}}\n    </mat-expansion-panel-header>\n    <p>{{post.body}}</p>\n    <p><span ng-show=\"post.author\" style=\"float:right;\">\n        posted by <span class=\"text-capitalize\">{{post.author}}</span>\n        <!-- Displays time stamp (on large screens) -->\n        <span id=\"dateTime\"> at {{post.createdOn | date : 'h:mm a'}} on {{post.createdOn | date : 'M/d/yy'}}</span>\n      </span></p>\n  </mat-expansion-panel>\n</mat-accordion>\n<p class=\"mat-body-1\" *ngIf=\"posts1.length <= 0 \">No post added yet</p>\n\n\n\n\n\n<!-- Loops through posts -->\n<!-- <div *ngFor='let post of posts1'>\n\n      <div id=\"postContainer\">\n \n        <!-- Displays title and links to comment page -->\n<!-- <a href=\"#/posts/{{post._id}}\"><strong>{{post.title}}</strong></a> -->\n\n<!-- Displays number of comments -->\n<!-- <h6><a class=\"comments\" routerLink=\"/posts/{{post._id}}\"><span style=\"text-align:left;\">{{post.comments.length}} comments</span></a> -->\n\n\n\n<!-- Displays author floated to the right -->\n<!-- <span ng-show=\"post.author\" style=\"float:right;\"> -->\n<!-- posted by <span class=\"text-capitalize\">{{post.author}}</span> -->\n<!-- Displays time stamp (on large screens) -->\n<!-- <span id=\"dateTime\"> at {{post.createdOn | date : 'h:mm a'}} on {{post.createdOn | date : 'M/d/yy'}}</span> -->\n<!-- </span></h6> -->\n<!-- </div> -->\n<!-- </div> -->\n<!-- \n\n\n<div class=\"card\"> \n    <div class=\"card-header\">    \n       {{pageTitle}}   \n       </div>    \n         <div class=\"card-body\">     \n            <div class='table-responsive'>       \n                  <table class='table' *ngIf='posts1 && posts1.length'>            \n                      <thead>\n                      <tr> \n                         \n                        <th>Author</th>   \n                        <th>body</th>\n                        <th>comments</th> \n                        <th>createdon</th> \n                        <th>title</th>   \n                        <th>votes</th>\n                      </tr>      \n                     </thead>\n                     <tbody>           \n                                    <tr *ngFor='let sensor of posts1'>   \n                                      <td>{{ sensor.author }}</td>      \n                                      <td>{{ sensor.body }}</td>      \n                                      <td>{{ sensor.comments }}</td>      \n                                      <td>{{ sensor.createdOn }}</td>\n                                      <td>{{ sensor.title }}</td>      \n                                      <td>{{ sensor.votes }}</td>              \n                                    </tr>             \n                      </tbody>            \n            </table>  \n       </div>   \n     </div>     \n   </div> -->\n<div>\n</div>"

/***/ }),

/***/ "./src/app/components/posts/post-list/post-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/posts/post-list/post-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/components/posts/posts.service.ts");
/* harmony import */ var _posts1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts1.service */ "./src/app/components/posts/posts1.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PostListComponent = /** @class */ (function () {
    function PostListComponent(postsservice, posts1service, router) {
        this.postsservice = postsservice;
        this.posts1service = posts1service;
        this.router = router;
        // posts=[
        //   {title:'First', content:'this is content of 1 post'},
        //   {title:'second', content:'this is content of 2 post'},
        //   {title:'third', content:'this is content of 3 post'}
        // ];
        //@Input() posts:Post[]=[];
        this.posts = [];
    }
    PostListComponent.prototype.fetchPosts1 = function () {
        var _this = this;
        this.posts1service
            .getPosts1()
            .subscribe(function (data) {
            _this.posts1 = data;
            console.log("data requested");
            console.log("this.posts1");
        });
    };
    PostListComponent.prototype.ngOnDestroy = function () {
        this.postsSub.unsubscribe();
    };
    PostListComponent.prototype.editPosts1 = function (id) {
        this.router.navigate(["/edit/" + id]);
    };
    PostListComponent.prototype.deletePosts1 = function (id) {
        var _this = this;
        this.posts1service.deletePost(id).subscribe(function () {
            _this.fetchPosts1();
        });
        this.router.navigate(["/edit/" + id]);
    };
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchPosts1();
        // this.posts1service.getPosts1().subscribe((posts) =>{
        // console.log(posts);
        //});
        this.posts = this.postsservice.getPosts();
        this.postsSub = this.postsservice.getPostUpdateListner().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__(/*! ./post-list.component.html */ "./src/app/components/posts/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/components/posts/post-list/post-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"], _posts1_service__WEBPACK_IMPORTED_MODULE_3__["Posts1Service"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/posts.service.ts":
/*!***************************************************!*\
  !*** ./src/app/components/posts/posts.service.ts ***!
  \***************************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

//@Injectable({providedIn:'root'})//only create one instance of service for entire app
var PostsService = /** @class */ (function () {
    function PostsService() {
        this.posts = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    PostsService.prototype.getPosts = function () {
        // return this.posts;//dont retun original array
        return this.posts.slice(); //add posts in new array with all obj so this array has been copied
    };
    PostsService.prototype.getPostUpdateListner = function () {
        return this.postsUpdated.asObservable();
    };
    PostsService.prototype.addPost = function (title, content) {
        var post = { title: title, content: content };
        this.posts.push(post);
        this.postsUpdated.next(this.posts.slice());
    };
    return PostsService;
}());



/***/ }),

/***/ "./src/app/components/posts/posts1.service.ts":
/*!****************************************************!*\
  !*** ./src/app/components/posts/posts1.service.ts ***!
  \****************************************************/
/*! exports provided: Posts1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Posts1Service", function() { return Posts1Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var Posts1Service = /** @class */ (function () {
    function Posts1Service(http) {
        this.http = http;
        this.uri = 'http://localhost:3000';
    }
    Posts1Service.prototype.getPosts1 = function () {
        return this.http.get(this.uri + "/posts");
    };
    Posts1Service.prototype.getPosts1ById = function (id) {
        return this.http.get(this.uri + "/posts/" + id);
    };
    Posts1Service.prototype.addPost = function (title, body) {
        alert('inside addpost method');
        var post = {
            title: title,
            body: body
        };
        return this.http.post(this.uri + "/posts", post);
    };
    Posts1Service.prototype.updatePost = function (id, title, content) {
        var post = {
            id: id,
            title: title,
            content: content
        };
        return this.http.post(this.uri + "/posts/update/" + id, post);
    };
    Posts1Service.prototype.deletePost = function (id) {
        return this.http.get(this.uri + "/posts/delete/" + id);
    };
    Posts1Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Posts1Service);
    return Posts1Service;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field,\r\ninput{\r\n    width:100%;\r\n    align-content:center;\r\n    \r\n}\r\n\r\n.main-div{\r\n    display:inline-block; \r\n  }\r\n\r\nmat-card-cvr{\r\n    top:50%; width:100%; text-align:center; position:fixed;\r\n }\r\n\r\ndiv {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 400px;\r\n    height: 200px;\r\n  }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFVBQVU7SUFDVixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksb0JBQW9CO0VBQ3RCOztBQUVGO0lBQ0ksT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxjQUFjO0NBQ3pEOztBQUVBO0lBQ0csa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLFxyXG5pbnB1dHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4ubWFpbi1kaXZ7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jazsgXHJcbiAgfVxyXG5cclxubWF0LWNhcmQtY3Zye1xyXG4gICAgdG9wOjUwJTsgd2lkdGg6MTAwJTsgdGV4dC1hbGlnbjpjZW50ZXI7IHBvc2l0aW9uOmZpeGVkO1xyXG4gfVxyXG5cclxuIGRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h4>Register component</h4>\n    <mat-card layout=\"row\" class=\"mat-card-cvr\">\n        <form (submit)=\"register(registerForm)\" #registerForm=\"ngForm\" id=\"registerForm\">\n            <mat-form-field>\n                <input matInput type='text' placeholder='Enter UserName' name=\"username\" ngModel required\n                    #username=\"ngModel\" minlength=\"5\">\n                    <mat-error *ngIf=\"username.errors.forbiddenName\">Please enter Unique User Name</mat-error>\n           \n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input type='password' placeholder='Enter Password' matInput name=\"password\" ngModel required\n                    #password=\"ngModel\">\n\n            </mat-form-field>\n            <br>\n\n            <mat-form-field>\n                <input type='email' placeholder='Enter Email' matInput name=\"email\" ngModel\n                    pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required #email=\"ngModel\">\n                <mat-error *ngIf=\"email.errors &&(email.touched || email.dirty)\">Please enter valid Email</mat-error>\n                <mat-error *ngIf=\"email.invalid\">Please enter Email(Spam) to validate Webservice(SendGrid)</mat-error>\n            </mat-form-field>\n            <br>\n\n            <mat-form-field>\n                <input type='phone' placeholder='Enter Phone' matInput name=\"phone\" ngModel required #phone=\"ngModel\">\n                <mat-error *ngIf=\"phone.invalid\">Please enter Phone to validate Webservice(Nexmo)</mat-error>\n            </mat-form-field>\n            <br>\n            <button mat-raised-button color=\"primary\" type=\"submit\">Register</button>\n        </form>\n    </mat-card>\n</div>\n<div class='alert' *ngIf=\"serverErrMsg\">\n    {{serverErrMsg}}\n\n</div>\n<div class='alert' *ngIf=\"serverSuccessMsg\">\n    {{serverSuccessMsg}}\n\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/components/user.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (form) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (form.invalid) {
            return;
        }
        this.userService.registerUser(form.value).subscribe(function (res) {
            _this.userService.setToken(res['token']); //for jwt successful authentication
            _this.router.navigateByUrl('/login');
            alert(form.value.email);
            alert("User registered successfully");
            _this.serverSuccessMsg = "User Registered Successfully";
        }, function (err) {
            alert("User Already Exist");
            _this.serverErrMsg = err.error.message;
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/unique-email-validator.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/shared/unique-email-validator.directive.ts ***!
  \***********************************************************************/
/*! exports provided: UniqueEmailValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueEmailValidatorDirective", function() { return UniqueEmailValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UniqueEmailValidatorDirective = /** @class */ (function () {
    function UniqueEmailValidatorDirective() {
    }
    UniqueEmailValidatorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appUniqueEmailValidator]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UniqueEmailValidatorDirective);
    return UniqueEmailValidatorDirective;
}());



/***/ }),

/***/ "./src/app/components/user.service.ts":
/*!********************************************!*\
  !*** ./src/app/components/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.selectedUser = {
            username: '',
            password: '',
            email: '',
            phone: 0
        };
        this.uri = 'http://localhost:3000';
        //pass this to method whcih does not need authentication
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'noAuth': 'True' }) };
    }
    //request to nodejs api
    UserService.prototype.logInNode = function (authCredentials) {
        return this.http.post(this.uri + "/login", authCredentials);
    };
    UserService.prototype.registerUser = function (user) {
        return this.http.post(this.uri + "/register", user);
    };
    //helper methods
    UserService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    UserService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
    };
    UserService.prototype.getUserPayload = function () {
        var token = localStorage.getItem('token');
        if (token) {
            var userPayload = atob(token.split('.')[1]); //decode and encode data
            return JSON.parse(userPayload);
        }
        else {
            return null;
        }
    };
    UserService.prototype.isLoggedIn = function () {
        var userPayload = this.getUserPayload();
        if (userPayload) {
            return userPayload.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\IdeaTekClient\IdeaTekClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
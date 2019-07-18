(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/component/table/table.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/component/table/table.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n<table mat-table matSort [dataSource]=\"dataSource\">\n  <ng-container matColumnDef=\"image\">\n    <th mat-header-cell *matHeaderCellDef> Image </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <img [src]=\"element.image\" alt=\"element.title\" />\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <h2>\n        <a [href]=\"element.link\" target=\"_blank\">\n          {{ element.title }}\n        </a>\n      </h2>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"type\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Cover Type </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <p>{{ element.type }}</p>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"author\">\n    <th mat-header-cell *matHeaderCellDef> Author </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <p>\n        <a [href]=\"element.author.self\" target=\"_blank\">Link to Author</a>\n      </p>\n      <p>\n        <a [href]=\"element.author.related\">Related Authors</a>\n      </p>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"publisher\">\n    <th mat-header-cell *matHeaderCellDef> Publisher </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <p>\n        <a [href]=\"element.publisher.self\" target=\"_blank\">Link to Publisher</a>\n      </p>\n      <p>\n        <a [href]=\"element.publisher.self\" target=\"_blank\">Related Publishers</a>\n      </p>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/pages/landing.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/pages/landing.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-bar></app-navigation-bar>\n<div class=\"container\">\n  <app-table [items]=\"items\" [displayedColumns]=\"displayedColumns\"></app-table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/directives-page/page/page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/directives-page/page/page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-bar></app-navigation-bar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div *ngIf=\"!showDirective\">\n      <p>Highlight Me</p>\n      <h1>This is heading text...</h1>\n      <div>\n        <h1>Heading Text</h1>\n        <p>Sub title text</p>\n      </div>\n    </div>\n    <div *ngIf=\"showDirective\">\n      <p highlight-text>Highlight Me</p>\n      <h1 app-heading-text>This is heading text...</h1>\n      <div app-heading-wrapper>\n        <h1>Heading Text</h1>\n        <p>Sub title text</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <button (click)=\"toggleDirectiveDisplay()\">\n      <span *ngIf=\"!showDirective\">Apply Directives</span>\n      <span *ngIf=\"showDirective\">Remove Directives</span>\n    </button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page/page/page.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page/page/page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"landing-page-wrapper\">\n  <div class=\"landing-page-background-image\" style=\"background-image:url(assets/landing-page/background-image.png)\">\n    <div class=\"landing-page-content-wrapper\">\n      <div class=\"landing-page-content-container\">\n        <p>Click on the button to continue</p>\n        <button mat-flat-button color=\"accent\" routerLink=\"/dashboard\">Get Started</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navigation-bar/navigation-bar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navigation-bar/navigation-bar.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <h1>\n      <a routerLink=\"/\">Perx - Angular Interview Test</a>\n    </h1>\n    <span class=\"example-fill-remaining-space\"></span>\n    <div class=\"menu-item\">\n      <button mat-button [matMenuTriggerFor]=\"menu\">Links</button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item routerLink=\"/dashboard\">Dashboard</button>\n        <button mat-menu-item routerLink=\"/directives\">Directive Page</button>\n      </mat-menu>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>"

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



var routes = [];
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'Perx Angular Interview Test';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_page_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @landing/landing-page.module */ "./src/app/landing-page/landing-page.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _directives_directives_page_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @directives/directives-page.module */ "./src/app/directives-page/directives-page.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _landing_landing_page_module__WEBPACK_IMPORTED_MODULE_5__["LandingPageModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"],
                _directives_directives_page_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesPageModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/component/table/table.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/component/table/table.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-table {\n  margin: 20px auto;\n}\n\n.mat-header-row .mat-header-cell {\n  text-align: center;\n}\n\n.cdk-column-title {\n  padding: 0px 0px 0px 25px;\n}\n\n.cdk-column-image {\n  padding: 5px;\n}\n\n.cdk-column-image img {\n  max-width: 50px;\n}\n\n.cdk-column-title h2 {\n  margin: 0;\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n\n.cdk-column-title h2 a {\n  text-decoration: none;\n  color: black;\n}\n\n.cdk-column-type {\n  padding: 0 20px;\n}\n\n.mat-cell p {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1rem;\n}\n\n.cdk-column-author, .cdk-column-publisher {\n  padding: 10px 20px;\n}\n\n.cdk-column-author p:first-child, .cdk-column-publisher p:first-child {\n  margin: 0 0 10px 0;\n}\n\n.spacer-10 {\n  height: 10px;\n}\n\n.mat-form-field-wrapper {\n  padding: 20px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9GbGFncyBCb2lzL0RvY3VtZW50cy9wcm9qZWN0cy9wZXJ4L3Jlc2VhcmNoL2FuZ3VsYXItaW50ZXJ2aWV3L3NyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudC90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudC90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FER0U7RUFDRSxrQkFBQTtBQ0FKOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7QUNERjs7QURFRTtFQUNFLGVBQUE7QUNBSjs7QURJQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FERUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0FDREY7O0FER0k7RUFDRSxrQkFBQTtBQ0ROOztBRE1BO0VBQ0UsWUFBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnQvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYmxle1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1yb3d7XHJcbiAgLm1hdC1oZWFkZXItY2VsbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5jZGstY29sdW1uLXRpdGxle1xyXG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDI1cHg7XHJcbn1cclxuXHJcbi5jZGstY29sdW1uLWltYWdle1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2RrLWNvbHVtbi10aXRsZSBoMntcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbn1cclxuXHJcbi5jZGstY29sdW1uLXR5cGV7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4ubWF0LWNlbGwgcHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5jZGstY29sdW1uLWF1dGhvciwgLmNkay1jb2x1bW4tcHVibGlzaGVye1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBwe1xyXG4gICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNwYWNlci0xMHtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xyXG59IiwiLm1hdC10YWJsZSB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4ubWF0LWhlYWRlci1yb3cgLm1hdC1oZWFkZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNkay1jb2x1bW4tdGl0bGUge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAyNXB4O1xufVxuXG4uY2RrLWNvbHVtbi1pbWFnZSB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5jZGstY29sdW1uLWltYWdlIGltZyB7XG4gIG1heC13aWR0aDogNTBweDtcbn1cblxuLmNkay1jb2x1bW4tdGl0bGUgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbi5jZGstY29sdW1uLXRpdGxlIGgyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNkay1jb2x1bW4tdHlwZSB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLm1hdC1jZWxsIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmNkay1jb2x1bW4tYXV0aG9yLCAuY2RrLWNvbHVtbi1wdWJsaXNoZXIge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4uY2RrLWNvbHVtbi1hdXRob3IgcDpmaXJzdC1jaGlsZCwgLmNkay1jb2x1bW4tcHVibGlzaGVyIHA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG5cbi5zcGFjZXItMTAge1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/component/table/table.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/component/table/table.component.ts ***!
  \**************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");




var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.items = [];
        this.displayedColumns = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    TableComponent.prototype.ngOnInit = function () { };
    TableComponent.prototype.ngOnChanges = function (simpleChange) {
        if (simpleChange && simpleChange['items'] && simpleChange['items'].currentValue) {
            this.dataSource.data = simpleChange['items'].currentValue;
            this.dataSource.sort = this.sort;
        }
    };
    TableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TableComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TableComponent.prototype, "displayedColumns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], TableComponent.prototype, "sort", void 0);
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/component/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/dashboard/component/table/table.component.scss")]
        })
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/landing.component */ "./src/app/dashboard/pages/landing.component.ts");
/* harmony import */ var _component_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/table/table.component */ "./src/app/dashboard/component/table/table.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/api.service */ "./src/app/services/api.service.ts");








// Material UI




var routes = [
    { path: 'dashboard', component: _pages_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"] },
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
                _component_table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ],
            providers: [
                _services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/pages/landing.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dashboard/pages/landing.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wYWdlcy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/pages/landing.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/pages/landing.component.ts ***!
  \******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _app_models_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/models/items */ "./src/app/models/items.ts");




var LandingComponent = /** @class */ (function () {
    function LandingComponent(apiService) {
        this.apiService = apiService;
        this.items = [];
        this.displayedColumns = ['image', 'title', 'type', 'author', 'publisher'];
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getData().subscribe(function (res) {
            var temp = [];
            res.forEach(function (item) {
                temp.push(_app_models_items__WEBPACK_IMPORTED_MODULE_3__["DataSourceItem"].create(item));
            });
            _this.items = temp;
        });
    };
    LandingComponent.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/pages/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/dashboard/pages/landing.component.scss")]
        })
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/directive/directive.module.ts":
/*!***********************************************!*\
  !*** ./src/app/directive/directive.module.ts ***!
  \***********************************************/
/*! exports provided: DirectiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveModule", function() { return DirectiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _highlight_text_highlight_text_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight-text/highlight-text.directive */ "./src/app/directive/highlight-text/highlight-text.directive.ts");
/* harmony import */ var _heading_text_heading_text_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heading-text/heading-text.directive */ "./src/app/directive/heading-text/heading-text.directive.ts");
/* harmony import */ var _heading_wrapper_heading_wrapper_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heading-wrapper/heading-wrapper.directive */ "./src/app/directive/heading-wrapper/heading-wrapper.directive.ts");






var DirectiveModule = /** @class */ (function () {
    function DirectiveModule() {
    }
    DirectiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _highlight_text_highlight_text_directive__WEBPACK_IMPORTED_MODULE_3__["HighlightTextDirective"],
                _heading_text_heading_text_directive__WEBPACK_IMPORTED_MODULE_4__["HeadingTextDirective"],
                _heading_wrapper_heading_wrapper_directive__WEBPACK_IMPORTED_MODULE_5__["HeadingWrapperDirective"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _highlight_text_highlight_text_directive__WEBPACK_IMPORTED_MODULE_3__["HighlightTextDirective"],
                _heading_text_heading_text_directive__WEBPACK_IMPORTED_MODULE_4__["HeadingTextDirective"],
                _heading_wrapper_heading_wrapper_directive__WEBPACK_IMPORTED_MODULE_5__["HeadingWrapperDirective"],
            ]
        })
    ], DirectiveModule);
    return DirectiveModule;
}());



/***/ }),

/***/ "./src/app/directive/heading-text/heading-text.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/directive/heading-text/heading-text.directive.ts ***!
  \******************************************************************/
/*! exports provided: HeadingTextDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingTextDirective", function() { return HeadingTextDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeadingTextDirective = /** @class */ (function () {
    function HeadingTextDirective(el) {
        this.el = el;
        el.nativeElement.style.fontSize = "3rem";
        el.nativeElement.style.fontWeight = "700";
        el.nativeElement.style.textTransform = "uppercase";
        el.nativeElement.style.margin = "0px";
        el.nativeElement.className = "heading heading-text";
    }
    HeadingTextDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    HeadingTextDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[app-heading-text]'
        })
    ], HeadingTextDirective);
    return HeadingTextDirective;
}());



/***/ }),

/***/ "./src/app/directive/heading-wrapper/heading-wrapper.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/directive/heading-wrapper/heading-wrapper.directive.ts ***!
  \************************************************************************/
/*! exports provided: HeadingWrapperDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingWrapperDirective", function() { return HeadingWrapperDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeadingWrapperDirective = /** @class */ (function () {
    function HeadingWrapperDirective(el) {
        this.el = el;
        var h1 = el.nativeElement.children.item(0);
        var p = el.nativeElement.children.item(1);
        setTimeout(function () {
            h1 = el.nativeElement.children.item(0);
            p = el.nativeElement.children.item(1);
            h1.style.color = "#212121";
            h1.style.textTransform = "uppercase";
            h1.style.fontSize = "3.5rem";
            p.style.color = "#424242";
            p.style.fontStyle = "italic";
            p.style.fontSize = "1.5rem";
        }, 300);
    }
    HeadingWrapperDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    HeadingWrapperDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[app-heading-wrapper]'
        })
    ], HeadingWrapperDirective);
    return HeadingWrapperDirective;
}());



/***/ }),

/***/ "./src/app/directive/highlight-text/highlight-text.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/directive/highlight-text/highlight-text.directive.ts ***!
  \**********************************************************************/
/*! exports provided: HighlightTextDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightTextDirective", function() { return HighlightTextDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighlightTextDirective = /** @class */ (function () {
    function HighlightTextDirective(el) {
        this.el = el;
        el.nativeElement.style.backgroundColor = "green";
        el.nativeElement.style.fontSize = "2rem";
    }
    HighlightTextDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    HighlightTextDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[highlight-text]'
        })
    ], HighlightTextDirective);
    return HighlightTextDirective;
}());



/***/ }),

/***/ "./src/app/directives-page/directives-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/directives-page/directives-page.module.ts ***!
  \***********************************************************/
/*! exports provided: DirectivesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesPageModule", function() { return DirectivesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/page.component */ "./src/app/directives-page/page/page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _directive_directive_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directive/directive.module */ "./src/app/directive/directive.module.ts");







var routes = [
    { path: 'directives', component: _page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"] },
];
var DirectivesPageModule = /** @class */ (function () {
    function DirectivesPageModule() {
    }
    DirectivesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _directive_directive_module__WEBPACK_IMPORTED_MODULE_6__["DirectiveModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], DirectivesPageModule);
    return DirectivesPageModule;
}());



/***/ }),

/***/ "./src/app/directives-page/page/page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/directives-page/page/page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpcmVjdGl2ZXMtcGFnZS9wYWdlL3BhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/directives-page/page/page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/directives-page/page/page.component.ts ***!
  \********************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageComponent = /** @class */ (function () {
    function PageComponent() {
        var _this = this;
        this.showDirective = false;
        this.toggleDirectiveDisplay = function () {
            console.log('toggle');
            _this.showDirective = !_this.showDirective;
        };
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! raw-loader!./page.component.html */ "./node_modules/raw-loader/index.js!./src/app/directives-page/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.scss */ "./src/app/directives-page/page/page.component.scss")]
        })
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/landing-page/landing-page.module.ts ***!
  \*****************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/page.component */ "./src/app/landing-page/page/page.component.ts");




// Material UI Component

// Components

var routes = [
    { path: '', component: _page_page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"] }
];
var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_page_page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
            ],
            exports: [
                _page_page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());



/***/ }),

/***/ "./src/app/landing-page/page/page.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/landing-page/page/page.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-page-wrapper {\n  width: 100%;\n  height: 100vh;\n  background-color: gray;\n  position: relative;\n}\n.landing-page-wrapper .landing-page-background-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.landing-page-content-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.landing-page-content-container {\n  text-align: center;\n}\n.landing-page-content-container p {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9GbGFncyBCb2lzL0RvY3VtZW50cy9wcm9qZWN0cy9wZXJ4L3Jlc2VhcmNoL2FuZ3VsYXItaW50ZXJ2aWV3L3NyYy9hcHAvbGFuZGluZy1wYWdlL3BhZ2UvcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy1wYWdlL3BhZ2UvcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDRUo7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvcGFnZS9wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmctcGFnZS13cmFwcGVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLmxhbmRpbmctcGFnZS1iYWNrZ3JvdW5kLWltYWdle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubGFuZGluZy1wYWdlLWNvbnRlbnQtd3JhcHBlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubGFuZGluZy1wYWdlLWNvbnRlbnQtY29udGFpbmVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufSIsIi5sYW5kaW5nLXBhZ2Utd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubGFuZGluZy1wYWdlLXdyYXBwZXIgLmxhbmRpbmctcGFnZS1iYWNrZ3JvdW5kLWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5sYW5kaW5nLXBhZ2UtY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxhbmRpbmctcGFnZS1jb250ZW50LWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sYW5kaW5nLXBhZ2UtY29udGVudC1jb250YWluZXIgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/landing-page/page/page.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/landing-page/page/page.component.ts ***!
  \*****************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! raw-loader!./page.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.scss */ "./src/app/landing-page/page/page.component.scss")]
        })
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/models/items.ts":
/*!*********************************!*\
  !*** ./src/app/models/items.ts ***!
  \*********************************/
/*! exports provided: DataSourceItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceItem", function() { return DataSourceItem; });
var DataSourceItem = /** @class */ (function () {
    function DataSourceItem() {
    }
    DataSourceItem.create = function (item) {
        return {
            id: item.id,
            title: item.attributes.content,
            link: item.links.self,
            type: item.attributes.display_properties.type,
            image: item.attributes.display_properties.image,
            author: item.relationships.authors.links,
            publisher: item.relationships.publishers.links
        };
    };
    return DataSourceItem;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.endpointURL = 'https://raw.githubusercontent.com/PerxTech/angular-interview/master/example.json';
    }
    ApiService.prototype.getData = function () {
        return this.http.get(this.endpointURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (model) { return model.data; }));
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/navigation-bar/navigation-bar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/navigation-bar/navigation-bar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 a {\n  color: white;\n  text-decoration: none;\n}\n\n.example-fill-remaining-space {\n  flex: 1 1 auto;\n}\n\nbutton {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9GbGFncyBCb2lzL0RvY3VtZW50cy9wcm9qZWN0cy9wZXJ4L3Jlc2VhcmNoL2FuZ3VsYXItaW50ZXJ2aWV3L3NyYy9hcHAvc2hhcmVkL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSBhe1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iLCJoMSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/navigation-bar/navigation-bar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/navigation-bar/navigation-bar.component.ts ***!
  \*******************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent() {
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
    };
    NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation-bar',
            template: __webpack_require__(/*! raw-loader!./navigation-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.scss */ "./src/app/shared/navigation-bar/navigation-bar.component.scss")]
        })
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation-bar/navigation-bar.component */ "./src/app/shared/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");




// Components

// Material UI




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavigationBarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            exports: [
                _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavigationBarComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/Flags Bois/Documents/projects/perx/research/angular-interview/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
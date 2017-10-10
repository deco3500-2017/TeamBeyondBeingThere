webpackJsonp([3],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseServiceProvider = (function () {
    function FirebaseServiceProvider(afd) {
        this.afd = afd;
        console.log('Hello FirebaseServiceProvider Provider');
    }
    FirebaseServiceProvider.prototype.getEvents = function () {
        console.log(this.afd.list('/events/'));
        return this.afd.list('/events/');
    };
    FirebaseServiceProvider.prototype.getBookmarks = function () {
        console.log(this.afd.list('/bookmarks/'));
        return this.afd.list('/events/');
    };
    FirebaseServiceProvider.prototype.getTickets = function () {
        console.log(this.afd.list('/tickets/'));
        return this.afd.list('/events/');
    };
    FirebaseServiceProvider.prototype.addEvent = function (event) {
        this.afd.list('/events/').push(event);
    };
    FirebaseServiceProvider.prototype.removeEvent = function (id) {
        this.afd.list('/events/').remove(id);
    };
    return FirebaseServiceProvider;
}());
FirebaseServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], FirebaseServiceProvider);

//# sourceMappingURL=firebase-service.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_event__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__club_club__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__event_event__["a" /* EventPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__club_club__["a" /* ClubPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="ios-home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Event" tabIcon="ios-list"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Club" tabIcon="ios-star"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="ios-contact"></ion-tab>\n</ion-tabs>\n\n\n'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ClubDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClubDetailPage = (function () {
    function ClubDetailPage(navCtrl, navParams, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
        this.event = {
            name: null,
            fee: null,
            description: null,
            location: null,
            email: null,
            startDate: null,
            startTime: null,
            endDate: null,
            endTime: null,
            tag: null,
        };
        this.events = this.firebaseService.getEvents();
    }
    ClubDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClubDetailPage');
    };
    ClubDetailPage.prototype.addEvent = function (event) {
        this.firebaseService.addEvent(this.event);
    };
    ClubDetailPage.prototype.removeEvent = function (id) {
        this.firebaseService.removeEvent(id);
    };
    return ClubDetailPage;
}());
ClubDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-club-detail',template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/club/club-detail/club-detail.html"*/'<!--\n  Generated template for the ClubDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>clubDetail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n<ion-list>\n	<ion-item>\n		<ion-label>Event name</ion-label>\n			<ion-input type="text" [(ngModel)]="event.name" placeholder="Event Name" required>Event Name</ion-input>\n	</ion-item>\n	<ion-item>\n		<ion-label>Event Fee</ion-label>\n		<ion-input type="number" placeholder="Event Fee"></ion-input>\n	</ion-item>\n	<ion-item>\n		<ion-label>Event Description</ion-label>\n		<ion-textarea type="text" [(ngModel)]="event.description" placeholder="Event Description"></ion-textarea>\n	</ion-item>\n	<ion-item>\n		<ion-input type="text" [(ngModel)]="event.location" placeholder="Event Location"></ion-input>\n	</ion-item>\n	<ion-item>\n		<ion-input type="email" [(ngModel)]="event.contactEmail" placeholder="Contact Email"></ion-input>\n	</ion-item>\n	<ion-item>\n      	<ion-label>Event Start Date</ion-label>\n      	<ion-datetime displayFormat="MMM DD, YYYY" min="2017" max="2020" [(ngModel)]="event.startDate"></ion-datetime> \n	</ion-item>\n\n	<ion-item>\n		<ion-label>Event Start Time</ion-label>\n      	<ion-datetime displayFormat="hh:mm A" [(ngModel)]="event.startTime"></ion-datetime>\n	</ion-item>\n\n	<ion-item>\n      	<ion-label>Event End Date</ion-label>\n      	<ion-datetime displayFormat="MMM DD, YYYY" min="2017" max="2020" [(ngModel)]="event.endDate"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      	<ion-label>Event End Time</ion-label>\n      	<ion-datetime displayFormat="hh:mm A" [(ngModel)]="event.endTime"></ion-datetime>\n    </ion-item>\n	<ion-item>\n	    <ion-label>Tags</ion-label>\n	    <ion-select [(ngModel)]="tags" multiple="true" cancelText="Cancel" okText="Okay!" slide="false">\n	      <ion-option value="sports" >sports</ion-option>\n	      <ion-option value="academic">academic</ion-option>\n	      <ion-option value="musical" >musical</ion-option>\n	    </ion-select>\n  	</ion-item>\n</ion-list>\n\n\n\n<ion-list>\n	<ion-item-sliding *ngFor="let event of events | async">\n  		<ion-item>\n  			{{event.name}}\n  		</ion-item>\n  		<ion-item-options side="right">\n  			<button ion-button color="danger" icon-only (click)=\'removeEvent(event.$key)\'>\n  				<ion-icon name="trash"></ion-icon>\n  			</button>\n  		</ion-item-options>\n	</ion-item-sliding>\n</ion-list>\n\n<button ion-button full (click)=\'addEvent()\'> create new event</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/club/club-detail/club-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
], ClubDetailPage);

//# sourceMappingURL=club-detail.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/club/club-detail/club-detail.module": [
		461,
		2
	],
	"../pages/entry/entry.module": [
		462,
		1
	],
	"../pages/register/register.module": [
		463,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 203;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_eventTabs_eventTabs__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventPage = (function () {
    function EventPage(navCtrl, fire) {
        this.navCtrl = navCtrl;
        this.fire = fire;
        this.rootEventPage = __WEBPACK_IMPORTED_MODULE_3__tabs_eventTabs_eventTabs__["a" /* EventTabsPage */];
    }
    return EventPage;
}());
EventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/event/event.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-title text-center class="titlebc">\n        <p class="titletext">Event page</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-nav [root]="rootEventPage"></ion-nav>\n\n\n</ion-content>\n  \n\n'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/event/event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], EventPage);

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_myEvents_myEvents__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_allEvents_allEvents__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventTabsPage = (function () {
    function EventTabsPage() {
        this.allEventsRoot = __WEBPACK_IMPORTED_MODULE_2__event_allEvents_allEvents__["a" /* AllEventsPage */];
        this.myEventsRoot = __WEBPACK_IMPORTED_MODULE_1__event_myEvents_myEvents__["a" /* MyEventsPage */];
    }
    return EventTabsPage;
}());
EventTabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/tabs/eventTabs/eventTabs.html"*/'<!DOCTYPE html>\n<html>\n<head>\n	<meta charset="utf-8">\n</head>\n<body>\n	<div class="ion-tabs">\n		<ion-tabs tabsPlacement="top" color="title">\n		<ion-tab [root]="allEventsRoot"tabTitle="All Events"></ion-tab>\n		<ion-tab [root]="myEventsRoot" tabTitle="My Events"></ion-tab>\n		</ion-tabs>\n	</div>\n</body>\n'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/tabs/eventTabs/eventTabs.html"*/,
        selector: 'page-about',
    }),
    __metadata("design:paramtypes", [])
], EventTabsPage);

//# sourceMappingURL=eventTabs.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyEventsPage = (function () {
    function MyEventsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return MyEventsPage;
}());
MyEventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/event/myEvents/myEvents.html"*/'<ion-content>\n    hello\n \n   \n\n</ion-content>\n'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/event/myEvents/myEvents.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], MyEventsPage);

//# sourceMappingURL=myEvents.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventdetail_eventdetail__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllEventsPage = (function () {
    function AllEventsPage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
    }
    AllEventsPage.prototype.gotoEventDetail = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__eventdetail_eventdetail__["a" /* EventDetailPage */]);
    };
    return AllEventsPage;
}());
AllEventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/event/allEvents/allEvents.html"*/'<ion-content class="card-background-page">\n    \n<ion-card>\n      <img  (click)=\'gotoEventDetail()\' src="img/2.jpg"/>\n    \n      <ion-card-content>   \n         \n          <div class="price-background"></div>\n          <div class="event-price" >$ 20</div>\n        <ion-card-title >\n          Welcome BBQ 2017\n          </ion-card-title>\n          <div class="card-subtitle"># Food & Drinks</div>\n          \n        <ion-list>\n          <div ion-item class="first-list">\n            <ion-icon name="pin" item-start></ion-icon>\n              <p class="list-p">Royal Hortucultural Halls,No.78</p>\n              <p item-end>150m</p>\n            </div>\n            <ion-item>\n                <ion-icon name="bookmark" item-start></ion-icon>\n                <p>19/100 attending</p>\n                <ion-avatar item-end >\n                    <img src="img/picon1.jpeg">\n                </ion-avatar>\n                <ion-avatar item-end >\n                    <img src="img/picon2.jpg">\n                </ion-avatar>\n            </ion-item>\n        </ion-list>\n          \n      </ion-card-content>\n  </ion-card>\n    \n    <ion-card>\n      <img  src="img/1.png"/>\n    \n      <ion-card-content>    \n          <div class="price-background"></div>\n          <div class="event-price" >$ 30</div>\n        <ion-card-title >\n          Welcome BBQ 2017\n          </ion-card-title>\n          <div class="card-subtitle"># Food & Drinks</div>\n          \n        <ion-list>\n          <div ion-item class="first-list">\n            <ion-icon name="pin" item-start></ion-icon>\n              <p class="list-p">Royal Hortucultural Halls,No.78</p>\n              <p item-end>150m</p>\n            </div>\n            <ion-item>\n                <ion-icon name="bookmark" item-start></ion-icon>\n                <p>19/100 attending</p>\n                <ion-avatar item-end >\n                    <img src="img/picon2.jpg">\n                </ion-avatar>\n                <ion-avatar item-end >\n                    <img src="img/picon3.jpg">\n                </ion-avatar>\n            </ion-item>\n        </ion-list>\n          \n      </ion-card-content>\n  </ion-card>\n    \n    <ion-card>\n      <img  src="img/2.jpg"/>\n    \n      <ion-card-content>    \n          <div class="price-background"></div>\n          <div class="event-price" >$ 20</div>\n        <ion-card-title >\n          Welcome BBQ 2017\n          </ion-card-title>\n          <div class="card-subtitle"># Food & Drinks</div>\n          \n        <ion-list>\n          <div ion-item class="first-list">\n            <ion-icon name="pin" item-start></ion-icon>\n              <p class="list-p">Royal Hortucultural Halls,No.78</p>\n              <p item-end>150m</p>\n            </div>\n            <ion-item>\n                <ion-icon name="bookmark" item-start></ion-icon>\n                <p>19/100 attending</p>\n                <ion-avatar item-end >\n                    <img src="img/picon3.jpg">\n                </ion-avatar>\n                <ion-avatar item-end >\n                    <img src="img/1.png">\n                </ion-avatar>\n            </ion-item>\n        </ion-list>\n          \n      </ion-card-content>\n  </ion-card>\n    \n    <ion-card>\n      <img  src="img/1.png"/>\n    \n      <ion-card-content>    \n          <div class="price-background"></div>\n          <div class="event-price" >$ 20</div>\n        <ion-card-title >\n          Welcome BBQ 2017\n          </ion-card-title>\n          <div class="card-subtitle"># Food & Drinks</div>\n          \n        <ion-list>\n          <div ion-item class="first-list">\n            <ion-icon name="pin" item-start></ion-icon>\n              <p class="list-p">Royal Hortucultural Halls,No.78</p>\n              <p item-end>150m</p>\n            </div>\n            <ion-item>\n                <ion-icon name="bookmark" item-start></ion-icon>\n                <p>19/100 attending</p>\n                <ion-avatar item-end >\n                    <img src="img/1.png">\n                </ion-avatar>\n                <ion-avatar item-end >\n                    <img src="img/picon3.jpg">\n                </ion-avatar>\n            </ion-item>\n        </ion-list>\n          \n      </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/event/allEvents/allEvents.html"*/,
        selector: 'page-about',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], AllEventsPage);

//# sourceMappingURL=allEvents.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventDetailPage = (function () {
    function EventDetailPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "img/1.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "img/2.jpg",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "img/picon3.jpg",
            }
        ];
    }
    return EventDetailPage;
}());
EventDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event-detail',template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/event/eventdetail/eventdetail.html"*/'<!--\n  Generated template for the eventDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    \n      <ion-toolbar>\n          <ion-title text-center>BBQ</ion-title>\n        <ion-buttons class="shareicon" end>\n            <ion-icon ios="ios-share" md="md-share" color="light"></ion-icon>\n        </ion-buttons>\n          <ion-buttons class="shareicon" end>\n            <ion-icon ios="ios-bookmark" md="md-bookmark" color="light"></ion-icon>\n        </ion-buttons>\n      </ion-toolbar>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="eventdetail">\n\n  <ion-slides class="slides" pager>\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.image" class="slide-image"/>\n<!--\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n-->\n    </ion-slide>\n    <ion-slide>\n      <img src="img/1.png" class="slide-image"/>\n<!--\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button large clear icon-end color="primary">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n-->\n    </ion-slide>\n  </ion-slides>\n    <p class="titlep">Sustainable Fashion Drinks</p>\n    <p class="timep">WED, 26 OCT, 18:00 PM until 21:00 PM BST</p>\n    <p class="eventtags">#Food &nbsp; #Outdoor</p>\n</ion-content>\n\n'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/event/eventdetail/eventdetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], EventDetailPage);

//# sourceMappingURL=eventdetail.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Dont delete this!!!

//,public firebaseService:FirebaseServiceProvider

var ProfilePage = (function () {
    function ProfilePage(fire, navCtrl, alertCtrl, firebaseService) {
        /*
        if(fire.auth.currentUser.email.length==0){
          this.facebook.loggedIn=false;
        }else{
          
          this.facebook.email=fire.auth.currentUser.email;
          this.facebook.loggedIn=true;
          this.facebook.name=fire.auth.currentUser.displayName;
          this.facebook.profilePicture=fire.auth.currentUser.photoURL;
        }
        */
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.firebaseService = firebaseService;
        this.facebook = {
            loggedIn: false,
            name: "anonymous",
            email: "",
            profilePicture: "",
        };
    }
    ProfilePage.prototype.loginWithFacebook = function () {
        var _this = this;
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].FacebookAuthProvider())
            .then(function (res) {
            console.log(res);
            _this.alert('You have logged in');
            _this.facebook.loggedIn = true;
            _this.facebook.name = res.user.displayName;
            _this.facebook.email = res.user.email;
            _this.facebook.profilePicture = res.user.photoURL;
            _this.events = _this.firebaseService.getEvents();
            _this.tickets = _this.firebaseService.getTickets();
            _this.bookmarks = _this.firebaseService.getBookmarks();
        })
            .catch(function (error) {
            console.log(error);
            _this.alert(error.message);
        });
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.fire.auth.signOut()
            .then(function (res) {
            console.log(res);
            _this.alert('You have logged out');
            _this.facebook.loggedIn = false;
            _this.facebook.name = "anonymous";
            _this.facebook.email = null;
            _this.facebook.profilePicture = null;
        })
            .catch(function (error) {
            console.log(error);
            _this.alert(error.message);
            _this.facebook.loggedIn = true;
        });
    };
    ProfilePage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK'],
        }).present();
    };
    ProfilePage.prototype.dosomething = function () {
        console.log("worked");
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/profile/profile.html"*/'<expandable-header [scrollArea]="content">\n\n</expandable-header>\n\n<ion-header #head>\n	<div class="basicinfo">\n		<div class="userinfo">\n			<div id=\'userimgContainer\'>\n	      		<img src="{{facebook.profilePicture}}" />	\n	      	</div>\n			<div id=\'usernameContainer\'>\n		    	<p id=\'username\'>{{facebook.name}}</p>\n		    </div>\n		    <div id=\'useremailContainer\'>\n		   		<p id=\'useremail\'>{{facebook.email}}</p>\n		    </div>\n	    </div>\n	\n		<div class="topButton">	  \n				<button ion-button color="dark" full (click)=\'loginWithFacebook()\' *ngIf=\'!facebook.loggedIn\'>\n				  	<ion-icon name="logo-facebook"></ion-icon>Log in\n				</button>\n				<button ion-button color="dark" full (click)=\'logout()\' *ngIf=\'facebook.loggedIn\'>\n					<ion-icon name="log-facebook"></ion-icon>Log out					\n				</button>\n		</div>\n	\n		<div class="followInfoContent">\n			<div class = "row" id="row1">\n		   		<div class = "col">\n		   			<p class= "colContent">2.5k</p>\n		   			<p class="colTitle">Follwer</p>			   			\n			   	</div>\n			   	<div class = "col">\n					<p class= "colContent">5</p>\n		   			<p class="colTitle">Following</p>		   			\n			   	</div>\n				<div class = "col">\n			   			<p class= "colContent">3</p>\n			   			<p class="colTitle">Club</p>\n				</div>\n				<div class = "col">\n				   	<p class= "colContent">4</p>\n					<p class="colTitle">Event</p>	   			\n				</div>\n			</div>\n			<div class="tagContent">\n				<ion-slides direction="horizontal">\n				    <ion-slide class="horizontalSlide">\n				  		<div id="slideRow" class="row">\n					    	<div id="slideCol" class="col">\n					    		#Fashion\n					    	</div>	 \n					    	<div id="slideCol" class="col">\n					    		#Party\n					    	</div>\n\n					    	<div id="slideCol" class="col">\n					    		#Outgoing\n					    	</div>\n						</div> \n				    </ion-slide>\n				    <ion-slide class="horizontalSlide">\n				  		<div id="slideRow" class="row">\n				    	<div id="slideCol" class="col">\n				    		#Haha\n				    	</div>	 \n				    	<div id="slideCol" class="col">\n				    		#UQ Student\n				    	</div>\n				    	<div id="slideCol" class="col">\n				    		#Friendly\n				    	</div>\n						</div>    \n				    </ion-slide>\n				</ion-slides>\n			</div>\n		</div>\n	</div>\n</ion-header>\n\n<ion-content fullscreen #content hide-header [header]="head">\n	<div class="profileSubTabs">\n	    <ion-segment  [(ngModel)]="segments" color="dark">\n	      <ion-segment-button value="events">\n	        EVENTS\n	      </ion-segment-button>\n	      <ion-segment-button value="tickets">\n	        TICKETS\n	      </ion-segment-button>\n	      <ion-segment-button value="bookmarks">\n	        BOOKMARKS\n	      </ion-segment-button>\n	    </ion-segment>\n					<div class="subTabContent" [ngSwitch]="segments" >\n						\n						<div *ngSwitchCase="\'events\'">\n						<ion-list id="test">\n							<ion-item>haha</ion-item>\n							<ion-item>haha</ion-item>\n							<ion-item>haha</ion-item>\n							<ion-item>haha</ion-item>\n							<ion-item>haha</ion-item>\n							<ion-item>haha</ion-item>\n							<ion-item>haha</ion-item>\n							<ion-item>haha</ion-item>\n							<ion-item>haha</ion-item>\n							<ion-item>haha</ion-item>\n							<ion-item>haha</ion-item>\n							<ion-item>haha</ion-item>\n						</ion-list>\n						\n						</div>\n					\n\n\n						<div *ngSwitchCase="\'tickets\'">\n						<ion-slides id="verticalSlide" pager="false" direction="vertical" >\n							<ion-slide>\n				  			<ion-list  style="margin:0">\n				  			<ion-item (click)="dosomething()" *ngFor="let sItem2 of tickets | async">\n				    		\n				    		<ion-thumbnail item-start>\n				      			<img src="img/2.jpg">\n				    		</ion-thumbnail>\n				    			<h2>{{sItem2.name}}</h2>\n								<p>The event info</p>\n				  			</ion-item>\n				  			</ion-list>\n				  			</ion-slide>\n						</ion-slides>\n						</div>\n\n\n						<div *ngSwitchCase="\'bookmarks\'">\n						<ion-slides id="verticalSlide" pager="false" direction="vertical" >\n							<ion-slide>\n				  			<ion-list  style="margin:0">\n				  			<ion-item (click)="dosomething()" *ngFor="let sItem3 of bookmarks | async">\n				    		\n				    		<ion-thumbnail item-start>\n				      			<img src="img/2.jpg">\n				    		</ion-thumbnail>\n				    			<h2>{{sItem3.name}}</h2>\n								<p>The event info</p>\n				  			</ion-item>\n				  			</ion-list>\n				  			</ion-slide>\n						</ion-slides>\n						</div>\n					</div>\n			</div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/profile/profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_clubTabs_clubTabs__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClubPage = (function () {
    function ClubPage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.rootClubPage = __WEBPACK_IMPORTED_MODULE_2__tabs_clubTabs_clubTabs__["a" /* ClubTabsPage */];
    }
    return ClubPage;
}());
ClubPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/club/club.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Club\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-nav [root]="rootClubPage"></ion-nav>\n</ion-content>'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/club/club.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], ClubPage);

//# sourceMappingURL=club.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__club_myClubs_myClubs__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__club_allClubs_allClubs__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClubTabsPage = (function () {
    function ClubTabsPage() {
        this.allClubRoot = __WEBPACK_IMPORTED_MODULE_2__club_allClubs_allClubs__["a" /* AllClubsPage */];
        this.myClubRoot = __WEBPACK_IMPORTED_MODULE_1__club_myClubs_myClubs__["a" /* MyClubsPage */];
    }
    return ClubTabsPage;
}());
ClubTabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/tabs/clubTabs/clubTabs.html"*/'<!DOCTYPE html>\n<html>\n<head>\n	<meta charset="utf-8">\n</head>\n<body>\n	<div class="ion-tabs">\n		<ion-tabs tabsPlacement="top" color="primary">\n		<ion-tab [root]="allClubRoot" tabTitle="All Club"></ion-tab>\n		<ion-tab [root]="myClubRoot" tabTitle="My Club"></ion-tab>\n		</ion-tabs>\n	</div>\n</body>\n'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/tabs/clubTabs/clubTabs.html"*/,
        selector: 'page-about',
    }),
    __metadata("design:paramtypes", [])
], ClubTabsPage);

//# sourceMappingURL=clubTabs.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyClubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyClubsPage = (function () {
    function MyClubsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return MyClubsPage;
}());
MyClubsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/club/myClubs/myClubs.html"*/'<ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/club/myClubs/myClubs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], MyClubsPage);

//# sourceMappingURL=myClubs.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllClubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__club_detail_club_detail__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllClubsPage = (function () {
    function AllClubsPage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
    }
    AllClubsPage.prototype.gotoClubDetail = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__club_detail_club_detail__["a" /* ClubDetailPage */]);
    };
    return AllClubsPage;
}());
AllClubsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/club/allClubs/allClubs.html"*/'<ion-content>\n<ion-list></ion-list>\n\n<button ion-button full (click)=\'gotoClubDetail()\'>go to detail page</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/club/allClubs/allClubs.html"*/,
        selector: 'page-about',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], AllClubsPage);

//# sourceMappingURL=allClubs.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ClubHub</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n   \n  <h2>hello</h2>\n \n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntryPage = (function () {
    function EntryPage(fire, navCtrl, alertCtrl) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.facebook = {
            loggedIn: false,
            name: null,
            email: null,
            profilePicture: null,
        };
    }
    EntryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EntryPage');
    };
    EntryPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK'],
        }).present();
    };
    EntryPage.prototype.loginWithFacebook = function () {
        var _this = this;
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.FacebookAuthProvider())
            .then(function (res) {
            console.log(res);
            //go to tab page if the user signed in
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            _this.facebook.loggedIn = true;
            _this.facebook.name = res.user.displayName;
            _this.facebook.email = res.user.email;
            _this.facebook.profilePicture = res.user.photoURL;
        })
            .catch(function (error) {
            console.log(error);
            _this.alert(error.message);
        });
    };
    return EntryPage;
}());
EntryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-entry',template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/entry/entry.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>UQ ClubHub</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-bounce padding class=\'view\'>\n	<div id=\'imageContainer\'>\n	<img src="../../assets/icon/clubHub.png" height="100px" width="100px" />\n	</div>\n<ion-footer>\n	<div id="container">\n		<p id=\'line1\' >Have a great time!</p>\n	</div>\n\n	<div id=\'bottomButton\'>	\n	  	<button ion-button full color=\'primary\'(click)=\'loginWithFacebook()\'>\n	  	  Sign in with facebook\n	  	</button> \n	</div>\n</ion-footer>		\n\n	\n</ion-content>\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/pages/entry/entry.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EntryPage);

//# sourceMappingURL=entry.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(326);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_entry_entry__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_event_event__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_club_club__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_club_myClubs_myClubs__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_club_allClubs_allClubs__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_clubTabs_clubTabs__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_club_club_detail_club_detail__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_event_allEvents_allEvents__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_eventTabs_eventTabs__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_event_myEvents_myEvents__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_event_eventdetail_eventdetail__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_expandable_header_expandable_header__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_hide_header_hide_header__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_firebase_service_firebase_service__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var firebaseAuth = {
    apiKey: "AIzaSyCkJh51QufXF7wEfpuR1_L6g5yUyGBFWew",
    authDomain: "uq-clubhub.firebaseapp.com",
    databaseURL: "https://uq-clubhub.firebaseio.com",
    projectId: "uq-clubhub",
    storageBucket: "uq-clubhub.appspot.com",
    messagingSenderId: "626079250531"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_event_event__["a" /* EventPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_club_club__["a" /* ClubPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_club_myClubs_myClubs__["a" /* MyClubsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_club_allClubs_allClubs__["a" /* AllClubsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_clubTabs_clubTabs__["a" /* ClubTabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_club_club_detail_club_detail__["a" /* ClubDetailPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_entry_entry__["a" /* EntryPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_event_allEvents_allEvents__["a" /* AllEventsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_eventTabs_eventTabs__["a" /* EventTabsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_event_myEvents_myEvents__["a" /* MyEventsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_event_eventdetail_eventdetail__["a" /* EventDetailPage */],
            __WEBPACK_IMPORTED_MODULE_18__components_expandable_header_expandable_header__["a" /* ExpandableHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_19__directives_hide_header_hide_header__["a" /* HideHeaderDirective */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/club/club-detail/club-detail.module#ClubDetailPageModule', name: 'ClubDetailPage', segment: 'club-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/entry/entry.module#EntryPageModule', name: 'EntryPage', segment: 'entry', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_23_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
            __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_25_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_event_event__["a" /* EventPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_club_club__["a" /* ClubPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_club_myClubs_myClubs__["a" /* MyClubsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_club_allClubs_allClubs__["a" /* AllClubsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_clubTabs_clubTabs__["a" /* ClubTabsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_entry_entry__["a" /* EntryPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_club_club_detail_club_detail__["a" /* ClubDetailPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_eventTabs_eventTabs__["a" /* EventTabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_event_allEvents_allEvents__["a" /* AllEventsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_event_myEvents_myEvents__["a" /* MyEventsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_event_eventdetail_eventdetail__["a" /* EventDetailPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_26__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ExpandableHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ExpandableHeaderComponent = (function () {
    function ExpandableHeaderComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        console.log('Hello ExpandableHeaderComponent Component');
        this.headerHeight = 150;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
    }
    ExpandableHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("scrolled");
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    ExpandableHeaderComponent.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            console.log(ev.scrollTop);
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            else {
                _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
            }
        });
    };
    return ExpandableHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('scrollArea'),
    __metadata("design:type", Object)
], ExpandableHeaderComponent.prototype, "scrollArea", void 0);
ExpandableHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'expandable-header',template:/*ion-inline-start:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/components/expandable-header/expandable-header.html"*/'<!-- Generated template for the ExpandableHeaderComponent component -->\n<div>\n  \n</div>\n'/*ion-inline-end:"/Users/Danson/TeamBeyondBeingThere/ClubHub/src/components/expandable-header/expandable-header.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
], ExpandableHeaderComponent);

//# sourceMappingURL=expandable-header.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HideHeaderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the HideHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var HideHeaderDirective = (function () {
    function HideHeaderDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        console.log('Hello HideHeaderDirective Directive');
    }
    HideHeaderDirective.prototype.ngOnInit = function () {
        this.headerHeight = this.header.clientHeight;
        this.renderer.setElementStyle(this.header, 'webkitTransition', 'top 700ms');
        this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
    };
    HideHeaderDirective.prototype.onContentScroll = function (event) {
        if (event.scrollTop > 100) {
            this.renderer.setElementStyle(this.header, "top", "-375px");
            //this.renderer.setElementStyle(this.scrollContent,'margin-top','0px');
        }
        else {
            this.renderer.setElementStyle(this.header, "top", "0px");
            //this.renderer.setElementStyle(this.scrollContent,'margin-top','375px')
        }
    };
    return HideHeaderDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("header"),
    __metadata("design:type", HTMLElement)
], HideHeaderDirective.prototype, "header", void 0);
HideHeaderDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[hide-header]',
        host: {
            '(ionScroll)': 'onContentScroll($event)',
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
], HideHeaderDirective);

//# sourceMappingURL=hide-header.js.map

/***/ })

},[309]);
//# sourceMappingURL=main.js.map
webpackJsonp([3],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(346);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__club_club__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(261);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="ios-home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Event" tabIcon="ios-list"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Club" tabIcon="ios-star"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="ios-contact"></ion-tab>\n\n</ion-tabs>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\tabs\tabs.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
        selector: 'page-club-detail',template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\club\club-detail\club-detail.html"*/'<!--\n\n  Generated template for the ClubDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>clubDetail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n<ion-list>\n\n	<ion-item>\n\n		<ion-label>Event name</ion-label>\n\n			<ion-input type="text" [(ngModel)]="event.name" placeholder="Event Name" required>Event Name</ion-input>\n\n	</ion-item>\n\n	<ion-item>\n\n		<ion-label>Event Fee</ion-label>\n\n		<ion-input type="number" placeholder="Event Fee"></ion-input>\n\n	</ion-item>\n\n	<ion-item>\n\n		<ion-label>Event Description</ion-label>\n\n		<ion-textarea type="text" [(ngModel)]="event.description" placeholder="Event Description"></ion-textarea>\n\n	</ion-item>\n\n	<ion-item>\n\n		<ion-input type="text" [(ngModel)]="event.location" placeholder="Event Location"></ion-input>\n\n	</ion-item>\n\n	<ion-item>\n\n		<ion-input type="email" [(ngModel)]="event.contactEmail" placeholder="Contact Email"></ion-input>\n\n	</ion-item>\n\n	<ion-item>\n\n      	<ion-label>Event Start Date</ion-label>\n\n      	<ion-datetime displayFormat="MMM DD, YYYY" min="2017" max="2020" [(ngModel)]="event.startDate"></ion-datetime> \n\n	</ion-item>\n\n\n\n	<ion-item>\n\n		<ion-label>Event Start Time</ion-label>\n\n      	<ion-datetime displayFormat="hh:mm A" [(ngModel)]="event.startTime"></ion-datetime>\n\n	</ion-item>\n\n\n\n	<ion-item>\n\n      	<ion-label>Event End Date</ion-label>\n\n      	<ion-datetime displayFormat="MMM DD, YYYY" min="2017" max="2020" [(ngModel)]="event.endDate"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      	<ion-label>Event End Time</ion-label>\n\n      	<ion-datetime displayFormat="hh:mm A" [(ngModel)]="event.endTime"></ion-datetime>\n\n    </ion-item>\n\n	<ion-item>\n\n	    <ion-label>Tags</ion-label>\n\n	    <ion-select [(ngModel)]="tags" multiple="true" cancelText="Cancel" okText="Okay!" slide="false">\n\n	      <ion-option value="sports" >sports</ion-option>\n\n	      <ion-option value="academic">academic</ion-option>\n\n	      <ion-option value="musical" >musical</ion-option>\n\n	    </ion-select>\n\n  	</ion-item>\n\n</ion-list>\n\n\n\n\n\n\n\n<ion-list>\n\n	<ion-item-sliding *ngFor="let event of events | async">\n\n  		<ion-item>\n\n  			{{event.name}}\n\n  		</ion-item>\n\n  		<ion-item-options side="right">\n\n  			<button ion-button color="danger" icon-only (click)=\'removeEvent(event.$key)\'>\n\n  				<ion-icon name="trash"></ion-icon>\n\n  			</button>\n\n  		</ion-item-options>\n\n	</ion-item-sliding>\n\n</ion-list>\n\n\n\n<button ion-button full (click)=\'addEvent()\'> create new event</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\club\club-detail\club-detail.html"*/,
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
		456,
		2
	],
	"../pages/entry/entry.module": [
		457,
		1
	],
	"../pages/register/register.module": [
		458,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventDetail_eventDetail__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(65);
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
    }
    EventPage.prototype.openPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__eventDetail_eventDetail__["a" /* EventDetailPage */]);
    };
    return EventPage;
}());
EventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\event\event.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-title>\n\n      Event page\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card (click)="openPage()">\n\n      <img class="event-image" src="img/2.jpg"/>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          Welcome BBQ 2017\n\n          </ion-card-title>\n\n        <p>\n\n          The most popular industrial group ever, and largely\n\n          responsible for bringing the music to a mass audience.\n\n        </p>\n\n      </ion-card-content>\n\n  </ion-card>\n\n    \n\n    <ion-card>\n\n      <img src="img/1.png"/>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          Welcome to UQ 2017\n\n          </ion-card-title>\n\n        <p>\n\n          The most popular industrial group ever, and largely\n\n          responsible for bringing the music to a mass audience.\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  \n\n<!--\n\n  <ion-card>\n\n    <img class="event-image" src="../assets/icon/favicon.ico"/>\n\n    <div class="card-title">Table Game</div>\n\n    <div class="card-subtitle">64 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img class="event-image" src="../assets/icon/favicon.ico"/>\n\n    <div class="card-title">OutDoor activity</div>\n\n    <div class="card-subtitle">72 Listings</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img class="event-image" src="../assets/icon/favicon.ico"/>\n\n    <div class="card-title">MarketDay</div>\n\n    <div class="card-subtitle">28 Listings</div>\n\n  </ion-card>\n\n-->\n\n\n\n</ion-content>\n\n  \n\n\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\event\event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
], EventPage);

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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



var EventDetailPage = (function () {
    function EventDetailPage(navCtrl, firebaseService) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
    }
    return EventDetailPage;
}());
EventDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\event\eventDetail\eventDetail.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>\n\n			BBQ\n\n		</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	this is the page that would contains all the info of a event\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\event\eventDetail\eventDetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
], EventDetailPage);

//# sourceMappingURL=eventDetail.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = (function () {
    function ProfilePage(fire, navCtrl, alertCtrl) {
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
        this.items = {
            'events': [
                {
                    name: "BBQ",
                    time: "tommorrow",
                },
                {
                    name: "Play",
                    time: "today",
                }
            ],
        };
        this.facebook = {
            loggedIn: false,
            name: "anonymous",
            email: "",
            profilePicture: "",
        };
    }
    ProfilePage.prototype.getEvent = function (typename) {
        return this.items[typename];
    };
    ProfilePage.prototype.loginWithFacebook = function () {
        var _this = this;
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth.FacebookAuthProvider())
            .then(function (res) {
            console.log(res);
            _this.alert('You have logged in');
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
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\profile\profile.html"*/'<ion-content >\n\n	<div class="basicinfo">\n\n		<div id=\'userimgContainer\' >\n\n      		<img src="{{facebook.profilePicture}}" />\n\n		</div>\n\n		<div id=\'usernameContainer\'>\n\n      		<p id=\'username\'>{{facebook.name}}</p>\n\n    	</div>\n\n    	<div id=\'useremailContainer\'>\n\n    		<p id=\'useremail\'>{{facebook.email}}</p>\n\n    	</div>\n\n	</div>\n\n\n\n	<div class="profileSubTabs">\n\n	    <ion-segment  [(ngModel)]="segments" color="dark">\n\n	      <ion-segment-button value="events">\n\n	        EVENTS\n\n	      </ion-segment-button>\n\n	      <ion-segment-button value="ticketes">\n\n	        TICKETS\n\n	      </ion-segment-button>\n\n	      <ion-segment-button value="bookmarks">\n\n	        BOOKMARK\n\n	      </ion-segment-button>\n\n	    </ion-segment>\n\n\n\n\n\n			\n\n<div class="subTabContent" [ngSwitch]="segments">\n\n\n\n		<ion-slides pager="false" direction="vertical" >\n\n		<ion-slide>\n\n  			<ion-list  style="margin:0">\n\n  			<ion-item (click)="dosomething()" *ngFor="let sItem of getEvent(segments)">\n\n    		<ion-thumbnail item-start>\n\n      			<img src="img/2.jpg">\n\n    		</ion-thumbnail>\n\n    		<h2>{{sItem.name}}</h2>\n\n				<p>The event info</p>\n\n  			</ion-item>\n\n  			</ion-list>\n\n  		</ion-slide>\n\n  		\n\n\n\n  		<ion-slide>\n\n  			<ion-list  style="margin:0">\n\n  			<ion-item (click)="dosomething()" *ngFor="let sItem of getEvent(segments)">\n\n    		<ion-thumbnail item-start>\n\n      			<img src="img/2.jpg">\n\n    		</ion-thumbnail>\n\n    		<h2>{{sItem.name}}</h2>\n\n				<p>The event info</p>\n\n  			</ion-item>\n\n  			</ion-list>\n\n  		</ion-slide>\n\n\n\n\n\n\n\n\n\n  		<ion-slide>\n\n  			<ion-list  style="margin:0">\n\n  			<ion-item (click)="dosomething()" *ngFor="let sItem of getEvent(segments)">\n\n    		<ion-thumbnail item-start>\n\n      			<img src="img/2.jpg">\n\n    		</ion-thumbnail>\n\n    		<h2>{{sItem.name}}</h2>\n\n				<p>The event info</p>\n\n  			</ion-item>\n\n  			</ion-list>\n\n  		</ion-slide>\n\n\n\n		</ion-slides>\n\n	</div>\n\n		\n\n	\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  	</div>\n\n	<ion-footer>  	\n\n		<div class="bottomButton">	  \n\n			<button ion-button full color="primary" \n\n	  		(click)=\'loginWithFacebook()\' *ngIf=\'!facebook.loggedIn\'>Sign in with facebook</button>\n\n	\n\n		  	<button ion-button full color="primary" \n\n		  	(click)=\'logout()\' *ngIf=\'facebook.loggedIn\'>Log out</button>\n\n		</div>\n\n	</ion-footer>\n\n\n\n	\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_clubTabs_clubTabs__ = __webpack_require__(258);
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
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\club\club.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Club\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-nav [root]="rootClubPage"></ion-nav>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\club\club.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], ClubPage);

//# sourceMappingURL=club.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__club_myClubs_myClubs__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__club_allClubs_allClubs__ = __webpack_require__(260);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\tabs\clubTabs\clubTabs.html"*/'<!DOCTYPE html>\n\n<html>\n\n<head>\n\n	<meta charset="utf-8">\n\n</head>\n\n<body>\n\n	<div class="ion-tabs">\n\n		<ion-tabs tabsPlacement="top" color="primary">\n\n		<ion-tab [root]="allClubRoot" tabTitle="All Club"></ion-tab>\n\n		<ion-tab [root]="myClubRoot" tabTitle="My Club"></ion-tab>\n\n		</ion-tabs>\n\n	</div>\n\n</body>\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\tabs\clubTabs\clubTabs.html"*/,
        selector: 'page-about',
    }),
    __metadata("design:paramtypes", [])
], ClubTabsPage);

//# sourceMappingURL=clubTabs.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyClubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\club\myClubs\myClubs.html"*/'<ion-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\club\myClubs\myClubs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], MyClubsPage);

//# sourceMappingURL=myClubs.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllClubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\club\allClubs\allClubs.html"*/'<ion-content>\n\n<ion-list></ion-list>\n\n\n\n<button ion-button full (click)=\'gotoClubDetail()\'>go to detail page</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\club\allClubs\allClubs.html"*/,
        selector: 'page-about',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], AllClubsPage);

//# sourceMappingURL=allClubs.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>ClubHub</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2></h2>\n\n  <p>\n\n\n\n  </p>\n\n  <p>\n\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n\n    update any existing page or create new pages.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(246);
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
        selector: 'page-entry',template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\entry\entry.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>UQ ClubHub</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-bounce padding class=\'view\'>\n\n	<div id=\'imageContainer\'>\n\n	<img src="../../assets/icon/clubHub.png" height="100px" width="100px" />\n\n	</div>\n\n<ion-footer>\n\n	<div id="container">\n\n		<p id=\'line1\' >Have a great time!</p>\n\n	</div>\n\n\n\n	<div id=\'bottomButton\'>	\n\n	  	<button ion-button full color=\'primary\'(click)=\'loginWithFacebook()\'>\n\n	  	  Sign in with facebook\n\n	  	</button> \n\n	</div>\n\n</ion-footer>		\n\n\n\n	\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\entry\entry.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EntryPage);

//# sourceMappingURL=entry.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(323);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_entry_entry__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_event_event__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_event_eventDetail_eventDetail__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_club_club__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_club_myClubs_myClubs__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_club_allClubs_allClubs__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_clubTabs_clubTabs__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_club_club_detail_club_detail__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_firebase_service_firebase_service__ = __webpack_require__(115);
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
            __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_club_club__["a" /* ClubPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_club_myClubs_myClubs__["a" /* MyClubsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_club_allClubs_allClubs__["a" /* AllClubsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_clubTabs_clubTabs__["a" /* ClubTabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_event_eventDetail_eventDetail__["a" /* EventDetailPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_club_club_detail_club_detail__["a" /* ClubDetailPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_entry_entry__["a" /* EntryPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/club/club-detail/club-detail.module#ClubDetailPageModule', name: 'ClubDetailPage', segment: 'club-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/entry/entry.module#EntryPageModule', name: 'EntryPage', segment: 'entry', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
            __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_event_event__["a" /* EventPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_club_club__["a" /* ClubPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_club_myClubs_myClubs__["a" /* MyClubsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_club_allClubs_allClubs__["a" /* AllClubsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_clubTabs_clubTabs__["a" /* ClubTabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_event_eventDetail_eventDetail__["a" /* EventDetailPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_entry_entry__["a" /* EntryPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_club_club_detail_club_detail__["a" /* ClubDetailPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_21__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(304);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[306]);
//# sourceMappingURL=main.js.map
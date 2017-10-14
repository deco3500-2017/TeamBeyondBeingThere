webpackJsonp([4],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_event__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__club_club__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(265);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__event_event__["a" /* EventPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__club_club__["a" /* ClubPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Event" ></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Clubs" ></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="People" ></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Profile" ></ion-tab>\n\n</ion-tabs>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddEventPage = (function () {
    function AddEventPage(alertCtrl, navCtrl, navParams, firebaseProvider) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.event = {
            isOncampus: null,
            title: null,
            club: null,
            tags: null,
            memberFee: null,
            nonmemberFee: null,
            description: null,
            email: null,
            number: null,
            tag: null,
            locationCity: "Brisbane",
            locationPostcode: null,
            locationSuburb: null,
            locationStreet: null,
            locationCampus: null,
            locationBuilding: null,
            locationRoom: null,
            locationDetails: null,
            startTime: null,
            endTime: null,
            registrationDeadline: null,
        };
    }
    AddEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEventPage');
    };
    AddEventPage.prototype.addEvent = function (event) {
        console.log(this.event);
        if (this.event.title == null) {
            this.alert("Club title needed!");
        }
        else if (this.event.tags == null) {
            this.alert("Tags needed!");
        }
        else if (this.event.memberFee == null) {
            this.alert("MemberFee needed!");
        }
        else if (this.event.nonmemberFee == null) {
            this.alert("nonmemberFee needed!");
        }
        else if (this.event.description == null) {
            this.alert("Description needed!");
        }
        else if (this.event.email == null) {
            this.alert("Email needed!");
        }
        else if (this.event.registrationDeadline == null) {
            this.alert("Registration deadline needed!");
        }
        else if (this.event.endTime == null) {
            this.alert("End time needed!");
        }
        else if (this.event.startTime == null) {
            this.alert("Start time needed!");
        }
        else if (this.event.number == null) {
            this.alert("Contact number needed!");
        }
        else if (this.event.isOncampus) {
            if (this.event.locationCampus == null || this.event.locationBuilding == null ||
                this.event.locationRoom == null) {
                this.alert("Event Location needed");
            }
            else {
                this.firebaseProvider.addEvent(this.event);
                this.navCtrl.pop();
                this.alert("Event Created");
            }
        }
        else if (!this.event.isOncampus) {
            if (this.event.locationCity == null || this.event.locationPostcode == null ||
                this.event.locationSuburb == null || this.event.locationStreet == null) {
                this.alert("Event Location needed");
            }
        }
        else {
            this.firebaseProvider.addEvent(this.event);
            this.navCtrl.pop();
            this.alert("Event Created");
        }
    };
    AddEventPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK'],
        }).present();
    };
    return AddEventPage;
}());
AddEventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-event',template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\event\add-event\add-event.html"*/'<!--\n\n  Generated template for the AddEventPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Add New Event</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	\n\n\n\n			<div class="title_box">\n\n	    		<ion-label id="title">Event title</ion-label>\n\n	    		<ion-input type="text" [(ngModel)]="event.title"></ion-input>\n\n	    	</div>\n\n\n\n			<div class="title_box">\n\n	    		<ion-label id="title">Organizing club</ion-label>\n\n	    		<ion-select type="text" [(ngModel)]="event.club" placeholder="Organizing club">\n\n				    <ion-option value="Dancing Club">Dancing Club</ion-option>\n\n				    <ion-option value="Anime & Manga Club">Anime & Manga Club</ion-option>\n\n					<ion-option value="Japanese Taiko Drumming Team">UQ TAIKO</ion-option>\n\n	    		</ion-select>\n\n	    	</div>\n\n\n\n			<div class="title_box">\n\n	    		<ion-label id="title">Description</ion-label>\n\n	    		<ion-textarea type="text" [(ngModel)]="event.description"></ion-textarea>\n\n	    	</div>\n\n\n\n	  		<div class="title_box">\n\n	  			<ion-label id="title">Start time</ion-label>\n\n	  			<ion-datetime displayFormat="MMM DD, YYYY HH:mm" min="2017" max="2020" [(ngModel)]="event.startTime" placeholder="Oct 17, 2017 00:00"></ion-datetime>\n\n	  		</div>\n\n\n\n\n\n	  		<div class="title_box">\n\n	  			<ion-label id="title">End time</ion-label>\n\n	  			<ion-datetime displayFormat="MMM DD, YYYY HH:mm" min="2017" max="2020" [(ngModel)]="event.endTime" placeholder="Oct 17, 2017 00:00"></ion-datetime>\n\n	  		</div>\n\n\n\n\n\n			<div class="title_box">\n\n	  			<ion-label id="title">Registration deadline</ion-label>\n\n	  			<ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="event.registrationDeadline" placeholder="Oct 17, 2017 00:00"></ion-datetime>\n\n	  		</div>\n\n\n\n			<div class="title_box">\n\n	    		<ion-label id="title">Event Location</ion-label>\n\n				    <ion-label id="sub_title">On campus</ion-label>\n\n				    <ion-toggle color="secondary" [(ngModel)]="event.isOncampus"></ion-toggle>\n\n\n\n\n\n				<div *ngIf="!event.isOncampus" id="locationInfo">\n\n					<ion-list>\n\n						<ion-item>\n\n							<ion-label>City:</ion-label>\n\n							<ion-input type="text" [(ngModel)]="event.locationCity">{{event.locationCity}}</ion-input>\n\n						</ion-item>	\n\n						<ion-item>\n\n							<ion-label>Suburb:</ion-label>\n\n							<ion-input type="text" [(ngModel)]="event.locationSuburb"></ion-input>\n\n						</ion-item>\n\n						<ion-item>\n\n							<ion-label>Street detail:</ion-label>\n\n							<ion-input type="text" [(ngModel)]="event.locationStreet"></ion-input>\n\n						</ion-item>	\n\n						<ion-item>\n\n							<ion-label>Postcode:</ion-label>\n\n							<ion-input type="number" [(ngModel)]="event.locationPostcode"></ion-input>\n\n						</ion-item>\n\n					</ion-list>	\n\n				</div>\n\n\n\n\n\n				<div *ngIf="event.isOncampus" id="locationInfo">\n\n					<ion-list>\n\n						<ion-item>\n\n							<ion-label>Campus:</ion-label>\n\n							<ion-select [(ngModel)]="event.locationCampus" type="text">\n\n								<ion-option value="St Lucia" selected>St Lucia</ion-option>\n\n								<ion-option value="Gatton">Gatton</ion-option>\n\n								<ion-option value="Herston">Herston</ion-option>\n\n								<ion-option value="Other Location">Other Location</ion-option>\n\n							</ion-select>	\n\n						</ion-item>\n\n						<ion-item>\n\n							<ion-label>Building:</ion-label>\n\n							<ion-input placeholder="building" type="text" [(ngModel)]="event.locationBuilding"></ion-input>\n\n						</ion-item>	\n\n						<ion-item>\n\n							<ion-label>Room:</ion-label>\n\n							<ion-input placeholder="room" type="text" [(ngModel)]="event.locationRoom"></ion-input></ion-item>\n\n						<ion-item>\n\n							<ion-label>Details:</ion-label>\n\n							<ion-input placeholder="location details" type="text" [(ngModel)]="event.locationDetails"></ion-input></ion-item>	\n\n					</ion-list>	\n\n				</div>\n\n	    	</div>\n\n\n\n	   		<div class="title_box">\n\n	    		<ion-label id="title">Fee</ion-label>\n\n	    		<ion-list>\n\n	    			<ion-item>\n\n	    				<ion-label>Member Fee</ion-label>\n\n	    				<ion-input id=\'fee\' type="number" [(ngModel)]="event.memberFee"></ion-input>\n\n	    			</ion-item>\n\n\n\n	    			<ion-item>\n\n	    				<ion-label>NonMember Fee</ion-label>\n\n			    		<ion-input id=\'fee\' type="number" [(ngModel)]="event.nonmemberFee"></ion-input>\n\n					</ion-item>\n\n				</ion-list>\n\n	    	</div>\n\n\n\n	   		<div class="title_box">\n\n	    		<ion-label id="title">Tags</ion-label>\n\n	    		<ion-select id="tags" multiple="true" [(ngModel)]="event.tags">\n\n		    		<ion-option value="Outdoor" >Outdoor</ion-option>\n\n		    		<ion-option value="Academic">Academic</ion-option>\n\n		    		<ion-option value="Art & Entertainment">Art & Entertainment</ion-option>\n\n		    		<ion-option value="Festivals & Celevbrations">Festical & Celevbrations</ion-option>\n\n		    		<ion-option value="Free">Free</ion-option>\n\n		    		<ion-option value="Sport">Sport</ion-option>\n\n		    		<ion-option value="Markets">Markets</ion-option>\n\n		    		<ion-option value="Eat & Drink">Eat & Drink</ion-option>\n\n		    		<ion-option value="Anime">Anime</ion-option>\n\n	    		</ion-select>\n\n\n\n	    		<ion-scroll scrollX="true">\n\n	    			<div id="tagsScroll" *ngFor="let tag1 of event.tags">#{{tag1}}</div>\n\n	    		</ion-scroll>\n\n	    		\n\n	    	</div>\n\n\n\n	    	<div class="title_box">\n\n	    		<ion-label id="title">Contact number</ion-label>	\n\n	    		<ion-input  type="tel" [(ngModel)]="event.number"></ion-input>\n\n	    	</div>\n\n\n\n\n\n	    	<div class="title_box">\n\n				<ion-label id="title">Contact Email</ion-label>\n\n	    		<ion-input  type="email" [(ngModel)]="event.email"></ion-input>\n\n	    	</div>\n\n\n\n	    	<div class="title_box">\n\n				<ion-label id="title">Important Notification</ion-label>\n\n	    		<ion-textarea  type="text" [(ngModel)]="event.notification"></ion-textarea>\n\n	    	</div>\n\n\n\n\n\n\n\n\n\n	\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n	<button ion-button (click)="addEvent()">Publish</button>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\event\add-event\add-event.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]) === "function" && _d || Object])
], AddEventPage);

var _a, _b, _c, _d;
//# sourceMappingURL=add-event.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(74);
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
            locationCity: "Brisbane",
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

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/club/club-detail/club-detail.module": [
		462,
		3
	],
	"../pages/entry/entry.module": [
		463,
		2
	],
	"../pages/event/add-event/add-event.module": [
		461,
		1
	],
	"../pages/register/register.module": [
		464,
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
webpackAsyncContext.id = 204;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_eventTabs_eventTabs__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_event_add_event__ = __webpack_require__(154);
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
    function EventPage(app, navCtrl, fire) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.fire = fire;
        this.rootEventPage = __WEBPACK_IMPORTED_MODULE_3__tabs_eventTabs_eventTabs__["a" /* EventTabsPage */];
    }
    EventPage.prototype.addNewEvent = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__add_event_add_event__["a" /* AddEventPage */]);
    };
    return EventPage;
}());
EventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\event\event.html"*/'<ion-header>\n\n  <ion-navbar >\n\n    <ion-title text-center class="titlebc">\n\n        <p class="titletext">Event page</p>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n	<button ion-button round class="addEventButton" color="danger" (click)="addNewEvent()">\n\n		<ion-icon name="add"></ion-icon>\n\n	</button>\n\n\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-nav [root]="rootEventPage"></ion-nav>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\event\event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], EventPage);

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_myEvents_myEvents__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_allEvents_allEvents__ = __webpack_require__(247);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\tabs\eventTabs\eventTabs.html"*/'<!DOCTYPE html>\n\n<html>\n\n<head>\n\n	<meta charset="utf-8">\n\n</head>\n\n<body>\n\n	<div class="ion-tabs">\n\n		<ion-tabs tabsPlacement="top" color="title">\n\n		<ion-tab [root]="allEventsRoot"tabTitle="All Events"></ion-tab>\n\n		<ion-tab [root]="myEventsRoot" tabTitle="My Events"></ion-tab>\n\n		</ion-tabs>\n\n	</div>\n\n</body>\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\tabs\eventTabs\eventTabs.html"*/,
        selector: 'page-about',
    }),
    __metadata("design:paramtypes", [])
], EventTabsPage);

//# sourceMappingURL=eventTabs.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\event\myEvents\myEvents.html"*/'<ion-content>\n\n    hello\n\n \n\n   \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\event\myEvents\myEvents.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], MyEventsPage);

//# sourceMappingURL=myEvents.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventdetail_eventdetail__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(74);
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
    function AllEventsPage(navCtrl, app, firebaseService) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.firebaseService = firebaseService;
        this.events = this.firebaseService.getEvents();
        console.log(this.events);
    }
    AllEventsPage.prototype.gotoEventDetail = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__eventdetail_eventdetail__["a" /* EventDetailPage */]);
    };
    return AllEventsPage;
}());
AllEventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\event\allEvents\allEvents.html"*/'<ion-content class="card-background-page">\n\n\n\n<ion-card *ngFor="let event of events | async">\n\n      <img  (click)=\'gotoEventDetail()\' src="img/2.jpg"/>\n\n      <ion-card-content>       \n\n          <div class="price-background"></div>\n\n          <div class="event-price" >${{event.nonmemberFee}}</div>\n\n        <ion-card-title >\n\n          {{event.title}}\n\n          </ion-card-title>\n\n          <div class="card-subtitle">{{event.tags}}</div>\n\n          <div class="card-time">\n\n            <p>Start at:\n\n            {{event.startTime}}</p>\n\n            <p>End at: {{event.endTime}}</p>\n\n          </div>\n\n          \n\n          \n\n        <ion-list>\n\n          <div ion-item class="first-list">\n\n            <ion-icon name="pin" item-start></ion-icon>\n\n              <p class="list-p" *ngIf="event.isOncampus">{{event.locationCampus}}, {{event.locationBuilding}}\n\n              </p>\n\n              <p item-end>150m</p>\n\n            </div>\n\n            <ion-item>\n\n                <ion-icon name="bookmark" item-start></ion-icon>\n\n                <p>19/100 attending</p>\n\n                <ion-avatar item-end >\n\n                    <img src="img/picon1.jpeg">\n\n                </ion-avatar>\n\n                <ion-avatar item-end >\n\n                    <img src="img/picon2.jpg">\n\n                </ion-avatar>\n\n            </ion-item>\n\n        </ion-list>\n\n      </ion-card-content>\n\n</ion-card>\n\n    \n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\event\allEvents\allEvents.html"*/,
        selector: 'page-about',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
], AllEventsPage);

//# sourceMappingURL=allEvents.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        selector: 'page-event-detail',template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\event\eventdetail\eventdetail.html"*/'<!--\n\n  Generated template for the eventDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    \n\n      <ion-toolbar>\n\n          <ion-title text-center>BBQ</ion-title>\n\n        <ion-buttons class="shareicon" end>\n\n            <ion-icon ios="ios-share" md="md-share" color="light"></ion-icon>\n\n        </ion-buttons>\n\n          <ion-buttons class="shareicon" end>\n\n            <ion-icon ios="ios-bookmark" md="md-bookmark" color="light"></ion-icon>\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="eventdetail">\n\n\n\n  <ion-slides class="slides" pager>\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image"/>\n\n<!--\n\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      <p [innerHTML]="slide.description"></p>\n\n-->\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <img src="img/1.png" class="slide-image"/>\n\n<!--\n\n      <h2 class="slide-title">Ready to Play?</h2>\n\n      <button ion-button large clear icon-end color="primary">\n\n        Continue\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n-->\n\n    </ion-slide>\n\n  </ion-slides>\n\n    <p class="titlep">Sustainable Fashion Drinks</p>\n\n    <p class="timep">WED, 26 OCT, 18:00 PM until 21:00 PM BST</p>\n\n    <p class="eventtags">#Food &nbsp; #Outdoor</p>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\event\eventdetail\eventdetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], EventDetailPage);

//# sourceMappingURL=eventdetail.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(250);
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
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\profile\profile.html"*/'<ion-header #head>\n\n	<div class="basicinfo">\n\n		<div class="userinfo" style="background-image: url(\'img/profilebg.jpg\')" >\n\n			<div id=\'userimgContainer\'>\n\n	      		<img *ngIf="!facebook.loggedIn" src="img/profile.png"/>\n\n	      		<img *ngIf="facebook.loggedIn" src="{{facebook.profilePicture}}" />	\n\n	      	</div>\n\n			<div id=\'usernameContainer\'>\n\n		    	<p id=\'username\'>{{facebook.name}}</p>\n\n		    </div>\n\n		    <div id=\'useremailContainer\'>\n\n		   		<p id=\'useremail\'>{{facebook.email}}</p>\n\n		    </div>\n\n	    </div>\n\n	\n\n		<div class="topButton">	  \n\n				<button ion-button color="dark" full (click)=\'loginWithFacebook()\' *ngIf=\'!facebook.loggedIn\'>\n\n				  	<ion-icon name="logo-facebook"></ion-icon>Log in\n\n				</button>\n\n				<button ion-button color="dark" full (click)=\'logout()\' *ngIf=\'facebook.loggedIn\'>\n\n					<ion-icon name="log-facebook"></ion-icon>Log out					\n\n				</button>\n\n		</div>\n\n	\n\n		<div class="followInfoContent" *ngIf="facebook.loggedIn">\n\n			<div class = "row" id="row1">\n\n		   		<div class = "col">\n\n		   			<p class= "colContent">2.5k</p>\n\n		   			<p class="colTitle">Follwer</p>			   			\n\n			   	</div>\n\n			   	<div class = "col">\n\n					<p class= "colContent">5</p>\n\n		   			<p class="colTitle">Following</p>		   			\n\n			   	</div>\n\n				<div class = "col">\n\n			   			<p class= "colContent">3</p>\n\n			   			<p class="colTitle">Club</p>\n\n				</div>\n\n				<div class = "col">\n\n				   	<p class= "colContent">4</p>\n\n					<p class="colTitle">Event</p>	   			\n\n				</div>\n\n			</div>\n\n			<div class="tagContent">\n\n				<ion-slides direction="horizontal">\n\n				    <ion-slide class="horizontalSlide">\n\n				  		<div id="slideRow" class="row">\n\n					    	<div id="slideCol" class="col">\n\n					    		#Fashion\n\n					    	</div>	 \n\n					    	<div id="slideCol" class="col">\n\n					    		#Party\n\n					    	</div>\n\n\n\n					    	<div id="slideCol" class="col">\n\n					    		#Outgoing\n\n					    	</div>\n\n						</div> \n\n				    </ion-slide>\n\n				    <ion-slide class="horizontalSlide">\n\n				  		<div id="slideRow" class="row">\n\n				    	<div id="slideCol" class="col">\n\n				    		#Haha\n\n				    	</div>	 \n\n				    	<div id="slideCol" class="col">\n\n				    		#UQ Student\n\n				    	</div>\n\n				    	<div id="slideCol" class="col">\n\n				    		#Friendly\n\n				    	</div>\n\n						</div>    \n\n				    </ion-slide>\n\n				</ion-slides>\n\n			</div>\n\n		</div>\n\n	</div>\n\n</ion-header>\n\n\n\n<ion-content fullscreen #content hide-header [header]="head" >\n\n	<div class="profileSubTabs" *ngIf="facebook.loggedIn">\n\n	    <ion-segment  [(ngModel)]="segments" color="dark">\n\n	      <ion-segment-button value="events">\n\n	        EVENTS\n\n	      </ion-segment-button>\n\n	      <ion-segment-button value="tickets">\n\n	        TICKETS\n\n	      </ion-segment-button>\n\n	      <ion-segment-button value="bookmarks">\n\n	        BOOKMARKS\n\n	      </ion-segment-button>\n\n	    </ion-segment>\n\n					<div class="subTabContent" [ngSwitch]="segments" >\n\n						\n\n						<div *ngSwitchCase="\'events\'">\n\n						<ion-list id="eventList" >\n\n							<ion-item *ngFor="let sItem1 of events | async">\n\n								<ion-thumbnail item-start>\n\n				      			<img src="img/2.jpg">\n\n				    		</ion-thumbnail>\n\n				    			<h2>{{sItem1.name}}</h2>\n\n								<p>The event info</p>\n\n							</ion-item>\n\n						</ion-list>\n\n						<ion-list id="eventList" >\n\n							<ion-item *ngFor="let sItem1 of events | async">\n\n								<ion-thumbnail item-start>\n\n				      			<img src="img/2.jpg">\n\n				    		</ion-thumbnail>\n\n				    			<h2>{{sItem1.name}}</h2>\n\n								<p>The event info</p>\n\n							</ion-item>\n\n						</ion-list>						<ion-list id="eventList" >\n\n							<ion-item *ngFor="let sItem1 of events | async">\n\n								<ion-thumbnail item-start>\n\n				      			<img src="img/2.jpg">\n\n				    		</ion-thumbnail>\n\n				    			<h2>{{sItem1.name}}</h2>\n\n								<p>The event info</p>\n\n							</ion-item>\n\n						</ion-list>\n\n						<ion-list id="eventList" >\n\n							<ion-item *ngFor="let sItem1 of events | async">\n\n								<ion-thumbnail item-start>\n\n				      			<img src="img/2.jpg">\n\n				    		</ion-thumbnail>\n\n				    			<h2>{{sItem1.name}}</h2>\n\n								<p>The event info</p>\n\n							</ion-item>\n\n						</ion-list>\n\n						<ion-list id="eventList" >\n\n							<ion-item *ngFor="let sItem1 of events | async">\n\n								<ion-thumbnail item-start>\n\n				      			<img src="img/2.jpg">\n\n				    		</ion-thumbnail>\n\n				    			<h2>{{sItem1.name}}</h2>\n\n								<p>The event info</p>\n\n							</ion-item>\n\n						</ion-list>\n\n						</div>\n\n					\n\n						<div *ngSwitchCase="\'tickets\'">\n\n						<ion-slides id="verticalSlide" pager="false" direction="vertical" >\n\n							<ion-slide>\n\n				  			<ion-list  style="margin:0">\n\n				  			<ion-item (click)="dosomething()" *ngFor="let sItem2 of tickets | async">\n\n				    		\n\n				    		<ion-thumbnail item-start>\n\n				      			<img src="img/2.jpg">\n\n				    		</ion-thumbnail>\n\n				    			<h2>{{sItem2.name}}</h2>\n\n								<p>The event info</p>\n\n				  			</ion-item>\n\n				  			</ion-list>\n\n				  			</ion-slide>\n\n						</ion-slides>\n\n						</div>\n\n\n\n						<div *ngSwitchCase="\'bookmarks\'">\n\n						<ion-slides id="verticalSlide" pager="false" direction="vertical" >\n\n							<ion-slide>\n\n				  			<ion-list  style="margin:0">\n\n				  			<ion-item (click)="dosomething()" *ngFor="let sItem3 of bookmarks | async">\n\n				    		\n\n				    		<ion-thumbnail item-start>\n\n				      			<img src="img/2.jpg">\n\n				    		</ion-thumbnail>\n\n				    			<h2>{{sItem3.name}}</h2>\n\n								<p>The event info</p>\n\n				  			</ion-item>\n\n				  			</ion-list>\n\n				  			</ion-slide>\n\n						</ion-slides>\n\n						</div>\n\n					</div>\n\n			</div>\n\n\n\n	<div *ngIf="!facebook.loggedIn" class="info">Log in to experience more~</div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_clubTabs_clubTabs__ = __webpack_require__(262);
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

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__club_myClubs_myClubs__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__club_allClubs_allClubs__ = __webpack_require__(264);
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

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyClubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllClubsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__club_detail_club_detail__ = __webpack_require__(155);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\club\allClubs\allClubs.html"*/'<ion-content>\n\n<ion-list>\n\n\n\n	<ion-card (click)="gotoClubDetail()">\n\n		<img src="img/2.jpg"/>\n\n	  <ion-card-header>\n\n	    UQ Dancing Club\n\n	  </ion-card-header>\n\n\n\n	  <ion-card-content>\n\n	    #\n\n	  </ion-card-content>\n\n	</ion-card>\n\n\n\n	<ion-card (tap)="tapEvent($event)">\n\n\n\n	  <ion-card-header>\n\n	    BBQ Club\n\n	  </ion-card-header>\n\n\n\n	  <ion-card-content>\n\n	    #\n\n	  </ion-card-content>\n\n\n\n	</ion-card>\n\n\n\n\n\n</ion-list>\n\n\n\n<button ion-button full (click)=\'gotoClubDetail()\'>go to detail page</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\club\allClubs\allClubs.html"*/,
        selector: 'page-about',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], AllClubsPage);

//# sourceMappingURL=allClubs.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>ClubHub</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n   \n\n  <h2>hello</h2>\n\n \n\n  <p>\n\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n\n    update any existing page or create new pages.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Yifan Lu\Documents\TeamBeyondBeingThere\ClubHub\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(250);
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

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(327);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_entry_entry__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_event_event__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_club_club__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_club_myClubs_myClubs__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_club_allClubs_allClubs__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_clubTabs_clubTabs__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_club_club_detail_club_detail__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_event_allEvents_allEvents__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_eventTabs_eventTabs__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_event_myEvents_myEvents__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_event_add_event_add_event__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_event_eventdetail_eventdetail__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_hide_header_hide_header__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_firebase_service_firebase_service__ = __webpack_require__(74);
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
            __WEBPACK_IMPORTED_MODULE_18__pages_event_eventdetail_eventdetail__["a" /* EventDetailPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_event_add_event_add_event__["a" /* AddEventPage */],
            __WEBPACK_IMPORTED_MODULE_19__directives_hide_header_hide_header__["a" /* HideHeaderDirective */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/event/add-event/add-event.module#AddEventPageModule', name: 'AddEventPage', segment: 'add-event', priority: 'low', defaultHistory: [] },
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
            __WEBPACK_IMPORTED_MODULE_18__pages_event_eventdetail_eventdetail__["a" /* EventDetailPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_event_add_event_add_event__["a" /* AddEventPage */],
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

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(308);
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
        //this.scrollContent=this.element.nativeElement.getElementsByClassName("scroll-content")[0];
        //this.renderer.setElementStyle(this.scrollContent,'webkitTransition','margin-top 700ms');
    };
    HideHeaderDirective.prototype.onContentScroll = function (event) {
        if (event.scrollTop > 100) {
            this.renderer.setElementStyle(this.header, "top", "-375px");
            //	this.renderer.setElementStyle(this.scrollContent,'margin-top','0px');
        }
        else {
            this.renderer.setElementStyle(this.header, "top", "0px");
            //	this.renderer.setElementStyle(this.scrollContent,'margin-top','309px');
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

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(205);
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

/***/ })

},[310]);
//# sourceMappingURL=main.js.map
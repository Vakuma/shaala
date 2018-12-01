webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authServer, router) {
        this.authServer = authServer;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        // Checkin if the user is logged in or not if not he will be redirected to the login page.
        if (this.authServer.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_storage_service__ = __webpack_require__("../../../../../src/app/_services/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, _route, _dataStorage) {
        this.http = http;
        this._route = _route;
        this._dataStorage = _dataStorage;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["e" /* HttpHeaders */]().set('Content-type', 'application/json');
        var body = JSON.stringify({ username: username, password: password });
        return this.http.post('/gateway/auth/login', body, { headers: headers })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            if (response && response.status === 1) {
                return response;
            }
            else if (response && response.status === 0) {
                return response;
            }
        });
    };
    // function to logout..
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        // const lang = localStorage.getItem('language');
        localStorage.removeItem('token');
        localStorage.clear();
        this._route.navigate(['/login']);
        // if (lang) {
        //     localStorage.setItem('language', lang);
        // }
    };
    // to check if the user is logged in returns true/false
    AuthenticationService.prototype.isLoggedIn = function () {
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
        var token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        var isExpired = jwtHelper.isTokenExpired(token);
        return !isExpired;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_5__data_storage_service__["a" /* DataStorageService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/commonFunction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonFunService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonFunService = /** @class */ (function () {
    function CommonFunService(http, _http) {
        this.http = http;
        this._http = _http;
    }
    CommonFunService.prototype.getStatus = function (status) {
        if (status === 99) {
            return 'FAILED';
        }
        else if (status === -1) {
            return 'INPROGRESS';
        }
        else if (status === 0) {
            return 'SUCCESS';
        }
    };
    CommonFunService.prototype.getUserStatus = function (status) {
        if (status === 1) {
            return 'ACTIVE';
        }
        else if (status === 0) {
            return 'INACTIVE';
        }
    };
    CommonFunService.prototype.mapRoleNames = function (role) {
        if (role === 'Super Admin') {
            return 1;
        }
        else if (role === 'Support Admin') {
            return 2;
        }
        else if (role === 'Client Admin') {
            return 3;
        }
        else if (role === 'Client User') {
            return 4;
        }
        else if (role === 'Super User') {
            return 5;
        }
    };
    CommonFunService.prototype.transactionSteps = function (step) {
        if (step === 'STEP_NAME_LOGIN_TO_BANK') {
            return 'Bank Login';
        }
        else if (step === 'STEP_NAME_SECURITY_QUESTION') {
            return 'Bank Security Question';
        }
        else if (step === 'STEP_NAME_SUBMIT_OTP_FOR_ADD_PAYEE') {
            return 'Add Payee OTP Page';
        }
        else if (step === 'STEP_NAME_SUBMIT_OTP_FOR_TRANSACTION') {
            return 'Transaction OTP';
        }
        else if (step === 'STEP_NAME_COMPLETE') {
            return 'Final Confirmation';
        }
        else if (step === 'STEP_NAME_ENTER_ADDPAYEE_CREDENTIALS') {
            return 'Add Payee';
        }
        else if (step === 'STEP_NAME_ENTER_TRANSACTION_CREDENTIALS') {
            return 'Transaction Password';
        }
        else if (step === 'STEP_NAME_SUBMIT_CAPTCHA_FOR_LOGIN') {
            return 'Login Capcha';
        }
        else if (step === 'STEP_NAME_SUBMIT_CAPTCHA_FOR_TRANSACTION') {
            return 'Transaction Capcha';
        }
        else if (step === 'STEP_NAME_ENTER_THREE_GRID_INPUT') {
            return 'Login Page Credentials';
        }
        else if (step === 'STEP_NAME_ENTER_TWO_GRID_INPUT') {
            return 'Login Page Credentials';
        }
        else if (step === 'STEP_NAME_SUBMIT_OTP_FOR_LOGIN') {
            return 'Login OTP Page';
        }
        else if (step === 'STEP_NAME_ENTER_SECURITY_NUMBER') {
            return 'Bank Security Question';
        }
        else if (step === 'STEP_NAME_SUBMIT_TOKEN_FOR_TRANSACTION') {
            return 'Transaction OTP';
        }
    };
    CommonFunService.prototype.failureReasons = function (reason) {
        if (reason === 'UPLOAD_ACCOUNT_MISMATCH') {
            return 'Bank Account Number is not matching';
        }
        else if (reason === 'UPLOAD_REFERENCE_MISMATCH') {
            return 'Transaction Reference Number is not matching';
        }
        else if (reason === 'UPLOAD_AMOUNT_MISMATCH') {
            return 'Transaction Amount is not matching';
        }
    };
    CommonFunService.prototype.clientList = function () {
        return this.http.get('/gateway/lookup/client')
            .map(function (response) {
            var res = response;
            res.data.push({
                clientId: '',
                name: 'All'
            });
            return res;
        });
    };
    CommonFunService.prototype.getCurrency = function () {
        return this.http.get('/gateway/lookup/country')
            .map(function (response) {
            var res = response;
            res.data.push({
                countryId: '',
                countryName: '',
                currency: 'All'
            });
            return res;
        });
    };
    CommonFunService.prototype.getMid = function () {
        return this.http.get('/gateway/lookup/mid')
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    CommonFunService.prototype.getMajor88Mid = function () {
        return this.http.get('/gateway/lookup/mid/m88pay')
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    CommonFunService.prototype.getKpayMid = function () {
        return this.http.get('/gateway/lookup/mid/kpay')
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    CommonFunService.prototype.getEasypayMid = function () {
        return this.http.get('/gateway/lookup/mid/easypay')
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    CommonFunService.prototype.getStartTime = function () {
        var d = new Date();
        d.setHours(0, 0, 0, 0);
        return +d;
    };
    CommonFunService.prototype.getEndTime = function () {
        return new Date().getTime();
    };
    CommonFunService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], CommonFunService);
    return CommonFunService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/data-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataStorageService = /** @class */ (function () {
    function DataStorageService() {
    }
    /*************************************************************************
     * Writes/Stores the object in localStorage with key
     * @function write
     * @param {string} key key for the object to store
     * @param {any} value object to be stored
     */
    DataStorageService.prototype.write = function (key, value) {
        if (value) {
            if (typeof (value) !== 'string') {
                value = JSON.stringify(value);
            }
            localStorage.setItem(key, value);
        }
        else if (localStorage.getItem(key)) {
            localStorage.removeItem(key);
        }
    };
    /*************************************************************************
   * Read/Retrives the object from sessionStorage using key
   * @function read<T>
   * @param {string} key key for the object to store
   * @return {T} return the object of type T
   */
    DataStorageService.prototype.read = function (key) {
        var value;
        value = localStorage.getItem(key);
        if (value && value !== 'undefined' && value !== 'null') {
            return value;
        }
        return null;
    };
    DataStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
        // class represents the data storage process
        ,
        __metadata("design:paramtypes", [])
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/dateTimes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateTimeService = /** @class */ (function () {
    function DateTimeService() {
    }
    DateTimeService.prototype.getTimeStamp = function (d) {
        var month = d.getUTCMonth(); // months from 1-12
        var day = d.getDate();
        var year = d.getUTCFullYear();
        var timestamp = new Date(year, month, day).getTime();
        return timestamp;
    };
    DateTimeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DateTimeService);
    return DateTimeService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/forgotusrpass.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotusrpassrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_storage_service__ = __webpack_require__("../../../../../src/app/_services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotusrpassrService = /** @class */ (function () {
    function ForgotusrpassrService(_http, http, dataStorage) {
        this._http = _http;
        this.http = http;
        this.dataStorage = dataStorage;
    }
    /***************************************************************************************************
     * @function forgotPass //Service to verify the given username and email for reset
     * @param email
     * @param username
     ***************************************************************************************************/
    // forgotPass(email: string, username: string): Observable<any> {
    //   const headers = new Headers({'Content-type': 'application/json'});
    //   const options = new RequestOptions({headers: headers});
    //   const body = JSON.stringify({email: email, username: username});
    //   return this._http.post('/gateway/auth/forgotPassword', body, options )
    //   .map((response: Response) => {
    //       const res = response.json();
    //       if (res) {
    //         return res;
    //       }
    //   });
    // }
    ForgotusrpassrService.prototype.forgotPass = function (email, username) {
        var body = JSON.stringify({ email: email, username: username });
        var options = { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["e" /* HttpHeaders */]().set('Content-Type', 'application/json') };
        // const body = JSON.stringify(newClient);
        return this.http.post('/gateway/auth/forgotPassword', body, options)
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    ForgotusrpassrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__data_storage_service__["a" /* DataStorageService */]])
    ], ForgotusrpassrService);
    return ForgotusrpassrService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "../../../../../src/app/_services/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderCounter = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
    }
    LoaderService.prototype.displayLoader = function (value) {
        var counter = value ? this.loaderCounter.value + 1 : this.loaderCounter.value - 1;
        this.loaderCounter.next(counter);
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/permissions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// tslint:disable-next-line:class-name
var PermissionManagementService = /** @class */ (function () {
    function PermissionManagementService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.permissionsArr = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.allPermissions = [];
        this.permissionArray = [];
    }
    PermissionManagementService.prototype.getAllPermissions = function () {
        var _this = this;
        return this.http.get('/gateway/user/permissions')
            .map(function (response) {
            var res = response;
            if (res.data != null) {
                return res.data;
            }
            else {
                if (res.error.code === 401) {
                    _this.auth.logout();
                }
            }
        });
    };
    PermissionManagementService.prototype.getRequiredPermissionStatus = function (permissionName) {
        var _this = this;
        var status;
        return this.http.get('/gateway/user/permissions')
            .map(function (response) {
            var res = response;
            if (res.data != null) {
                var permissions = res.data;
                status = permissions.indexOf(permissionName) >= 0 ? true : false;
                return status;
            }
            else {
                if (res.error.code === 401) {
                    _this.auth.logout();
                }
            }
        });
    };
    PermissionManagementService.prototype.getPermissionArray = function () {
        var _this = this;
        return this.http.get('/gateway/user/permissions')
            .map(function (response) {
            var res = response;
            if (res.data != null) {
                var allPerm = res.data;
                var i = 0;
                _this.permissionArray[i] = (allPerm.indexOf('can_login_logout') >= 0) ? 'l' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_reset_password') >= 0) ? 'rp' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_change_password') >= 0) ? 'cp' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_view_dashboard') >= 0) ? 'vd' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_view_transaction_dashboard') >= 0) ? 'vd' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_create_user') >= 0) ? 'cu' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_view_user_list') >= 0) ? 'vul' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_view_audit_log') >= 0) ? 'val' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_update_user_ipaddress') >= 0) ? 'upip' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_view_my_profile') >= 0) ? 'vmp' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_view_connector_mid_mgmt') >= 0) ? 'vcmm' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_view_bank_list') >= 0) ? 'vbl' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_edit_transaction') >= 0) ? 'cet' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_add_new_bank') >= 0) ? 'anb' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_edit_bank') >= 0) ? 'ceb' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_approve_receiving_bank') >= 0) ? 'carb' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_view_bank_mgmt') >= 0) ? 'vbm' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_view_connector_mid') >= 0) ? 'vcm' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_view_client_list') >= 0) ? 'vcl' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_view_client_mgmt') >= 0) ? 'cvcm' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_update_transaction') >= 0) ? 'cut' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_reinitiate_callback') >= 0) ? 'crcb' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_update_kpay_transaction') >= 0) ? 'cukt' : false;
                _this.permissionArray[i++] = (allPerm.indexOf('can_request_update_kpay_transaction') >= 0) ? 'crukt' : false;
                _this.permissionArray[i++] = (allPerm.indexOf('can_update_M88Pay_transaction') >= 0) ? 'cumt' : false;
                _this.permissionArray[i++] = (allPerm.indexOf('can_request_update_M88Pay_transaction') >= 0) ? 'crumt' : false;
                _this.permissionArray[i++] = (allPerm.indexOf('can_view_agent') >= 0) ? 'cva' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_edit_agent') >= 0) ? 'cea' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_add_agent') >= 0) ? 'caa' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_view_txn_review') >= 0) ? 'cvtr' : '';
                _this.permissionArray[i++] = (allPerm.indexOf('can_claim_txn') >= 0) ? 'cct' : '';
                _this.allPermissions = _this.removeObjectReference(_this.permissionArray);
                _this.permissionsArr.next(_this.allPermissions);
                return _this.permissionArray;
            }
            else {
                if (res.error.code === 401) {
                    _this.auth.logout();
                }
            }
        });
    };
    PermissionManagementService.prototype.removeObjectReference = function (permissionArray) {
        var arr = JSON.parse(JSON.stringify(permissionArray));
        return arr;
    };
    PermissionManagementService.prototype.getPermissionsReplay = function () {
        return this.permissionsArr.asObservable();
    };
    PermissionManagementService.prototype.getCompanyProfileData = function () {
        // const body = JSON.stringify(inpParams);
        return this.http.get('/gateway/user/profile')
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    PermissionManagementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */]])
    ], PermissionManagementService);
    return PermissionManagementService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/pstoken.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TokenInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUrlInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(injector, _authServ, _router) {
        this.injector = injector;
        this._authServ = _authServ;
        this._router = _router;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (request.url.indexOf('/auth/') === -1) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Token " + localStorage.getItem('token')
                }
            });
            if (!request.headers.has('Content-Type')) {
                request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
            }
        }
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["g" /* HttpResponse */]) {
                // do stuff with response if you want
                if (event.body.error && event.body.error.code === 401) {
                    _this._router.navigate(['/login']);
                }
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    // redirect to the login route
                    // or show a modal
                    _this._router.navigate(['/login']);
                }
            }
        });
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());

var BaseUrlInterceptor = /** @class */ (function () {
    function BaseUrlInterceptor() {
    }
    BaseUrlInterceptor.prototype.intercept = function (req, next) {
        var url = window.location.origin;
        if (url === 'http://localhost:4200') {
            url = 'http://13.232.68.176:8080';
        }
        else {
            url = url;
        }
        // const url = 'http://13.232.68.176:8080';
        // const url = 'https://ps-staging.merchantpayments.site';
        // const url = 'https://ps-staging.merchantpayments.site';
        // const url = 'http://localhost:8080';
        var tempUrl = 'http://www.json-generator.com/';
        if (req.url.indexOf('/auth/') !== -1 || req.url.indexOf('/gateway/') !== -1) {
            req = req.clone({
                url: url + req.url
            });
        }
        else if (req.url.indexOf('indent') !== -1) {
            req = req.clone({
                url: tempUrl + req.url
            });
        }
        else {
            req = req.clone({
                url: req.url
            });
        }
        return next.handle(req);
    };
    return BaseUrlInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/_services/resetpass.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpassService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_storage_service__ = __webpack_require__("../../../../../src/app/_services/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetpassService = /** @class */ (function () {
    function ResetpassService(_http, _dataStorage) {
        this._http = _http;
        this._dataStorage = _dataStorage;
    }
    /*********************************************************************************************
     * @function tokenEmailVerifier //To verify the reset link parameters
     * @param token
     * @param email
     */
    ResetpassService.prototype.tokenUserVerifier = function (token, email) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = JSON.stringify({ username: email, resetToken: token });
        return this._http.post('/gateway/auth/verifyResetToken', body, options)
            .map(function (response) {
            var res = response.json();
            if (res.status === 1) {
                return true;
            }
            else {
                _this._dataStorage.write('forgotError', res.error.message);
                return false;
            }
        });
    };
    /*********************************************************************************************
     * @function saveNewPassword //to reset the password
     * @param email
     * @param newPass
     * @param token
     */
    ResetpassService.prototype.saveNewPassword = function (username, newPass, token) {
        //
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = JSON.stringify({ username: username, password: newPass, resetToken: token });
        return this._http.post('/gateway/auth/resetPassword', body, options)
            .map(function (response) {
            var res = response.json();
            if (res) {
                return res;
            }
        });
    };
    ResetpassService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__data_storage_service__["a" /* DataStorageService */]])
    ], ResetpassService);
    return ResetpassService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/theme.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThemeService = /** @class */ (function () {
    function ThemeService() {
    }
    ThemeService.prototype.addThemeClassLogoToNavbar = function (element, logoEle) {
        var domainName = window.location.host;
        if (domainName === 'localhost:4400' ||
            domainName === 'ps-dashboard.merchantpayments.site' ||
            domainName === 'ps-staging.merchantpayments.site') {
            document.getElementById('theme').setAttribute('href', 'assets/theme/theme2.css');
            logoEle.nativeElement.src = '/assets/Images/paysec.png';
        }
        else if (domainName === 'localhost:4200' ||
            domainName === '13.232.68.176:8080' ||
            domainName === 'il-dashboard.merchantpayments.site' ||
            domainName === 'md-staging.merchantpayments.site') {
            element.nativeElement.classList.add('bg-dark');
            logoEle.nativeElement.src = '../../assets/Images/1labs-logo.png';
            document.getElementById('theme').setAttribute('href', 'assets/theme/theme1.css');
        }
    };
    ThemeService.prototype.loadLogosForLogin = function (logoEle) {
        var domainName = window.location.host;
        if (domainName === 'localhost:4400' ||
            domainName === 'ps-dashboard.merchantpayments.site' ||
            domainName === 'ps-staging.merchantpayments.site') {
            document.getElementById('theme').setAttribute('href', 'assets/theme/theme2.css');
            logoEle.nativeElement.src = '/assets/Images/paysec.png';
        }
        else if (domainName === 'localhost:4200' ||
            domainName === 'il-dashboard.merchantpayments.site' ||
            domainName === 'md-staging.merchantpayments.site' ||
            domainName === '13.232.68.176:8080') {
            logoEle.nativeElement.src = '../../assets/Images/1labs-logo.png';
            document.getElementById('theme').setAttribute('href', 'assets/theme/theme1.css');
        }
    };
    ThemeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ThemeService);
    return ThemeService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    // getAll() {
    //     return this.http.get('http://13.229.46.57/api/users', this.jwt()).map((response: Response) => response.json());
    // }
    // getById(id: number) {
    //     return this.http.get('http://13.229.46.57/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }
    // create(user: User) {
    //     return this.http.post('http://13.229.46.57/api/users', user, this.jwt()).map((response: Response) => response.json());
    // }
    // update(user: User) {
    //     return this.http.put('http://13.229.46.57/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    // }
    // delete(id: number) {
    //     return this.http.delete('http://13.229.46.57/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        }
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#spinner {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    background-color: #ffffffd1;\r\n    z-index: 999999999;\r\n}\r\n\r\n.session-out {\r\n    color: black;\r\n    -webkit-transform: translateY(-35%);\r\n    transform: translateY(-35%);\r\n    width: 40%;\r\n    border: 1px solid gray;\r\n    padding: 20px 10px 10px 10px;\r\n    text-align: left;\r\n}\r\n\r\n.session-wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 100vh;\r\n    background: #f5f5f5;\r\n    position: fixed;\r\n    top: 0px;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0px;\r\n    z-index: 9;\r\n}\r\n\r\na {\r\n    cursor: pointer;\r\n    color: #26b4ff !important;\r\n    text-decoration: underline !important;\r\n}\r\n\r\n.text-center {\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayLoader\" id=\"spinner\">\r\n  <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\r\n    y=\"0px\" width=\"100px\" height=\"56px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\" xml:space=\"preserve\">\r\n    <path opacity=\"0.2\" fill=\"#009688\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"></path>\r\n    <path fill=\"#25a39\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n        C22.32,8.481,24.301,9.057,26.013,10.047z\"\r\n      transform=\"rotate(227.228 20 20)\">\r\n      <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\" dur=\"0.5s\"\r\n        repeatCount=\"indefinite\"></animateTransform>\r\n    </path>\r\n  </svg>\r\n</div>\r\n\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<div *ngIf=\"sessionedOut\" class=\"session-wrapper\">\r\n  <div class='session-out'>\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n        <h4 class=\"text-center\"> Error - Session Invalid </h4>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <ol>\r\n          <li>You have kept the browser window idle for a long time. </li>\r\n          <li>You have logged in from another browser window. </li>\r\n          <li>You are accessing the application URL from a saved or static page.</li>\r\n          <li>If the problem persists, please clear the temporary files from your browser\r\n            and try again, or try to contact the administrator. </li>\r\n          <li>Please <a (click)=\"navigateToLogin(); sessionedOut= false;\"> click here </a>to log in and continue with\r\n            the application.</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_permissions_service__ = __webpack_require__("../../../../../src/app/_services/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_idle_core__ = __webpack_require__("../../../../@ng-idle/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_idle_keepalive__ = __webpack_require__("../../../../@ng-idle/keepalive/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_loader_service__ = __webpack_require__("../../../../../src/app/_services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(auth, idle, keepalive, router, loaderService, permService) {
        var _this = this;
        this.auth = auth;
        this.idle = idle;
        this.keepalive = keepalive;
        this.router = router;
        this.loaderService = loaderService;
        this.permService = permService;
        this.title = 'app';
        this.displayLoader = false;
        this.idleState = '';
        this.timedOut = false;
        this.expiring = false;
        this.lastPing = null;
        this.sessionedOut = false;
        window.onload = function () {
            if (localStorage.getItem('token')) {
                permService.getPermissionArray().subscribe();
            }
        };
        idle.setIdle(600); // 10 min
        // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
        idle.setTimeout(10);
        // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
        idle.setInterrupts(__WEBPACK_IMPORTED_MODULE_3__ng_idle_core__["a" /* DEFAULT_INTERRUPTSOURCES */]);
        idle.onIdleEnd.subscribe(function () {
            _this.expiring = false;
            _this.idleState = ' ';
        });
        idle.onTimeout.subscribe(function () {
            _this.timedOut = true;
            if (_this.timedOut === true) {
                _this.reset();
                _this.expiring = false;
                if (auth.isLoggedIn()) {
                    _this.sessionedOut = true;
                    localStorage.removeItem('token');
                    localStorage.clear();
                }
            }
        });
        idle.onIdleStart.subscribe(function () { });
        idle.onTimeoutWarning.subscribe(function (countdown) {
            if (auth.isLoggedIn()) {
                _this.expiring = true;
                _this.sessionedOut = false;
                _this.idleState = 'Your session expires in ' + countdown + ' seconds.';
            }
        });
        // sets the ping interval to 15 seconds
        keepalive.interval(15);
        keepalive.onPing.subscribe(function () { return _this.lastPing = new Date(); });
        this.reset();
    }
    AppComponent.prototype.reset = function () {
        this.idle.watch();
        this.idleState = '';
        this.timedOut = false;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderSubscription = this.loaderService.loaderCounter.subscribe(function (counter) {
            _this.displayLoader = counter !== 0;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.loaderSubscription.unsubscribe();
    };
    AppComponent.prototype.navigateToLogin = function () {
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__ng_idle_core__["b" /* Idle */],
            __WEBPACK_IMPORTED_MODULE_4__ng_idle_keepalive__["a" /* Keepalive */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_5__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_0__services_permissions_service__["a" /* PermissionManagementService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/_services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_permissions_service__ = __webpack_require__("../../../../../src/app/_services/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_management_user_management_component__ = __webpack_require__("../../../../../src/app/user-management/user-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_head_nav_head_nav_component__ = __webpack_require__("../../../../../src/app/home/head-nav/head-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_data_storage_service__ = __webpack_require__("../../../../../src/app/_services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_dateTimes_service__ = __webpack_require__("../../../../../src/app/_services/dateTimes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_loader_service__ = __webpack_require__("../../../../../src/app/_services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__profile_profile_service__ = __webpack_require__("../../../../../src/app/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__forgot_pass_forgot_pass_component__ = __webpack_require__("../../../../../src/app/forgot-pass/forgot-pass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_forgotusrpass_service__ = __webpack_require__("../../../../../src/app/_services/forgotusrpass.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__forgot_pass_reset_pass_reset_pass_component__ = __webpack_require__("../../../../../src/app/forgot-pass/reset-pass/reset-pass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_resetpass_services__ = __webpack_require__("../../../../../src/app/_services/resetpass.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_theme_service__ = __webpack_require__("../../../../../src/app/_services/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_commonFunction_service__ = __webpack_require__("../../../../../src/app/_services/commonFunction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_pstoken_interceptor__ = __webpack_require__("../../../../../src/app/_services/pstoken.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ng_idle_keepalive__ = __webpack_require__("../../../../@ng-idle/keepalive/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__demo_demo_component__ = __webpack_require__("../../../../../src/app/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__change_pass_change_pass_component__ = __webpack_require__("../../../../../src/app/change-pass/change-pass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_20_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_34_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_31__ng_idle_keepalive__["b" /* NgIdleKeepaliveModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__["a" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_33_ngx_toastr__["a" /* ToastrModule */].forRoot({
                    timeOut: 1500,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true
                }),
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_index__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_index__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_head_nav_head_nav_component__["a" /* HeadNavComponent */],
                __WEBPACK_IMPORTED_MODULE_21__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_24__forgot_pass_forgot_pass_component__["a" /* ForgotPassComponent */],
                __WEBPACK_IMPORTED_MODULE_26__forgot_pass_reset_pass_reset_pass_component__["a" /* ResetPassComponent */],
                __WEBPACK_IMPORTED_MODULE_2__user_management_user_management_component__["a" /* UserManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_32__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_35__demo_demo_component__["a" /* DemoComponent */],
                __WEBPACK_IMPORTED_MODULE_36__change_pass_change_pass_component__["a" /* ChangePassComponent */],
                __WEBPACK_IMPORTED_MODULE_37__welcome_welcome_component__["a" /* WelcomeComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["HashLocationStrategy"] },
                __WEBPACK_IMPORTED_MODULE_15__services_index__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"],
                __WEBPACK_IMPORTED_MODULE_15__services_index__["b" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_16__services_data_storage_service__["a" /* DataStorageService */],
                __WEBPACK_IMPORTED_MODULE_22__services_loader_service__["a" /* LoaderService */],
                __WEBPACK_IMPORTED_MODULE_23__profile_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_25__services_forgotusrpass_service__["a" /* ForgotusrpassrService */],
                __WEBPACK_IMPORTED_MODULE_27__services_resetpass_services__["a" /* ResetpassService */],
                __WEBPACK_IMPORTED_MODULE_1__services_permissions_service__["a" /* PermissionManagementService */],
                __WEBPACK_IMPORTED_MODULE_17__services_dateTimes_service__["a" /* DateTimeService */],
                __WEBPACK_IMPORTED_MODULE_0__services_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_28__services_theme_service__["a" /* ThemeService */],
                __WEBPACK_IMPORTED_MODULE_29__services_commonFunction_service__["a" /* CommonFunService */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_30__services_pstoken_interceptor__["b" /* TokenInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_30__services_pstoken_interceptor__["a" /* BaseUrlInterceptor */], multi: true }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_pass_forgot_pass_component__ = __webpack_require__("../../../../../src/app/forgot-pass/forgot-pass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_demo_component__ = __webpack_require__("../../../../../src/app/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_pass_change_pass_component__ = __webpack_require__("../../../../../src/app/change-pass/change-pass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_pass_reset_pass_reset_pass_component__ = __webpack_require__("../../../../../src/app/forgot-pass/reset-pass/reset-pass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_management_user_management_component__ = __webpack_require__("../../../../../src/app/user-management/user-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");











var appRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_index__["a" /* HomeComponent */],
        // canActivate: [AuthGuard],
        children: [
            {
                path: 'user-management',
                component: __WEBPACK_IMPORTED_MODULE_8__user_management_user_management_component__["a" /* UserManagementComponent */]
            },
            {
                path: 'my-profile',
                component: __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */]
            },
            {
                path: 'welcome',
                component: __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__["a" /* WelcomeComponent */]
            },
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */]
            }
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_index__["a" /* LoginComponent */] },
    { path: 'forgotpass', component: __WEBPACK_IMPORTED_MODULE_3__forgot_pass_forgot_pass_component__["a" /* ForgotPassComponent */] },
    { path: 'demo', component: __WEBPACK_IMPORTED_MODULE_4__demo_demo_component__["a" /* DemoComponent */] },
    { path: 'change-pass', component: __WEBPACK_IMPORTED_MODULE_5__change_pass_change_pass_component__["a" /* ChangePassComponent */] },
    { path: 'resetpassword/:token/:username', component: __WEBPACK_IMPORTED_MODULE_6__forgot_pass_reset_pass_reset_pass_component__["a" /* ResetPassComponent */] },
    // this is to redirect to the login page
    {
        path: '**',
        redirectTo: '/login'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/change-pass/change-pass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-img {\r\n    height: 28px;\r\n    margin: 16px 10px;\r\n}\r\n.login-wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 100vh;\r\n}\r\n.login-container .forgot-password {\r\n    font-size: 12px !important;\r\n    text-align: right !important;\r\n}\r\n.login-container {\r\n    width: 340px !important;\r\n    margin: auto;\r\n    padding: 26px 26px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change-pass/change-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ---------------------  chnage password  ---------------------------------- -->\n<div class=\"login-wrapper\">\n  <div class=\"page-container\">\n    <div class=\"login-container\">\n      <img class=\"login-img\" src=\"../../assets/Images/logo.png\" alt=\"login thumb\">\n      <form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"login(UserName.value,Password.value)\">\n        <!-- <div class=\"floatlabel-wrapper\">\n          <input type=\"password\" #Password ngModel name=\"Password\" placeholder=\"Old Password\" class=\"form-control\" required>\n        </div> -->\n        <div class=\"floatlabel-wrapper\">\n          <input type=\"password\" #newPassword ngModel name=\"Password\" placeholder=\"New Password\" class=\"form-control\" required>\n        </div>\n        <div class=\"floatlabel-wrapper\">\n          <input type=\"password\" #conPassword ngModel name=\"Password\" placeholder=\"Confirm Password\" class=\"form-control\" required>\n        </div>\n        <br>\n        <button [disabled]=\"!loginForm.valid\" class=\"btn btn-primary theme-btn fullWidth\" type=\"submit\">Sign In</button>\n      </form>\n\n      <!-- <a href=\"#\" class=\"forgot-password\">\n        Forgot Password?\n      </a> -->\n    </div>\n    <!-- <div class=\"create-account\">\n      <a href=\"#\">\n        Create Account\n      </a>\n    </div> -->\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/change-pass/change-pass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangePassComponent = /** @class */ (function () {
    function ChangePassComponent() {
    }
    ChangePassComponent.prototype.ngOnInit = function () {
    };
    ChangePassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-pass',
            template: __webpack_require__("../../../../../src/app/change-pass/change-pass.component.html"),
            styles: [__webpack_require__("../../../../../src/app/change-pass/change-pass.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangePassComponent);
    return ChangePassComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    background: white;\r\n}\r\n.iconic-w-horizontal {\r\n    padding: 10px;\r\n    background-color: #009fb3 !important;\r\n    position: relative;\r\n}\r\n.iconic-w-horizontal .ico-block {\r\n    width: 46px;\r\n    height: 42px;\r\n    font-size: 24px;\r\n}\r\n.iconic-w-horizontal .w-meta-info {\r\n    padding-left: 10px;\r\n}\r\n.light-text .w-meta-value {\r\n    font-size: 22px;\r\n}\r\n.w-info-graph .w-info-chart .w-info-chart-header {\r\n    padding: 25px;\r\n}\r\n.mini-chart-list {\r\n    padding: 25px;\r\n    padding-top: 0;\r\n}\r\n.box-tab .nav-tabs,\r\n.box-tab .tabs-left > .nav-tabs > li > a {\r\n    min-width: 185px !important;\r\n    text-align: left;\r\n    font-size: 14px;\r\n}\r\n.box-tab .tab-content {\r\n    margin-left: 185px;\r\n}\r\n.box-tab .tabs-left > .nav-tabs > li > a > i {\r\n    margin: 10px 8px 10px 14px\r\n}\r\n.book-txt {\r\n    font-size: 14px;\r\n}\r\n.marks-details .w-meta-info .w-meta-title {\r\n    font-size: 13px;\r\n    padding-bottom: 5px;\r\n}\r\n.marks-details .ico-block {\r\n    width: 40px;\r\n    height: 40px;\r\n    font-size: 24px;\r\n}\r\n.marks-details .w-meta-value {\r\n    font-size: 20px;\r\n    padding-bottom: 0px;\r\n}\r\n.page-breadcrumb {\r\n    margin-bottom: 20px;\r\n}\r\n.charts-deep-view .w-info-graph {\r\n    border: 0px;\r\n}\r\n#recent-user .box-widget {\r\n    border: 0px;\r\n}\r\nol {\r\n    margin: 0;\r\n    padding-left: 15px;\r\n    margin-top: 20px;\r\n}\r\nhr {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    border: 0;\r\n    border-top: 1px solid transparent;\r\n}\r\n.back-btn {\r\n    position: absolute;\r\n    right: 19px;\r\n    bottom: -10px;\r\n}\r\n.download-link {\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 60px;\r\n    background: #86c7f3;\r\n    padding: 8px 14px;\r\n    color: white;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"box-tab clearfix\">\r\n      <div class=\"tabs-left clearfix\">\r\n        <!-- Only required for left/right tabs -->\r\n        <ul class=\"nav nav-tabs tab-tooltip\">\r\n          <li *ngFor=\"let book of books; let i = index;\">\r\n            <a href=\"#recent-user\" title=\"Recent User \" (click)=\"subjectData(book.name)\" data-toggle=\"tab\">\r\n              <i class=\"fa fa-book\"></i> <span class=\"book-txt\"> {{ book.name }} </span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"tab-content\" *ngIf=\"initialHide\">\r\n          <div class=\"tab-pane active\" id=\"recent-user\">\r\n            <!-- <h4 class=\"pane-header\">Users</h4> -->\r\n            <div class=\"row\" *ngIf=\"!showMore\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"box-widget widget-module\">\r\n                  <div class=\"widget-container\">\r\n                    <div class=\"widget-block\">\r\n                      <div class=\"marks-details\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-2\" *ngFor=\"let data of subjData.marks; let i = index;\">\r\n                            <div class=\"iconic-w-horizontal w_bg_teal light-text\">\r\n                              <div class=\"w-meta-info number-rotate\">\r\n                                <span class=\"w-meta-value number-animate\" data-animation-duration=\"1500\"> {{ data.marks\r\n                                  }} </span>\r\n                                <span class=\"w-meta-title\">{{data.name}}</span>\r\n                              </div>\r\n                              <span class=\"left-bar\"> &nbsp; </span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"w-info-graph\">\r\n                        <div class=\"clearfix\">\r\n                          <div class=\"col-md-7\">\r\n                            <div class=\"w-info-chart\">\r\n                              <div class=\"w-info-chart-header\">\r\n                                <h2 class=\"text-left\"> Data Insights </h2>\r\n                                <ol>\r\n                                  <li *ngFor=\"let insight of subjData.insights; let i = index;\">\r\n                                    {{ insight.name }}\r\n                                  </li>\r\n                                </ol>\r\n                                <hr>\r\n                                <h2 class=\"text-left\"> Select to view </h2>\r\n                                <ol style=\"margin-left: -15px;\">\r\n                                  <div class=\"radio\">\r\n                                    <label><input type=\"radio\" (click)=\"showMoreDetails('chapter')\" name=\"optradio\">\r\n                                      Chapter wise </label>\r\n                                  </div>\r\n                                  <div class=\"radio\">\r\n                                    <label><input type=\"radio\" (click)=\"showMoreDetails('question')\" name=\"optradio\">\r\n                                      Question-Paper wise </label>\r\n                                  </div>\r\n                                </ol>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-5\">\r\n                            <div class=\"w-info-chart-meta\">\r\n                              <h2 class=\"text-center\">Class Standings</h2>\r\n                              <div style=\"display: block\">\r\n                                <canvas baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\"\r\n                                  (chartHover)=\"pieCharttHovered($event)\" (chartClick)=\"pieChartClicked($event)\">\r\n                                </canvas>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"back-btn\">\r\n                          <button class=\"btn btn-info\" (click)=\"initialHide = false\"> Back to report card </button>\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"tab-content\" *ngIf=\"!initialHide\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-hover table-bordered matmix-dt bg-hc-border\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th colspan=\"7\">\r\n                        <div class=\"dt-col-header text-center\"> {{ selectedExamName }} </div>\r\n                        <p class=\"text-center\">\r\n                          Report Card\r\n                        </p>\r\n                      </th>\r\n                    </tr>\r\n                    <tr>\r\n                      <th class=\"tc-center\">\r\n                        Subject\r\n                      </th>\r\n                      <th class=\"tc-center\">\r\n                        Marks\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let subj of books\">\r\n                      <td class=\"tc-center\"> {{ subj.name }} </td>\r\n                      <td class=\"tc-center\"> {{ subj.marks }} </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"w-info-chart-meta\">\r\n                <h2 class=\"text-center\">Class Standings</h2>\r\n                <div style=\"display: block\">\r\n                  <canvas baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\"\r\n                    (chartHover)=\"pieCharttHovered($event)\" (chartClick)=\"pieChartClicked($event)\">\r\n                  </canvas>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"w-info-chart-meta\">\r\n                <h2 class=\"text-left\" style=\"margin: -4px 0px 15px 0px;\">Class Results</h2>\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-hover table-bordered matmix-dt bg-hc-border\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"tc-center\" *ngFor=\"let stand of standings\">\r\n                          {{stand.name}}\r\n                        </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <!-- <th class=\"tc-center\"> {{ stand.name }} </th> -->\r\n                        <td class=\"tc-center\" *ngFor=\"let stand of standings\"> {{ stand.number }} </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--- POPUP -->\r\n\r\n<!-- Modal -->\r\n<button type=\"button\" style=\"display: none;\" class=\"btn btn-info btn-lg\" id=\"statModalBtn\" data-toggle=\"modal\"\r\n  data-target=\"#statModal\"></button>\r\n<div class=\"modal fade\" id=\"statModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\"> {{ statsTitle }} </h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"charts-deep-view\">\r\n          <div class=\"w-info-graph\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"w-info-chart\">\r\n                  <div class=\"w-info-chart-header\">\r\n                    <!-- <h2>23,320 Items Sold</h2> -->\r\n                    <div>\r\n                      <div style=\"display: block\">\r\n                        <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\r\n                          [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\"\r\n                          (chartClick)=\"chartClicked($event)\"></canvas>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"download-link\" *ngIf=\"statsTitle == 'Question wise stats'\">\r\n              <a href=\"../../assets/img/question-paper.pdf\" download> Download Question paper </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<button type=\"button\" style=\"display: none;\" class=\"btn btn-info btn-lg\" id=\"statModalBtn1\" data-toggle=\"modal\"\r\n  data-target=\"#statModal\"></button>\r\n<div class=\"modal fade\" id=\"statModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\"> {{ statsTitle }} </h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"charts-deep-view\">\r\n          <div class=\"w-info-graph\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"w-info-chart\">\r\n                  <div class=\"w-info-chart-header\">\r\n                    <!-- <h2>23,320 Items Sold</h2> -->\r\n                    <div>\r\n                      <div style=\"display: block\">\r\n                        <canvas baseChart [datasets]=\"barChartData1\" [labels]=\"barChartLabels1\" [options]=\"barChartOptions\"\r\n                          [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\"\r\n                          (chartClick)=\"chartClicked($event)\"></canvas>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"download-link\" *ngIf=\"statsTitle == 'Question wise stats'\">\r\n              <a href=\"../../assets/img/question-paper.pdf\" download> Download Question paper </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_permissions_service__ = __webpack_require__("../../../../../src/app/_services/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loader_service__ = __webpack_require__("../../../../../src/app/_services/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    /*----------------pie Ends----------------------------------*/
    function DashboardComponent(dashService, loader, permService) {
        var _this = this;
        this.dashService = dashService;
        this.loader = loader;
        this.permService = permService;
        this.selectedExamName = localStorage.getItem('selectedExam');
        this.books = [];
        this.standings = [];
        this.marks = [
            { id: 1, name: 'Total Marks', marks: 25 },
            { id: 2, name: 'Avg. Marks', marks: 15 },
            { id: 3, name: 'Marks Obtained', marks: 24 },
            { id: 4, name: 'Highest marks', marks: 25 },
            { id: 5, name: 'Lowest', marks: 12 },
        ];
        this.showMore = false;
        this.statsTitle = '';
        /*-----------------Bar Chart -----------------------*/
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Chapter1', 'Chapter2', 'Chapter3'];
        this.barChartLabels1 = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80], label: 'Obtained percentage' },
            { data: [28, 48, 40], label: 'Average percentage of class' }
        ];
        this.barChartData1 = [
            { data: [65, 59, 80, 75, 50], label: 'Obtained percentage' },
            { data: [28, 48, 40, 60, 65], label: 'Average percentage of class' }
        ];
        /*-----------------Bar end ---------------------------------*/
        /*-----------------Pie Chart--------------------------------*/
        this.pieChartLabels = ['Distinction', 'First Class', 'Second Class', 'Others'];
        this.pieChartData = [10, 20, 15, 6];
        this.pieChartType = 'pie';
        this.initialHide = false;
        document.title = 'Dashboard';
        this.loader.displayLoader(true);
        this.dummyData();
        setTimeout(function () {
            _this.loader.displayLoader(false);
        }, 800);
    }
    DashboardComponent.prototype.showMoreDetails = function (title) {
        if (title === 'chapter') {
            this.statsTitle = 'Chapter wise stats';
            document.getElementById('statModalBtn').click();
        }
        else if ('question') {
            this.statsTitle = 'Question wise stats';
            document.getElementById('statModalBtn1').click();
        }
        // this.showMore = true;
    };
    DashboardComponent.prototype.subjectData = function (sub) {
        var _this = this;
        this.initialHide = true;
        this.dashService.getSubjectDetails(sub).subscribe(function (res) {
            _this.subjData = res;
        });
    };
    DashboardComponent.prototype.dummyData = function () {
        var _this = this;
        this.dashService.getDummyData().subscribe(function (res) {
            _this.dashbordData = res;
            _this.books = _this.dashbordData.books;
            _this.standings = _this.dashbordData.standings;
            // this.pieChartLabels = this.dashbordData.pieChart.labels;
            // this.pieChartData = this.dashbordData.pieChart.numbers;
            console.log(_this.pieChartData, _this.pieChartLabels);
        });
    };
    /*-----------------Bar Chart---------------------------*/
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.randomize = function () {
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40,
            (Math.random() * 100),
            10,
            (Math.random() * 100)
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
    };
    /*-----------------Bar End-------------------------------------*/
    /*-----------------Pie Chart------------------------------------*/
    DashboardComponent.prototype.pieChartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.pieChartHovered = function (e) {
        console.log(e);
    };
    /*-----------------Pie Ends ------------------------------------*/
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashService */],
            __WEBPACK_IMPORTED_MODULE_3__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_2__services_permissions_service__["a" /* PermissionManagementService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ComplaintsWithPercent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Complaints = /** @class */ (function () {
    function Complaints() {
    }
    return Complaints;
}());
var ComplaintsWithPercent = /** @class */ (function () {
    function ComplaintsWithPercent() {
    }
    return ComplaintsWithPercent;
}());

var DashService = /** @class */ (function () {
    function DashService(http) {
        this.http = http;
        this.connectorName = '';
        // tslint:disable-next-line:member-ordering
        this.dashbordData = {
            books: [
                { id: 1, name: 'Biology' },
                { id: 2, name: 'Physics' },
                { id: 3, name: 'Chemistry' },
                { id: 4, name: 'Kannada' },
                { id: 5, name: 'English' },
                { id: 6, name: 'Hindi' }
            ],
            marks: [
                { id: 1, name: 'Total Marks', marks: 25 },
                { id: 2, name: 'Avg. Marks', marks: 15 },
                { id: 3, name: 'Marks Obtained', marks: 24 },
                { id: 4, name: 'Highest marks', marks: 25 },
                { id: 5, name: 'Lowest', marks: 12 },
            ],
            insights: [
                { id: 1, name: 'Needs to improvement' },
                { id: 2, name: 'Good grasping power' },
                { id: 3, name: 'willing to learn' },
            ],
            pieChart: {
                labels: ['Biology', 'Physics', 'Chemistry', 'Kannada', 'English', 'Hindi'],
                data: [75, 66, 99, 100, 55, 45]
            },
            barChart: {
                name: 'Question Paper stats',
                data: [
                    { data: [65, 59, 80, 25, 56, 55, 40, 50, 40, 35], label: 'Marks in the chapter' },
                    { data: [28, 48, 40, 19, 56, 47, 35, 40, 39, 34], label: 'Obtained Marks' }
                ],
                labels: ['Chapter1', 'Chapter2', 'Chapter3', 'Chapter4',
                    'Chapter5', 'Chapter6', 'Chapter7', 'Chapter8', 'Chapter9', 'Chapter10']
            }
        };
        this.connectorName = localStorage.getItem('selectedCon');
        this.connectorName = this.connectorName.toLocaleLowerCase();
        this.connectorName = this.connectorName === 'majorpay' ? 'm88pay' : this.connectorName;
    }
    DashService.prototype.transactionEasySummary = function (transactionSummaryInputs) {
        var body = JSON.stringify(transactionSummaryInputs);
        return this.http.post('/gateway/dashboard/' + this.connectorName + '/transactionSummary', body)
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    DashService.prototype.currencyEasySummary = function (currencySummaryInputs) {
        var body = JSON.stringify(currencySummaryInputs);
        return this.http.post('/gateway/dashboard/' + this.connectorName + '/currencySummary', body)
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    DashService.prototype.graphEasySummary = function (graphSummaryInputs) {
        var body = JSON.stringify(graphSummaryInputs);
        return this.http.post('/gateway/dashboard/' + this.connectorName + '/graphSummary', body)
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    DashService.prototype.getDummyData = function () {
        return this.http.get('../../assets/json/pages_users_list.json')
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    DashService.prototype.getSubjectDetails = function (sub) {
        return this.http.get('../../assets/json/subjects/' + sub + '.json')
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    DashService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], DashService);
    return DashService;
}());



/***/ }),

/***/ "../../../../../src/app/demo/demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-brand > img {\r\n    display: block;\r\n    max-height: 24px;\r\n}\r\n\r\n.navbar-toggle .icon-bar {\r\n    display: block;\r\n    width: 22px;\r\n    height: 2px;\r\n    border-radius: 1px;\r\n    background: #009688;\r\n}\r\n\r\n.top-bar {\r\n    background-color: transparent;\r\n    margin-top: 30px;\r\n}\r\n\r\n.navbar-nav > li > a {\r\n    color: #005b52;\r\n    background: transparent;\r\n}\r\n\r\n.demo-wrapper {\r\n    height: 100vh;\r\n    background-image: -webkit-gradient(linear, right top, left top, from(rgba(0,187,133,0.7)), to(rgba(0,251,248,0.6)));\r\n    background-image: linear-gradient(to left, rgba(0,187,133,0.7), rgba(0,251,248,0.6));\r\n    background-image: -webkit-linear-gradient(to left, rgba(0,187,133,0.7), rgba(0,251,248,0.6))\r\n}\r\n\r\n.demo-container {\r\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/Images/demo-bg.png")) + ") 0 0;\r\n    background-size: contain;\r\n    height: 100vh;\r\n}\r\n\r\n.full-height {\r\n    height: 100vh;\r\n}\r\n\r\na {\r\n    cursor: pointer;\r\n}\r\n\r\n.main-blk-1{\r\n    width: 80%;\r\n}\r\n\r\n.main-blk-2 {\r\n    width: 20%;\r\n    overflow: hidden;\r\n}\r\n\r\n.blk-1 {\r\n    background: linear-gradient(170deg, #009688 40%, #012c28 100%);\r\n    transform: rotate(0deg) skewY(10deg);\r\n    -webkit-transform: rotate(0deg) skewY(10deg);\r\n    top: -25px;\r\n    z-index: 9;\r\n}\r\n\r\n.blk-2{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    text-align: center;\r\n    /* background: brown; */\r\n    top: -54px;\r\n    z-index: 1;\r\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/Images/pie.jpg")) + ")\r\n}\r\n\r\n.blk-2:after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #ffffffd6;\r\n}\r\n\r\n.blk-1, .blk-2{\r\n    height: 54vh;\r\n}\r\n\r\n.blk-1 img {\r\n    max-width: 151px;\r\n    -webkit-transform: rotate(0deg) skewY(-10deg);\r\n            transform: rotate(0deg) skewY(-10deg);\r\n    margin: auto;\r\n    display: block;\r\n    margin-top: 49px;\r\n}\r\n\r\n.play-wrap {\r\n    /* position: absolute; */\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 19.5%;\r\n    margin: auto;\r\n    width: 140px;\r\n    height: 140px;\r\n    z-index: 2;\r\n}\r\n\r\n.title {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.video-play-btn {\r\n    position: relative;\r\n    display: table;\r\n    margin: 0 auto;\r\n    width: 96px;\r\n    height: 96px;\r\n    background: none;\r\n    border: 1px solid #005C5B;\r\n    border-radius: 50%;\r\n}\r\n\r\n.video-play-btn:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 6%;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 20px 0 20px 28px;\r\n    border-style: solid;\r\n    border-color: transparent #005C5B;\r\n    font-size: 0;\r\n    line-height: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-wrapper\">\n<div class=\"page-container hide-list-menu demo-container full-height col-md-9 main-blk-1\">\n  <div class=\"page-content\">\n    <!--Topbar Start Here -->\n    <header class=\"top-bar\">\n      <div class=\"container-fluid top-nav\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">\n            <img src=\"../../assets/Images/logo.png\" alt=\"\">\n          </a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a routerLink=\"/login\">REQUEST FOR DEMO</a></li>\n            <li><a href=\"#\">REGISTER</a></li>\n            <li><a routerLink=\"/login\">LOG IN </a></li>\n          </ul>\n        </div>\n      </div>\n    </header>\n    <div class=\"main-container\">\n      <div class=\"container-fluid\">\n        <!-- You can use owl-carousel selector to include its component -->\n      </div>\n    </div>\n    <!--Footer Start Here -->\n\n  </div>\n</div>\n<div class=\"col-md-3 full-height main-blk-2\">\n  <div class=\"row\">\n    <div class=\"col-md-12 blk-1\">\n      <img src=\"../../assets/Images/result-analysis.png\" class=\"responsive-img\" alt=\"\">\n    </div>\n    <div class=\"col-md-12 blk-2\">\n        <div class=\"play-wrap\">\n            <div class=\"title bold\">PRODUCT VIDEOS</div>\n            <!-- / .heading -->\n            <div id=\"js-video-play-btn\" class=\"video-play-btn\" style=\"/* transform: matrix(1, 0, 0, 1, 0, 0); */\"></div>  \n        </div>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_owl_carousel__ = __webpack_require__("../../../../ngx-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_owl_carousel__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('owlElement'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_owl_carousel__["OwlCarousel"])
    ], DemoComponent.prototype, "owlElement", void 0);
    DemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__("../../../../../src/app/demo/demo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demo/demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/forgot-pass/forgot-pass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n     /*----------- forgot-pass.css -----------*/\r\n     .login-logo img {\r\n        width: 70px;\r\n        height: 24px;\r\n    }\r\n     .sls-cancel-btn, .sls-cancel-btn:hover, .sls-cancel-btn:focus {\r\n        padding: 10px 10px !important;\r\n        height: 56px !important;\r\n        background: #FFA000;\r\n    }\r\n     .val-message {\r\n\t\tmargin: 20px auto;\r\n\t\twidth: 600px;\r\n\t\tpadding: 20px 30px 10px;       \r\n\t}\r\n     .val-success {\r\n\t\tbackground: #f4fcee;\r\n\t\tborder: 2px solid #91e458;\r\n\t}\r\n     .val-error{\r\n\t\tcolor: #a94442;\r\n\t\tbackground-color: #f2dede;\r\n\t\tborder-color: #ebccd1;\r\n        width:470px;\r\n        padding: 13px 40px 10px !important;\r\n    }\r\n     .val-error i {\r\n        size: 30px;\r\n        position: absolute;\r\n        left: 6px;\r\n        top: 10px;\r\n    }\r\n     .authentication-wrapper.authentication-2 {\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n    }\r\n     .pointer {\r\n        cursor: pointer;\r\n    }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgot-pass/forgot-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication-wrapper authentication-2 px-4\">\r\n  \r\n  <div class=\"authentication-inner py-5\" *ngIf='!success'>\r\n    <!-- Form -->\r\n    <form class=\"card\" name=\"forogotpass\" #fp=\"ngForm\" (ngSubmit)=\"submit(fp.value)\">\r\n      <div class=\"p-4 p-sm-5\">\r\n\r\n        <!-- Logo -->\r\n        <div class=\"d-flex justify-content-center align-items-center pb-2\">\r\n          <div class=\"w-100 position-relative text-center\">\r\n            <img src=\"\" alt=\"\" style=\"max-height: 65px;\" #logoEle>\r\n          </div>\r\n        </div>\r\n        <!-- / Logo -->\r\n\r\n        <!-- <h5 class=\"text-center text-muted font-weight-normal mb-4\">Send Email</h5> -->\r\n\r\n        <hr class=\"mt-0 mb-4\">\r\n\r\n        <p>\r\n          Enter your email address and we will send you a link to reset your password.\r\n        </p>\r\n\r\n        <div class=\"form-group\">\r\n          <input id=\"emailAddress\" name=\"emailAddress\" placeholder=\"Email Address\" #em=\"ngModel\" ngModel type=\"text\" value=\"\" required\r\n            pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" class=\"form-control\" placeholder=\"Email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input id=\"username\" name=\"username\" placeholder=\"Username\" class=\"form-control\" ngModel type=\"text\" value=\"\" required>\r\n        </div>\r\n\r\n        <button type=\"button\" class=\"btn btn-primary btn-block\" type=\"submit\" id=\"submitBtn\" [disabled]=\"!fp.valid\">Submit</button>\r\n\r\n      </div>\r\n    </form>\r\n    <!-- / Form -->\r\n\r\n  </div>\r\n  <div class=\"success-failure-msg-block\">\r\n\r\n      <div class=\"val-message val-success\" *ngIf='success'>\r\n        <span style=\"color:green;\"> <i class=\"fa fa-check-square-o fa-2x\" aria-hidden=\"true\" style=\"size:40px;\"></i> </span>\r\n        <span>A Reset Link has been sent to {{this.emaiID}}. Please use the same to reset your Password.</span>\r\n        <p style=\"margin-top:10px;\">If you don't see this email in your inbox within 15 minutes, look for it in your junk mail\r\n          folder. If you find it there, please mark the email as \"Not Junk\". \r\n          <a class=\"pointer\" routerLink=\"/login\"> click here </a> to login </p>\r\n        <p></p>\r\n      </div>\r\n  \r\n      <div class=\"val-message val-error text-center\" *ngIf='errorOccured'>\r\n        <div style=\"color:red;\"> <i class=\"fa fa-window-close fa-2x\" aria-hidden=\"true\" style=\"size:30px;\"></i>\r\n          {{errorMsg}}\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/forgot-pass/forgot-pass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_forgotusrpass_service__ = __webpack_require__("../../../../../src/app/_services/forgotusrpass.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__ = __webpack_require__("../../../../../src/app/_services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("../../../../../src/app/_services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_permissions_service__ = __webpack_require__("../../../../../src/app/_services/permissions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPassComponent = /** @class */ (function () {
    function ForgotPassComponent(_forogotPassword, loader, toastr, _dataStorage, permService) {
        this._forogotPassword = _forogotPassword;
        this.loader = loader;
        this.toastr = toastr;
        this._dataStorage = _dataStorage;
        this.permService = permService;
        this.success = false;
        this.errorOccured = false;
        this.emaiID = '';
        document.title = 'Forgot Password';
    }
    ForgotPassComponent.prototype.ngOnInit = function () {
        this.success = false;
        this.errorOccured = false;
    };
    ForgotPassComponent.prototype.ngAfterViewChecked = function () {
    };
    /*****************************************************************************************************
     * @function submit
     * @param fp
     */
    ForgotPassComponent.prototype.submit = function (fp) {
        var _this = this;
        this.loader.displayLoader(true);
        this.emaiID = fp.emailAddress;
        this._forogotPassword.forgotPass(fp.emailAddress, fp.username)
            .subscribe(function (result) {
            _this.loader.displayLoader(false);
            if (result.status === 1) {
                _this.success = true;
                _this.errorOccured = false;
                _this.successMsg = 'A reset link has been sent to your email id. Please use it to proceed further.';
            }
            else {
                _this.success = false;
                _this.toastr.warning(result.error.message);
            }
            // if (result) {
            //   this.success = true;
            //   this.errorOccured = false;
            //   this.successMsg = 'A reset link has been sent to your email id. Please use it to proceed further.';
            // } else {
            //   this.errorOccured = true;
            //   this.success = false;
            //   this.errorMsg = this._dataStorage.read('forgotpswpageerror');
            // }
        }, function (err) {
            _this.toastr.warning('some unknown error has occured');
            _this.loader.displayLoader(false);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('logoEle'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ForgotPassComponent.prototype, "logoEle", void 0);
    ForgotPassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-pass',
            template: __webpack_require__("../../../../../src/app/forgot-pass/forgot-pass.component.html"),
            styles: [__webpack_require__("../../../../../src/vendor/styles/authentication.css"), __webpack_require__("../../../../../src/app/forgot-pass/forgot-pass.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_forgotusrpass_service__["a" /* ForgotusrpassrService */],
            __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */],
            __WEBPACK_IMPORTED_MODULE_5__services_permissions_service__["a" /* PermissionManagementService */]])
    ], ForgotPassComponent);
    return ForgotPassComponent;
}());



/***/ }),

/***/ "../../../../../src/app/forgot-pass/reset-pass/reset-pass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".authentication-inner {\r\n    max-width: 384px;\r\n    margin: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgot-pass/reset-pass/reset-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ****************** -->\r\n\r\n<div class=\"authentication-wrapper authentication-2 px-4\" *ngIf=\"validToken\">\r\n  \r\n    <div class=\"authentication-inner py-5\" *ngIf='!success'>\r\n      <!-- Form -->\r\n      <form class=\"card simple_form new_user\" id=\"signin_form\" name=\"form\" accept-charset=\"UTF-8\" #rp=ngForm>\r\n        <div class=\"p-4 p-sm-5\">\r\n\r\n          <h5 class=\"text-center text-muted font-weight-normal mb-4\">Reset Password</h5>\r\n  \r\n          <hr class=\"mt-0 mb-4\">\r\n  \r\n          <p>\r\n            Enter new password and confirm password\r\n          </p>\r\n  \r\n          <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" \r\n            id=\"new-pwd\" name=\"newpwd\" #newpwd =\"ngModel\"\r\n            ngModel\r\n            pattern=\"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~!@#$%^&*()_+]).{6,}$\" \r\n            (focusout)=\"passwordLnChk(rp.value.newpwd)\" \r\n            placeholder=\"Enter new password\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" \r\n            id=\"con-pwd\" name=\"conpwd\" #conpwd = \"ngModel\"\r\n            ngModel placeholder=\"Confirm password\" required>\r\n          </div>\r\n  \r\n          <button type=\"button\" \r\n                  class=\"btn btn-primary btn-block\" \r\n                  type=\"submit\" id=\"submitBtn\" \r\n                  [disabled]=\"!rp.valid\" \r\n                  (click)=\"submitPass(rp.value)\"> Submit </button>\r\n  \r\n        </div>\r\n      </form>\r\n      <!-- / Form -->\r\n  \r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/forgot-pass/reset-pass/reset-pass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_resetpass_services__ = __webpack_require__("../../../../../src/app/_services/resetpass.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_storage_service__ = __webpack_require__("../../../../../src/app/_services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_loader_service__ = __webpack_require__("../../../../../src/app/_services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_permissions_service__ = __webpack_require__("../../../../../src/app/_services/permissions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResetPassComponent = /** @class */ (function () {
    function ResetPassComponent(_route, _resetPass, toastr, loader, _dataStorages, _router, permService) {
        this._route = _route;
        this._resetPass = _resetPass;
        this.toastr = toastr;
        this.loader = loader;
        this._dataStorages = _dataStorages;
        this._router = _router;
        this.permService = permService;
        this.showResetDiv = false;
        this.errorOccured = false;
        this.success = false;
        document.title = 'Reset Password';
    }
    ResetPassComponent.prototype.ngOnInit = function () {
        // get the token and email id value from the route parameters
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.token = params['token'];
            _this.username = params['username'];
        });
        // Post it to the backend to verify if the token and email matches.
        this._resetPass.tokenUserVerifier(this.token, this.username)
            .subscribe(function (result) {
            if (result) {
                _this.errorOccured = false;
                _this.showResetDiv = true;
                _this.validToken = true;
            }
            else {
                _this.showResetDiv = false;
                _this.errorOccured = true;
                _this.validToken = false;
                // this.errorMsg = this._dataStorages.read('forgotError');
                _this.toastr.error('Invalid Token');
            }
        });
    };
    ResetPassComponent.prototype.passwordLnChk = function (formVals) {
        if ((formVals).length < 6) {
            this.errorOccured = true;
            this.errorMsg = 'Signon password should have minimum "6" characters';
        }
        else {
            this.errorOccured = false;
            this.errorMsg = '';
        }
    };
    ResetPassComponent.prototype.submitPass = function (formVals) {
        var _this = this;
        if (formVals.newpwd === formVals.conpwd) {
            this.loader.displayLoader(true);
            this._resetPass.saveNewPassword(this.username, formVals.conpwd, this.token)
                .subscribe(function (res) {
                _this.loader.displayLoader(false);
                if (res.status === 1) {
                    _this.success = true;
                    _this.toastr.success('Your password has been changed successfully.You will be rediredted to Login page.');
                    _this.successMsg = 'Your password has been changed successfully.You will be rediredted to Login page.';
                    _this.errorOccured = false;
                    setTimeout(function () {
                        _this.logout();
                    }, 3000);
                }
                else {
                    _this.errorOccured = true;
                    _this.errorMsg = res.error.message;
                }
            });
        }
        else {
            this.loader.displayLoader(false);
            this.toastr.warning('New password and Confirm password must match.');
            this.errorMsg = 'New password and Confirm password must match.';
            this.errorOccured = true;
            this.success = false;
        }
    };
    ResetPassComponent.prototype.showPassword = function (input) {
        input.type = input.type === 'password' ? 'text' : 'password';
    };
    ResetPassComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.clear();
        this._router.navigate(['/login']);
    };
    ResetPassComponent.prototype.ngOnDestroy = function () {
    };
    ResetPassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset-pass',
            template: __webpack_require__("../../../../../src/app/forgot-pass/reset-pass/reset-pass.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forgot-pass/reset-pass/reset-pass.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__services_resetpass_services__["a" /* ResetpassService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_storage_service__["a" /* DataStorageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_6__services_permissions_service__["a" /* PermissionManagementService */]])
    ], ResetPassComponent);
    return ResetPassComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/head-nav/head-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.user-thumb img {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n.exams-dropdown {\r\n    margin-right: 0px !important; \r\n}\r\n.exams-dropdown .user-info {\r\n    line-height: 60px;\r\n    margin-top: 0;\r\n    font-size: 18px;\r\n}\r\n.exams-dropdown .user-thumb{\r\n    line-height: 52px;\r\n    width: 20px;\r\n}\r\n.exams-dropdown .dropdown-menu {\r\n    min-width: 148px;\r\n    max-height: 185px;\r\n    overflow-y: auto;\r\n}\r\n.exams-dropdown .dropdown {\r\n    border-right: 0px;\r\n}\r\n.g-style {\r\n    line-height: 35px;\r\n    text-align: center;\r\n    display: block;\r\n    font-size: 18px;\r\n    border: 1px solid rgb(199, 194, 194);\r\n    border-radius: 100%;\r\n    background: white;\r\n    width: 39px;\r\n    color: #2ebbc0;\r\n}\r\n.g-s {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.pointer {\r\n    cursor: pointer;\r\n}\r\n.notification-nav{\r\n    position: absolute;\r\n    right: -11px;\r\n    top: 7px;\r\n    width: auto;\r\n}\r\n.notification-nav .dropdown-menu {\r\n    margin-left: -237px;\r\n    margin-top: -7px;\r\n}\r\n/* .user-nav {\r\n    margin-right: 0px;\r\n} */\r\n/* .notification-nav {\r\n    float: left;\r\n    margin-left: 15px;\r\n    width: auto;\r\n} */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/head-nav/head-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"top-bar\">\r\n  <div class=\"container-fluid top-nav\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <div class=\"clearfix top-bar-action\">\r\n          <a class=\"navbar-brand pointer\" [routerLink]=\"['/home', 'dashboard']\">\r\n            <img src=\"../../assets/Images/logo.png\" alt=\"\" style=\"max-height: 30px;\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 responsive-fix top-mid\">\r\n\r\n      </div>\r\n      <div class=\"col-md-6 responsive-fix\">\r\n        <div class=\"top-aside-right\">\r\n\r\n          <div class=\"user-nav\">\r\n            <ul>\r\n              <li class=\"dropdown\">\r\n                <a data-toggle=\"dropdown\" href=\"#\" class=\"clearfix dropdown-toggle waves-effect waves-block waves-classic\">\r\n                  <span class=\"user-info\">Sagar Bharadwaj <cite>sagar@gmail.com</cite></span>\r\n                  <span class=\"user-thumb g-s\">\r\n                    <!-- <img src=\"../../../assets/Images/dp.jpg\" alt=\"image\" width=\"46\" height=\"46\"></span> -->\r\n                    <span class=\"g-style\">\r\n                      SB\r\n                    </span>\r\n                  </span>\r\n                </a>\r\n                <ul role=\"menu\" class=\"dropdown-menu fadeInUp\">\r\n                  <li class=\"pointer\" [routerLink]=\"['/home', 'welcome']\">\r\n                    <a>\r\n                      <span class=\"user-nav-icon\">\r\n                        <i class=\"fa fa-user\"></i>\r\n                      </span>\r\n                      <span class=\"user-nav-label\">\r\n                        View Profile\r\n                      </span>\r\n                    </a>\r\n                  </li>\r\n                  <li><a href=\"#\"><span class=\"user-nav-icon\"><i class=\"fa fa-lock\"></i></span><span class=\"user-nav-label\">Logout</span></a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"user-nav exams-dropdown\">\r\n            <ul>\r\n              <li class=\"dropdown\">\r\n                <a data-toggle=\"dropdown\" href=\"#\" class=\"clearfix dropdown-toggle waves-effect waves-block waves-classic\">\r\n                  <span class=\"user-info\">\r\n                    {{selectedExam}}\r\n                  </span>\r\n                  <span class=\"user-thumb\">\r\n                    <i class=\"ico-chevron-thin-down\"> </i>\r\n                  </span>\r\n                </a>\r\n                <ul role=\"menu\" class=\"dropdown-menu fadeInUp\">\r\n                  <li>\r\n                    <a *ngFor=\"let exam of exams; let i = index;\" (click)=\"selectExam(exam.name)\" class=\"pointer\">\r\n                      <!-- <span class=\"user-nav-icon\"><i class=\"fa fa-user\"></i></span> -->\r\n                      <span class=\"user-nav-label\"> {{ exam.name }} </span>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n\r\n          <div class=\"notification-nav\">\r\n            <ul class=\"clearfix\">\r\n              <li class=\"dropdown\"><a href=\"#\" data-toggle=\"dropdown\" class=\"hide-small-device waves-effect \"><i class=\"fa fa-bell\"></i><span\r\n                    class=\"alert-bubble\">2</span></a>\r\n                <div role=\"menu\" class=\"dropdown-menu notification-dropdown fadeInUp noty-lists hide-small-device\">\r\n                  <div class=\"notification-wrap\">\r\n                    <h4>You have 2 new notifications</h4>\r\n                    <ul>\r\n                      <li><a href=\"#\" class=\"clearfix\"><span class=\"ni w-green\"><i class=\"fa fa-bullhorn\"></i></span><span\r\n                            class=\"notification-message\">Semester 3 results has been updated <span class=\"notification-time clearfix\">3\r\n                              Min Ago</span></span></a>\r\n                      </li>\r\n                      <li><a href=\"#\" class=\"clearfix\"><span class=\"ni w-orange\"><i class=\"fa fa-life-ring\"></i></span><span\r\n                            class=\"notification-message\">January 29th is the last day for fee settlement. <span class=\"notification-time clearfix\">1\r\n                              Hours Ago</span></span></a>\r\n                      </li>\r\n                    </ul>\r\n                    <a class=\"btn btn-primary btn-block notification-btn clearfix waves-effect\" href=\"#\"><span>View\r\n                        All</span></a>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/home/head-nav/head-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_data_storage_service__ = __webpack_require__("../../../../../src/app/_services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_permissions_service__ = __webpack_require__("../../../../../src/app/_services/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__head_nav_service__ = __webpack_require__("../../../../../src/app/home/head-nav/head-nav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeadNavComponent = /** @class */ (function () {
    function HeadNavComponent(auth, permService, dataStorage, authService, router, service) {
        this.auth = auth;
        this.permService = permService;
        this.dataStorage = dataStorage;
        this.authService = authService;
        this.router = router;
        this.service = service;
        this.isExpanded = false;
        this.selectedConName = null;
        this.storedConName = null;
        this.showConfig = false;
        this.canShowAccessDenied = false;
        this.viewEasyPay = false;
        this.viewM88Pay = false;
        this.viewKPay = false;
        this.exams = [
            { id: 1, name: 'Semester 1' },
            { id: 2, name: 'Semester 2' },
            { id: 3, name: 'Semester 3' }
        ];
        this.selectedExam = '';
        this.hostName = window.location.host;
        this.initLoad();
    }
    HeadNavComponent.prototype.addConnectors = function () {
        var _this = this;
        setTimeout(function () {
            _this.menus = localStorage.getItem('menus');
            if (_this.menus !== 'null' && _this.menus !== null) {
                _this.viewEasyPay = _this.menus.includes('EASYPAY');
                _this.viewM88Pay = _this.menus.includes('M88PAY');
                _this.viewKPay = _this.menus.includes('KPAY');
                /*------------------------- default Connector -----------------------*/
                _this.configConnectors(_this.menus.split(',')[0], 'No');
                /*--------------------------------------------------------------------*/
            }
            else {
                _this.canShowAccessDenied = true;
                setTimeout(function () { _this.logOut(); }, 4000);
            }
        }, 500);
    };
    HeadNavComponent.prototype.setPermissions = function () {
        var _this = this;
        this.permService.getAllPermissions().subscribe(function (result) {
            var i = 0;
            _this.allPermissions = result;
            if (result != null) {
                _this.canLoginLogout = (_this.allPermissions.indexOf('can_login_logout') >= 0) ? true : false;
                _this.canResetPassword = (_this.allPermissions.indexOf('can_reset_password') >= 0) ? true : false;
                _this.canChangePassword = (_this.allPermissions.indexOf('can_change_password') >= 0) ? true : false;
                _this.can_view_dashboard = (_this.allPermissions.indexOf('can_view_dashboard') >= 0) ? true : false;
                _this.can_view_transaction_dashboard = (_this.allPermissions.indexOf('can_view_transaction_dashboard') >= 0) ? true : false;
                _this.can_create_user = (_this.allPermissions.indexOf('can_create_user') >= 0) ? true : false;
                _this.can_view_user_list = (_this.allPermissions.indexOf('can_view_user_list') >= 0) ? true : false;
                _this.can_view_bank_list = (_this.allPermissions.indexOf('can_view_bank_list') >= 0) ? true : false;
                _this.can_view_audit_log = (_this.allPermissions.indexOf('can_view_audit_log') >= 0) ? true : false;
                _this.can_view_client_list = (_this.allPermissions.indexOf('can_view_client_list') >= 0) ? true : false;
                _this.can_view_connector_mid = (_this.allPermissions.indexOf('can_view_connector_mid') >= 0) ? true : false;
                _this.can_update_user_ipaddress = (_this.allPermissions.indexOf('can_update_user_ipaddress') >= 0) ? true : false;
                _this.can_view_my_profile = (_this.allPermissions.indexOf('can_view_my_profile') >= 0) ? true : false;
                _this.can_view_agent = (_this.allPermissions.indexOf('can_view_agent') >= 0) ? true : false;
                _this.can_view_txn_review = (_this.allPermissions.indexOf('can_view_txn_review') >= 0) ? true : false;
                _this.can_view_connector_mid_mgmt = (_this.allPermissions.indexOf('can_view_connector_mid_mgmt') >= 0) ? true : false;
                _this.can_update_kpay_transaction = (_this.allPermissions.indexOf('can_update_kpay_transaction') >= 0) ? true : false;
                _this.can_request_update_kpay_transaction = (_this.allPermissions.indexOf('can_request_update_kpay_transaction') >= 0) ? true : false;
                /* ------------------------------- */
                _this.initLoad();
                _this.addConnectors();
                _this.showConfig = _this.showConfigMenu();
            }
            else {
                _this.logOut();
            }
        });
    };
    HeadNavComponent.prototype.logOut = function () {
        this.auth.logout();
    };
    HeadNavComponent.prototype.showConfigMenu = function () {
        if (this.can_view_agent || this.can_view_bank_list || this.can_view_client_list || this.can_view_connector_mid_mgmt) {
            return true;
        }
        else {
            return false;
        }
    };
    HeadNavComponent.prototype.selectExam = function (name) {
        var _this = this;
        console.log(name);
        var currentRoute = this.router.url.split('/home/');
        this.selectedExam = name;
        localStorage.setItem('selectedExam', this.selectedExam);
        if (currentRoute[1] === 'dashboard' || currentRoute[1] === 'welcome') {
            this.router.navigate(['/home']);
            setTimeout(function () {
                _this.router.navigate(['/home', 'dashboard']);
            }, 200);
        }
    };
    HeadNavComponent.prototype.configConnectors = function (conName, fromPage) {
        var _this = this;
        var lastSelConName;
        if (localStorage.getItem('selectedCon')) {
            lastSelConName = localStorage.getItem('selectedCon');
        }
        else {
            lastSelConName = conName;
        }
        if (!fromPage) {
            fromPage = 'No';
        }
        var currentRoute = this.router.url.split('/home/');
        this.selectedConName = conName;
        localStorage.setItem('selectedCon', this.selectedConName);
        if (conName === 'EASYPAY') {
            this.selConnector = this.service.menu.easyPay;
            this.selConnector.transaction.permission = this.can_view_transaction_dashboard;
            this.selConnector.account.permission = this.can_view_bank_list;
        }
        else if (conName === 'M88PAY') {
            this.selConnector = this.service.menu.majorPay;
            this.selConnector.transaction.permission = this.can_view_transaction_dashboard;
            this.selConnector.account.permission = this.can_view_bank_list;
        }
        else if (conName === 'KPAY') {
            this.selConnector = this.service.menu.kPay;
            this.selConnector.transaction.permission = this.can_view_transaction_dashboard;
            this.selConnector.account.permission = this.can_view_bank_list;
        }
        if (currentRoute[1] === 'dashboard' && fromPage === 'yes') {
            this.router.navigate(['/home']);
            setTimeout(function () {
                _this.router.navigate(['/home', 'dashboard']);
            }, 200);
        }
        else {
            if (lastSelConName !== conName) {
                this.router.navigate(['/home', 'dashboard']);
            }
        }
    };
    HeadNavComponent.prototype.initLoad = function () {
        this.selectedExam = this.exams[0].name;
        localStorage.setItem('selectedExam', this.selectedExam);
        this.storedConName = localStorage.getItem('selectedCon');
        this.storedConName = localStorage.getItem('selectedCon');
        if (this.storedConName) {
            this.configConnectors('' + this.storedConName, 'No');
        }
        else {
            this.configConnectors('EASYPAY', 'No');
        }
    };
    HeadNavComponent.prototype.ngOnInit = function () {
        this.setPermissions();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('mainNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], HeadNavComponent.prototype, "mainNav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('logoEle'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], HeadNavComponent.prototype, "logoEle", void 0);
    HeadNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'headnav',
            template: __webpack_require__("../../../../../src/app/home/head-nav/head-nav.component.html"),
            styles: [':host { display: block; }'],
            styles: [__webpack_require__("../../../../../src/app/home/head-nav/head-nav.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__head_nav_service__["a" /* HeadNavService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__services_permissions_service__["a" /* PermissionManagementService */],
            __WEBPACK_IMPORTED_MODULE_0__services_data_storage_service__["a" /* DataStorageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_5__head_nav_service__["a" /* HeadNavService */]])
    ], HeadNavComponent);
    return HeadNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/head-nav/head-nav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadNavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadNavService = /** @class */ (function () {
    function HeadNavService() {
        this.menu = {
            easyPay: {
                transaction: {
                    displayName: 'EasyPay Transactions',
                    routerLink: 'transaction-dashboard',
                    permission: 'can_view_transaction_dashboard'
                },
                account: {
                    displayName: 'easy account',
                    routerLink: 'easy-pay',
                    permission: 'can_view_bank_list'
                }
            },
            majorPay: {
                transaction: {
                    displayName: 'majorPay Transactions',
                    routerLink: 'majorpay-transactions',
                    permission: 'can_view_transaction_dashboard'
                },
                account: {
                    displayName: 'majorPay Account',
                    routerLink: 'major-pay',
                    permission: 'can_view_bank_list'
                }
            },
            kPay: {
                transaction: {
                    displayName: 'KoreaPay Transactions',
                    routerLink: 'kpay-transactions',
                    permission: 'can_view_transaction_dashboard'
                },
                account: {
                    displayName: 'KoreaPay Account',
                    routerLink: 'kpay-accounts',
                    permission: 'can_view_bank_list'
                }
            }
        };
        this.menus = localStorage.getItem('menus');
    }
    HeadNavService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HeadNavService);
    return HeadNavService;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container hide-list-menu\">\r\n    <div class=\"page-content\">\r\n        <headnav class=\"layout-navbar\"> </headnav>\r\n        <div class=\"main-container\">\r\n            <div class=\"container-fluid\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"disclimer\" *ngIf=\"canViewInstaller\"> Disclaimer: Checks will be written to the insured listed on the provided Insurance document </div> -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_permissions_service__ = __webpack_require__("../../../../../src/app/_services/permissions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(permService) {
        this.permService = permService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_permissions_service__["a" /* PermissionManagementService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-img {\r\n    height: 28px;\r\n    margin: 16px 10px;\r\n}\r\n.login-wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 100vh;\r\n}\r\n.login-container .forgot-password {\r\n    font-size: 12px !important;\r\n    text-align: right !important;\r\n}\r\n.login-container {\r\n    width: 340px !important;\r\n    margin: auto;\r\n    padding: 26px 26px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ---------------------  Login  ---------------------------------- -->\r\n<div class=\"login-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"login-container\">\r\n      <img class=\"login-img\" src=\"assets/Images/logo.png\" alt=\"login thumb\">\r\n      <form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"login(UserName.value,Password.value)\">\r\n        <div class=\"floatlabel-wrapper\" style=\"position:relative\">\r\n          <!-- <label for=\"inputEmail\" class=\"label-floatlabel login-label \">Email Address</label> -->\r\n          <input type=\"text\" id=\"inputEmail\" class=\"form-control floatlabel\" #UserName ngModel name=\"UserName\" autocomplete=\"off\"\r\n            placeholder=\"Username\" class=\"form-control\" required>\r\n        </div>\r\n\r\n        <div class=\"floatlabel-wrapper\" style=\"position:relative\">\r\n          <!-- <label for=\"inputPassword\" class=\"label-floatlabel login-label \">Password</label> -->\r\n          <input type=\"password\" #Password ngModel name=\"Password\" placeholder=\"Password\" class=\"form-control\" required>\r\n        </div>\r\n        <br>\r\n        <button [disabled]=\"!loginForm.valid\" [routerLink]=\"['/home', 'welcome']\" class=\"btn btn-primary theme-btn fullWidth\" type=\"submit\">Sign In</button>\r\n      </form>\r\n\r\n      <a class=\"forgot-password pointer\" [routerLink]=\"['/home', 'change-pass']\">\r\n        Forgot Password?\r\n      </a>\r\n    </div>\r\n    <div class=\"create-account\">\r\n      <a href=\"#\">\r\n        Create Account\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_permissions_service__ = __webpack_require__("../../../../../src/app/_services/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("../../../../../src/app/_services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, loader, toastr, permService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loader = loader;
        this.toastr = toastr;
        this.permService = permService;
        this.loading = false;
        this.invalidLogin = false;
        document.title = 'Login';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status when the component is initialized
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.loader.displayLoader(true);
        this.invalidLogin = false;
        this.authenticationService.login(username, password)
            .subscribe(function (response) {
            _this.res = response;
            // tslint:disable-next-line:triple-equals
            if (response.status == 1) {
                localStorage.setItem('token', _this.res.data.token);
                localStorage.setItem('userData', _this.res.data);
                _this.permService.getPermissionArray().subscribe(function (resp) {
                    _this.loader.displayLoader(false);
                    if (resp) {
                        _this.permService.getPermissionsReplay().subscribe(function (res) {
                            _this.allPerms = res;
                            if (_this.allPerms.indexOf('vd') > 0) {
                                _this.setDefaultLanguage();
                                _this.router.navigate(['/home', 'dashboard']);
                            }
                            else {
                                _this.router.navigate(['/home']);
                            }
                        });
                    }
                });
            }
            else {
                _this.invalidLogin = true;
                _this.correctCredentials = false;
                _this.errorMsg = _this.res.error.message;
                _this.toastr.warning(_this.res.error.message);
                _this.loader.displayLoader(false);
            }
        }, function (error) {
            // this.alertService.error(error);
            _this.loader.displayLoader(false);
            _this.invalidLogin = true;
            _this.errorMsg = 'Unknown Error';
        });
    };
    LoginComponent.prototype.setDefaultLanguage = function () {
        this.permService.getCompanyProfileData().subscribe(function (res) {
            if (res.status === 1) {
                localStorage.setItem('menus', res.data.channels);
                localStorage.setItem('loggedInUser', res.data.roleId);
                localStorage.setItem('defaulttLang', res.data.defaultLang);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('logoEle'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], LoginComponent.prototype, "logoEle", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["b" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_0__services_permissions_service__["a" /* PermissionManagementService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa-eye{\r\n    position: absolute;\r\n    right:30px;\r\n    top:12px;\r\n    color:grey;\r\n}\r\n\r\n.fa-eye:hover{\r\n    color:black;\r\n}\r\n\r\n.pwdRules{\r\n    font-size: 12px;\r\n    width: 350px;\r\n    border: 1px solid #eae5e5;\r\n    padding: 20px 20px 20px 40px;\r\n    background: #fcfcfc;\r\n   \r\n}\r\n\r\nbutton[disabled] {\r\n    cursor:not-allowed;\r\n}\r\n\r\n.help-block.err {\r\n    color: orange;\r\n    font-size: 13px;\r\n}\r\n\r\n.g-style {\r\n    line-height: 120px;\r\n    text-align: center;\r\n    display: block;\r\n    font-size: 52px;\r\n    border: 1px solid #009688;\r\n    border-radius: 100%;\r\n    background: #eefffd;\r\n    width: 120px;\r\n    color: #2ebbc0;\r\n}\r\n\r\n.g-s {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    border-right: 1px solid lightgray;\r\n}\r\n\r\ntd, th {\r\n    border: 0px solid transparent !important;\r\n}\r\n\r\n.p-left {\r\n    padding-left: 90px;\r\n}\r\n\r\n/* .msgs {\r\n    line-height: 32px;\r\n    padding-left: 62px;\r\n    border: 1px solid transparent;\r\n    font-size: 13px;\r\n    position: relative;\r\n}\r\n\r\n.msgs:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top:-1px;\r\n    left: 0px;\r\n    width:32px;\r\n    height:33px;\r\n    background: #4CAF50;\r\n}\r\n\r\n#errorMsg {\r\n    border: 1px solid #ff9800;\r\n    color: #ff9800;\r\n    display: none;\r\n}\r\n#errorMsg:after {\r\n    content: \"\\e083\";\r\n    background: #ff9800;\r\n}\r\n#successMsg {\r\n    border: 1px solid #4CAF50;\r\n    color: #4CAF50;\r\n}\r\n#successMsg:after {\r\n    background: #4CAF50;\r\n} */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"row\">\r\n   <div class=\"col-md-8 col-md-offset-2\">\r\n      <div class=\"box-widget widget-module\">\r\n         <div class=\"widget-head clearfix\">\r\n            <span class=\"h-icon\"><i class=\"fa fa-bars\"></i></span>\r\n            <h4> My Profile </h4>\r\n         </div>\r\n         <div class=\"widget-container\">\r\n            <div class=\"widget-block\">\r\n               <div class=\"row\" style=\"display: flex;\">\r\n                  <div class=\"col-md-4 g-s\">\r\n                     <div class=\"g-style\">\r\n                        SP\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"col-md-8 p-left\">\r\n                     <table class=\"table\">\r\n                        <tr>\r\n                           <th style=\"width: 206px;\"> Username </th>\r\n                           <td> Sagar </td>\r\n                        </tr>\r\n                        <tr>\r\n                           <th> First Name </th>\r\n                           <td> Sagar </td>\r\n                        </tr>\r\n                        <tr>\r\n                           <th> Last Name </th>\r\n                           <td> Patil </td>\r\n                        </tr>\r\n                        <tr>\r\n                           <th> UID </th>\r\n                           <td> AXD1241DER3SDS </td>\r\n                        </tr>\r\n                        <tr>\r\n                           <th> Email </th>\r\n                           <td> sagarpatil@mymail.com </td>\r\n                        </tr>\r\n                     </table>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__("../../../../../src/app/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loader_service__ = __webpack_require__("../../../../../src/app/_services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_permissions_service__ = __webpack_require__("../../../../../src/app/_services/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { element } from 'protractor';






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(Service, _router, loader, toastr, permService) {
        this.Service = Service;
        this._router = _router;
        this.loader = loader;
        this.toastr = toastr;
        this.permService = permService;
        this.type = 'password';
        this.showPass = false;
        this.showProfile = true;
        this.showUserEditProfile = false;
        this.passwordChanged = false;
        this.errOccured = true;
        this.errorMesage = '';
        this.successMsg = '';
        this.user = {
            firstName: '',
            lastName: '',
            userName: '',
            phone: '',
            emailAddress: '',
            lastLoggedInTime: '',
            ipAddress: '',
            defaultLang: ''
        };
        this.changePwd = {
            oldPass: '',
            newPass: '',
            conPass: '',
        };
        this.newUserData = {
            firstName: '',
            lastName: '',
            userName: '',
            roleId: '',
            emailAddress: '',
            phoneNumber: '',
            defaultLang: ''
        };
        this.languages = [{
                name: 'Chinese',
                code: 'ch'
            }, {
                name: 'English',
                code: 'en'
            }];
        // tslint:disable-next-line:member-ordering
        this.showMsg = false;
        // tslint:disable-next-line:member-ordering
        this.showMsg2 = false;
        this.loadData();
        document.title = 'Profile';
    }
    ProfileComponent.prototype.loadData = function () {
        var _this = this;
        this.loader.displayLoader(true);
        this.Service.getCompanyProfileData().subscribe(function (res) {
            _this.loader.displayLoader(false);
            if (res.status === 1) {
                _this.profileData = res.data;
                _this.user.firstName = _this.profileData.firstName;
                _this.user.lastName = _this.profileData.lastName;
                _this.user.userName = _this.profileData.userName;
                _this.user.phone = _this.profileData.phone;
                _this.user.emailAddress = _this.profileData.emailAddress;
                _this.user.lastLoggedInTime = _this.profileData.lastLoggedInTime;
                _this.user.ipAddress = _this.profileData.lastLoggedInIp;
                _this.user.defaultLang = _this.profileData.defaultLang;
                localStorage.setItem('defaulttLang', res.data.defaultLang);
            }
        }, function (err) {
            _this.loader.displayLoader(false);
        });
    };
    // tslint:disable-next-line:no-shadowed-variable
    ProfileComponent.prototype.pwdVisible = function (element) {
        element.type = element.type === 'password' ? 'text' : 'password';
    };
    ProfileComponent.prototype.changePass = function () {
        var _this = this;
        var data = {
            oldPassword: this.changePwd.oldPass,
            newPassword: this.changePwd.newPass
        };
        var matchNewCon;
        var isNewPassSame;
        isNewPassSame = this.isNewPassSameAsOld(this.changePwd);
        matchNewCon = this.confirmPassWords(this.changePwd.newPass, this.changePwd.conPass);
        if (!matchNewCon) {
            this.errOccured = true;
            this.errorMesage = 'Password Match Val';
        }
        else if (isNewPassSame) {
            this.errOccured = true;
            this.errorMesage = 'Last 5 Pass Val';
        }
        else {
            this.errOccured = false;
            this.loader.displayLoader(true);
            this.Service.changePassWord(data).subscribe(function (res) {
                // this.loader.displayLoader(false);
                if (res.status === 1) {
                    _this.loader.displayLoader(false);
                    // this.passwordChanged = true;
                    _this.toastr.success('Password Changed successfully! Login again');
                    _this.errOccured = false;
                    setTimeout(function () {
                        _this.logout();
                    }, 3000);
                }
                else {
                    _this.passwordChanged = false;
                    _this.errOccured = true;
                    if (res.error.code === 201) {
                        _this.errorMesage = 'Current Pass Val';
                    }
                    else if (res.error.code === 101) {
                        _this.errorMesage = 'Last 5 Pass Val';
                    }
                }
            }, function (err) {
                _this.loader.displayLoader(false);
            });
        }
    };
    ProfileComponent.prototype.toggleDetails = function () {
        this.resetPassword();
        this.showDetails = !this.showDetails;
        if (this.showDetails === true) {
            this.showProfile = false;
        }
        else {
            this.showProfile = true;
            this.passwordChanged = false;
            this.errOccured = false;
        }
    };
    ProfileComponent.prototype.resetPassword = function () {
        this.changePwd = {
            oldPass: '',
            newPass: '',
            conPass: '',
        };
        this.showMsg = false;
        this.showMsg2 = false;
    };
    ProfileComponent.prototype.pwdLngth = function (value) {
        if ((value).length < 6) {
            this.errOccured = true;
            this.errorMesage = 'Password Len Validation';
        }
        else {
            this.errOccured = false;
            this.errorMesage = '';
        }
    };
    ProfileComponent.prototype.confirmPassWords = function (newPwd, conPwd) {
        if (newPwd === conPwd) {
            return true;
        }
        else {
            return false;
        }
    };
    ProfileComponent.prototype.isNewPassSameAsOld = function (password) {
        // tslint:disable-next-line:triple-equals
        if (password.oldPass == password.newPass && password.newPass == password.conPass && password.oldPass == password.conPass) {
            return true;
        }
        else {
            return false;
        }
    };
    ProfileComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.clear();
        this._router.navigate(['/login']);
    };
    ProfileComponent.prototype.submitEditProfile = function () {
        var _this = this;
        var userData = {
            username: this.newUserData.userName,
            firstName: this.newUserData.firstName,
            lastName: this.newUserData.lastName,
            email: this.newUserData.emailAddress,
            phoneNumber: this.newUserData.phoneNumber,
            defaultLang: this.newUserData.defaultLang
        };
        this.loader.displayLoader(true);
        this.Service.editUserData(userData).subscribe(function (res) {
            _this.loader.displayLoader(false);
            if (res.status === 1) {
                _this.loadData();
                _this.showProfile = true;
                _this.showUserEditProfile = false;
                _this.toastr.success('updated successfully');
            }
            else {
                _this.toastr.warning('sorry not updated');
            }
        }, function (err) {
            _this.loader.displayLoader(false);
            _this.toastr.warning('sorry not updated');
        });
    };
    ProfileComponent.prototype.checkPassword = function (cnfPass, newPass, currPass, frm) {
        console.log(newPass.value);
        console.log(cnfPass.value);
        // this.showMsg = true;
        if (cnfPass.value === newPass.value) {
            this.showMsg = false;
        }
        else {
            this.showMsg = true;
        }
        if (((cnfPass.value === newPass.value) && (frm.invalid === true))) {
            // this.showMsg = false;
            this.showMsg2 = true;
        }
        else {
            this.showMsg2 = false;
        }
        console.log(frm.invalid, this.showMsg2);
    };
    ProfileComponent.prototype.showEditProfile = function () {
        this.showDetails = false;
        this.showProfile = false;
        this.showUserEditProfile = true;
        this.newUserData.firstName = this.user.firstName;
        this.newUserData.lastName = this.user.lastName;
        this.newUserData.userName = this.user.userName;
        this.newUserData.emailAddress = this.user.emailAddress;
        this.newUserData.phoneNumber = this.user.phone;
        this.newUserData.defaultLang = this.user.defaultLang;
    };
    ProfileComponent.prototype.resetForm = function () {
        this.loadData();
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__services_permissions_service__["a" /* PermissionManagementService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = /** @class */ (function () {
    function ProfileService(http, _http) {
        this.http = http;
        this._http = _http;
    }
    ProfileService.prototype.getCompanyProfileData = function () {
        // const body = JSON.stringify(inpParams);
        return this.http.get('/gateway/user/profile')
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    // updateStatus(inpParams): Observable<any> {
    //     const body = JSON.stringify(inpParams);
    //     return this.http.post('http://13.229.46.57/api/transaction/update', body)
    //         .map((response: Response) => {
    //             const res = response;
    //             return res;
    //         });
    // }
    ProfileService.prototype.changePassWord = function (data) {
        var body = JSON.stringify(data);
        return this.http.post('/gateway/user/changePassword', body)
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    ProfileService.prototype.editUserData = function (data) {
        var body = JSON.stringify(data);
        return this.http.post('/gateway/user/editProfile', body)
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "../../../../../src/app/user-management/user-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new-user-reg .form-group {\r\n    margin-bottom: 15px;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-management/user-management.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/user-management/user-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_management_service__ = __webpack_require__("../../../../../src/app/user-management/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loader_service__ = __webpack_require__("../../../../../src/app/_services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_commonFunction_service__ = __webpack_require__("../../../../../src/app/_services/commonFunction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_permissions_service__ = __webpack_require__("../../../../../src/app/_services/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(http, commonFun, toastr, permService, Service, loader) {
        this.http = http;
        this.commonFun = commonFun;
        this.toastr = toastr;
        this.permService = permService;
        this.Service = Service;
        this.loader = loader;
        this.showInput = false;
        this.defaultStatus = '1';
        // Filters
        this.filterVerified = 'Any';
        this.filterRole = 'Any';
        this.filterStatus = 'Any';
        this.filterLatestActivity = [null, null];
        this.clientList = [];
        this.clientsListForUser = [];
        // Table
        // Options
        this.dataUrl = '/gateway/user/list';
        this.searchKeys = ['userName', 'firstName', 'lastName', 'role'];
        this.sortBy = 'id';
        this.sortDesc = true;
        this.perPage = 10;
        this.filterVal = '';
        this.hasCompPermissions = true;
        this.usersData = [];
        this.originalUsersData = [];
        this.inpParams = {
            filter: {
                userName: null,
                roleId: '',
                status: null,
                clientId: '',
                emailAddress: null,
                start: null,
                end: null
            },
            page: {
                index: 0,
                size: 10,
                total: null,
                count: null,
                sortBy: null,
                sortOrder: 'desc'
            }
        };
        this.statusArr = [
            { id: null, name: 'All' },
            { id: 0, name: 'InActive' },
            { id: 1, name: 'Active' }
        ];
        this.editStatus = [
            { id: 0, name: 'InActive' },
            { id: 1, name: 'Active' }
        ];
        this.roles = [{
                roleId: '',
                roleName: 'All'
            }, {
                roleId: 1,
                roleName: 'Super Admin'
            },
            {
                roleId: 2,
                roleName: 'Support Admin'
            },
            {
                roleId: 3,
                roleName: 'Client Admin'
            },
            {
                roleId: 4,
                roleName: 'Client User'
            },
            {
                roleId: 5,
                roleName: 'Super User'
            }];
        this.roles1 = [
            {
                roleId: 2,
                roleName: 'Support Admin'
            },
            {
                roleId: 3,
                roleName: 'Client Admin'
            },
            {
                roleId: 4,
                roleName: 'Client User'
            },
            {
                roleId: 5,
                roleName: 'Super User'
            }
        ];
        this.newUserData = {
            firstName: '',
            lastName: '',
            userName: '',
            roleId: '',
            emailAddress: '',
            phoneNumber: '',
            defaultLang: '',
            clientId: ''
        };
        document.title = 'User Management';
        this.addclientList();
        this.clientListForCreateUser();
        this.inpParams.filter.status = this.defaultStatus;
        this.loadData();
        this.checkRoles(Number(localStorage.getItem('loggedInUser')));
    }
    UserManagementComponent.prototype.checkRoles = function (roleId) {
        if (roleId === 3) {
            this.roles1 = [{
                    roleId: 4,
                    roleName: 'Client User'
                }];
        }
    };
    UserManagementComponent.prototype.getActStatus = function (status) {
        if (status === 1) {
            return 'Deactivate';
        }
        else {
            return 'Activate';
        }
    };
    UserManagementComponent.prototype.addclientList = function () {
        var _this = this;
        this.commonFun.clientList().subscribe(function (res) {
            if (res.status === 1) {
                _this.clientList = res.data;
            }
        });
    };
    UserManagementComponent.prototype.clientListForCreateUser = function () {
        var _this = this;
        this.Service.clientList().subscribe(function (res) {
            if (res.status === 1) {
                _this.clientsListForUser = res.data;
            }
        });
    };
    UserManagementComponent.prototype.toggleDetails = function () {
        this.inpParams.filter.status = null;
        this.showDetails = !this.showDetails;
    };
    UserManagementComponent.prototype.getTimeStamp = function (e, ele) {
        if (ele === 'start') {
            this.inpParams.filter.start = new Date(e).getTime();
        }
        else {
            this.inpParams.filter.end = new Date(e).getTime();
        }
    };
    UserManagementComponent.prototype.loadData = function () {
        var _this = this;
        this.loader.displayLoader(true);
        this.Service.getUserList(this.inpParams).subscribe(function (res) {
            _this.loader.displayLoader(false);
            if (res.status === 1) {
                _this.originalUsersData = res.data.results;
                // this.update();
                _this.totalItems = res.data.page.total;
                _this.currentPage = res.data.page.index + 1;
                _this.inpParams.page.size = res.data.page.size;
                _this.startRange = (_this.currentPage - 1) * _this.inpParams.page.size + 1;
                _this.endRange = ((_this.currentPage) * _this.inpParams.page.size < _this.totalItems)
                    ? (_this.currentPage) * _this.inpParams.page.size : _this.totalItems;
            }
        }, function (err) {
            _this.loader.displayLoader(false);
        });
    };
    /* ------------------------------------------- */
    UserManagementComponent.prototype.sortData = function (sortBy) {
        this.inpParams.page.sortOrder = this.sort_Data(sortBy, this.inpParams.page.sortOrder, this.inpParams.page.sortBy);
        this.inpParams.page.sortBy = sortBy;
        this.loadData();
    };
    UserManagementComponent.prototype.pageChanged = function (event) {
        this.inpParams.page.index = event.page - 1;
        this.loadData();
    };
    UserManagementComponent.prototype.recordsPerPage = function (size) {
        if (size !== this.inpParams.page.size) {
            this.inpParams.page.size = size;
            this.inpParams.page.index = 0;
            this.loadData();
        }
    };
    UserManagementComponent.prototype.sort_Data = function (sortBy, sortOrder, inpParamSortBy) {
        if (sortBy) {
            if (sortBy === inpParamSortBy) {
                if (sortOrder === 'desc') {
                    return 'asc';
                }
                else {
                    return 'desc';
                }
            }
            else {
                return sortOrder = 'desc';
            }
        }
        else {
            return sortOrder = 'desc';
        }
    };
    /*--------------------- ngx ------------------- */
    UserManagementComponent.prototype.getStatus = function (status) {
        return this.commonFun.getUserStatus(status);
    };
    UserManagementComponent.prototype.advancedSearch = function () {
        this.inpParams.filter.clientId = this.inpParams.filter.clientId !== '' ? JSON.parse(this.inpParams.filter.clientId) : '';
        if ((this.inpParams.filter.start === this.inpParams.filter.end) ||
            (this.inpParams.filter.start && this.inpParams.filter.end)) {
            if (this.inpParams.filter.start && this.inpParams.filter.end) {
                this.inpParams.filter.end = this.inpParams.filter.end + 86399999;
            }
        }
        this.loadData();
    };
    UserManagementComponent.prototype.createUser = function (frmValues) {
        var _this = this;
        this.loader.displayLoader(true);
        console.log(frmValues);
        frmValues.roleId = Number(frmValues.roleId);
        console.log(frmValues.roleId);
        this.Service.createUser(frmValues).subscribe(function (res) {
            _this.loader.displayLoader(false);
            if (res.status === 1) {
                _this.toastr.success('User Created Successfully');
            }
            else {
                _this.toastr.warning(res.error.message);
            }
        }, function (err) {
            _this.loader.displayLoader(false);
            _this.toastr.success('User is not created');
        });
    };
    UserManagementComponent.prototype.onSelectRole = function (event) {
        var value = event.target.value;
        if (value === '3' || value === '4') {
            this.showInput = true;
        }
        else {
            this.showInput = false;
        }
    };
    UserManagementComponent.prototype.resetForm = function () {
        this.newUserData = {
            firstName: '',
            lastName: '',
            userName: '',
            roleId: '',
            emailAddress: '',
            phoneNumber: '',
            defaultLang: '',
            clientId: ''
        };
        this.showInput = false;
    };
    UserManagementComponent.prototype.passDataForUpdate = function (user) {
        this.userData = Object.assign({}, user);
        this.userData.role = this.commonFun.mapRoleNames(user.role);
        this.userData.remarks = '';
    };
    UserManagementComponent.prototype.updateUserData = function (formData) {
        var _this = this;
        this.loader.displayLoader(true);
        formData.roleId = JSON.parse(this.userData.role);
        this.Service.updateUserData(formData).subscribe(function (res) {
            _this.loader.displayLoader(false);
            if (res.status === 1) {
                _this.loadData();
                _this.toastr.success(formData.username + ' data updated successfully.');
            }
            else {
                _this.toastr.warning('Sorry, Status has not updated.');
            }
        }, function (err) {
            _this.loader.displayLoader(false);
            _this.toastr.warning('Sorry, Status has not updated.');
        });
    };
    UserManagementComponent.prototype.updateStatus = function (data) {
        var _this = this;
        this.loader.displayLoader(true);
        var inpData = {
            userName: data.userName,
            status: data.status === 1 ? 0 : 1
        };
        this.Service.updateStatus(inpData).subscribe(function (res) {
            _this.loader.displayLoader(false);
            if (res.status === 1) {
                _this.toastr.success('Status updated succesfully');
                _this.loadData();
            }
            else {
                _this.toastr.warning('Status is not updated!');
            }
        }, function (err) {
            _this.loader.displayLoader(false);
        });
    };
    UserManagementComponent.prototype.refresh = function () {
        this.resetData();
        this.showDetails = false;
        this.inpParams.filter.status = this.defaultStatus;
        this.loadData();
    };
    UserManagementComponent.prototype.resetData = function () {
        this.inpParams = {
            filter: {
                userName: null,
                roleId: '',
                status: null,
                clientId: '',
                emailAddress: null,
                start: null,
                end: null
            },
            page: {
                index: 0,
                size: 10,
                total: null,
                count: null,
                sortBy: null,
                sortOrder: 'desc'
            }
        };
    };
    UserManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        var perm;
        this.permService.getPermissionsReplay().subscribe(function (res) {
            perm = res;
            if (perm) {
                _this.hasCompPermissions = (perm.indexOf('vul') >= 0) ? true : false;
            }
        });
    };
    UserManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-management',
            template: __webpack_require__("../../../../../src/app/user-management/user-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-management/user-management.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__user_management_service__["a" /* UserManagementService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_commonFunction_service__["a" /* CommonFunService */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__services_permissions_service__["a" /* PermissionManagementService */],
            __WEBPACK_IMPORTED_MODULE_1__user_management_service__["a" /* UserManagementService */], __WEBPACK_IMPORTED_MODULE_2__services_loader_service__["a" /* LoaderService */]])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-management/user-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserManagementService = /** @class */ (function () {
    function UserManagementService(http, _http) {
        this.http = http;
        this._http = _http;
    }
    UserManagementService.prototype.getUserList = function (inpParams) {
        var body = JSON.stringify(inpParams);
        return this.http.post('/gateway/user/list', body)
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    UserManagementService.prototype.createUser = function (newUserData) {
        var body = JSON.stringify(newUserData);
        return this.http.post('/gateway/user/create', body)
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    UserManagementService.prototype.updateStatus = function (data) {
        var body = JSON.stringify(data);
        return this.http.post('/gateway/user/updateStatus', body)
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    UserManagementService.prototype.updateUserData = function (data) {
        var body = JSON.stringify(data);
        return this.http.post('/gateway/user/editUser', body)
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    UserManagementService.prototype.clientList = function () {
        return this.http.get('/gateway/lookup/client')
            .map(function (response) {
            var res = response;
            return res;
        });
    };
    UserManagementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], UserManagementService);
    return UserManagementService;
}());



/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa-eye{\r\n    position: absolute;\r\n    right:30px;\r\n    top:12px;\r\n    color:grey;\r\n}\r\n\r\n.fa-eye:hover{\r\n    color:black;\r\n}\r\n\r\n.pwdRules{\r\n    font-size: 12px;\r\n    width: 350px;\r\n    border: 1px solid #eae5e5;\r\n    padding: 20px 20px 20px 40px;\r\n    background: #fcfcfc;\r\n   \r\n}\r\n\r\nbutton[disabled] {\r\n    cursor:not-allowed;\r\n}\r\n\r\n.help-block.err {\r\n    color: orange;\r\n    font-size: 13px;\r\n}\r\n\r\n.g-style {\r\n    line-height: 120px;\r\n    text-align: center;\r\n    display: block;\r\n    font-size: 52px;\r\n    border: 1px solid #009688;\r\n    border-radius: 100%;\r\n    background: #eefffd;\r\n    width: 120px;\r\n    color: #2ebbc0;\r\n}\r\n\r\n.g-s {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    border-right: 1px solid lightgray;\r\n}\r\n\r\ntd, th {\r\n    border: 0px solid transparent !important;\r\n}\r\n\r\n.p-left {\r\n    padding-left: 90px;\r\n}\r\n\r\n.box-widget .widget-head {\r\n    height: auto !important;\r\n}\r\n\r\n.box-widget .widget-head h2 {\r\n    margin: 25px 10px;\r\n}\r\n\r\n.inf-block h4 {\r\n    text-align: center;\r\n    width: 100%;\r\n    background: #018c95;\r\n    color: white;\r\n}\r\n\r\n.inf-block .box-widget .widget-container {\r\n    display: block;\r\n    width: 100%;\r\n    position: relative;\r\n    min-height: 228px;\r\n    overflow: auto;\r\n    max-height: 228px;\r\n}\r\n\r\n.w-user-list-item {\r\n    border-bottom: 1px solid lightgray;\r\n    margin-bottom: 10px;\r\n    padding-bottom: 10px;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n}\r\n\r\n.widget-block .w-user-list-item:last-child {\r\n    border-bottom: 1px solid transparent;\r\n}\r\n\r\n.quote-blk {\r\n    font-family: monospace;\r\n    font-style: italic;\r\n}\r\n\r\n.parent-head {\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#018c95));\r\n    background-image: linear-gradient(#ffffff, #018c95);\r\n}\r\n\r\n/* .msgs {\r\n    line-height: 32px;\r\n    padding-left: 62px;\r\n    border: 1px solid transparent;\r\n    font-size: 13px;\r\n    position: relative;\r\n}\r\n\r\n.msgs:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top:-1px;\r\n    left: 0px;\r\n    width:32px;\r\n    height:33px;\r\n    background: #4CAF50;\r\n}\r\n\r\n#errorMsg {\r\n    border: 1px solid #ff9800;\r\n    color: #ff9800;\r\n    display: none;\r\n}\r\n#errorMsg:after {\r\n    content: \"\\e083\";\r\n    background: #ff9800;\r\n}\r\n#successMsg {\r\n    border: 1px solid #4CAF50;\r\n    color: #4CAF50;\r\n}\r\n#successMsg:after {\r\n    background: #4CAF50;\r\n} */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"row\">\n  <div class=\"col-md-10 col-md-offset-1\">\n    <div class=\"box-widget widget-module\">\n      <div class=\"widget-head clearfix parent-head\">\n        <!-- <span class=\"h-icon\"><i class=\"fa fa-bars\"></i></span> -->\n        <h2 class=\"text-center\"><span class=\"s-bold\"> Sri Vani Education Centre </span> </h2>\n      </div>\n      <div class=\"widget-container\">\n        <div class=\"widget-block\">\n          <div class=\"row\">\n            <div class=\"col-md-12 profile-data\">\n              <div class=\"row\" style=\"display: flex;\">\n                <div class=\"col-md-4 g-s\">\n                  <div class=\"g-style\">\n                    SP\n                  </div>\n                </div>\n                <div class=\"col-md-8 p-left\">\n                  <table class=\"table\">\n                    <tr>\n                      <th> First Name </th>\n                      <td> Sagar </td>\n                    </tr>\n                    <tr>\n                      <th> Last Name </th>\n                      <td> Bharadwaj </td>\n                    </tr>\n\t\t\t\t\t<tr>\n                      <th> Class </th>\n                      <td> 7th A </td>\n                    </tr>\n                    <tr>\n                      <th> Roll No </th>\n                      <td> 14719 </td>\n                    </tr>\n\t\t\t\t\t<tr>\n                      <th style=\"width: 206px;\"> Username </th>\n                      <td> sagarb </td>\n                    </tr>\n\t\t\t\t\t<tr>\n                      <th> Email </th>\n                      <td> sagar@gmail.com </td>\n                    </tr>\n                  </table>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-12 inf-block\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"box-widget widget-module\">\n                    <div class=\"widget-head clearfix\">\n                      <!-- <span class=\"h-icon\"><i class=\"fa fa-bars\"></i></span> -->\n                      <h4 class=\"text-center\"> Announcements </h4>\n                    </div>\n                    <div class=\"widget-container\">\n                      <div class=\"widget-block\">\n                        <div class=\"w-user-list-item\">\n                          Ted Talk will be held at School Auditorium on December 25th at 4pm.\n                        </div>\n                        <div class=\"w-user-list-item\">\n                          Mid Term Examination for High School will commence from 1st January.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"box-widget widget-module\">\n                    <div class=\"widget-head clearfix\">\n                      <!-- <span class=\"h-icon\"><i class=\"fa fa-bars\"></i></span> -->\n                      <h4> Achievements </h4>\n                    </div>\n                    <div class=\"widget-container\">\n                      <div class=\"widget-block\">\n                        <div class=\"w-user-list-item\">\n\t\t\t\t\t\t Basketball team has won the national level championship held at Odisha.Congratulations to the team!! \n                        </div>\n                        <div class=\"w-user-list-item\">\n                          10th standard student Abhishek Naik has been selected for u16 Indian cricket team.Hearty Congratulations,make us proud!\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"box-widget widget-module\">\n                    <div class=\"widget-head clearfix\">\n                      <!-- <span class=\"h-icon\"><i class=\"fa fa-bars\"></i></span> -->\n                      <h4> Quote </h4>\n                    </div>\n                    <div class=\"widget-container\">\n                      <div class=\"widget-block quote-blk\">\n                        \"Education is the movement from darkness to light\"-Upanishad\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/Images/demo-bg.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "demo-bg.dead53fc79418da8792e.png";

/***/ }),

/***/ "../../../../../src/assets/Images/pie.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pie.43c3452148c183c93e5f.jpg";

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



// if (environment.production) {
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
// }
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/vendor/styles/authentication.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".authentication-wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-preferred-size: 100%;\r\n        flex-basis: 100%;\r\n    min-height: 100vh;\r\n    width: 100%; }\r\n    .authentication-wrapper .authentication-inner {\r\n      width: 100%; }\r\n    .authentication-wrapper.authentication-1, .authentication-wrapper.authentication-2, .authentication-wrapper.authentication-4 {\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n      -webkit-box-pack: center;\r\n          -ms-flex-pack: center;\r\n              justify-content: center; }\r\n    .authentication-wrapper.authentication-1 .authentication-inner {\r\n      max-width: 300px; }\r\n    .authentication-wrapper.authentication-2 .authentication-inner {\r\n      max-width: 380px; }\r\n    .authentication-wrapper.authentication-3 {\r\n      -webkit-box-align: stretch;\r\n          -ms-flex-align: stretch;\r\n              align-items: stretch;\r\n      -webkit-box-pack: stretch;\r\n          -ms-flex-pack: stretch;\r\n              justify-content: stretch; }\r\n    .authentication-wrapper.authentication-3 .authentication-inner {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-align: stretch;\r\n            -ms-flex-align: stretch;\r\n                align-items: stretch;\r\n        -ms-flex-wrap: nowrap;\r\n            flex-wrap: nowrap;\r\n        -webkit-box-pack: stretch;\r\n            -ms-flex-pack: stretch;\r\n                justify-content: stretch; }\r\n    .authentication-wrapper.authentication-4 .authentication-inner {\r\n      max-width: 800px; }\r\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\r\n    .authentication-wrapper[_ngcontent-c1]:after {\r\n      content: '';\r\n      display: block;\r\n      -webkit-box-flex: 0;\r\n          -ms-flex: 0 0 0%;\r\n              flex: 0 0 0%;\r\n      min-height: inherit;\r\n      width: 0;\r\n      font-size: 0; } }\r\n    .authentication-inner[_ngcontent-c1] {\r\n    max-width: 380px !important; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { JwtHelper } from 'angular2-jwt';

@Injectable()

export class CommonFunService {
  constructor(private http: HttpClient, private _http: Http) { }

  public getStatus(status) {
    if (status === 99) {
      return 'FAILED';
    } else if (status === -1) {
      return 'INPROGRESS';
    } else if (status === 0) {
      return 'SUCCESS';
    }
  }

  public getUserStatus(status) {
    if (status === 1) {
      return 'ACTIVE';
    } else if (status === 0) {
      return 'INACTIVE';
    }
  }

  public mapRoleNames(role) {
    if (role === 'Super Admin') {
      return 1;
    } else if (role === 'Support Admin') {
      return 2;
    } else if (role === 'Client Admin') {
      return 3;
    } else if (role === 'Client User') {
      return 4;
    } else if (role === 'Super User') {
      return 5;
    }
  }

  public transactionSteps(step) {
    if (step === 'STEP_NAME_LOGIN_TO_BANK') {
      return 'Bank Login';
    } else if (step === 'STEP_NAME_SECURITY_QUESTION') {
      return 'Bank Security Question';
    } else if (step === 'STEP_NAME_SUBMIT_OTP_FOR_ADD_PAYEE') {
      return 'Add Payee OTP Page';
    } else if (step === 'STEP_NAME_SUBMIT_OTP_FOR_TRANSACTION') {
      return 'Transaction OTP';
    } else if (step === 'STEP_NAME_COMPLETE') {
      return 'Final Confirmation';
    } else if (step === 'STEP_NAME_ENTER_ADDPAYEE_CREDENTIALS') {
      return 'Add Payee';
    } else if (step === 'STEP_NAME_ENTER_TRANSACTION_CREDENTIALS') {
      return 'Transaction Password';
    } else if (step === 'STEP_NAME_SUBMIT_CAPTCHA_FOR_LOGIN') {
      return 'Login Capcha';
    } else if (step === 'STEP_NAME_SUBMIT_CAPTCHA_FOR_TRANSACTION') {
      return 'Transaction Capcha';
    } else if (step === 'STEP_NAME_ENTER_THREE_GRID_INPUT') {
      return 'Login Page Credentials';
    } else if (step === 'STEP_NAME_ENTER_TWO_GRID_INPUT') {
      return 'Login Page Credentials';
    } else if (step === 'STEP_NAME_SUBMIT_OTP_FOR_LOGIN') {
      return 'Login OTP Page';
    } else if (step === 'STEP_NAME_ENTER_SECURITY_NUMBER') {
      return 'Bank Security Question';
    } else if (step === 'STEP_NAME_SUBMIT_TOKEN_FOR_TRANSACTION') {
      return 'Transaction OTP';
    }
  }

  public failureReasons(reason) {
    if (reason === 'UPLOAD_ACCOUNT_MISMATCH') {
      return 'Bank Account Number is not matching';
    } else if (reason === 'UPLOAD_REFERENCE_MISMATCH') {
      return 'Transaction Reference Number is not matching';
    } else if (reason === 'UPLOAD_AMOUNT_MISMATCH') {
      return 'Transaction Amount is not matching';
    }
  }

  clientList(): Observable<any> {
    return this.http.get('/gateway/lookup/client')
      .map((response: any) => {
        const res = response;
        res.data.push({
          clientId: '',
          name: 'All'
        });
        return res;
      });
  }

  getCurrency(): Observable<any> {
    return this.http.get('/gateway/lookup/country')
      .map((response: any) => {
        const res = response;
        res.data.push({
          countryId: '',
          countryName: '',
          currency: 'All'
        });
        return res;
      });
  }

  getMid(): Observable<any> {
    return this.http.get('/gateway/lookup/mid')
      .map((response: any) => {
        const res = response;
        return res;
      });
  }

  getMajor88Mid(): Observable<any> {
    return this.http.get('/gateway/lookup/mid/m88pay')
      .map((response: any) => {
        const res = response;
        return res;
      });
  }

  getKpayMid(): Observable<any> {
    return this.http.get('/gateway/lookup/mid/kpay')
      .map((response: any) => {
        const res = response;
        return res;
      });
  }

  getEasypayMid(): Observable<any> {
    return this.http.get('/gateway/lookup/mid/easypay')
      .map((response: any) => {
        const res = response;
        return res;
      });
  }

  getStartTime() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return +d;
  }

  getEndTime() {
    return new Date().getTime();
  }
}

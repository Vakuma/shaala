import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResetpassService } from './../../_services/resetpass.services';
import { DataStorageService } from './../../_services/data-storage.service';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from './../../_services/loader.service';
import { PermissionManagementService } from './../../_services/permissions.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit, OnDestroy {
  token: string;
  username: string;
  successMsg: string;
  errorMsg: any;
  validToken: boolean;
  showResetDiv = false;  errorOccured = false; success = false;
  private sub: any;

  constructor(private _route: ActivatedRoute,
              private _resetPass: ResetpassService,
              private toastr: ToastrService,
              private loader: LoaderService,
              private _dataStorages: DataStorageService,
              private _router: Router,
              private permService: PermissionManagementService) {
                document.title = 'Reset Password';
               }

  ngOnInit() {
    // get the token and email id value from the route parameters

    this._route.params.subscribe(params => {
      this.token = params['token'];
      this.username = params['username'];
    });
    // Post it to the backend to verify if the token and email matches.
    this._resetPass.tokenUserVerifier(this.token, this.username)
      .subscribe(result => {
        if (result) {
          this.errorOccured = false;
          this.showResetDiv = true;
          this.validToken = true;
        } else {
          this.showResetDiv = false;
          this.errorOccured = true;
          this.validToken = false;
          // this.errorMsg = this._dataStorages.read('forgotError');
          this.toastr.error('Invalid Token');
        }
      });
    }

  passwordLnChk(formVals) {
    if ((formVals).length < 6) {
      this.errorOccured = true;
      this.errorMsg = 'Signon password should have minimum "6" characters';
    } else {
      this.errorOccured = false;
      this.errorMsg = '';
    }
  }

    submitPass(formVals) {
      if (formVals.newpwd === formVals.conpwd) {
      this.loader.displayLoader(true);
      this._resetPass.saveNewPassword(this.username, formVals.conpwd, this.token)
      .subscribe(res => {
        this.loader.displayLoader(false);
        if (res.status === 1) {
          this.success = true;
          this.toastr.success('Your password has been changed successfully.You will be rediredted to Login page.');
          this.successMsg = 'Your password has been changed successfully.You will be rediredted to Login page.';
          this.errorOccured = false;
          setTimeout(() => {
            this.logout();
          }, 3000);
        } else {
          this.errorOccured = true;
          this.errorMsg = res.error.message;
        }
      });
      } else {
        this.loader.displayLoader(false);
        this.toastr.warning('New password and Confirm password must match.');
        this.errorMsg = 'New password and Confirm password must match.';
        this.errorOccured = true;
        this.success = false;
      }
      }


    showPassword(input: any): any {
      input.type = input.type === 'password' ?  'text' : 'password';
     }

     logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('token');
      localStorage.clear();
      this._router.navigate(['/login']);
    }
  ngOnDestroy() {
  }

}

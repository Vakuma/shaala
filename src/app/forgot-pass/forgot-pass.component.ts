import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ForgotusrpassrService } from './../_services/forgotusrpass.service';
import { DataStorageService } from './../_services/data-storage.service';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from './../_services/loader.service';
import { PermissionManagementService } from '../_services/permissions.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['../../vendor/styles/authentication.css', './forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit, AfterViewChecked {
  public successMsg: string;
  public errorMsg: any;
  success = false;
  errorOccured = false;
  emaiID = '';
  @ViewChild('logoEle') logoEle: ElementRef;

  constructor(private _forogotPassword: ForgotusrpassrService,
    private loader: LoaderService,
    private toastr: ToastrService,
    private _dataStorage: DataStorageService,
    private permService: PermissionManagementService) {
    document.title = 'Forgot Password';
  }

  ngOnInit() {
    this.success = false;
    this.errorOccured = false;
  }

  ngAfterViewChecked() {

  }

  /*****************************************************************************************************
   * @function submit
   * @param fp
   */

  submit(fp) {
    this.loader.displayLoader(true);
    this.emaiID = fp.emailAddress;
    this._forogotPassword.forgotPass(fp.emailAddress, fp.username)
      .subscribe(
        result => {
          this.loader.displayLoader(false);
          if (result.status === 1) {
            this.success = true;
            this.errorOccured = false;
            this.successMsg = 'A reset link has been sent to your email id. Please use it to proceed further.';
          } else {
            this.success = false;
            this.toastr.warning(result.error.message);
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
        }, err => {
          this.toastr.warning('some unknown error has occured');
          this.loader.displayLoader(false);
        } );
  }
}

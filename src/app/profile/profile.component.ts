// import { element } from 'protractor';
import { Component, OnInit, DebugElement } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { LoaderService } from './../_services/loader.service';
import { PermissionManagementService } from './../_services/permissions.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  public type = 'password';
  public showPass = false;
  showDetails: boolean;
  showProfile = true;
  showUserEditProfile = false;
  profileData: any;
  passwordChanged = false;
  errOccured = true;
  errorMesage = '';
  successMsg = '';
  user = {
    firstName: '',
    lastName: '',
    userName: '',
    phone: '',
    emailAddress: '',
    lastLoggedInTime: '',
    ipAddress: '',
    defaultLang: ''
  };

  changePwd = {
    oldPass: '',
    newPass: '',
    conPass: '',
  };
  public newUserData = {
    firstName: '',
    lastName: '',
    userName: '',
    roleId: '',
    emailAddress: '',
    phoneNumber: '',
    defaultLang: ''
  };

  languages = [{
    name: 'Chinese',
    code: 'ch'
  }, {
    name: 'English',
    code: 'en'
  }];



  constructor(private Service: ProfileService,
    private _router: Router, private loader: LoaderService,
    public toastr: ToastrService,
    private permService: PermissionManagementService) {
    this.loadData();
    document.title = 'Profile';
  }

  loadData() {
    this.loader.displayLoader(true);
    this.Service.getCompanyProfileData().subscribe(res => {
      this.loader.displayLoader(false);
      if (res.status === 1) {
        this.profileData = res.data;
        this.user.firstName = this.profileData.firstName;
        this.user.lastName = this.profileData.lastName;
        this.user.userName = this.profileData.userName;
        this.user.phone = this.profileData.phone;
        this.user.emailAddress = this.profileData.emailAddress;
        this.user.lastLoggedInTime = this.profileData.lastLoggedInTime;
        this.user.ipAddress = this.profileData.lastLoggedInIp;
        this.user.defaultLang = this.profileData.defaultLang;
        localStorage.setItem('defaulttLang', res.data.defaultLang);
      }
    }, err => {
      this.loader.displayLoader(false);
    });
  }

  // tslint:disable-next-line:no-shadowed-variable
  pwdVisible(element) {
    element.type = element.type === 'password' ? 'text' : 'password';
  }

  changePass() {
    const data = {
      oldPassword : this.changePwd.oldPass,
      newPassword : this.changePwd.newPass
    };

    let matchNewCon: boolean;
    let isNewPassSame: boolean;
    isNewPassSame = this.isNewPassSameAsOld(this.changePwd);
    matchNewCon = this.confirmPassWords(this.changePwd.newPass, this.changePwd.conPass);

    if (!matchNewCon) {
        this.errOccured = true;
        this.errorMesage = 'Password Match Val';
    } else if (isNewPassSame) {
      this.errOccured = true;
      this.errorMesage = 'Last 5 Pass Val';
    } else {
    this.errOccured = false;
    this.loader.displayLoader(true);
    this.Service.changePassWord(data).subscribe(res => {
      // this.loader.displayLoader(false);
      if (res.status === 1) {
        this.loader.displayLoader(false);
        // this.passwordChanged = true;
        this.toastr.success('Password Changed successfully! Login again');
        this.errOccured = false;
        setTimeout(() => {
          this.logout();
        }, 3000);
      } else {
        this.passwordChanged = false;
        this.errOccured = true;
        if (res.error.code === 201) {
          this.errorMesage = 'Current Pass Val';
        } else if (res.error.code === 101) {
          this.errorMesage = 'Last 5 Pass Val';
        }
      }
    }, err => {
      this.loader.displayLoader(false);
    });
  }
  }

  toggleDetails(): void {
    this.resetPassword();
    this.showDetails = !this.showDetails;
    if (this.showDetails === true) {
      this.showProfile = false;
    } else {
      this.showProfile = true;
      this.passwordChanged = false;
        this.errOccured = false;
    }
  }

  resetPassword() {
    this.changePwd = {
      oldPass: '',
      newPass: '',
      conPass: '',
    };
    this.showMsg = false;
    this.showMsg2 = false;
  }

  pwdLngth(value) {
    if ((value).length < 6) {
      this.errOccured = true;
      this.errorMesage = 'Password Len Validation';
    } else {
      this.errOccured = false;
      this.errorMesage = '';
    }
  }

  confirmPassWords(newPwd, conPwd) {
    if (newPwd === conPwd) {
      return true;
    } else {
      return false;
    }
  }

  isNewPassSameAsOld(password) {
    // tslint:disable-next-line:triple-equals
    if (password.oldPass == password.newPass && password.newPass  == password.conPass && password.oldPass == password.conPass) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.clear();
    this._router.navigate(['/login']);
  }
  submitEditProfile() {
    const userData = {
      username: this.newUserData.userName,
      firstName: this.newUserData.firstName,
      lastName: this.newUserData.lastName,
      email: this.newUserData.emailAddress,
      phoneNumber: this.newUserData.phoneNumber,
      defaultLang: this.newUserData.defaultLang
    };
    this.loader.displayLoader(true);
    this.Service.editUserData(userData).subscribe(res => {
      this.loader.displayLoader(false);
        if (res.status === 1) {
          this.loadData();
          this.showProfile = true;
          this.showUserEditProfile = false;
          this.toastr.success('updated successfully');
        } else {
          this.toastr.warning('sorry not updated');
        }
      }, err => {
        this.loader.displayLoader(false);
        this.toastr.warning('sorry not updated');
      }
    );
  }

  // tslint:disable-next-line:member-ordering
  showMsg = false;
  // tslint:disable-next-line:member-ordering
  showMsg2 = false;
  checkPassword(cnfPass, newPass, currPass, frm) {
    console.log(newPass.value);
    console.log(cnfPass.value);
    // this.showMsg = true;
    if (cnfPass.value === newPass.value) {
      this.showMsg = false;
    } else {
      this.showMsg = true;
    }

    if (((cnfPass.value === newPass.value) && (frm.invalid === true))) {
      // this.showMsg = false;
      this.showMsg2 = true;
    } else {
      this.showMsg2 = false;
    }
    console.log(frm.invalid, this.showMsg2);
  }

  showEditProfile() {
    this.showDetails = false;
    this.showProfile = false;
    this.showUserEditProfile = true;
    this.newUserData.firstName = this.user.firstName;
    this.newUserData.lastName = this.user.lastName;
    this.newUserData.userName = this.user.userName;
    this.newUserData.emailAddress = this.user.emailAddress;
    this.newUserData.phoneNumber = this.user.phone;
    this.newUserData.defaultLang = this.user.defaultLang;
  }

  resetForm() {
    this.loadData();
  }

  ngOnInit() {
  }

}




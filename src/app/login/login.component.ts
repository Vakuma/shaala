import { PermissionManagementService } from './../_services/permissions.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';
import { DataStorageService } from '../_services/data-storage.service';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { LoaderService } from '../_services/loader.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    loading = false;
    returnUrl: string;
    invalidLogin = false;
    errorMsg: string;
    allPerms: Array<string>;
    res: any;
    correctCredentials: boolean;
    @ViewChild('logoEle') logoEle: ElementRef;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private loader: LoaderService,
        private toastr: ToastrService,
        private permService: PermissionManagementService) {
        document.title = 'Login';
    }
    ngOnInit() {
        // reset login status when the component is initialized
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
    }
    login(username, password) {
        this.loader.displayLoader(true);
        this.invalidLogin = false;
        this.authenticationService.login(username, password)
            .subscribe(
                response => {
                    this.res = response;
                    // tslint:disable-next-line:triple-equals
                    if (response.status == 1) {
                        localStorage.setItem('token', this.res.data.token);
                        localStorage.setItem('userData', this.res.data);
                        this.permService.getPermissionArray().subscribe(resp => {
                            this.loader.displayLoader(false);
                            if (resp) {
                                this.permService.getPermissionsReplay().subscribe(res => {
                                    this.allPerms = res;
                                    if (this.allPerms.indexOf('vd') > 0) {
                                        this.setDefaultLanguage();
                                        this.router.navigate(['/home', 'dashboard']);
                                    } else {
                                        this.router.navigate(['/home']);
                                    }
                                });
                            }
                        });
                    } else {
                        this.invalidLogin = true;
                        this.correctCredentials = false;
                        this.errorMsg = this.res.error.message;
                        this.toastr.warning(this.res.error.message);
                        this.loader.displayLoader(false);
                    }
                },
                error => {
                    // this.alertService.error(error);
                    this.loader.displayLoader(false);
                    this.invalidLogin = true;
                    this.errorMsg = 'Unknown Error';
                });
    }
    setDefaultLanguage() {
        this.permService.getCompanyProfileData().subscribe(res => {
            if (res.status === 1) {
                localStorage.setItem('menus', res.data.channels);
                localStorage.setItem('loggedInUser', res.data.roleId);
                localStorage.setItem('defaulttLang', res.data.defaultLang);
            }
        });
    }
}

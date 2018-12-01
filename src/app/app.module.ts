import { AuthGuard } from './_services/auth-guard.service';
import { PermissionManagementService } from './_services/permissions.service';
import { UserManagementComponent } from './user-management/user-management.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { HeadNavComponent } from './home/head-nav/head-nav.component';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AlertService, AuthenticationService } from './_services/index';
import { DataStorageService } from './_services/data-storage.service';
import { DateTimeService } from './_services/dateTimes.service';
import { PaginationModule } from 'ngx-bootstrap';
import { CalendarModule, ButtonModule } from 'primeng/primeng';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ProfileComponent } from './profile/profile.component';
import { LoaderService } from '././_services/loader.service';
import { ProfileService } from './profile/profile.service';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ForgotusrpassrService } from './_services/forgotusrpass.service';
import { ResetPassComponent } from './forgot-pass/reset-pass/reset-pass.component';
import { ResetpassService } from './_services/resetpass.services';
import { ThemeService } from './_services/theme.service';
import { CommonFunService } from './_services/commonFunction.service';
import { TokenInterceptor } from './_services/pstoken.interceptor';
import { BaseUrlInterceptor } from './_services/pstoken.interceptor';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { DemoComponent } from './demo/demo.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        ChartsModule,
        AngularMultiSelectModule,
        NgIdleKeepaliveModule.forRoot(),
        PaginationModule.forRoot(),
        ToastrModule.forRoot({
            timeOut: 1500,
            positionClass: 'toast-top-right',
            preventDuplicates: true}),
        ButtonModule,
        CalendarModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        HeadNavComponent,
        ProfileComponent,
        ForgotPassComponent,
        ResetPassComponent,
        UserManagementComponent,
        DashboardComponent,
        DemoComponent,
        ChangePassComponent,
        WelcomeComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        AlertService,
        DatePipe,
        AuthenticationService,
        DataStorageService,
        LoaderService,
        ProfileService,
        ForgotusrpassrService,
        ResetpassService,
        PermissionManagementService,
        DateTimeService,
        AuthGuard,
        ThemeService,
        CommonFunService,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

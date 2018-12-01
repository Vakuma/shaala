import { ModuleWithProviders } from '@angular/core';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_services/auth-guard.service';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { DemoComponent } from './demo/demo.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ResetPassComponent } from './forgot-pass/reset-pass/reset-pass.component';
import { ProfileComponent } from './profile/profile.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';



const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        // canActivate: [AuthGuard],
        children:
        [
        {
          path: 'user-management',
          component: UserManagementComponent
        },
        {
            path: 'my-profile',
            component: ProfileComponent
        },
        {
            path: 'welcome',
            component: WelcomeComponent
        },
        {
            path: 'dashboard',
            component: DashboardComponent
        }
      ]
      },
    { path: 'login', component: LoginComponent },
    { path: 'forgotpass', component: ForgotPassComponent },
    { path: 'demo', component: DemoComponent },
    { path: 'change-pass', component: ChangePassComponent },
    { path: 'resetpassword/:token/:username', component: ResetPassComponent },

    // this is to redirect to the login page
    {
        path: '**',
        redirectTo: '/login'
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

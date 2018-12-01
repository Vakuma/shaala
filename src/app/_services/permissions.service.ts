import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthenticationService } from './authentication.service';
import { Injectable, Component } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

// tslint:disable-next-line:class-name


@Injectable()
export class PermissionManagementService {
    private permissionsArr = new ReplaySubject<Array<string>>();
    allPermissions = [];
    permissionArray = [];
    headers;
    constructor(private http: HttpClient,
        private auth: AuthenticationService) { }

    getAllPermissions(): Observable<any> {
        return this.http.get('/gateway/user/permissions')
            .map((response: any) => {
                const res = response;
                if (res.data != null) {
                    return res.data;
                } else {
                    if (res.error.code === 401) {
                        this.auth.logout();
                    }
                }
            });
    }

    getRequiredPermissionStatus(permissionName: string): Observable<any> {
        let status;
        return this.http.get('/gateway/user/permissions')
            .map((response: any) => {
                const res = response;
                if (res.data != null) {
                    const permissions = res.data;
                    status = permissions.indexOf(permissionName) >= 0 ? true : false;
                    return status;
                } else {
                    if (res.error.code === 401) {
                        this.auth.logout();
                    }
                }
            });
    }

    getPermissionArray(): Observable<any> {
        return this.http.get('/gateway/user/permissions')
            .map((response: any) => {
                const res = response;
                if (res.data != null) {
                    const allPerm: Array<string> = res.data;
                    let i = 0;
                    this.permissionArray[i] = (allPerm.indexOf('can_login_logout') >= 0) ? 'l' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_reset_password') >= 0) ? 'rp' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_change_password') >= 0) ? 'cp' : '';

                    this.permissionArray[i++] = (allPerm.indexOf('can_view_dashboard') >= 0) ? 'vd' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_view_transaction_dashboard') >= 0) ? 'vd' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_create_user') >= 0) ? 'cu' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_view_user_list') >= 0) ? 'vul' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_view_audit_log') >= 0) ? 'val' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_update_user_ipaddress') >= 0) ? 'upip' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_view_my_profile') >= 0) ? 'vmp' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_view_connector_mid_mgmt') >= 0) ? 'vcmm' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_view_bank_list') >= 0) ? 'vbl' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_edit_transaction') >= 0) ? 'cet' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_add_new_bank') >= 0) ? 'anb' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_edit_bank') >= 0) ? 'ceb' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_approve_receiving_bank') >= 0) ? 'carb' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_view_bank_mgmt') >= 0) ? 'vbm' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_view_connector_mid') >= 0) ? 'vcm' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_view_client_list') >= 0) ? 'vcl' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_view_client_mgmt') >= 0) ? 'cvcm' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_update_transaction') >= 0) ? 'cut' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_reinitiate_callback') >= 0) ? 'crcb' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_update_kpay_transaction') >= 0) ? 'cukt' : false;
                    this.permissionArray[i++] = (allPerm.indexOf('can_request_update_kpay_transaction') >= 0) ? 'crukt' : false;
                    this.permissionArray[i++] = (allPerm.indexOf('can_update_M88Pay_transaction') >= 0) ? 'cumt' : false;
                    this.permissionArray[i++] = (allPerm.indexOf('can_request_update_M88Pay_transaction') >= 0) ? 'crumt' : false;
                    this.permissionArray[i++] = (allPerm.indexOf('can_view_agent') >= 0) ? 'cva' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_edit_agent') >= 0) ? 'cea' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_add_agent') >= 0) ? 'caa' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_view_txn_review') >= 0) ? 'cvtr' : '';
                    this.permissionArray[i++] = (allPerm.indexOf('can_claim_txn') >= 0) ? 'cct' : '';

                    this.allPermissions = this.removeObjectReference(this.permissionArray);
                    this.permissionsArr.next(this.allPermissions);
                    return this.permissionArray;

                } else {
                    if (res.error.code === 401) {
                        this.auth.logout();
                    }
                }
            });
    }

    removeObjectReference(permissionArray) {
        const arr = JSON.parse(JSON.stringify(permissionArray));
        return arr;
    }

    getPermissionsReplay(): Observable<Array<string>> {
        return this.permissionsArr.asObservable();
    }

    getCompanyProfileData(): Observable<any> {
        // const body = JSON.stringify(inpParams);
        return this.http.get('/gateway/user/profile')
            .map((response: Response) => {
                const res = response;
                return res;
            });
    }
}

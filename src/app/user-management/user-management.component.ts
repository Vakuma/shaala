import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { UserManagementService } from './user-management.service';
import { ViewChild, ElementRef } from '@angular/core';
import { LoaderService } from './../_services/loader.service';
import { CommonFunService } from '../_services/commonFunction.service';
import { PermissionManagementService } from '../_services/permissions.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-user-management',
    templateUrl: './user-management.component.html',
    styleUrls: ['./user-management.component.css'],
    providers: [UserManagementService]
})

export class UserManagementComponent implements OnInit {
    // Filters
    isRTL: boolean;
    showDetails: boolean;
    value: string;
    roleId: string;
    showInput = false;
    defaultModal1: any;
    userData: any;
    defaultStatus = '1';
    loggedInUser: any;

    constructor(private http: HttpClient, private commonFun: CommonFunService,
        private toastr: ToastrService,
        private permService: PermissionManagementService,
        private Service: UserManagementService, private loader: LoaderService, ) {
        document.title = 'User Management';
        this.addclientList();
        this.clientListForCreateUser();
        this.inpParams.filter.status = this.defaultStatus;
        this.loadData();
        this.checkRoles(Number(localStorage.getItem('loggedInUser')));
    }

    // Filters

    filterVerified = 'Any';
    filterRole = 'Any';
    filterStatus = 'Any';
    filterLatestActivity = [null, null];
    date1: Date;
    clientList = [];
    clientsListForUser = [];


    // Table

    // Options
    dataUrl = '/gateway/user/list';
    searchKeys = ['userName', 'firstName', 'lastName', 'role'];
    sortBy = 'id';
    sortDesc = true;
    perPage = 10;

    filterVal = '';
    public totalItems: number;
    public currentPage: number;
    public startRange: number;
    public endRange: number;
    hasCompPermissions = true;


    usersData: Object[] = [];
    originalUsersData: Object[] = [];
    public inpParams = {
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

    statusArr = [
        { id: null, name: 'All' },
        { id: 0, name: 'InActive' },
        { id: 1, name: 'Active' }
    ];

    editStatus = [
        { id: 0, name: 'InActive' },
        { id: 1, name: 'Active' }
    ];

    roles = [{
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


    roles1 = [
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


    public newUserData = {
        firstName: '',
        lastName: '',
        userName: '',
        roleId: '',
        emailAddress: '',
        phoneNumber: '',
        defaultLang: '',
        clientId: ''
    };

    checkRoles(roleId) {
        if (roleId === 3) {
            this.roles1 = [{
                roleId: 4,
                roleName: 'Client User'
            }];
        }
    }

    getActStatus(status) {
        if (status === 1) {
            return 'Deactivate';
        } else {
            return 'Activate';
        }
    }

    addclientList() {
        this.commonFun.clientList().subscribe(res => {
            if (res.status === 1) {
                this.clientList = res.data;
            }
        });
    }

    clientListForCreateUser() {
        this.Service.clientList().subscribe(res => {
            if (res.status === 1) {
                this.clientsListForUser = res.data;
            }
        });
    }

    toggleDetails(): void {
        this.inpParams.filter.status = null;
        this.showDetails = !this.showDetails;
    }

    getTimeStamp(e, ele) {
        if (ele === 'start') {
            this.inpParams.filter.start = new Date(e).getTime();
        } else {
            this.inpParams.filter.end = new Date(e).getTime();
        }
    }

    loadData() {
        this.loader.displayLoader(true);
        this.Service.getUserList(this.inpParams).subscribe(res => {
            this.loader.displayLoader(false);
            if (res.status === 1) {
                this.originalUsersData = res.data.results;
                // this.update();
                this.totalItems = res.data.page.total;
                this.currentPage = res.data.page.index + 1;
                this.inpParams.page.size = res.data.page.size;
                this.startRange = (this.currentPage - 1) * this.inpParams.page.size + 1;
                this.endRange = ((this.currentPage) * this.inpParams.page.size < this.totalItems)
                    ? (this.currentPage) * this.inpParams.page.size : this.totalItems;
            }
        }, err => {
            this.loader.displayLoader(false);
        });
    }

    /* ------------------------------------------- */
    sortData(sortBy) {
        this.inpParams.page.sortOrder = this.sort_Data(sortBy, this.inpParams.page.sortOrder, this.inpParams.page.sortBy);
        this.inpParams.page.sortBy = sortBy;
        this.loadData();
    }

    pageChanged(event: any): void {
        this.inpParams.page.index = event.page - 1;
        this.loadData();
    }

    recordsPerPage(size) {
        if (size !== this.inpParams.page.size) {
            this.inpParams.page.size = size;
            this.inpParams.page.index = 0;
            this.loadData();
        }
    }

    sort_Data(sortBy, sortOrder, inpParamSortBy): string {
        if (sortBy) {
            if (sortBy === inpParamSortBy) {
                if (sortOrder === 'desc') {
                    return 'asc';
                } else { return 'desc'; }
            } else { return sortOrder = 'desc'; }
        } else { return sortOrder = 'desc'; }
    }

    /*--------------------- ngx ------------------- */

    getStatus(status) {
        return this.commonFun.getUserStatus(status);
    }

    advancedSearch() {
        this.inpParams.filter.clientId = this.inpParams.filter.clientId !== '' ? JSON.parse(this.inpParams.filter.clientId) : '';
        if ((this.inpParams.filter.start === this.inpParams.filter.end) ||
            (this.inpParams.filter.start && this.inpParams.filter.end)) {
            if (this.inpParams.filter.start && this.inpParams.filter.end) {
                this.inpParams.filter.end = this.inpParams.filter.end + 86399999;
            }
        }
        this.loadData();
    }

    createUser(frmValues) {
        this.loader.displayLoader(true);
        console.log(frmValues);
        frmValues.roleId = Number(frmValues.roleId);
        console.log(frmValues.roleId);
        this.Service.createUser(frmValues).subscribe(res => {
            this.loader.displayLoader(false);
            if (res.status === 1) {
                this.toastr.success('User Created Successfully');
            } else {
                this.toastr.warning(res.error.message);
            }
        }, err => {
            this.loader.displayLoader(false);
            this.toastr.success('User is not created');
        });
    }

    onSelectRole(event) {
        const value = event.target.value;
        if (value === '3' || value === '4') {
            this.showInput = true;
        } else {
            this.showInput = false;
        }

    }

    resetForm() {
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
    }

    passDataForUpdate(user) {
        this.userData = Object.assign({}, user);
        this.userData.role = this.commonFun.mapRoleNames(user.role);
        this.userData.remarks = '';
    }

    updateUserData(formData) {
        this.loader.displayLoader(true);
        formData.roleId = JSON.parse(this.userData.role);
        this.Service.updateUserData(formData).subscribe(res => {
            this.loader.displayLoader(false);
            if (res.status === 1) {
                this.loadData();
                this.toastr.success(formData.username + ' data updated successfully.');
            } else {
                this.toastr.warning('Sorry, Status has not updated.');
            }
        }, err => {
            this.loader.displayLoader(false);
            this.toastr.warning('Sorry, Status has not updated.');
        });
    }

    updateStatus(data) {
        this.loader.displayLoader(true);
        const inpData = {
            userName: data.userName,
            status: data.status === 1 ? 0 : 1
        };
        this.Service.updateStatus(inpData).subscribe(res => {
            this.loader.displayLoader(false);
            if (res.status === 1) {
                this.toastr.success('Status updated succesfully');
                this.loadData();
            } else {
                this.toastr.warning('Status is not updated!');
            }
        }, err => {
            this.loader.displayLoader(false);
        });
    }

    refresh() {
        this.resetData();
        this.showDetails = false;
        this.inpParams.filter.status = this.defaultStatus;
        this.loadData();
    }

    resetData() {
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
    }

    ngOnInit() {
        let perm: Array<any>;
        this.permService.getPermissionsReplay().subscribe(res => {
            perm = res;
            if (perm) {
                this.hasCompPermissions = (perm.indexOf('vul') >= 0) ? true : false;
            }
        });
    }
}

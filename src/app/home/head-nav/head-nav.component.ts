import { DataStorageService } from './../../_services/data-storage.service';
import { PermissionManagementService } from './../../_services/permissions.service';
import { Input, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../_services/authentication.service';
import { HeadNavService } from './head-nav.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'headnav',
  templateUrl: './head-nav.component.html',
  styles: [':host { display: block; }'],
  styleUrls: ['./head-nav.component.css'],
  providers: [HeadNavService]
})
export class HeadNavComponent implements OnInit {
  username: string;
  role: string;
  profileData: any;
  permissions: any;
  canViewCalender: boolean;
  canViewCompany: boolean;
  canViewInstaller: boolean;
  hideSupAdmin_instaler: boolean;
  hostName: string;
  isExpanded = false;
  allPermissions: any;
  selConnector: any;
  selectedConName = null;
  storedConName = null;
  showConfig = false;
  menus: any;
  canShowAccessDenied = false;

  viewEasyPay = false;
  viewM88Pay = false;
  viewKPay = false;

  @ViewChild('mainNav') mainNav: ElementRef;
  @ViewChild('logoEle') logoEle: ElementRef;
  canLoginLogout: boolean;
  canResetPassword: boolean;
  canChangePassword: boolean;
  can_view_dashboard: boolean;
  can_create_user: boolean;
  can_view_user_list: boolean;
  can_view_bank_list: boolean;
  can_view_client_list: boolean;
  can_view_connector_mid: boolean;
  can_update_user_ipaddress: boolean;
  can_view_my_profile: boolean;
  can_view_connector_mid_mgmt: boolean;
  can_view_transaction_dashboard: boolean;
  can_update_kpay_transaction: boolean;
  can_request_update_kpay_transaction: boolean;
  can_view_audit_log: boolean;
  can_view_agent: boolean;
  can_view_txn_review: boolean;

  exams = [
    { id: 1, name: 'Semester 1' },
    { id: 2, name: 'Semester 2' },
    { id: 3, name: 'Semester 3' }
  ];
  selectedExam = '';

  constructor(private auth: AuthenticationService,
    private permService: PermissionManagementService,
    private dataStorage: DataStorageService,
    private authService: AuthenticationService,
    private router: Router,
    private service: HeadNavService) {
    this.hostName = window.location.host;
    this.initLoad();
  }

  addConnectors() {
    setTimeout(() => {
      this.menus = localStorage.getItem('menus');
      if (this.menus !== 'null' && this.menus !== null) {
        this.viewEasyPay = this.menus.includes('EASYPAY');
        this.viewM88Pay = this.menus.includes('M88PAY');
        this.viewKPay = this.menus.includes('KPAY');
        /*------------------------- default Connector -----------------------*/
        this.configConnectors(this.menus.split(',')[0], 'No');
        /*--------------------------------------------------------------------*/
      } else {
        this.canShowAccessDenied = true;
        setTimeout(() => { this.logOut(); }, 4000);
      }
    }, 500);
  }

  setPermissions() {
    this.permService.getAllPermissions().subscribe(result => {
      const i = 0;
      this.allPermissions = result;
      if (result != null) {
        this.canLoginLogout = (this.allPermissions.indexOf('can_login_logout') >= 0) ? true : false;
        this.canResetPassword = (this.allPermissions.indexOf('can_reset_password') >= 0) ? true : false;
        this.canChangePassword = (this.allPermissions.indexOf('can_change_password') >= 0) ? true : false;
        this.can_view_dashboard = (this.allPermissions.indexOf('can_view_dashboard') >= 0) ? true : false;
        this.can_view_transaction_dashboard = (this.allPermissions.indexOf('can_view_transaction_dashboard') >= 0) ? true : false;
        this.can_create_user = (this.allPermissions.indexOf('can_create_user') >= 0) ? true : false;
        this.can_view_user_list = (this.allPermissions.indexOf('can_view_user_list') >= 0) ? true : false;
        this.can_view_bank_list = (this.allPermissions.indexOf('can_view_bank_list') >= 0) ? true : false;
        this.can_view_audit_log = (this.allPermissions.indexOf('can_view_audit_log') >= 0) ? true : false;
        this.can_view_client_list = (this.allPermissions.indexOf('can_view_client_list') >= 0) ? true : false;
        this.can_view_connector_mid = (this.allPermissions.indexOf('can_view_connector_mid') >= 0) ? true : false;
        this.can_update_user_ipaddress = (this.allPermissions.indexOf('can_update_user_ipaddress') >= 0) ? true : false;
        this.can_view_my_profile = (this.allPermissions.indexOf('can_view_my_profile') >= 0) ? true : false;
        this.can_view_agent = (this.allPermissions.indexOf('can_view_agent') >= 0) ? true : false;
        this.can_view_txn_review = (this.allPermissions.indexOf('can_view_txn_review') >= 0) ? true : false;
        this.can_view_connector_mid_mgmt = (this.allPermissions.indexOf('can_view_connector_mid_mgmt') >= 0) ? true : false;
        this.can_update_kpay_transaction = (this.allPermissions.indexOf('can_update_kpay_transaction') >= 0) ? true : false;
        this.can_request_update_kpay_transaction = (this.allPermissions.indexOf('can_request_update_kpay_transaction') >= 0) ? true : false;

        /* ------------------------------- */
        this.initLoad();
        this.addConnectors();
        this.showConfig = this.showConfigMenu();

      } else {
        this.logOut();
      }
    });
  }

  logOut() {
    this.auth.logout();
  }

  showConfigMenu() {
    if (this.can_view_agent || this.can_view_bank_list || this.can_view_client_list || this.can_view_connector_mid_mgmt) {
      return true;
    } else {
      return false;
    }
  }

  selectExam(name) {
    console.log(name);
    const currentRoute = this.router.url.split('/home/');

    this.selectedExam = name;
    localStorage.setItem('selectedExam', this.selectedExam);

    if (currentRoute[1] === 'dashboard' || currentRoute[1] === 'welcome') {
      this.router.navigate(['/home']);
      setTimeout(() => {
        this.router.navigate(['/home', 'dashboard']);
      }, 200);
    }
  }

  configConnectors(conName, fromPage?) {
    let lastSelConName: string;
    if (localStorage.getItem('selectedCon')) {
      lastSelConName = localStorage.getItem('selectedCon');
    } else {
      lastSelConName = conName;
    }
    if (!fromPage) {
      fromPage = 'No';
    }
    const currentRoute = this.router.url.split('/home/');
    this.selectedConName = conName;
    localStorage.setItem('selectedCon', this.selectedConName);
    if (conName === 'EASYPAY') {
      this.selConnector = this.service.menu.easyPay;
      this.selConnector.transaction.permission = this.can_view_transaction_dashboard;
      this.selConnector.account.permission = this.can_view_bank_list;
    } else if (conName === 'M88PAY') {
      this.selConnector = this.service.menu.majorPay;
      this.selConnector.transaction.permission = this.can_view_transaction_dashboard;
      this.selConnector.account.permission = this.can_view_bank_list;
    } else if (conName === 'KPAY') {
      this.selConnector = this.service.menu.kPay;
      this.selConnector.transaction.permission = this.can_view_transaction_dashboard;
      this.selConnector.account.permission = this.can_view_bank_list;
    }

    if (currentRoute[1] === 'dashboard' && fromPage === 'yes') {
      this.router.navigate(['/home']);
      setTimeout(() => {
        this.router.navigate(['/home', 'dashboard']);
      }, 200);
    } else {
      if (lastSelConName !== conName) {
        this.router.navigate(['/home', 'dashboard']);
      }
    }
  }

  initLoad() {

    this.selectedExam = this.exams[0].name;
    localStorage.setItem('selectedExam', this.selectedExam);

    this.storedConName = localStorage.getItem('selectedCon');
    this.storedConName = localStorage.getItem('selectedCon');
    if (this.storedConName) {
      this.configConnectors('' + this.storedConName, 'No');
    } else {
      this.configConnectors('EASYPAY', 'No');
    }
  }

  ngOnInit() {
    this.setPermissions();
  }
}

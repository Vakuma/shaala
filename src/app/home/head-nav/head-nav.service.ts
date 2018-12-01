import { Injectable } from '@angular/core';

@Injectable()

export class HeadNavService {
    menus: any;
    constructor() {
        this.menus = localStorage.getItem('menus');
    }
    public menu = {
        easyPay: {
            transaction: {
                displayName: 'EasyPay Transactions',
                routerLink: 'transaction-dashboard',
                permission: 'can_view_transaction_dashboard'
            },
            account: {
                displayName: 'easy account',
                routerLink: 'easy-pay',
                permission: 'can_view_bank_list'
            }
        },
        majorPay: {
            transaction: {
                displayName: 'majorPay Transactions',
                routerLink: 'majorpay-transactions',
                permission: 'can_view_transaction_dashboard'
            },
            account: {
                displayName: 'majorPay Account',
                routerLink: 'major-pay',
                permission: 'can_view_bank_list'
            }
        },
        kPay: {
            transaction: {
                displayName: 'KoreaPay Transactions',
                routerLink: 'kpay-transactions',
                permission: 'can_view_transaction_dashboard'
            },
            account: {
                displayName: 'KoreaPay Account',
                routerLink: 'kpay-accounts',
                permission: 'can_view_bank_list'
            }
        }
    };
}

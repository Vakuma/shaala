import { Injectable } from '@angular/core';
@Injectable()

export class ThemeService {
    addThemeClassLogoToNavbar(element, logoEle) {
        const domainName = window.location.host;
        if (domainName === 'localhost:4400' ||
            domainName === 'ps-dashboard.merchantpayments.site' ||
            domainName === 'ps-staging.merchantpayments.site') {
            document.getElementById('theme').setAttribute('href', 'assets/theme/theme2.css');
            logoEle.nativeElement.src = '/assets/Images/paysec.png';
        } else if (
            domainName === 'localhost:4200' ||
            domainName === '13.232.68.176:8080' ||
            domainName === 'il-dashboard.merchantpayments.site' ||
            domainName === 'md-staging.merchantpayments.site') {
            element.nativeElement.classList.add('bg-dark');
            logoEle.nativeElement.src = '../../assets/Images/1labs-logo.png';
            document.getElementById('theme').setAttribute('href', 'assets/theme/theme1.css');
        }
    }
    loadLogosForLogin(logoEle) {
        const domainName = window.location.host;
        if (domainName === 'localhost:4400' ||
            domainName === 'ps-dashboard.merchantpayments.site' ||
            domainName === 'ps-staging.merchantpayments.site') {
            document.getElementById('theme').setAttribute('href', 'assets/theme/theme2.css');
            logoEle.nativeElement.src = '/assets/Images/paysec.png';
        } else if (
            domainName === 'localhost:4200' ||
            domainName === 'il-dashboard.merchantpayments.site' ||
            domainName === 'md-staging.merchantpayments.site' ||
            domainName === '13.232.68.176:8080') {
            logoEle.nativeElement.src = '../../assets/Images/1labs-logo.png';
            document.getElementById('theme').setAttribute('href', 'assets/theme/theme1.css');
        }
    }
}

import { PermissionManagementService } from './_services/permissions.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService } from './_services/loader.service';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  displayLoader = false;
  loaderSubscription: Subscription;

  idleState = '';
  timedOut = false;
  expiring = false;
  lastPing?: Date = null;
  sessionedOut = false;

  constructor(
    private auth: AuthenticationService,
    private idle: Idle,
    private keepalive: Keepalive,
    private router: Router,
    private loaderService: LoaderService,
    private permService: PermissionManagementService) {

    window.onload = function () {
      if (localStorage.getItem('token')) {
        permService.getPermissionArray().subscribe();
      }
    };

    idle.setIdle(600); // 10 min
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(10);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => {
      this.expiring = false;
      this.idleState = ' ';
    });

    idle.onTimeout.subscribe(() => {
      this.timedOut = true;
      if (this.timedOut === true) {
        this.reset();
        this.expiring = false;
        if (auth.isLoggedIn()) {
          this.sessionedOut = true;
          localStorage.removeItem('token');
          localStorage.clear();
        }
      }
    });
    idle.onIdleStart.subscribe(() => { });
    idle.onTimeoutWarning.subscribe((countdown) => {
      if (auth.isLoggedIn()) {
        this.expiring = true;
        this.sessionedOut = false;
        this.idleState = 'Your session expires in ' + countdown + ' seconds.';
      }
    });
    // sets the ping interval to 15 seconds
    keepalive.interval(15);
    keepalive.onPing.subscribe(() => this.lastPing = new Date());
    this.reset();
  }

  reset() {
    this.idle.watch();
    this.idleState = '';
    this.timedOut = false;
  }

  ngOnInit() {
    this.loaderSubscription = this.loaderService.loaderCounter.subscribe((counter: number) => {
      this.displayLoader = counter !== 0;
    });
  }

  ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}

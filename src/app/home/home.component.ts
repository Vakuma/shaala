import { Component, OnInit } from '@angular/core';
import { PermissionManagementService } from './../_services/permissions.service';
import { LoaderService } from '../_services/loader.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

  constructor(private permService: PermissionManagementService) {
  }

  ngOnInit() {
  }

}

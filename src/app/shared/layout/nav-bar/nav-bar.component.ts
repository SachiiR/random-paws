import { Component, Directive, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  @Directive({
    selector: '[routerLinkActive]',
    exportAs: 'routerLinkActive'
  })

  myParam: any;
  constructor() {}

  ngOnInit(): void {
  }
}

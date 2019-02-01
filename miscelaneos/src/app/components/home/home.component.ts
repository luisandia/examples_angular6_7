import {AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnChanges, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <app-clases></app-clases>

<p [appResaltado]="'orange'">
  mi otro texto
</p>


<app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck,
                                      AfterContentInit, AfterContentChecked,
                                      AfterViewChecked, OnDestroy {
  /*
   oninit onchange ondestroy  son usados principalmente
  */
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnChanges(): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  constructor() {
    console.log('Constructor')
  }
}

import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vivid-films';

  mainClass = 'isXSmall';


  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {

    /* Simple responsive main container  */
    const layoutChanges = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Tablet,
      Breakpoints.Web,
    ]);

    layoutChanges.subscribe(() => {
      if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
        this.mainClass = 'isXSmall';
      }
      if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
        this.mainClass = 'isSmall';
      }
      if (this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
        this.mainClass = 'isTablet';
      }
      if (this.breakpointObserver.isMatched(Breakpoints.Web)) {
        this.mainClass = 'isWeb';
      }
    });
  }
}

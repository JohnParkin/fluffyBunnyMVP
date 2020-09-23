import { Router, ActivatedRoute } from "@angular/router";
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  public customerClick(custAction) {
    this.router.navigate(["customer", custAction]);
  }
}

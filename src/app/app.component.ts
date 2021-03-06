import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._authService.login(); /**
    if (!this._authService.authenticated) {
      //this._authService.login();
    } **/
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-protegido',
  templateUrl: './protegido.component.html',
  styles: []
})
export class ProtegidoComponent implements OnInit {

  profile:any;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

}

import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker'
const VAPID_PUBLIC ="BBOY7arLjSCBy8g959eix3aKTBs425zmhYW3U183nLHBdt6mhsG8XMwosW8wr89SevtD0izYrstgL23Eb8LNA9k";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //{"publicKey":"BBOY7arLjSCBy8g959eix3aKTBs425zmhYW3U183nLHBdt6mhsG8XMwosW8wr89SevtD0izYrstgL23Eb8LNA9k","privateKey":"CrVbyglE4rPULsdwJT6R2NOwipMKCWmi_99sIqyOOZs"}
  title = 'angular-push-notifications';
  constructor(swPush: SwPush) {
    if (swPush.isEnabled) {
      alert("working");
      swPush
        .requestSubscription({
          serverPublicKey: VAPID_PUBLIC,
        })
        .then(subscription => {
          // send subscription to the server
        })
        .catch(console.error)
    }
    else{
      alert("not working");
    }
  }
}

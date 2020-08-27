import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-cv-angular';
  monNom = 'OUATTARA ABDOULRAHIM';
  monAge = 28;
  maPhoto = '/assets/photo_profile.jpg';
  monNiveau = 'BAC + 5';
  mesLiens: any[] = [
    { lien: 'http://cv.ouatrahim.com', titre: 'Mon jolie CV' },
    { lien: 'http://gitlab.com/ouatrahim', titre: 'Mon gitlab' },
    { lien: 'http://www.linkedin.com/in/ouatrahim/', titre: 'Mon linkedin' }
  ];
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationsComponent } from './formations/formations.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { CentreInteretComponent } from './centre-interet/centre-interet.component';
import { AutresCodesComponent } from './autres-codes/autres-codes.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationsComponent,
    ExperiencesComponent,
    PresentationComponent,
    FormulaireContactComponent,
    CentreInteretComponent,
    AutresCodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

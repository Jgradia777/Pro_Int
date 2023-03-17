import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { LogoapComponent } from './components/header/logoap/logoap.component';
import { SocialComponent } from './components/header/social/social.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { ExpLabComponent } from './components/exp-lab/exp-lab.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    LogoapComponent,
    SocialComponent,
    BannerComponent,
    ExpLabComponent,
    EducacionComponent,
    SkillsComponent,
    IniciarSesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      "backgroundGradient": true,
      "backgroundColor": "#ffffff",
      "backgroundGradientStopColor": "#c0c0c0",
      "backgroundPadding": -10,
      "radius": 60,
      "maxPercent": 100,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#61A9DC",
      "innerStrokeWidth": 0,
      "subtitleColor": "#444444",
      "showInnerStroke": false,
      "startFromZero": false}),
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

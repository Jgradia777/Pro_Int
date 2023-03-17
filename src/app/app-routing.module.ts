import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'', redirectTo:'iniciar-sesion', pathMatch:'full'}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

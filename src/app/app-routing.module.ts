import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormsModule }   from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { AlumnesComponent } from './components/alumnes/alumnes.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'loggin',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },
  {
    path: 'alumnes',
    component: AlumnesComponent,
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }

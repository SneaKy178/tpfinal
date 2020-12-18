import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './application/error404/error404.component';
import { HomeComponent } from './application/home/home.component'
import { TutorielComponent } from './application/tutoriel/tutoriel.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component'
import { ReadComponent } from './application/crud/read/read.component';
import { ContactComponent } from './application/contact/contact.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { AfficherComponent } from './application/crud/afficher/afficher.component';



const routes: Routes = [

  {path:'tutoriel', 
    children:[
      {path:':id', component:TutorielComponent}
      
    ]},

      {path:'updateForm', 
    children:[
      {path:':id', component:UpdateComponent}
      
    ]},

    {path:'afficher', 
    children:[
      {path:':id', component:AfficherComponent}
      
    ]},



  {path:'home', component:HomeComponent},
  {path:'formulaire', component:FormulaireComponent},
  {path:'crud', component:ReadComponent},
  {path:'contact', component:ContactComponent},
    
  {path:'', redirectTo:'/home', pathMatch: 'full'},

  { path: 'youtube', loadChildren: () => import('./application/youtube/youtube.module').then(m => m.YoutubeModule) },
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

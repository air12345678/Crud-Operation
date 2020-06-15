import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { HomeComponent } from './home/home.component';
import { InstructionComponent } from './instruction/instruction.component';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { InsertComponent } from './insert/insert.component';
import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';
import { AuthguardService } from './service/authguard.service';


const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'instruction',component:InstructionComponent},
  {path:'login',component:LoginComponent},
  {path:"side-nav",component:SideNavComponent},
 
    {path:'createStudent',component:StudentFormComponent},
    {path: 'insert', component:InsertComponent,canActivate:[AuthguardService]},
    {path: 'view' , component:ViewComponent,canActivate:[AuthguardService]},
    {path:'main',component:MainComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

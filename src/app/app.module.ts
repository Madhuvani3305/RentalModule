import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './common/header/header.component';
import { TempComponent } from './temp/temp/temp.component';
import { RentalModule } from './rental/rental.module';


const routes:Routes=[{path:'',redirectTo:'/rentals',pathMatch:'full'},{path:'temp',component:TempComponent}]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RentalModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

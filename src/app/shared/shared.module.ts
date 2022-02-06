import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { RandomImageService } from './services/random-image.service';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ],
  providers: [RandomImageService]
})
export class SharedModule { }

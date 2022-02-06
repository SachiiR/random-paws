import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites/favourites.component';
import { MainGalleryComponent } from './main-gallery.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { mainGalleryFeatureKey, reducer } from './store/reducers/main-gallery.reducer';
import { NgbModalConfig, NgbModal, NgbAlert, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

const mainGalleryRouting: ModuleWithProviders = RouterModule.forChild([
  {path:'home', component: MainGalleryComponent},
  {path:'favourites', component: FavouritesComponent},
]);

@NgModule({
  declarations: [
    MainGalleryComponent,
    FavouritesComponent
  ],
  imports: [
    CommonModule,
    mainGalleryRouting,
    StoreModule.forFeature(mainGalleryFeatureKey, reducer),
    NgbModule
  ],
  exports: [
    MainGalleryComponent,
    FavouritesComponent
  ],
  providers: [NgbModalConfig, NgbModal, NgbAlert]
})
export class MainGalleryModule { }

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { map } from 'rxjs/operators';
import { MainGalleryState } from '../store/reducers/main-gallery.reducer';
import * as mainGallerySelector from './../store/selectors/main-gallery.selector';
import * as mainGalleryAction from './../store/actions/main-gallery.action';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favouritesList: string[] = [];
  soreData$!: Observable<string[]>;
  private subSink = new SubSink();

  constructor(private store: Store<MainGalleryState>) {}

  ngOnInit(): void {
    this.subscribeToStore();
    this.getDataFromStore();
  }

  subscribeToStore(): void {
    this.soreData$ = this.store.pipe(select(mainGallerySelector.selectImages));
  }

  getDataFromStore(): void {
    this.soreData$
      .pipe(
        map((data) => {
          if (data) {
            this.favouritesList = data;
          }
        })
      )
      .subscribe();
  }

  /* remove image from list */
  deleteImage(index: string): void {
    this.favouritesList = this.favouritesList.filter((item) => item != index);

    this.store.dispatch(
      mainGalleryAction.setFavourites({ payload: this.favouritesList })
    );
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}

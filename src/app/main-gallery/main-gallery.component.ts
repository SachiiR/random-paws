import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RandomImageService } from '../shared/services/random-image.service';
import { MainGalleryState } from './store/reducers/main-gallery.reducer';
import { select, Store } from '@ngrx/store';
import * as mainGalleryAction from './store/actions/main-gallery.action';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import * as mainGallerySelector from './store/selectors/main-gallery.selector';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainGalleryComponent implements OnInit {
  initImage: string = '';
  favouritesList: string[] = [];
  favourites$!: Observable<string[]>;
  newImage$!: Observable<string>;

  duplicateImage: string = '';
  isDuplicate: boolean = false;

  private subSink = new SubSink();

  constructor(
    private _randomImageService: RandomImageService,
    private mainGalleryStore: Store<MainGalleryState>
  ) {}

  ngOnInit(): void {
    this.getNewImage();
    this.subscribeToStore();
    this.getDataFromStore();
  }

  /* subscribe to store */
  subscribeToStore(): void {
    this.favourites$ = this.mainGalleryStore.pipe(
      select(mainGallerySelector.selectImages)
    );
  }

  /* get values from store */
  getDataFromStore(): void {
    this.favourites$
      .pipe(
        map((data) => {
          if (data) {
            this.favouritesList = data;
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  /* add image to favourites */
  addToFavourites(): void {
    let rev = this.favouritesList.reverse();
    if (this.initImage == rev[0]) {
      this.isDuplicate = true;
    } else {
      this.favouritesList = this.favouritesList.concat(this.initImage);
      this.mainGalleryStore.dispatch(
        mainGalleryAction.setFavourites({ payload: this.favouritesList })
      );
    }
  }

  /* get new image */
  getNewImage(): void {
    this.isDuplicate = false;
    this._randomImageService.getRandomImage().subscribe((image) => {
      if (image) {
        this.initImage = image.url;
        this.mainGalleryStore.dispatch(
          mainGalleryAction.setNewImage({ payload: this.initImage })
        );
      }
    });
  }
}

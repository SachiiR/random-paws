import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromMainGallery from './../reducers/main-gallery.reducer';

export const selectMainGalleryState =
  createFeatureSelector<fromMainGallery.MainGalleryState>(
    fromMainGallery.mainGalleryFeatureKey
  );

export const selectImages = createSelector(
  selectMainGalleryState,
  (state: fromMainGallery.MainGalleryState) => state.favouriteList
);

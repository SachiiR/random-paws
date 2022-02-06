import { createReducer, on, Action } from '@ngrx/store';
import * as mainGalleryAction from './../actions/main-gallery.action';

export const mainGalleryFeatureKey = 'mainGallery';

export interface MainGalleryState {
  initImage: string;
  favouriteList: string[];
}

export const initState: MainGalleryState = {
  initImage: '',
  favouriteList: [],
};

export const mainGalleryReducer = createReducer(
  initState,
  on(mainGalleryAction.setNewImage, (state: MainGalleryState, { payload }) => ({
    ...state,
    initImage: payload,
  })),
  on(mainGalleryAction.setFavourites, (state: MainGalleryState, { payload }) => ({
    ...state,
    favouriteList: payload,
  }))
);

export function reducer(
  state: MainGalleryState | undefined,
  action: Action
): any {
  return mainGalleryReducer(state, action);
}

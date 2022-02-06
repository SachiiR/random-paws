import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as mainGalleryReducer from './../main-gallery/store/reducers/main-gallery.reducer';


export interface State {
// mainGalleryState: mainGalleryReducer.MainGalleryState;
}

export const reducers: ActionReducerMap<State> = {
// mainGalleryState: mainGalleryReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

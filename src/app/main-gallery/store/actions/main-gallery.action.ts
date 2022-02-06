import { createAction, props } from '@ngrx/store';

export const setNewImage = createAction(
    '[MainGallery] Set new random image',
    props<{payload: string}>()
  );

  export const setFavourites = createAction(
    '[MainGallery] Set favourites',
    props<{ payload: string[] }>(),
  );

  
  
  

import { createSelector } from "@reduxjs/toolkit";

export const selectAdverts = state => state.adverts.items;

export const selectFavororiteItems = state => state.adverts.favororiteItems;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectSelectedOption = state => state.filters.selectedOption;

export const selectVisibleItems = createSelector(
    [selectAdverts, selectSelectedOption],
    (adverts, filters) => {
        return adverts.filter(advert => advert.make.toLowerCase()
            .includes(filters.toLowerCase())
  );
})
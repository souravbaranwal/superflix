export const fetchHeaderMedia = payload => {
  return {
    type: "AddHeaderMedia",
    payload
  };
};
export const addMoviesGenreList = payload => {
  return {
    type: "ADD_GENRES",
    payload
  };
};
export const addHeroMovie = payload => {
  return {
    type: "ADD_HERO_MOVIE",
    payload
  };
};

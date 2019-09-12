const initialState = {
  heroMovie: null
};
export default function heroMovie(state = initialState, action) {
  switch (action.type) {
    case "ADD_HERO_MOVIE":
      return { ...state, heroMovie: action.payload };
    default:
      return state;
  }
}

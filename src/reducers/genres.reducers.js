const initialState = {
  moviesGenreList: null
};
export default function geners(state = initialState, action) {
  switch (action.type) {
    case "ADD_GENRES":
      return { ...state, moviesGenreList: action.payload };
    default:
      return state;
  }
}

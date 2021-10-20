// Action types
export const ADD_ARTICLE = "ADD_ARTICLE";

// Reducer: which makes the state in Redux
// Always remember: the state in redux comes from reducers.
const initialState = {
  articles: []
};

export default function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

// Action creators
// Actions: plain JavaScript objects, acting as messengers in your application
// Action creators: functions for creating those messages.
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

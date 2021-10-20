import store from "../js/store/index";
import { addArticle } from './duck'

window.store = store;
window.addArticle = addArticle;

store.getState();
// output: {articles: Array(0)}

store.subscribe(() => console.log('Look ma, Redux!!'));

// To change the state in Redux we need to dispatch an action.
store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );

store.getState();
// output: {articles: Array(1)}
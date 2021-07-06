import { createStore } from 'vuex'
import movie from './movie' // /inedx.js 생략가능
import about from './about' // /inedx.js 생략가능

export default createStore({
  modules: {
    movie,
    about
  }
})
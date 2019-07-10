import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [
      {
        _id: 1,
        Image: 'https://thenypost.files.wordpress.com/2018/12/181222-stuy-town.jpg?quality=90&strip=all&w=618&h=410&crop=1',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero mi, placerat eu lacus vel, vestibulum varius ipsum.'
      },
      {
        _id: 2,
        Image: 'https://etacanadavisa.com.br/main/wp-content/uploads/2018/05/image3-3-830x552.jpg',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero mi, placerat eu lacus vel, vestibulum varius ipsum.'
      },
      {
        _id: 3,
        Image: 'https://nespy2aub3if2yow3fcm0t5y-wpengine.netdna-ssl.com/files/2013/11/conhe%C3%A7a-londres-635x359.jpg',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero mi, placerat eu lacus vel, vestibulum varius ipsum.'
      },
      {
        _id: 4,
        Image: 'https://abrilviagemeturismo.files.wordpress.com/2017/12/istock-842960000.jpg?quality=70&strip=info&w=680&h=453&crop=1',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla libero mi, placerat eu lacus vel, vestibulum varius ipsum.'
      }
    ],
    user: {
      _id: 1,
      name: 'Rafael Augusto',
      username: '@rafaelaugusto.me',
      picture: import('./assets/images/rafael.jpg')
    }
  }
})

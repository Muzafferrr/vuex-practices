import {createApp} from 'vue'
import {createStore} from 'vuex'
import App from '../App.vue'

export const store = createStore({
    state () {
        return {
            title:'message'
        }
    },
    getters:{
        getTitle:(state) => {
            return state.title
        },
        getTitle2:(state) => {
            return state.title
        }
    },
    mutations: {
        //senkron çalışır o yüzden basit işlemler için kullanılmalıdır.
        setTitle: (state, value) => {
            return state.title = value
        },
        setTitle2: (state, value) => {
            state.title = value
        }
    },
    actions:{
        //maliyetli işlemler için actions kullanılması daha mantıklı
        //aynı zamanda dokümantasyonda mutationların tek başına kullanılmaması gerektiği söylenir
        //her zaman onu tetikleyecek bir actionla birlikte kullanılması gerekir
        //actions asenkron çalışır
        setTitleActions: (context, value) => {
            return context.commit('setTitle', value)
        },
        setTitleActions2: (context, value) => {
            setTimeout(() => {
                context.commit('setTitle2', value)
            }, 2500)
        }
    }
})

const app = createApp(App)

app.use(store)
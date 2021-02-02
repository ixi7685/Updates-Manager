import Home from './pages/Home.js'

import Developments from './pages/Developments.js'




export const router = new VueRouter({    
    routes: [
        {path: '/', name:'home', component: Home},
        
        {path: '/developments', component: Developments},

   
    ]
})
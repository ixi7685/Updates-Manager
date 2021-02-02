import {router} from './router.js'
import {store} from './store.js'
import Navbar from './components/layout/Navbar.js'
import BlankSiteModal from './components/modal/BlankSiteModal.js'
import WorkingDirModal from './components/modal/WorkingDirModal.js'
import AddDevelopmentModal from './components/modal/AddDevelopmentModal.js'
import EditPreviousModal  from './components/modal/EditPreviousModal.js'
import getId from './utility/getId.js'
import getSite_id from './utility/getSite_id.js'

new Vue({
    el: '#app',
    router,
    store,
    data: {        
    },
    computed:{
        activeDev() {
            return this.$store.getters.activeDevelopment
        },
        developments() {
            return this.$store.getters.developments
        },
        id(){
            return this.$store.getters.bigest_id
        },
       
    },
    components: {
        Navbar,
        BlankSiteModal,
        WorkingDirModal,
        AddDevelopmentModal,
        EditPreviousModal
    },
    template: /*html*/`
        <div style='width:100%;height:100%;display:flex;flex-direction:column;'>
            <Navbar />
            <div style='width:100%;flex:1;overflow:auto;display:flex;flex-direction:column;align-items:center;justify-content:flex-start'>
                <router-view></router-view>
            </div>            

            
                <BlankSiteModal :active="activeDev" />
          
                <AddDevelopmentModal :developments="developments"/>

                <EditPreviousModal :active="activeDev"/>
               
            
        </div>
    `,

    mounted() {

        getSite_id()
 
           
    }
  })
import getDevelopments from '../utility/getDevelopments.js'
import getDevelopers from '../utility/getDevelopers.js'
import getMaxDate from '../utility/getMaxDate.js'
import getSites from '../utility/getSites.js'
import getSite_id from '../utility/getSite_id.js'
import HomeHeaderOptions from '../components/home/HomeHeaderOptions.js'
import Card from '../components/home/Card.js'

export default {
    name: 'home',
    template: /*html*/`
        <div class='home-container' style='height:100%;width:100%;display:flex;flex-direction:column;background-color:white;justify-content:flex-start;align-items:center'>
        <h1>Latest Updates</h1>
          <HomeHeaderOptions :filter="filter" @sitesFilter='setFilterData'/> 

             

             <Card :developments="developments"/>

            

            <div @click="openNewDevelopmentModal" style='position:fixed;bottom:20px;right:20px;width:70px;height:70px;line-height:70px;text-align:center;font-size:1.5rem;border-radius:100%;cursor:pointer; background-color: #F5DA9D;' class=''>
                <i class="fas fa-plus"></i>
            </div>

        </div>
    `,
    data: function() {
        return {
          

            filter:''
            
        }
    },

    computed: {
        developments() {

           

            if(this.filter != '') {

                return this.$store.getters.developments.filter(dev=>
                 {
                     if(dev.site_name.toLowerCase().includes(this.filter.toLowerCase())){
                       

                         return dev
                     }
 
 
                 })
 
             }else{
                 return this.$store.getters.developments
             }
        },
        
    },

    components: {
      
        HomeHeaderOptions,
        Card
    },

    methods: {
  
       
        setFilterData(val){

            this.filter = val.trim()

        },


        openNewDevelopmentModal() {
            this.$store.dispatch('setAddDevelopmentModal', true)
        },
        openBlankSiteModal() {
            this.$store.dispatch('setBlankSiteModal', true)
        },

    },

    mounted() {
        getDevelopers()

       
       
        getSite_id()
       


        
    }
}


import {API} from '../../API.js'
import {store} from '../../store.js'
export default {
    name: 'developer',
    template: /*html*/`
      

<table style='margin-top:100px'>
  <caption></caption>
  <thead>
    <tr>
      <th style="width:30px" scope="col">#</th>
      <th style="width:130px" scope="col">Name</th>
      <th style="width:130px" scope="col">Update Version</th>
      <th style="width:130px" scope="col">Date Sent</th>
      <th style="width:70px"  scope="col"> Edit</th> 
      <th style="width:70px" scope="col">All Updates</th>
    </tr>
  </thead>
  <tbody>
  <tr v-for="(dev,i) in developments" :key="dev.id" style='cursor:pointer;'>
  <th  id="one1"style="width:30px"  class="bg-gray-100 border px-4 py-2">{{ i+1 }}</th>
  <td id="two2" style="width:170px" class="bg-gray-200 border px-4 py-2">{{ dev.site_name }}</td>
  <td id="three3" style="width:170px" class="bg-gray-400 border px-4 py-2">{{ dev.last_update_number}}</td>
  <td  id="four" style="width:170px" class="px-4 py-2"scope="col">{{ dev.date_sent}}</td>
  <td id="five"style="width:70px"  class=" px-4 py-2"scope="col"> <button @click="openBlankSiteModal(dev)"class=" bg-gray-400  px-2 py-2 bg-gray-100 border">Edit</button></td>    
  <td id="six" style="width:70px"   class="px-4 py-2 "scope="col"> <button @click="openDevelopment(dev)" class="px-2 py-2 bg-gray-100 border">All Updates</button></td>                     
</tr>  
  </tbody>
</table>



 `,
    data: function() {
        return {
            msg: '',
            site_id:'',
            site_name:'',
            
        }
    },
    props: ['developments'],
   

    methods: {

       openDevelopment(dev) {
            
    
            console.log(dev)
            this.$store.dispatch('setLoading', true)
           $.post(API + 'backend/api.php', {command: 'getSite',site_id:dev.site_id,site_name:dev.site_name}, (data) => {
                
                
                this.$store.dispatch('setSites', JSON.parse(data))
            })
            .always( () => {
                this.$store.dispatch('setLoading', false)
            })

           

            this.$router.push('/developments')
        },

       openBlankSiteModal(dev) {
            this.$store.dispatch('setBlankSiteModal', true)
            this.$store.dispatch('setActiveDevelopment',dev)
        },

       


    },
    computed: {
        activeDev() {
            return this.$store.getters.activeDevelopment
        },

   
},
created(){

    


}
}

export default {
    name: 'Developments',
    template: /*html*/`
  

<div id="container" style="margin-top:100px;display:flex:flex-direction:column;justify-content:center;text-align:center;">
<h2 style="color:black" v-if="sites.length > 0"> {{sites[0].site_name}} </h2><br><br>
<h2 style="" v-if="sites.length == 0"> No Previous Updates</h2>
<div  style=""  v-for="(site, i) in sites">
<table :key="site.id" style="width:100%">
 
  <thead>
    <tr>
    <th scope="col"style="width:70px;text-align:center">Edit</th>
    <th style="width:70px;text-align:center" class=" px-4 py-2"  scope="col">Update Version</th>
    <th style="width:130px;text-align:center" class="  px-4 py-2" scope="col">Date Sent</th>
    <th style="width:250px;text-align:center" class="  px-4 py-2"  scope="col">Description</th>
    <th style="width:120px;text-align:center" class="  px-4 py-2"  scope="col">Size</th>
    <th style="width:250px;text-align:center" class="  px-4 py-2"  scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
  <tr>
  <th id="one"style="text-align:center;width:130px;" class="bg-gray-100 border px-4 py-2" ><button @click="openEditPreviousModal(site)" class=" bg-gray-400  px-2 py-2 bg-gray-100 border">Edit</button></th>
  <td id="two"style="text-align:center;width:130px;" class="bg-gray-100 border px-4 py-2" >{{ site.last_update_number}}</td>
  <td id="three" style="text-align:center;width:130px" class="bg-gray-100 border px-4 py-2" >{{site.date_sent }} </td>
  <td id =""style="width:250px;height:250px;text-align:justify" class="bg-gray-100 border px-4 py-2"><div  disabled style="display:flex;align-items:center;text-align:center;width:250px;height:250px;text-align:justify;white-space: pre-wrap;" class="bg-gray-100 ">{{ site.update_description }}</div></td>
  <td id =""style="width:120px;height:250px;text-align:justify" class="bg-gray-100 border px-4 py-2"><div  disabled style="display:flex;align-items:center;text-align:center;width:250px;height:250px;text-align:justify;white-space: pre-wrap;" class="bg-gray-100 ">{{ site.size }}</div></td>
  <td id =""style="width:250px;height:250px;text-align:justify" class="bg-gray-100 border px-4 py-2"><div  disabled style="display:flex;align-items:center;text-align:center;width:250px;height:250px;text-align:justify;white-space: pre-wrap;" class="bg-gray-100 ">{{ site.comment }}</div></td>
  
</tr>  
  </tbody>
</table>

</div>

</div>
       
`,
    data() {
        return {

         
        }
    },
    
    computed :{

        sites() {
            return this.$store.getters.sites
        },
    },

    methods: {
      
        openEditPreviousModal(site) {
           this.$store.dispatch('setEditPreviousModal', true)
            this.$store.dispatch('setActiveDevelopment',site)
        },
    

    },
    mounted() {
       
        this.scrollToBottom()
        
    }
}









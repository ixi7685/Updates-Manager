import Modal from './Modal.js'
import {API} from '../../API.js'
import getDevelopments from '../../utility/getDevelopments.js'
import getSites from '../../utility/getSites.js'
import getSite_id from '../../utility/getSite_id.js'


export default {
    name: 'addDevModal',
    template: /*html*/`
        <div>
            <transition enter-active-class='animate__animated animate__fadeIn animate__faster' leave-active-class='animate__animated animate__fadeOut animate__faster' mode="out-in">
                <Modal  v-if="showAddDevelopmentModal" @close="closeModal" >
                        <form @submit.prevent="onSubmit" style='width:100%;height:100%;padding:10px;'  >

                          <h4 class='text-center mb-2'> Add New Development</h4>
                           
                            <div class="form-group"  >
                                    <label for="sites">Choose Site:</label>
                                    <select   :disabled="isDis" v-model="existing_site_name" @change="siteChanged($event)" class="form-control" id="" style="width:340px;" >
                                       
                                        <option  v-for="site in sites"  :key="site.id" >{{ site.name }}</option>
                                        
                                    </select>
                                </div>

                                  
                                    <input  value="site.id " v-model="existing_site_id" type="hidden" class="form-control"  placeholder="Site Id" style="width:340px;">
                                
                                
                                <div class="form-group mb-3">
                                    <label for="">Or Add New Site</label>
                                    <input :disabled="isDisabled" v-model="new_site_name" maxlength="25" type="text" class="form-control"  placeholder=" Site Name" style="width:340px;" >
                                </div>

                                <div class="form-group">
                                    <label for="Update Number"> Update Number</label>
                                    <input v-model="last_update_number" type="number" class="form-control"  placeholder="Update Number"  style="width:340px;" required>
                                </div>
                                
                                <div class="form-group mb-3">
                                    <label for="Date Sent">Date</label>
                               <!--  <input v-model="date_sent" type="date" class="form-control"  style="width:340px;"  placeholder="2020-11-23" > -->
                                  <vuejs-datepicker v-model="date" style="width:340px;outline:none" class="form-control" required ></vuejs-datepicker> 
                           
                               
                                  </div>
                                <div class="form-group mb-3">
                                <label for="Description"> Description</label>
                                <textarea v-model="update_description" type="text" class="form-control"  placeholder="Description" style="height:100px" required></textarea>
                                </div>

                                <div class="form-group mb-3">
                                <label for="Description"> Size</label>
                                <textarea v-model="size" type="text" class="form-control"  placeholder="Size" style="height:100px"></textarea>
                                </div>

                                <div class="form-group mb-3">
                                <label for="Description"> Comment</label>
                                <textarea v-model="comment" @keyup.enter="newLineHandler"  type="text" class="form-control"  placeholder="Comment" style="height:100px"  id= "text"></textarea>
                                </div>
                        
                                
                                <button class='btn btn-info d-block m-auto' >ADD</button>
                           

                        </form>
                </Modal>
            </transition>
        </div>
    
    `,

    data() {
        return {
          
            existing_site_name:'',
            existing_site_id:'',
            site_id:'',
            new_site_name:'',
            last_update_number:'',
            date_sent:'',
            update_description:'',
            condition:false,
            condition2:false,
            date:'',
            comment:'',
            line:'',
            size:''
           
           
        }
    },
   
    components: {
        Modal,
        vuejsDatepicker,
      
    },

    props:['developments'],
    watch: { 
        comment: function(newVal, oldVal) { // watch it
          
             if(this.line){
                console.log(newVal)
               // newVal = newVal.join('\n'); 
                this.line= ''

             }
              
             
  
              
        },


        existing_site_id: function(newVal, oldVal) { // watch it
          
            if(newVal == '00'){

                this.existing_site_id = ''

            }
      },
      date: function(newVal, oldVal) { // watch it
        this.data = newVal
        console.log( this.data)
        console.log(typeof(this.data))  
        this.date.toString();
        console.log( this.date.toString())
        var b = this.date.toString()
       // b =  b.substr(4,11)
        b =  b.substr(4,6)
        b =  b.substr(0, 3)
        var c  =  this.date.toString()
        c =  c.substr(7,8)
        c = c.split(" ").join("/")
        
        console.log(b)
        console.log(c)
        
        

       if (b =='Jan'){
           b = '01'

       }if (b =='Feb'){
            b = '02'
            
       }if (b =='Mar'){
            b = '03'
            
       }if (b =='Apr'){
            b = '04'
            
       }if (b =='May'){
            b = '05'
            
       }if (b =='Jun'){
        b = '06'
            
       }if (b =='Jul'){
        b = '07'
            
       }if (b =='Aug'){
        b = '08'
            
       }if (b =='Sep'){
        b = '09'

       }if (b =='Oct'){
        b = '10'

       }if (b =='Nov'){
        b = '11'

       }if (b =='Dec'){
        b = '12'
       }

       var a = b + c
       console.log(a)
       a=a.split("/")
       this.date_sent = a[1] + '/' + a[0] + '/' + a[2];
       console.log(this.date_sent)
    },
    },
    computed: {
        unCheck(){

           return  this.existing_site_id = ''


        },
        isDisabled() {
            if(this.existing_site_id){
            return !this.condition;
           }if(this.existing_site_name == ''){
           
           }
           

          },
          isDis() {
            if(this.new_site_name){
            return !this.condition2;
           }

          },
        showAddDevelopmentModal() {
            return this.$store.getters.showAddDevelopmentModal
        },

        pathToBlankSite() {
            return this.$store.getters.pathToBlankSite;
        },

        pathToWorkingDir() {
            return this.$store.getters.pathToWorkingDir;
        },
        sites() {

            var obj ={ id:'00',name:'Please select site'}
            var sites = this.$store.getters.sites;
            console.log(sites)
            sites.unshift(obj)
            return sites
        },
       
    },

   
    
    methods: {

        newLineHandler() {
            var i = 1;
            this.line= i
           
        }, 

        closeModal() {
            
            this.existing_site_name='',
            this.existing_site_id='',
            this.new_site_name='',
            this.last_update_number=''
            this.date_sent ='',
            this.update_description ='',
            this.comment ='',
            this.size ='',
            this.$store.dispatch('setAddDevelopmentModal', false)
        },


        onSubmit() {

           var id
           var maxid = 0;
           const num = this.sites.map(obj=>{  
               
                if (obj.id > maxid) 
                maxid = obj.id;
                id = ++maxid
               
                
           });
          
            
           if(this.new_site_name != ''  || this.existing_site_name != '') {
           $.post(API + 'backend/api.php', {
                        command: 'addDevelopment', 
                        existing_site_name:this.existing_site_name,
                        existing_site_id: this.existing_site_id,
                        site_id:id,
                        new_site_name:this.new_site_name.charAt(0).toUpperCase() + this.new_site_name.slice(1),  
                        last_update_number:this.last_update_number, 
                        date_sent:this.date_sent,
                        update_description:this.update_description,
                        comment:this.comment,
                        size:this.size
                       
                }, 
                    (data) => {
                //    console.log(data)
                    getDevelopments()
                    getSites()
                  
                   
                   
                    
                })
                .always( () => {
                   
                    location.reload()
                })

                this.closeModal()
            }else{
                alert('Please fill existing Site Name or New Site Name')
            }
               
               
            
        }, 

   /*  getDevelopers() {
            this.$store.dispatch('setLoading', true)
            $.post(API + 'backend/api.php', {command: 'getDevelopers'}, (data) => {
                
                this.sites = JSON.parse(data)
                this.$store.dispatch('setLoading', false)
            })
            .always( () => {
                this.$store.dispatch('setLoading', false)
            })
        },

        ch(e){
            
            console.log(e)
        },*/

        siteChanged(e) {      
            
            
           // this.developerName = this.developers.filter(dev => dev.id === e.target.value)[0].name
           // this.developerId = +e.target.value  
           this.existing_site_id = this.sites.filter(site => site.name === e.target.value)[0].id 

          

            console.log(this.existing_site_id)
          
        }
    }, 

    mounted() {
       
       
        getSites()
        getSite_id()
       
       
    }
}
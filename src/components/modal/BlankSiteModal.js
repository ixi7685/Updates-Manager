import Modal from './Modal.js'
import {API} from '../../API.js'
import getDevelopments from '../../utility/getDevelopments.js'

export default {
    name: 'blankSiteModal',
    template: /*html*/`
        <div>
            <transition enter-active-class='animate__animated animate__fadeIn animate__faster' leave-active-class='animate__animated animate__fadeOut animate__faster' mode="out-in">
                <Modal v-if="showBlankSiteModal" @close="closeModal" >
                     
                <form @submit.prevent="onSubmit" style='width:100%;height:100%;padding:10px;'>

                <h4 class='text-center mb-2'> Update</h4>
                
             
                  
         
          
                  <div class="form-group">
                        <label for="">Site Name:</label>
                        <input v-model="site_name" type="text" class="form-control"  >
                    </div>
                
                    <div class="form-group">
                        <label for="">Latest Update Number:</label>
                        <input v-model="last_update_number" type="number" class="form-control"  disabled>
                    </div>


                    <label for="start">Date </label>
                     <input type="text" disabled v-model="date_sent" class="form-control" >
                     <div style="display:flex;margin-top:10px;margin-bottom:10px;"> Edit Date :  <i class="fas fa-calendar">  </i><vuejs-datepicker v-model="date" style="color:black;" value="Calendar"></vuejs-datepicker></div>
                     
                    
                    <div class="form-group">
                        <label for="">Description:</label><br>
                        <textarea id="start" name="trip-start" type="text" v-model="update_description" style="height:130px" class="form-control"></textarea>
                    </div>    
                    <div class="form-group">
                    <label for="">Size:</label><br>
                    <textarea id="start" name="trip-start" type="text" v-model="size" style="height:100px" class="form-control"></textarea>
                </div>   
                
                    <div class="form-group mb-3">
                    <label for="Description"> Comment</label>
                    <textarea v-model="comment" type="text" class="form-control"  placeholder="Comment" style="height:100px"></textarea>
                    </div>

                   <button class='btn btn-info d-block m-auto' >Edit</button>
                       
                   </form>
        
                       
                </Modal>
            </transition>
        </div>
    
    `,

    data() {
        return {
            site_id:'',
            site_name:'',
            last_update_number:'',
            date_sent:'',
            update_description:'',
            date:'',
            size:'',
            comment:''
            
           

        }
    },

    components: {
        Modal,
        vuejsDatepicker
    },

    watch: { 
        existing_site_id: function(newVal, oldVal) { // watch it
          
            if(newVal == '00'){

                this.existing_site_id = ''

            }
      },
      
    },
    computed: {
        showBlankSiteModal() {
            return this.$store.getters.showBlankSiteModal
        },

        watchedPath() {
            return this.$store.getters.pathToBlankSite
        },

        activeDev() {
            return this.$store.getters.activeDevelopment
        }
    },
    
    watch: {
        watchedPath(val) {
            this.path = val
        },
        showBlankSiteModal(val) {
            if(val) {
                this.id=this.active.id,
                this.site_id=this.active.site_id,
                this.site_name=this.active.site_name,
                this.last_update_number=this.active.last_update_number,
                this.date_sent = this.active.date_sent
                this.update_description=this.active.update_description
                this.size=this.active.size
                this.comment=this.active.comment
               
            }
        },
        date: function(newVal, oldVal) { // watch it
            this.data = newVal
            console.log( this.data)
            console.log(typeof(this.data))  
            this.date.toString();
            console.log( this.date.toString())
            var b = this.date.toString()
            b =  b.substr(4,6)
            b =  b.substr(0, 3)
            var c  =  this.date.toString()
            c =  c.substr(7,8)
            c = c.split(" ").join("/")
            
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
    
           this.date_sent = b + c
           console.log(this.date_sent)
        },

        


    },
    props :['active'],
    methods: {
        closeModal() {
            
            this.$store.dispatch('setBlankSiteModal', false)
        },


        onSubmit() {
            console.log(this.last_update_number)
            var num = this.last_update_number
             this.id=this.active.id
             var vm = this
            $.post(API + 'backend/api.php', {command: 'updateLatest',id:this.id,site_id:this.site_id,site_name:this.site_name, last_update_number:this.last_update_number , date_sent:this.date_sent,update_description:this.update_description,comment:this.comment,size:this.size }, (data) => {

           
            }).always(function() {

                getDevelopments()
           
                vm.closeModal()
               
              });
            
          },
        onChange(dev){
            console.log(dev);
          
         
        },

    },
    mounted(){
        getDevelopments()
        console.log('mounted modal')
        console.log(this.activeDev)
       
  
    }
    
}
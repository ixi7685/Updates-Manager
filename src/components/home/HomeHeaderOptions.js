export default {
    name:'homeHeaderOptions',
    template: /*html*/`

        <div style='display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:200px;'>

            <div class="input-group mb-3" style="width:350px;margin-top:100px">
                <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                    <i class="fas fa-search"></i>
                </span>
                </div>
                <input type="search" style="outline:none" @input='Search'   class="form-control" placeholder=" Name" aria-label=" Name" aria-describedby="basic-addon1">
            </div>

            
        
        </div>
    
    `,

    methods: {
        
            Search(e){
                this.$emit('sitesFilter',e.target.value)
            }

      
    }
}
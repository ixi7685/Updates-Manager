export default {
    name: 'modal',
    template: /*html*/`
    
        <div  style='position: fixed;top:0px;left:0px;width:100%;height:100%;background:rgba(0,0,0,.6);z-index:100;overflow:auto' >
            
            <div @click.stop style='width:360px;min-height:100px;background: #fff;border-radius: 5px;margin:40px auto 0px auto;' class='shadow animate__animated animate__slideInDown animate__faster' >
                <i  @click="close" style='padding:5px;position:absolute;top:5px;right:5px;cursor:pointer;' class="fas fa-times"></i>
                <slot></slot>
            
            </div>
                
        </div>
    
    
    `,
    methods: {
        close() {
            this.$emit('close')
        }
    }

   
} 
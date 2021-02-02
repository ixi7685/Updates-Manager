export default {
    name: 'navbar',
    template: /*html*/`
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <span class="navbar-brand" href="#">
                <router-link :to="'/'" tag="span"><i class="fas fa-home"></i></router-link>
                
            </span>

                <template v-if="path != '/'">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">                           
                            <li >
                                <router-link :to="'/developments'"><i class="fas fa-tasks"></i></router-link>
                               
                            </li>               
                        </ul>
                
                    </div>
                </template>

                <i v-if='loading' style='margin-left:auto;' class="fas fa-circle-notch fa-lg fa-spin"></i>
        </nav>
    `,
    data: function() {
        return {
            
        }
    },
    computed: {
        path() {
            return this.$route.path
        },

        loading() {
            return this.$store.getters.loading
        }
    }
}
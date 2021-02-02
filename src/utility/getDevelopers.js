import {API} from '../API.js'
import {store} from '../store.js'

export default () => {
    
        store.dispatch('setLoading', true)
        $.post(API + 'backend/api.php', {command: 'getDevelopers'}, (data) => {
            console.log(data)            
            store.dispatch('setSites', JSON.parse(data))
            store.dispatch('setLoading', false)
        })
        .always( () => {
            store.dispatch('setLoading', false)
        })
    
}
import {API} from '../API.js'
import {store} from '../store.js'

export default () => {
    
        store.dispatch('setLoading', true)
        $.post(API + 'backend/api.php', {command: 'getSite_id'}, (data) => {
            console.log(data)           
            store.dispatch('setId', data)
            store.dispatch('setLoading', false)
        })
        .always( () => {
            store.dispatch('setLoading', false)
        })
    
}
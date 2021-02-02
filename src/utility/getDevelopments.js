import {API} from '../API.js'
import {store} from '../store.js'

export default () => {
    
        store.dispatch('setLoading', true)
        $.post(API + 'backend/api.php', {command: 'getDevelopments'}, (data) => {
            store.dispatch('setDevelopments', JSON.parse(data))
            store.dispatch('setLoading', false)
        })
        .always( () => {
            store.dispatch('setLoading', false)
        })
    
}
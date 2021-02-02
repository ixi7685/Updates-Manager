import {API} from '../API.js'
import {store} from '../store.js'

export default () => {
    
    store.dispatch('setLoading', true)
    $.post(API + 'backend/api.php', {command: 'getId'}, (data) => {
        store.dispatch('setId', JSON.parse(data))
    })
    .always( () => {
        store.dispatch('setLoading', false)
    })
    
}
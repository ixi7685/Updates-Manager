import {API} from '../API.js'
import {store} from '../store.js'

export default () => {
    var sites = [];
    store.dispatch('setLoading', true)
    $.post(API + 'backend/api.php', {command: 'getDevelopers'}, (data) => {
        /*sites = JSON.parse(data)
        store.dispatch('setSites', sites)*/
    })
    .always( () => {
        store.dispatch('setLoading', false)
    })
    
}
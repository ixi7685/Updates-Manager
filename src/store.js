export const store = new Vuex.Store({
    state: {
      activeDevelopment:{
          name: '',
          id: ''
      },

      loading: false,

      developments: [],
      
      //modals
      showBlankSiteModal: false,
      showWorkingDirModal: false,
      showAddDevelopmentModal: false,
      showEditPreviousModal: false,

      //global vars
      pathToBlankSite: '',
      pathToWorkingDir: '',
      
      latest:{
        
        latestUpdate: ''
     },
     sites:[],
     maxDates:[],
     bigest_id: []


    },
    mutations: {
        setDevelopments(state, payload) {
           state.developments = payload
        },

      setActiveDevelopment(state, payload) {
            state.activeDevelopment = payload
      },

      setLoading(state, payload) {
        
          state.loading = payload
      },

      setBlankSiteModal(state, payload) {
          state.showBlankSiteModal = payload
      },
      setEditPreviousModal(state, payload) {
        state.showEditPreviousModal = payload
      },
      setWorkingDirModal(state, payload) {
          state.showWorkingDirModal = payload
      },

      setPathToBlankSite(state, payload) {
        state.pathToBlankSite = payload
      },
      setPathToWorkingDir(state, payload) {
        state.pathToWorkingDir = payload
      },

      setAddDevelopmentModal(state, payload) {
        state.showAddDevelopmentModal = payload
      },
      setLatest(state, payload) {
        state.latest= payload
      },
      setSites(state, payload) {
        state.sites= payload
      },
      setMaxDates(state, payload) {
        state.maxDates= payload
      },
      setId(state, payload) {
        state.bigest_id= payload
      }

    },
    actions: {
        setDevelopments({commit}, payload) {
            commit('setDevelopments', payload)
        },

        setActiveDevelopment({commit}, payload) {
            commit('setActiveDevelopment', payload)
        },

        setLoading({commit}, payload) {
            commit('setLoading', payload)
        },

        setBlankSiteModal({commit}, payload) {
            commit('setBlankSiteModal', payload)            
        },

        setEditPreviousModal({commit}, payload) {
            commit('setEditPreviousModal', payload)            
        },
        setWorkingDirModal({commit}, payload) {
            commit('setWorkingDirModal', payload) 
        },

        setPathToBlankSite({commit}, payload) {
            commit('setPathToBlankSite', payload)            
        },
        setPathToWorkingDir({commit}, payload) {
            commit('setPathToWorkingDir', payload)
        },

        setAddDevelopmentModal({commit}, payload) {
            commit('setAddDevelopmentModal', payload)
            
        },
        setLatest({commit}, payload) {
            commit('Latest', payload)
            
        },
        setSites({commit}, payload) {
            console.trace('setSites')
            commit('setSites', payload)
            
        },
        setMaxDates({commit}, payload) {
            commit('setMaxDates', payload)
            
        },
        setId({commit}, payload) {
            commit('setId', payload)
            
        }
    
    },
    getters: {
        developments(state) {
            return state.developments
        },

        activeDevelopment(state) {
            return state.activeDevelopment
        },

        loading(state) {
            return state.loading
        },

        showBlankSiteModal(state) {
            return state.showBlankSiteModal
        },
        showWorkingDirModal(state) {
            return state.showWorkingDirModal
        },
        showEditPreviousModal(state) {
            return state.showEditPreviousModal
        },

        pathToBlankSite(state) {
            return state.pathToBlankSite
        },
        pathToWorkingDir(state) {
            return state.pathToWorkingDir
        },

        showAddDevelopmentModal(state) {
            return state.showAddDevelopmentModal
        },
        latest(state) {
            return state.latest
        },
        sites(state) {
            return state.sites
        },
        maxDates(state) {
            return state.maxDates
        },
        bigest_id(state) {
            return state.bigest_id
        },

    }
  })
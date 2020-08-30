const state = {
    user: null
};

const mutations = {
    'global/setUser' (state, obj) {
        state.user = obj;
    }
};

export default {
    state,
    mutations
};

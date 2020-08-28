const state = {
    userName: ''
};

const mutations = {
    'global/setUserName' (state, name) {
        state.userName = name;
    }
};

export default {
    state,
    mutations
};

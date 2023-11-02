import Vuex from 'vuex';
import { searchUserById, searchUsersByIds, searchUsersByUsername, searchUsersByUsernames } from '@/api/index'; // Import the necessary API functions

export default new Vuex.Store({
    state: {
        employees: [],
        selectedEmployee: null,
        loading: false,
        error: null,
        nothingFound: false
    },
    mutations: {
        SET_EMPLOYEES(state, employees) {
            state.employees = employees;
        },
        SET_SELECTED_EMPLOYEE(state, employee) {
            state.selectedEmployee = employee;
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
        SET_ERROR(state, error) {
            state.error = error;
        },
        CLEAR_ERROR(state) {
            state.error = null;
        },
        SET_NOTHING_FOUND(state, nothingFound) {
            state.nothingFound = nothingFound;
        },
    },
    actions: {
        async searchEmployeesById({ commit }, userId) {
            try {
                commit('CLEAR_ERROR');
                if (!userId) {
                    commit('SET_EMPLOYEES', []);
                    return;
                }

                commit('SET_LOADING', true);
                const data = await searchUserById(userId);
                commit('SET_EMPLOYEES', data);
                commit('SET_LOADING', false);
            } catch (error) {
                commit('SET_ERROR', error.message);
                commit('SET_EMPLOYEES', []);
                commit('SET_LOADING', false);
            }
        },
        async searchEmployeesByIds({ commit }, userIds) {
            try {
                commit('CLEAR_ERROR');
                if (!userIds || userIds.length === 0) {
                    commit('SET_EMPLOYEES', []);
                    return;
                }

                commit('SET_LOADING', true);
                const data = await searchUsersByIds(userIds);
                commit('SET_EMPLOYEES', data);
                commit('SET_LOADING', false);
            } catch (error) {
                commit('SET_ERROR', error.message);
                commit('SET_EMPLOYEES', []);
                commit('SET_LOADING', false);
            }
        },
        async searchEmployeesByUsername({ commit }, username) {
            try {
                commit('CLEAR_ERROR');
                if (!username) {
                    commit('SET_EMPLOYEES', []);
                    return;
                }

                commit('SET_LOADING', true);
                const data = await searchUsersByUsername(username);
                commit('SET_EMPLOYEES', data);
                commit('SET_LOADING', false);
            } catch (error) {
                commit('SET_ERROR', error.message);
                commit('SET_EMPLOYEES', []);
                commit('SET_LOADING', false);
            }
        },
        async searchEmployeesByUsernames({ commit }, usernames) {
            try {
                commit('CLEAR_ERROR');
                if (!usernames || usernames.length === 0) {
                    commit('SET_EMPLOYEES', []);
                    return;
                }

                commit('SET_LOADING', true);
                const data = await searchUsersByUsernames(usernames);
                commit('SET_EMPLOYEES', data);
                commit('SET_LOADING', false);
            } catch (error) {
                commit('SET_ERROR', error.message);
                commit('SET_EMPLOYEES', []);
                commit('SET_LOADING', false);
            }
        },
        selectEmployee({ commit }, employee) {
            commit('SET_SELECTED_EMPLOYEE', employee);
        },
        clearEmployees({ commit }) {
            commit('SET_EMPLOYEES', []);
        },
        clearSelectedEmployee({ commit }) {
            commit('SET_SELECTED_EMPLOYEE', null);
        },
        setError({ commit }, error) {
            commit('SET_ERROR', error);
        },
        setNothingFound({commit}, isFound) {
            commit('SET_NOTHING_FOUND', isFound)
        },
    },
});

import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import {
  PEOPLE_LIST_APPLY,
  PEOPLE_LIST_LOAD
} from './mutation-types'
import {API_BASE_URL} from "@/utils/axios-helper";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // список людей
    people: [],
    // текущая страница людей
    // TODO set from url and upadte list on change
    peoplePage: 1
  },
  mutations: {
    [PEOPLE_LIST_APPLY]: (/**/state, data) => {
      state.people = data.results;
    }
  },
  actions: {
    // запрос загрузки списка людей
    [PEOPLE_LIST_LOAD]: (context) => {
      const config = {
        method: 'get',
        url: API_BASE_URL + 'people/',
        params: {
          page: context.state.peoplePage
        }
        //headers: { 'Authorization': 'Bearer '+ context.state.token }
      }
      axios(config).then(response => {
        context.commit(PEOPLE_LIST_APPLY, response.data)
      });
    },
  },
  modules: {
  }
})

import {createStore}  from "vuex";
import  user  from "@/store/modules/User";

const store = createStore({
    modules:{
      a:user,
    }
});
export default store;





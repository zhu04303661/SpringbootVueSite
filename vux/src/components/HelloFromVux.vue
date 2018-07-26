<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <!-- <cell title="VUX" value="cool" is-link></cell> -->
        <checker
          v-model="demo6"
          type="checkbox"
          default-item-class="demo5-item"
          selected-item-class="demo5-item-selected"
          >
            <checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">{{['good', 'nice','awesome'][i - 1]}}</checker-item>
          </checker>

    </group>
  </div>
</template>

<script>
import { Group, Cell, Checker, CheckerItem } from 'vux'

import { fetchQuestionList } from '@/api/data'

export default {
  components: {
    Group,
    Cell,
    Checker,
    CheckerItem,
    fetchQuestionList
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      demo6: [],
      msg: 'Hello World!'
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      fetchQuestionList().then(response => {
        debugger
        console.log(response)
        this.$notify({
          title: '成功',
          message: response,
          type: 'success',
          duration: 2000
        })
        this.getArticle()
      })
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}

.demo5-item {
  width: 100px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
}
.demo5-item-selected {
  background: #ffffff url(../assets/checker/active.png) no-repeat right bottom;
  border-color: #ff4a00;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>you are the {{ count }}th visitor</h2>
    <h2>info: {{ info }}</h2>
    <h2>requested URL: {{ req_url }}</h2>
  <input @click="getIp" type="button" value="IPを取得">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      count: 0,
      info: [],
      req_url: [],
    }
  },
  methods: {
  getIp() {
    let req_url = 'http://127.0.0.1:5000/hoge?param=abc';
    axios.get(req_url)
      .then((response) => {
        let time = response.data.res ;
        this.info = time;
        this.req_url = req_url;
      })
      .catch((e) => {
        alert(e);
      });
  } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

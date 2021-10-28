<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>you are the {{ count }}th visitor</h2>
    <h2>name {{ name }}</h2>
    <h2>score {{ score }}</h2>
    <h2>requested URL: {{ req_url }}</h2>
    <h2>firstName:{{ fname }}</h2>
    <!-- <h2>{{ getIp() }}</h2> -->
  <!-- <input @click="getIp" type="button" value="IPを取得"> -->
  </div>
</template>

<script>
import axios from 'axios'

// window.onload = function() {
//     const req_url = 'http://127.0.0.1:5000/hoge';
//     // var fname = [];
//     axios.get(req_url)
//       .then((response) => {
//         response.data.forEach((ele) => {
//           console.log(ele.lastName)
//           // fname.push(ele.firstName)
//           // this.fname.push(ele.firstName)
//         });
//       })
//       .catch((e) => {
//         alert(e);
//       });
// }


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      count: 0,
      data: [], 
      name: [],
      score: [],
      req_url: [],
      fname: [],
    }
  },
  mounted (){
    const req_url = 'http://127.0.0.1:5000/hoge';
    axios.get(req_url)
      .then((response) => {
        response.data.forEach((ele) => {
          console.log(ele.firstName);
          this.fname.push(ele.firstName);
        });
      })
      .catch((e) => {
        alert(e);
      });
  }
  // methods: {
  //   window: onload = function() {
  //   const req_url = 'http://127.0.0.1:5000/hoge'
  //   // const score1 = []
  //   axios.get(req_url)
  //     .then((response) => {
  //       response.data.forEach((ele) => {
  //         console.log(ele.lastName)
  //         // this.fname.push(ele.firstName)
  //         // this.score.push(ele.score)
  //         score1.push(ele.score)
  //       });
  //     })
  //     .catch((e) => {
  //       alert(e);
  //     });
  //   }


  // getIp() {
  //   const req_url = 'http://127.0.0.1:5000/hoge';
  //   // const 
  //   axios.get(req_url)
  //     .then((response) => {
  //       // let time = response.data;
  //       response.data.forEach((ele) => {
  //         this.name.push(ele.firstName)
  //         this.score.push(ele.score)
  //         // console.log(ele.firstName);
  //       });
  //       // this.data = response.data;
  //       this.req_url = req_url;
  //     })
  //     .catch((e) => {
  //       alert(e);
  //     });
  // } 
  // }
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

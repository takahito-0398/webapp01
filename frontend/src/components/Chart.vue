<script>
// import { Bar } from 'vue-chartjs';
import axios from 'axios'
import { HorizontalBar } from 'vue-chartjs';

export default {
  extends: HorizontalBar,
  // extends: Bar,
  name: 'chart',
  data () {
    return {
      // height: window.innerHeight / 4,
      // width: window.innerWidth / 4,
      data: {
        // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        labels: [],
        datasets: [
          {
            label: 'score',
            data1: [10, 20, 30, 40, 50, 30],
            data: [],
            borderWidth: 1
          },
        ]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Score'
            },
          ticks: {
            beginAtZero: true,
            stepSize: 50,
          }
          }],
        }
      }
    }
  },
  created(){
    const req_url = 'http://127.0.0.1:5000/hoge';
    axios.get(req_url)
      .then((response) => {
        response.data.forEach((ele) => {
          // console.log(ele.score);
          this.data.labels.push(ele.lastName + " " + ele.firstName);
          this.data.datasets[0].data.push(ele.score)
        });
      })
      .catch((e) => {
        alert(e);
      });
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
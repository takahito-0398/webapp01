<template>
  <div class="graph">
    <h1>Bar & Line</h1>
    <chart></chart>
  </div>
</template>

<script>
// @ is an alias to /src
import Chart from '@/components/Chart.vue'

export default {
  name: 'graph',
  components: {
    Chart,
  }
}
</script>
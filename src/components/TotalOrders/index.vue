<template>
  <common-card
    title="累计订单量"
    value="2,157,420">
    <template>
      <div id="total-orders-chart" :style="{width:'100%',height:'100%'}"></div>
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">2,000,000</span>
    </template>
  </common-card>
</template>

<script>
  import commonCardMixin from '../../mixins/commonCardMixin'

  export default {
    name: 'index',
    mixins: [commonCardMixin],
    mounted () {
      const chartDom = document.getElementById('total-orders-chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: [620, 324, 345, 123, 457, 345, 123, 457, 323, 378],
          areaStyle: {
            color: 'purple'
          },
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      })
    }
  }
</script>

<style scoped>

</style>

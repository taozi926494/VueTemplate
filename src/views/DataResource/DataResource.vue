<template>
  <div class="data-resource">
    <DataItem v-for="dataItem in dataList" :key="dataItem.name" :name="dataItem.name" :price="dataItem.price" />
  </div>
</template>

<script>
import DataItem from './components/DataItem'
import { getDataResourceApi } from '@/api/DataResource'
export default {
  components: { DataItem },
  data() {
    return {
      dataList: []
    }
  },
  mounted() {
    this.listDataResouce();
  },
  methods: {
    async listDataResouce() {
      this.dataList = await getDataResourceApi()
      console.log(this.dataList)
    }
  }
}
</script>

<style lang="scss">
.data-resource {

}
</style>
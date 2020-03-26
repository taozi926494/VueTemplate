<template>
  <div class="data-item">
    <h1>{{ name }}</h1>
    <p>{{ price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: "" },
    price: { type: Number, default: 0.0 }
  }
};
</script>

<style lang="scss">
.data-item {
}
</style>
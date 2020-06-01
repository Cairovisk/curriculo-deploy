<template>
  <div class="content">
    <Header/>
    <Content/>
  </div>
</template>

<script>
import Header from '@/components/Body/Home/Header.vue'
import Content from '@/components/Body/Home/Content.vue'
export default {
  components: { Header, Content }
}
</script>
<style lang="scss" scoped>
.content {
  padding-top: 60px;
  background-color: $white-secondary;
  margin: 0;
}
</style>
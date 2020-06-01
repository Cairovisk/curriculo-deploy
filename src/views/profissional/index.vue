<template>
<div class="content">
    <Header/>
    <Content/>
</div>
</template>

<script>
import Header from '@/components/Body/Profissional/Header.vue'
import Content from '@/components/Body/Profissional/Content.vue'
export default {
    components: { Header, Content }
}
</script>

<style lang="scss" scoped>
.content {
  padding-top: 60px;
}
</style>
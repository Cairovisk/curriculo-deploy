<template>
    <div id="content">
        <div class="container">
            <div class="title">
                Sobre mim
            </div>
            <div class="line"></div>
            <div class="row">
                <div class="col-lg-6">
                    <Box number="01" titulo="Convivência" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum, turpis vel dignissim efficitur, nibh loremmalesuada mauris, a tempor justo ante sit amet metus."/>
                </div>
                <div class="col-lg-6">
                    <Box number="02" titulo="Comunicação" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum, turpis vel dignissim efficitur, nibh loremmalesuada mauris, a tempor justo ante sit amet metus."/>
                </div>
                <div class="col-lg-6">
                    <Box number="03" titulo="Assiduidade" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum, turpis vel dignissim efficitur, nibh loremmalesuada mauris, a tempor justo ante sit amet metus."/>
                </div>
                <div class="col-lg-6">
                    <Box number="04" titulo="Objetivos" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum, turpis vel dignissim efficitur, nibh loremmalesuada mauris, a tempor justo ante sit amet metus."/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Box from '@/components/Boxes/Default.vue'
export default {
    components: { Box }
}
</script>
<style lang="scss" scoped>
#content {
        background: $white;
        padding-top: 108px;
        width: 100%;
		height: auto;
        position: relative;
        color: $black;
        
        @media (max-width: 576px) {
			padding-top: 80px;
			padding-bottom: 146px;
			height: auto;
        }

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .title {
                font-family: $font;
                font-weight: $bold;
                font-size: 36px;
                line-height: 44px;
                margin-bottom: 12px;
            }

            .line {
                width: 100px;
                height: 6px;
                background: $pink;
                border-radius: 3px;
                margin-bottom: 90px;
            }


        }


        
}
</style>
<template>
<div id="header">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="title">
                    Cairo Pianezolla Hoffmann
                </div>
                <div class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum, turpis vel dignissim efficitur, nibh lorem malesuada mauris, a tempor justo ante sit amet metus. Mauris viverra varius tortor. Pellentesque vestibulum varius felis a venenatis.
                </div>
                <div class="buttons">
                    <div class="btn btn-action">Github</div>
                    <div class="btn btn-primary">Linkedin</div>
                </div>
            </div>
            <div class="col-lg-6">
                
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
#header {
        width: 100%;
		height: 570px;
		padding-top: 98px;
        position: relative;
        
        @media (max-width: 576px) {
			padding-top: 61px;
			padding-bottom: 146px;
			height: auto;
        }
        
        .container {
            position: relative;
            height: 100%;

            .title {
                font-family: $font;
                font-weight: $bold;
                font-size: 36px;
                line-height: 44px;
                margin-bottom: 24px;
            }

            .description {
                font-family: $font;
                font-weight: $regular;
                font-size: 14px;
                line-height: 17px;
                margin-bottom: 52px;
            }

            .buttons {
                display: flex;
                
            }
        }

}
</style>
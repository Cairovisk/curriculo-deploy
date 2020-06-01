<template>
    <div id="header">
        <div class="container">
            <div class="title">
                Habilidades
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="logo">
                        <img src="@/assets/vue.svg" alt="Logomarca Vue.js">
                    </div>
                    <div class="skill">
                        Vue.js
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="logo">
                        <img src="@/assets/sass.svg" alt="Logomarca Sass">
                    </div>
                    <div class="skill">
                        Sass
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="logo">
                        <img src="@/assets/javascript.svg" alt="Logomarca JavaScript 6">
                    </div>
                    <div class="skill">
                        JavaScript
                    </div>
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
		height: auto;
		padding: 98px 0;
        position: relative;
        color: $black;
        
        @media (max-width: 576px) {
			padding-top: 61px;
			padding-bottom: 146px;
			height: auto;
        }

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .title {
                font-family: $font;
                font-weight: $bold;
                font-size: 36px;
                line-height: 44px;
                margin-bottom: 74px;
            }

            .logo {
                display: flex;
                justify-content: center;
                margin: 20px;
            }

            .skill {
                font-family: $font;
                font-weight: $semibold;
                font-size: 36px;
                line-height: 44px;
                max-width: 253px;
                text-align: center;
                margin: 0 auto;
            }
        }
}
</style>
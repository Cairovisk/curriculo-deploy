<template>
    <div id="content">
        <div class="container">
            <div class="title">
                Outras Habilidades
            </div>
            <div class="line"></div>
            <div class="row">
                <div class="col-lg-3">
                    <div class="skill">
                        HTML5
                    </div>
                    <div class="logo">
                        <img src="@/assets/html.svg" alt="Logomarca da Udemy">
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="skill">
                        CSS3
                    </div>
                    <div class="logo">
                        <img src="@/assets/css.svg" alt="Logomarca da Udemy">
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="skill">
                        jQuery
                    </div>
                    <div class="logo">
                        <img src="@/assets/jquery.svg" alt="Logomarca da Udemy">
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="skill">
                        PHP
                    </div>
                    <div class="logo">
                        <img src="@/assets/php.svg" alt="Logomarca da Udemy">
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="skill">
                        Bootstrap
                    </div>
                    <div class="logo">
                        <img src="@/assets/bootstrap.svg" alt="Logomarca da Udemy">
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="skill">
                        NODE.js
                    </div>
                    <div class="logo">
                        <img src="@/assets/node.svg" alt="Logomarca da Udemy">
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="skill">
                        Express.js
                    </div>
                    <div class="logo">
                        <img src="@/assets/express.svg" alt="Logomarca da Udemy">
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="skill">
                        SQL
                    </div>
                    <div class="logo">
                        <img src="@/assets/sql.svg" alt="Logomarca da Udemy">
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
#content {
        background: $white;
        padding: 108px 0;
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

            .skill {
                font-family: $font;
                font-weight: $semibold;
                font-size: 24px;
                line-height: 29px;
                margin-bottom: 36px;
                text-align: center;
            }

            .logo {
                display: flex;
                justify-content: center;
                margin-bottom: 80px;
            }



        }
}
</style>
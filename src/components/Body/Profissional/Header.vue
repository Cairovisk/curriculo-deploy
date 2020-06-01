<template>
    <div id="header">
        <div class="content">
            <div class="title">
                Experiência
            </div>
            <div class="enterprise">
                <div class="logo">
                    <a target="_blank" rel="noopener noreferrer" href="https://liberfly.com.br"><img src="@/assets/liberfly.svg" alt="Logomarca da LiberFly"></a>
                </div>
                <div class="text">
                    <div class="subtitle">
                        Desenvolvedor Front-end na LiberFly
                    </div>
                    <div class="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum, turpis vel dignissim efficitur, nibh loremmalesuada mauris, a tempor justo ante sit amet metus. 
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
		height: 450px;
		padding-top: 98px;
        position: relative;
        color: $black;
        
        @media (max-width: 576px) {
			padding-top: 61px;
			padding-bottom: 146px;
			height: auto;
        }

        .content {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .title {
                font-family: $font;
                font-weight: $bold;
                font-size: 36px;
                line-height: 44px;
                margin-bottom: 37px;
            }

            .enterprise {
                display: flex;

                .logo {
                    margin-right: 33px;
                }

                .subtitle {
                    font-family: $font;
                    font-weight: $semibold;
                    font-size: 24px;
                    line-height: 29px;
                    margin-bottom: 15px;
                }

                .description {
                    font-family: $font;
                    font-weight: $regular;
                    font-size: 14px;
                    line-height: 17px;
                    max-width: 463px;
                }
            }
        }
}
</style>
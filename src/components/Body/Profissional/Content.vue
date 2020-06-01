<template>
    <div id="content">
        <div class="container">
            <div class="title">
                Educação
            </div>
            <div class="line"></div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="subtitle">
                        IFES - Instituto Federal do Espírito Santo
                    </div>
                    <div class="description">
                        Formado em eletrotécnica pelo IFES de vitória no ano de 2017. Início em 2014, o IFES permitiu a agregação de variadas habilidades relacionadas à elétrica tangentes ao trabalho em equipe dentro do meio profissional.
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="logo">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.ifes.edu.br"><img src="@/assets/ifes.svg" alt="Logomarca da IFES"></a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="logo">
                        <a target="_blank" rel="noopener noreferrer" href="http://www.ufes.br"><img src="@/assets/ufes.svg" alt="Logomarca da UFES"></a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="subtitle">
                        UFES - Universidade Federal do Espírito Santo
                    </div>
                    <div class="description">
                        Com início em 2018 e transferência em 2020, o aprendizado e meio científico disponíveis no curso de Ciência da Computação da Ufes trouxeram uma visão acadêmica da programação ao trabalhar com linguagens como C e Haskell.
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="subtitle">
                        UVV - Universidade de Vila Velha
                    </div>
                    <div class="description">
                        Ao iniciar uma nova fase em 2020 na área de desenvolvimento de sistemas, a UVV possibilitou maior aproximação ao mercado de trabalho.
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="logo">
                        <a target="_blank" rel="noopener noreferrer" href="https://uvv.br"><img src="@/assets/uvv.svg" alt="Logomarca da UVV"></a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="logo">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com"><img src="@/assets/udemy.svg" alt="Logomarca da Udemy"></a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="subtitle">
                        Cursos de Web Development
                    </div>
                    <div class="description">
                        Estudo individual e exponencial de desenvolvimento web em plataformas de cursos online como Udemy e entre outras.
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

            .subtitle {
                font-family: $font;
                font-weight: $bold;
                font-size: 24px;
                line-height: 29px;
                margin-bottom: 38px;
            }

            .description {
                font-family: $font;
                font-weight: $medium;
                font-size: 18px;
                line-height: 22px;
                max-width: 502px;
            }

            .logo {
                display: flex;
                justify-content: center;
                margin-bottom: 70px;
            }
        }
}
</style>
<template>
    <div id="box">
        <div class="widget">
            <div class="circle">
                <div class="number">
                    {{ number }}
                </div>
            </div>
        </div>
        <div class="text">
            <div class="title">
                {{ titulo }}
            </div>
            <div class="description">
                {{ descricao }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['number', 'titulo', 'descricao']
}
</script>
<style lang="scss" scoped>
#box {
    width: 450px;
    height: 170px;
    position: relative;
    color: $black;
    box-shadow: 10px 10px 10px rgba(179, 179, 179, 0.1);
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 62px;

    .widget {
        position: absolute;
        left: 15px;
        top: 15px;

        .circle {
            width: 60px;
            height: 60px;
            border-radius: 30px;
            background: $pink;
            display: flex;
            justify-content: center;
            align-items: center;

            .number {
                font-family: $font;
                font-weight: $medium;
                font-size: 24px;
                line-height: 29px;
            }
        }
    }

    .text {
        position: absolute;
        top: 34px;
        left: 110px;

        .title {
            font-family: $font;
            font-weight: $bold;
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 6px;
        }

        .description {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 17px;
            max-width: 310px;
        }
    }

}
</style>
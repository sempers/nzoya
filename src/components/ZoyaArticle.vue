<template>
    <div id="article-n-flyform">
        <article class="home" style="margin-top:55px;">
            <section id="section-promo" class="d-flex" data-aos="fade-up">
                <div class="container mt-auto mb-auto">
                    <div class="row">
                        <div class="col-lg-2"></div>
                        <div class="col col-lg-8">
                            <h1 class="mt-4 aos-init aos-animate text-center mb-4" style="font-size: 3.6em;">Привет, я ZOYA Finance!</h1>
                            <p data-aos-delay="100" class="lead aos-init aos-animate">Я – скорая финансовая помощь для вашего бизнеса - получите займ до 3&nbsp;000&nbsp;000 рублей без очередей, залогов и справок. Никакой бюрократической возни!</p>
                            <div class="btn-cnt text-center">
                                <button data-aos-delay="400" class="btn btn-primary btn-zoya-size aos-init aos-animate go_my_form" @click="showFlyForm()">Оставить заявку</button>
                            </div>
                        </div>
                        <div class="col-lg-2"></div>
                    </div>
                </div>
            </section>

            <section id="section-who" class="d-flex" data-aos="fade-up">
                <div class="row container mr-auto ml-auto">
                    <div class="col-6 left-col">
                        <div class="p-4" data-aos="fade-right">
                            <h2 data-aos-delay="0" class="aos-init">Для кого мы сделали этот сервис</h2>
                            <div data-aos-delay="200" class="mt-auto mb-auto aos-init">
                                <p>Zoya работает с любым розничным бизнесом у которого есть эквайринговый оборот.</p>
                                <p>В общем, если вы принимаете к оплате карты более 3-х месяцев, оставляйте заявку. Мы обязательно предложим вам вариант финансирования.</p>
                            </div>
                            <div data-aos-delay="500" class="aos-init btn-cnt">
                                <button class="btn btn-primary btn-zoya-size go_my_form" @click="showFlyForm()">Оставить заявку</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 right-col" style="padding-left:0;padding-right:0;">
                        <div class="p-4" data-aos="fade-left">
                            <h2 data-aos-delay="0">Кафе и рестораны</h2>
                            <p data-aos-delay="200">Эквайринговый оборот 300&nbsp;000&nbsp;&#8381; в месяц, получили аванс 600&nbsp;000&nbsp;&#8381; на 11 месяцев</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- HOW TO -->
            <section id="section-how-to" class="d-flex" >
                <div class="container">
                    <h3 class="text-center" data-aos="fade-up">Как получить займ? Всего 3 простых шага:</h3>
                    <div class="row mb-4" style="margin-top:30px">
                        <div data-aos-delay="100" class="col-md-4 aos-init" data-aos="fade-right"><strong class="num">1.</strong>
                            <p class="text-primary">Оставить<br>заявку</p>
                            <p>Вы оставляете заявку на сайте и с вами связывается наш менеджер и согласовывает параметры займа.</p>
                        </div>
                        <div data-aos-delay="200" data-aos="fade-right" class="col-md-4 aos-init"><strong class="num">2.</strong>
                            <p class="text-primary">Подключить эквайринг<br>нашего банка партнёра</p>
                            <p>Если у Вас уже установлен эквайринг (оплата пластиковыми картами) нашего банка партнёра, то сразу переходим к следующему шагу</p>
                        </div>
                        <div data-aos-delay="300" data-aos="fade-right" class="col-md-4 aos-init"><strong class="num">3.</strong>
                            <p class="text-primary">Получить деньги<br>на текущий счет</p>
                            <p>Используйте полученные средства на любые цели в Вашем бизнесе</p>
                        </div>
                    </div>
                    <div data-aos-delay="600" class="row pt-4 aos-init" data-aos="fade-right">
                        <div class="col-md-5"><p class="text-primary">А что потом?</p>
                            <p>Погашение займа происходит автоматически и ежедневно из поступлений по эквайрингу (оплата платиковыми картами) – стандартно не более 30%</p></div>
                    </div>
                </div>
            </section>

            <!-- СУММА ФИНАНСИРОВАНИЯ -->
            <section id="section-calc" class="d-flex" data-aos="fade-up">
                <div class="container">
                    <h3 class="text-center">Узнайте сумму финансирования</h3> <br><br>
                    <div class="col-12 col-md-7 ml-auto mr-auto">
                        <div id="my_calc">
                            <div class="calc-row">
                                <div class="row">
                                    <div class="col-6" style="padding-left:0">
                                        <p class="sub">Эквайринговый оборот,<br>&#8381; в месяц</p>
                                    </div>
                                    <div class="col-6 text-right">
                                        <div class="q_val" @click="shownEdit.eq = true" v-show="!shownEdit.eq">{{request.eq}} &#8381;</div>
                                        <div class="c_inp" v-show="shownEdit.eq">
                                            <input type="text" class="qw1_val_inp form-control" v-model="request.eq">
                                            <div class="cheker qw1_cheker" @click="shownEdit.eq = false">ОК</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <vue-slider
                                            ref="slider-qw1"
                                            v-model="request.eq"
                                            v-bind="sliderOptions.options1"
                                    ></vue-slider>
                                </div>
                            </div>
                            <div class="calc-row">
                                <div class="row">
                                    <div class="col-6" style="padding-left:0">
                                        <p class="sub">Срок выплаты аванса, месяцев</p>
                                    </div>
                                    <div class="col-6 text-right">
                                        <div class="q_val" @click="shownEdit.months = true" v-show="!shownEdit.months">{{request.months}} мес.</div>
                                        <div class="c_inp" v-show="shownEdit.months">
                                            <input type="text" v-model="request.months" class="qw2_val_inp form-control">
                                            <div class="cheker qw2_cheker" @click="shownEdit.months = false">ОК</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <vue-slider
                                            ref="slider-qw2"
                                            v-model="request.months"
                                            v-bind="sliderOptions.options2"
                                    ></vue-slider>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-6" style="padding-left:0">
                                    <p class="sub">Вы можете получить <br>аванс в размере</p>
                                </div>
                                <div class="col-6 text-right">
                                    <span id="calc_total" class="q_val">134000 &#8381;</span>
                                </div>
                            </div>
                            <div class="row mt-4 text-center btn-cnt">
                                <button class="btn btn-primary btn-zoya-size go_my_form" @click="showFlyForm()">Оставить заявку</button>
                            </div>
                        </div>
                    </div>
                    <div class="ml-auto mr-auto"></div>
                    <p class="text-center mt-4 mb-2" style="font-size: 12px; color: rgb(97, 97, 97);">*) Пример расчета носит исключительно информационный характер и не является публичной офертой.</p>
                </div>
            </section>

            <!-- ЗАЯВКА -->
            <section id="section-request" class="d-flex" data-aos="fade-up">
                <div class="container mb-auto mt-auto">
                    <h3 class="text-center">Заявка на финансирование</h3> <br>
                    <div class="form-f-box">
                        <div class="row mt-4">
                            <div class="ml-auto mr-auto">
                                <p style="font-size: 14px;">
                                    Вам достаточно оставить только свой номер
                                    телефона, мы вам перезвоним и уточним детали. </p>
                                <div class="row mt-4">
                                    <div class=" ml-auto mr-auto">
                                        <form >
                                            <div class="form-box">
                                                <!--<input type="phone" name="phone" v-model="request.phone" placeholder="" class="form-control form-control-lg ml-auto mr-auto">-->
                                                <masked-input mask="\+\7 (111) 111-11-11" v-model="request.phone" class="form-control form-control-lg ml-auto mr-auto" @input="rawVal = arguments[1]"/>
                                                <div class="form-check ml-auto mr-auto mt-4">
                                                    <input type="checkbox" v-model="request.agreeToProcess" value="1" name="rules" id="agree1" class="form-check-input">
                                                    <label for="agree1" class="form-check-label">Указывая свои
                                                        персональные данные в полях заявки, вы соглашаетесь на их
                                                        <a href="http://zoyafinance.ru/#" class="load" data-page="rules">обработку</a>.
                                                    </label>
                                                </div>
                                                <div class="btn-cnt text-center">
                                                    <button class="btn btn-primary btn-zoya-size" type="button" :disabled="disableSubmit" @click="showFlyForm()">Получить займ</button>
                                                </div>
                                            </div>
                                            <div class="message"></div>
                                        </form>
                                    </div>
                                </div>
                                <br>
                            </div>
                        </div>
                    </div>

                    <!---->
                </div>
            </section>
        </article>
        <!--FLY FORM-->
        <div class="fly-form animation" id="my_form" v-if="shownEdit.flyForm">
            <div class="overlay" @click="shownEdit.flyForm = false"></div>
            <div class="inner">
                <h3 class="text-center">Заявка на финансирование</h3> <br>
                <div class="form-f-box">
                    <div class="row mt-4">
                        <div class=" ml-auto mr-auto"
                        ><p style="font-size: 14px;">
                            Вам достаточно оставить только свой номер
                            телефона, мы вам перезвоним и уточним детали. </p>
                            <div class="row mt-4">
                                <div class=" ml-auto mr-auto">
                                    <form>
                                        <!--<input type="hidden" name="form" value="footer_form">
                                        <input type="hidden" name="money" value="100000" class="form_money">
                                        <input type="hidden" name="months" value="6" class="form_months">
                                        <input type="hidden" name="total" value="134000" class="form_total">
                                        <input type="hidden" name="form_name" value="Заявка на финансирование">
                                        <input type="hidden" name="gorod" value="" class="gorod">
                                        <input type="hidden" name="page_name" value="Главная">
                                        <input type="hidden" name="site_link" value="http://zoyafinance.ru/">-->

                                        <div class="form-box">
                                            <masked-input mask="\+\7 (111) 111-11-11" class="form-control form-control-lg ml-auto mr-auto" v-model="request.phone" @input="rawVal = arguments[1]"/>
                                            <div class="form-check ml-auto mr-auto mt-4">
                                                <input type="checkbox" v-model="request.agreeToProcess" value="1" name="rules" id="agree2" class="form-check-input">
                                                <label for="agree2" class="form-check-label">Указывая свои
                                                    персональные данные в полях заявки, вы соглашаетесь на их <a href="http://zoyafinance.ru/#" class="load" data-page="rules">обработку</a>.
                                                </label>
                                            </div>
                                            <div class="btn-cnt text-center">
                                                <button class="btn btn-primary btn-zoya-size" type="button" :disabled="disableSubmit" @click="shownEdit.flyForm = false">Получить займ</button>
                                            </div>
                                        </div>
                                        <div class="message"></div>
                                    </form>
                                    <!--- | form | --->
                                </div>
                            </div>
                            <br>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

</template>
<script>
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/default.css'
    import MaskedInput from 'vue-masked-input'
    import AOS from 'aos'

    export default {
        components: {
            VueSlider, MaskedInput
        },

        mounted() {
            console.log("AOS init()");
            AOS.init();
        },

        data() {
            return {
                shownEdit: {
                    months: false,
                    eq: false,
                    flyForm: false
                },

                request: {
                    eq: 1000000,
                    months: 6,
                    total: 134000,
                    agreeToProcess: false,
                    phone: '(495)555-55-55'
                },

                sliderOptions: {
                    options1: {
                        dotSize: 14,
                        width: '100%',
                        height: 4,
                        direction: 'ltr',
                        data: null,
                        min: 50000,
                        max: 3000000,
                        interval: 1000,
                        disabled: false,
                        clickable: true,
                        duration: 0.5,
                        lazy: false,
                        tooltip: 'focus',
                        tooltipPlacement: 'top',
                        tooltipFormatter: undefined,
                        useKeyboard: false,
                        enableCross: true,
                        fixed: false,
                        minRange: undefined,
                        maxRange: undefined,
                        order: true,
                        marks: false,
                        dotOptions: undefined,
                        process: true,
                        dotStyle: undefined,
                        railStyle: undefined,
                        processStyle: undefined,
                        tooltipStyle: undefined,
                        stepStyle: undefined,
                        stepActiveStyle: undefined,
                        labelStyle: undefined,
                        labelActiveStyle: undefined
                    },
                    options2: {
                        dotSize: 14,
                        width: '100%',
                        height: 4,
                        direction: 'ltr',
                        data: null,
                        min: 4,
                        max: 12,
                        interval: 1,
                        disabled: false,
                        clickable: true,
                        duration: 0.5,
                        lazy: false,
                        tooltip: 'focus',
                        tooltipPlacement: 'top',
                        tooltipFormatter: undefined,
                        useKeyboard: false,
                        enableCross: true,
                        fixed: false,
                        minRange: undefined,
                        maxRange: undefined,
                        order: true,
                        marks: false,
                        dotOptions: undefined,
                        process: true,
                        dotStyle: undefined,
                        railStyle: undefined,
                        processStyle: undefined,
                        tooltipStyle: undefined,
                        stepStyle: undefined,
                        stepActiveStyle: undefined,
                        labelStyle: undefined,
                        labelActiveStyle: undefined
                    }
                }
            };
        },

        computed: {
            disableSubmit() {
                return !(this.phoneValid() && this.request.agreeToProcess);
            }
        },

        methods: {
            phoneValid() {
                let re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
                return re.test(this.request.phone);
            },

            showFlyForm() {
                this.shownEdit.flyForm = true;
            }
        }
    }
</script>
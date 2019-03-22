<template>
    <article class="home" style="margin-top:60px;">
        <section id="section-promo" class="d-flex">
            <div class="container mt-auto mb-auto">
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col col-lg-8">
                        <h1 class="mt-4 aos-init aos-animate text-center mb-4">Привет, я ZOYA Finance!</h1>
                        <p data-aos-delay="100" class="lead aos-init aos-animate">Я – скорая финансовая помощь для вашего бизнеса - получите займ до 3&nbsp;000&nbsp;000 рублей без очередей, залогов и справок. Никакой бюрократической возни!</p>
                        <div class="text-center"><button data-aos-delay="400" class="btn btn-primary btn-zoya-size aos-init aos-animate go_my_form" onclick="yaCounter49730020.reachGoal(&#39;main_btn&#39;); return true;">Получить займ</button></div>
                    </div>
                    <div class="col-lg-2"></div>
                </div>
            </div>
        </section>

        <section id="section-who" class="d-flex">
            <div class="ml-auto mr-auto">
                <div class="row align-self-stretch d-flex ml-auto mr-auto" style="width: 100%; min-height:320px">
                    <div class="col col-md-6 left-col align-self-stretch d-flex" style="padding-left: 60px; padding-right: 0px;">
                        <div class="p-4 align-self-stretch d-flex flex-column"><h2 data-aos-delay="0" class="mb-auto aos-init">Для кого мы сделали этот сервис</h2>
                            <div data-aos-delay="0" class="mt-auto mb-auto aos-init">
                                <p>
                                    Zoya работает с любым розничным бизнесом у которого есть эквайринговый оборот.
                                </p>
                                <p>
                                    В общем, если вы принимаете к оплате карты более 3-х месяцев, оставляйте заявку. Мы обязательно предложим вам вариант финансирования.
                                </p>
                            </div>
                            <div data-aos-delay="10" class="mt-auto aos-init">
                                <button class="btn btn-primary btn-zoya-size go_my_form">Получить займ</button>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-6 align-self-stretch d-flex right-col" style="padding-left: 0px; padding-right: 0px;">
                        <div class="p-4">
                            <h2>Кафе и рестораны</h2>
                            <p>Эквайринговый оборот 300&nbsp;000&nbsp;&#8381; в месяц, получили аванс 600&nbsp;000&nbsp;&#8381; на 11 месяцев</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section id="section-how-to" class="d-flex">
            <div class="container">
                <h3 class="text-center">Как получить займ? Всего 3 простых шага:</h3>
                <div class="row mb-4" style="margin-top:30px">
                    <div data-aos-delay="100" class="col-md-4 aos-init"><strong class="num">1.</strong>
                        <p class="text-primary">Оставить<br>заявку</p>
                        <p>Вы оставляете заявку на сайте и с вами связывается наш менеджер и согласовывает параметры займа.</p>
                    </div>
                    <div data-aos-delay="200" class="col-md-4 aos-init"><strong class="num">2.</strong>
                        <p class="text-primary">Подключить эквайринг<br>нашего банка партнёра</p>
                        <p>Если у Вас уже установлен эквайринг (оплата пластиковыми картами) нашего банка партнёра, то сразу переходим к следующему шагу</p>
                    </div>
                    <div data-aos-delay="300" class="col-md-4 aos-init"><strong class="num">3.</strong>
                        <p class="text-primary">Получить деньги<br>на текущий счет</p>
                        <p>Используйте полученные средства на любые цели в Вашем бизнесе</p>
                    </div>
                </div>
                <div data-aos-delay="600" class="row pt-4 aos-init">
                    <div class="col-md-5"><p class="text-primary">А что потом?</p>
                        <p>Погашение займа происходит автоматически и ежедневно из поступлений по эквайрингу (оплата платиковыми картами) – стандартно не более 30%</p></div>
                </div>
            </div>
        </section>

        <section id="section-calc" class="d-flex">
            <div class="container">
                <h3 class="text-center">Узнайте сумму финансирования</h3> <br><br>
                <div class="col-12 col-md-7 ml-auto mr-auto">
                    <div id="my_calc">
                        <div class="calc_row">
                            <div class="slider-wrapper">
                                <div class="row">
                                    <div class="col-6">
                                        <p class="sub">Эквайринговый оборот,<br>&#8381; в месяц</p>
                                    </div>
                                    <div class="col-6 text-right">
                                        <div class="counter">
                                            <div class="q_val qw1_val">100000 &#8381;</div>
                                            <div class="c_inp">
                                                <input type="text" value="100000" class="qw1_val_inp form-control">
                                                <div class="cheker qw1_cheker">ok</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="text" id="qw1" class="qw1" name="qw1" value="100000" style="display: none;"><span class="range-bar"><span class="range-handle" style="left: 10.1864px;"></span><span class="range-min">50000</span><span class="range-max">3000000</span>
                                <span class="range-quantity" style="width: 10px;"></span></span>
                            </div>
                        </div>
                        <div class="calc_row">
                            <div class="slider-wrapper">
                                <div class="row">
                                    <div class="col-6">
                                        <p class="sub">Срок выплаты аванса, месяцев</p>
                                    </div>
                                    <div class="col-6 text-right">
                                        <div class="counter">
                                            <div class="q_val qw2_val">6 мес.</div>
                                            <div class="c_inp">
                                                <input type="text" value="4" class="qw2_val_inp form-control">
                                                <div class="cheker qw2_cheker">ok</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="text" id="qw2" class="qw2" name="qw2" value="6" style="display: none;"><span class="range-bar"><span class="range-handle" style="left: 150.25px;"></span><span class="range-min">4</span><span class="range-max">12</span>
                                <span class="range-quantity" style="width: 150.25px;"></span></span>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-6">
                                <p class="sub">Вы можете получить <br>аванс в размере</p>
                            </div>
                            <div class="col-6 text-right">
                                <span class="value"><span id="calc_total">134000</span> &#8381;</span>
                            </div>
                        </div>
                        <div class="text-center"><button class="btn btn-primary btn-zoya-size go_my_form" onclick="yaCounter49730020.reachGoal(&#39;calc_btn&#39;); return true;">Получить займ</button></div>
                    </div>
                </div>
                <div class="ml-auto mr-auto">

                </div>
                <p class="text-center mt-4 mb-2" style="font-size: 12px; color: rgb(97, 97, 97);">Пример расчета носит исключительно информационный характер и не является публичной офертой.</p>
            </div>
        </section>

        <section id="section-request" class="section-full d-flex">
            <div class="container mb-auto mt-auto">
                <div>
                    <h3 class="text-center text-primary">Заявка на финансирование</h3> <br>
                    <div class="form_f_box">
                        <div class="row mt-4">
                            <div class=" ml-auto mr-auto"><p class="text-center" style="font-size: 14px;">
                                Удивительно, но вам достаточно оставить только<br> свой номер
                                телефона, мы вам перезвоним и уточним детали. </p>
                                <br>
                                <br>
                                <div class="row mt-4">
                                    <div class=" ml-auto mr-auto">
                                        <!--- | form | --->
                                        <form id="footer_form">
                                            <input type="hidden" name="form" value="footer_form">
                                            <input type="hidden" name="money" value="100000" class="form_money">
                                            <input type="hidden" name="months" value="6" class="form_months">
                                            <input type="hidden" name="total" value="134000" class="form_total">
                                            <input type="hidden" name="form_name" value="Заявка на финансирование">
                                            <input type="hidden" name="gorod" value="" class="gorod">
                                            <input type="hidden" name="page_name" value="Главная">
                                            <input type="hidden" name="site_link" value="http://zoyafinance.ru/">

                                            <div class="form_box">
                                                <input type="phone" name="phone" placeholder="8 (" class="form-control form-control-lg ml-auto mr-auto" onclick="yaCounter49730020.reachGoal(&#39;form_phone&#39;); return true;">
                                                <br>
                                                <div class="form-check ml-auto mr-auto">
                                                    <input type="checkbox" value="1" name="rules" id="defaultCheck1" class="form-check-input">
                                                    <label for="defaultCheck1" class="form-check-label">Указывая свои
                                                        персональные данные в полях заявки, вы соглашаетесь на их <a href="http://zoyafinance.ru/#" class="load" data-page="rules">обработку</a>.
                                                    </label>
                                                </div>
                                                <div class="form_btn">
                                                    <button class="send_button btn btn-primary btn-zoya-size" onclick="yaCounter49730020.reachGoal(&#39;form_btn&#39;); return true;" disabled="disabled">Получить займ</button>
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
                <!---->
            </div>
        </section>
    </article>
</template>

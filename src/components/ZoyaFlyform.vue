<template>
    <div class="fly_form animation" id="my_form">
        <!--<div class="overlay"></div>-->
        <div class="inner">
            <h3 class="text-center text-primary">Заявка на финансирование</h3><br>
            <div class="row mt-4">
                <div class=" ml-auto mr-auto"><p class="text-center" style="font-size: 14px;">
                    Это удивительно, но вам достаточно оставить только<br> свой номер
                    телефона, мы вам перезвоним и уточним детали. </p>
                    <br>
                    <br>
                    <!--- | form | --->
                    <form id="fly_form">
                        <input type="hidden" name="form" value="fly_form">
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
                                <button class="send_button btn btn-primary btn-zoya-size" disabled="disabled">Получить займ</button>
                            </div>
                        </div>
                        <div class="message"></div>
                    </form>
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>
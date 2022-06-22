$(document).ready(function(){

    $("#orderform").hide();

    $("#formButton").click(function() {
        $("#orderform").toggle();//faire un changement de text
    });

    let total_price = 0;
    let panier = [];

    $('#popup_account').popup();
    $('#popup_shop-bag').popup();
    $('#popup_ready-dishes').popup();
    $('#popup_starter').popup();
    $('#popup_main-course').popup();
    $('#popup_dessert').popup();
    $('#popup_boisson').popup();
    $('#popup_compose').popup();

    $('.info').hide();

    $('.box').on({
        mouseenter:function(){
            $(this).children('.info').show();
        },
        mouseleave:function(){
            $(this).children('.info').hide();
        }
    });

    checkbox_limit('.garniture-checkbox',6);
    checkbox_limit('.fromage-checkbox',3);
    checkbox_limit('.saucePizza-checkbox',3);

    update_price('garniture-checkbox','prix-garniture',3);
    update_price('fromage-checkbox','prix-fromage',1);
    update_price('saucePizza-checkbox','prix-saucePizza',1);

    $('.total-price>span').text(total_price+" €");

    for(let i = 0;i < 8;i++){
        $('#starter-form'+i+'>div>.btn-v').click(function(){
            let radio = $("#starter-form"+i+">div>input:radio[name=starter-flexRadioDefault"+i+"]:checked");
            let tmp =  radio.val();
            if(tmp !== undefined){
                let span_price = $('#starterPrice'+i);
                radio.prop("checked",false);
                let btn = $('#starter-form'+i+'>div>.btn-v');
                let price = parseFloat(span_price.text());
                panier[panier.length] = {
                    type: 'entree',
                    name: btn.attr('name'),
                    sauce: tmp,
                    price: price
                }
                total_price += price;
                $('.total-price>span').text(total_price+" €");
            }
        });
    }

    for(let i =0;i < 13;i++){
        $('#pizza-form'+i+'>div>.btn-v').click(function(){
            let radio = $("#pizza-form"+i+">div>input:radio[name=pizza-flexRadioDefault"+i+"]:checked");
            let tmp =  radio.val();
            if(tmp !== undefined){
                let span_price = $('#pizzaPrice'+i);
                radio.prop("checked",false);
                let btn = $('#pizza-form'+i+'>div>.btn-v');
                let price = parseFloat(span_price.text());
                switch (tmp) {
                    case 'M':
                        break;
                    case 'L':
                        span_price.text(price-3);
                        break;
                    case 'XL':
                        span_price.text(price-5);
                        break;
                    default:
                        break;
                }
                panier[panier.length] = {
                    type: 'pizza',
                    name: btn.attr('name'),
                    size: tmp,
                    price: price
                };
                total_price += price;
                $('.total-price>span').text(total_price+" €");
            }
        });

        let radio = $("#pizza-form"+i+">div>input:radio[name=pizza-flexRadioDefault"+i+"]");
        let span = $('#pizzaPrice'+i);
        radio.mousedown(function(){
            let radio_prev = $("#pizza-form"+i+">div>input:radio[name=pizza-flexRadioDefault"+i+"]:checked");
            let val_prev = radio_prev.val();
            let val = $(this).val();
            let pizza_price =  parseFloat(span.text())
            if(val_prev === undefined){
                switch (val) {
                    case 'M':
                        break;
                    case 'L':
                        pizza_price += 3;
                        span.text(pizza_price)
                        break;
                    case 'XL':
                        pizza_price += 5;
                        span.text(pizza_price)
                        break;
                    default:
                        break;
                }
            }else if(val_prev === 'M'){
                switch (val) {
                    case 'L':
                        pizza_price += 3;
                        span.text(pizza_price)
                        break;
                    case 'XL':
                        pizza_price += 5;
                        span.text(pizza_price)
                        break;
                    default:
                        break;
                }
            }else if(val_prev === 'L'){
                switch (val) {
                    case 'M':
                        pizza_price = pizza_price - 3;
                        span.text(pizza_price);
                        break;
                    case 'XL':
                        pizza_price += 2;
                        span.text(pizza_price);
                        break;
                    default:
                        break;
                }
            }else if(val_prev === 'XL'){
                switch (val) {
                    case 'M':
                        pizza_price = pizza_price - 5;
                        span.text(pizza_price);
                        break;
                    case 'L':
                        pizza_price = pizza_price - 2;
                        span.text(pizza_price);
                        break;
                    default:
                        break;
                }
            }
            $(this).prop('checked',true);
        });
    }

    for(let i = 0;i < 4;i++ ){
        $('#boissons-form'+i+'>div>.btn-v').click(function(){
            let radio =  $("#boissons-form"+i+">div>input:radio[name=boissons-flexRadioDefault"+i+"]:checked");
            let tmp = radio.val();
            if(tmp !== undefined){
                let span_price = $('#boissonPrice'+i);
                radio.prop("checked",false);
                let btn = $('#boissons-form'+i+'>div>.btn-v');
                let price = parseFloat(span_price.text());
                switch (tmp) {
                    case '33cl':
                        break;
                    case '1.5L':
                        span_price.text(price-1);
                        break;
                    case '2L':
                        span_price.text(price-2);
                        break;
                    default:
                        break;
                }
                panier[panier.length] = {
                    type: 'boissons',
                    name: btn.attr('name'),
                    size: tmp,
                    price: price
                };
                total_price += price;
                $('.total-price>span').text(total_price+" €");
            }
        });
        let radio = $("#boissons-form"+i+">div>input:radio[name=boissons-flexRadioDefault"+i+"]");
        let span = $('#boissonPrice'+i);
        radio.mousedown(function(){
            let radio_prev = $("#boissons-form"+i+">div>input:radio[name=boissons-flexRadioDefault"+i+"]:checked");
            let val_prev = radio_prev.val();
            let val = $(this).val();
            let boisson_price =  parseFloat(span.text())
            if(val_prev === undefined){
                switch (val) {
                    case '33cl':
                        break;
                    case '1.5L':
                        boisson_price += 1;
                        span.text(boisson_price)
                        break;
                    case '2L':
                        boisson_price += 2;
                        span.text(boisson_price)
                        break;
                    default:
                        break;
                }
            }else if(val_prev === '33cl'){
                switch (val) {
                    case '1.5L':
                        boisson_price += 1;
                        span.text(boisson_price)
                        break;
                    case '2L':
                        boisson_price += 2;
                        span.text(boisson_price)
                        break;
                    default:
                        break;
                }
            }else if(val_prev === '1.5L'){
                switch (val) {
                    case '33cl':
                        boisson_price = boisson_price - 1;
                        span.text(boisson_price)
                        break;
                    case '2L':
                        boisson_price += 1;
                        span.text(boisson_price)
                        break;
                    default:
                        break;
                }
            }else if(val_prev === '2L'){
                switch (val) {
                    case '33cl':
                        boisson_price = boisson_price - 2;
                        span.text(boisson_price)
                        break;
                    case '1.5L':
                        boisson_price = boisson_price - 1;
                        span.text(boisson_price)
                        break;
                    default:
                        break;
                }
            }
            $(this).prop('checked',true);
        });
    }

    let infob = $(".infob");
    for(let i = 0;i < infob.length;i++){
        let checkbox_class = ".entree-checkbox"+i;
        let textNbEntree = $("#nb-entree-"+i).text();
        let nbEntree = parseInt(textNbEntree.substring(9,textNbEntree.length));
        checkbox_limit(checkbox_class,nbEntree);
    }
    for(let i = 0;i < infob.length;i++){
        let span_price = $("#menuPrice"+i).text();
        let textTailleP = $("#taille-pizza-"+i).text();
        let textNbEntree = $("#nb-entree-"+i).text();
        let textTailleBoisson = $("#taille-boisson-"+i).text();
        let checkbox_class = ".entree-checkbox"+i;
        $("#valideM"+i).click(function(){
            total_price += validate_menu(panier,span_price,textTailleP,textNbEntree,textTailleBoisson,checkbox_class,i);
            $('.total-price>span').text(total_price+" €");
        });
    }

    $('#composable_valide').click(function(){
        total_price += validate_composition(panier);
        $('.total-price>span').text(total_price+" €");
    });

    $('.dessert-selector').click(function(){
        let val = $(this).val();
        let price = parseFloat(val);
        panier[panier.length] = {
            type : 'dessert',
            name : $(this).attr('name'),
            size: null,
            price : price
        };
        total_price += price;
        $('.total-price>span').text(total_price+" €");
    });

    let addToshopbag = document.getElementsByClassName('dessert-selector');
    for(let i=0 ; i <addToshopbag.length;i++){
        let button=addToshopbag[i];
        button.addEventListener('click', function(){
                    addItemToshopBag();
        });
    }

    let addToshopbag1 = document.getElementsByClassName('btn btn-outline-success valide btn-v');
    for(let i=0 ; i <addToshopbag1.length;i++){
        let button = addToshopbag1[i];
        button.addEventListener('click', function(){
            addItemToshopBag();
        });
    }

    let addToshopbag2 = document.getElementsByClassName('composable_valide');
    for(let i=0 ; i <addToshopbag2.length;i++){
        let button=addToshopbag2[i];
        button.addEventListener('click', function(){
            addItemToshopBag();
        });
    }

    $("#submit").click(function(){
        const n =$("#nom").val();
        const p =$("#prenom").val();
        const a = $("#adresse").val();

        if(n !== "" && p !== "" && a !== "" && panier.length !== 0){
            let item4 = {
                nom : n,
                prenom : p,
                adresse : a
            }
            let item5 = {
                panier : panier,
                prixtotal : total_price,
                info : item4
            }
            $.post("/request",
                item5,
                function (data, status) {
                    console.log(data);
                }
            );

            $("#orderform").hide();
            $( ".order-items" ).remove();
            $("#formButton").hide();
            $("#totalprice").text("0 €");

            let orderRow = document.createElement('div');
            orderRow.classList.add('order-row');
            let orderRowContents = `<div class="order-items" id="myshopbag"></div>`
            orderRow.innerHTML=orderRowContents;

            let r = document.getElementsByClassName('shop')[0];
            r.append(orderRow);

            $("#formButton").show();

            total_price = 0;
            panier.splice(0, panier.length);
            $('.total-price>span').text(total_price+" €");

            $("#nom").css("border","0px");
            $("#prenom").css("border","0px");
            $("#adresse").css("border","0px");
            $("#formButton").css("border","0px");
        }else{
            if(n !== ""){
                $("#nom").css("border","5px solid #34F458");
            }else{
                $("#nom").css("border","5px solid #F90A0A");
            }
            if(p !== ""){
                $("#prenom").css("border","5px solid #34F458");
            }else{
                $("#prenom").css("border","5px solid #F90A0A");
            }
            if(a !== ""){
                $("#adresse").css("border","5px solid #34F458");
            }else{
                $("#adresse").css("border","5px solid #F90A0A");
            }
            if(panier.length === 0){
                $("#formButton").css("border","5px solid #F90A0A");
            }else{
                $("#formButton").css("border","5px solid #34F458");
            }
        }
    });

    function removeProduct(event){

        let buttonclicked = event.target;
        buttonclicked.parentElement.parentElement.remove();
        let nom = buttonclicked.parentElement.parentElement.
                getElementsByClassName("added-one")[0].
                getElementsByClassName("order-item-title")[0].innerText;

        let prix_actuel = $("#totalprice").text();

        let prix_removed = buttonclicked.parentElement.parentElement.
                    getElementsByClassName("added-one")[0].
                    getElementsByClassName("prix")[0].innerText;
        let prix_nouveau = prix_actuel - prix_removed;
        $("#totalprice").text(prix_nouveau);
        let l = panier.length;

        for( let i=0 ; i< l ; i++){
            if (panier [i].name === nom && panier [i].price >0 ){
                panier[i].price=0;
                panier.splice(i,1);
                break;
            }
        }
        $('.total-price>span').text(prix_nouveau+" €");
        total_price = prix_nouveau;
    }

    function addItemToshopBag(){

        let l = panier.length;
        let prixtotal = 0;
        for( let i=0 ; i< l ; i++){
            prixtotal=prixtotal+panier[i].price;
        }
        let v = panier[l-1];
        if(v !== undefined){
            let title = v.name;
            let price = v.price;
            let size = "";
            if (v.type === "pizza" || v.type === "boissons"){
                size=v.size;
            }else if(v.type === "entree"){
                size = v.sauce;
            }else if(v.type === "menu"){
                size = "";
            }
            let orderRow = document.createElement('div');
            orderRow.classList.add('order-row');
            let orderITems = document.getElementsByClassName('order-items')[0];
            orderRow.innerHTML=`
            <div class="added-one order-item order-column" style="text-align:center;align-items: center">
              <span style="text-align:center" class="order-item-title">${title}</span>
              <span style="text-align:center" class="size" > ${size} </span>
              <span style="text-align:center" class="prix" > ${price} </span>
              <span>€</span>    
            </div>
            <div class="added-two order-item order-column" style="text-align:center;align-items: center">
                <button class="remove-btn btn btn-danger" type="button">Remove</button>
            </div>
            </div>
            `;

            orderITems.append(orderRow);
            orderRow.getElementsByClassName("remove-btn")[0].addEventListener('click',function(event){
                removeProduct(event);
            });
            $("#totalprice").text(prixtotal);
        }
    }

});

function validate_composition(panier){
    let prix_composable = 9; // prix de la base(5)  + prix de deux garniture ( la troisième offerte ) + un frommage et une sauce offert tout le reste ne supplément.
    let garniture = $('.garniture-checkbox:checked');
    let fromage = $('.fromage-checkbox:checked');
    let sauce = $('.saucePizza-checkbox:checked');
    let base = $('.base-radio:checked');
    let size = $('.size-input-composable:checked')
    if(garniture.length !== 0 && fromage.length !== 0 && sauce !== 0 && base.length !== 0 && size.length !== 0){
        let garniture_tab = [];
        let fromage_tab = [];
        let sauce_tab = [];
        let baseBis = base.val();
        let sizeBis = size.val();
        switch (sizeBis){
            case 'L':
                prix_composable += 3;
                break;
            case 'XL':
                prix_composable += 5;
                break;
            default:
                break;
        }
        for(let i = 0;i < garniture.length;i++){
            garniture_tab[i] = garniture[i].name;
            if(i >= 3){
                prix_composable += parseFloat(garniture[i].value);
            }
        }
        for(let i = 0;i < fromage.length;i++){
            fromage_tab[i] = fromage[i].name;
            if(i >= 1){
                prix_composable += parseFloat(fromage[i].value);
            }
        }
        for(let i = 0;i < sauce.length;i++){
            sauce_tab[i] = sauce[i].name;
            if(i >= 1){
                prix_composable += parseFloat(sauce[i].value);
            }
        }
        let pizza = {
            garniture: garniture_tab,
            fromage: fromage_tab,
            sauce: sauce_tab,
            base: baseBis,
        }
        panier[panier.length] = {
            type : 'pizza',
            name : 'Perso',
            size : sizeBis,
            price: prix_composable,
            composition : pizza
        };
        emptyAll()
        return prix_composable;
    }
    emptyAll()
    return 0;
}

function validate_menu(panier,span_price,textTailleP,textNbEntree,textTailleBoisson,checkbox_class,i){
    let btn = $("#valideM"+i);
    let price = parseFloat(span_price);
    let taillePizza = textTailleP.substring(6,textTailleP.length);
    let nbEntree = parseInt(textNbEntree.substring(9,textNbEntree.length));
    let TailleBoisson = textTailleBoisson.substring(10,textTailleBoisson.length);
    let pizzas = $(".menu-pizzas:checked");
    let entrees = $(checkbox_class+":checked");
    let boissons = $(".menu-boissons:checked");
    if(pizzas.length !== 0 && entrees.length && boissons.length !== 0){
        let entreesTab = [];
        for(let i = 0; i < entrees.length;i++){
            entreesTab[i] = entrees[i].name;
        }
        let composition = {
            entrees: entreesTab,
            pizza: pizzas[0].id,
            boisson: boissons[0].id,
        }
        console.log(composition)
        panier[panier.length] = {
            type: 'menu',
            name: btn.attr('name'),
            price: price,
            composition:composition
        };
        emptyAll();
        return price;
    }
    emptyAll();
    return 0;

}

function emptyAll(){
    $("input").prop("checked",false);
}

function checkbox_limit(checkbox_class,limit){
    $(checkbox_class).on('change', function (){
        if ($(checkbox_class+':checked').length > limit) {
            $(this).prop('checked', false);
        }
    });
}

function update_price(checkbox_class,span_class,limit){
    $('.'+checkbox_class).on('change', function (){
        let tmp = $('.'+checkbox_class+':checked');
        if (tmp.length === limit) {
            for(let i = 0;i < $('.'+checkbox_class).length;i++){
                $('#'+span_class+i).text($('#'+checkbox_class+i).val());
            }
        }else if(tmp.length> limit){
            console.log("sup")
        }else{
            $('.'+span_class).text(0);
        }
    });
}

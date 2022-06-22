import { homePageClient,changeForm,homePageDeliveryMan } from "./src/Containers/homePage.js";

$(document).ready(function(){

    let rc = $('#root-client');//indefini si #root-client n'existe pas
    if(rc.attr('id') !== undefined ){
        rc.html(homePageClient());
        changeForm();
    }else{
        $('#root-livreur').html(homePageDeliveryMan());
        $('form').attr('action','/livraison');
        $('.cf').hide();
    }
})

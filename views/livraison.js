
$(document).ready(function(){

    $("#DELIVER").click(function () {
          $.get("/delivered", function (data){})
        location.reload(true);
    });
});
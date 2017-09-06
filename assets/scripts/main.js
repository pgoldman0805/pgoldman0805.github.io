/*global alert, document, $ */

(function () {
    "use strict";
    $(document).ready(function () {

        $(".nav a").on("click", function () {
            $(".nav").find(".active").removeClass("active");
            $(this).parent().addClass("active");
        });
    });
}());
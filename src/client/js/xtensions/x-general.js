
(function (XGeneral, $, undefined) {
    "use strict";

    XGeneral.path = "";
    XGeneral.serverpath = window.location.origin;
    XGeneral.url = "";



    XGeneral.toastrInfo = function (data) {
        toastr.options = $.extend({}, {
            closeButton: true,
            debug: false,
            positionClass: data.positionClass || "toast-top-full-width",
            showDuration: data.showDuration || 300,
            hideDuration: data.hideDuration || 1000,
            timeOut: data.timeOut || 5000,
            extendedTimeOut: data.extendedTimeOut || 1000,
            showEasing: data.showEasing || "swing",
            hideEasing: data.hideEasing || "linear",
            showMethod: data.showMethod || "fadeIn",
            hideMethod: data.hideMethod || "fadeOut"
        }, data.options || {});
        toastr.info(data.text || "Informaci�n");
    };

    XGeneral.toastrSuccess = function (data) {
        toastr.options = $.extend({}, {
            closeButton: true,
            debug: false,
            positionClass: data.positionClass || "toast-top-full-width",
            showDuration: data.showDuration || 300,
            hideDuration: data.hideDuration || 1000,
            timeOut: data.timeOut || 5000,
            extendedTimeOut: data.extendedTimeOut || 1000,
            showEasing: data.showEasing || "swing",
            hideEasing: data.hideEasing || "linear",
            showMethod: data.showMethod || "fadeIn",
            hideMethod: data.hideMethod || "fadeOut"
        }, data.options || {});
        toastr.success(data.text || "Solicitud procesada con exito");
    };

    XGeneral.toastrWarning = function (data) {
        toastr.options = $.extend({}, {
            closeButton: true,
            debug: false,
            positionClass: data.positionClass || "toast-top-full-width",
            showDuration: data.showDuration || 300,
            hideDuration: data.hideDuration || 1000,
            timeOut: data.timeOut || 5000,
            extendedTimeOut: data.extendedTimeOut || 1000,
            showEasing: data.showEasing || "swing",
            hideEasing: data.hideEasing || "linear",
            showMethod: data.showMethod || "fadeIn",
            hideMethod: data.hideMethod || "fadeOut"
        }, data.options || {});
        toastr.warning(data.text || "Advertencia");
    };

    XGeneral.toastrError = function (data) {
        toastr.options = $.extend({}, {
            closeButton: true,
            debug: false,
            positionClass: data.positionClass || "toast-top-full-width",
            showDuration: data.showDuration || 300,
            hideDuration: data.hideDuration || 1000,
            timeOut: data.timeOut || 5000,
            extendedTimeOut: data.extendedTimeOut || 1000,
            showEasing: data.showEasing || "swing",
            hideEasing: data.hideEasing || "linear",
            showMethod: data.showMethod || "fadeIn",
            hideMethod: data.hideMethod || "fadeOut"
        }, data.options || {});
        toastr.error(data.text || "Ooppss! Ha ocurrido un error!");
    };


}(window.BLExt = window.BLExt || {}, jQuery));






jQuery.fn.validateLetters = function () {
    $(this).keypress(function (key) {
        if ((key.charCode < 97 || key.charCode > 122) //letras mayusculas
            && (key.charCode < 65 || key.charCode > 90) //letras minusculas
            && (key.charCode != 45) //retroceso
            && (key.charCode != 241) //ñ
             && (key.charCode != 209) //Ñ
             && (key.charCode != 32) //espacio
             && (key.charCode != 225) //á
             && (key.charCode != 233) //é
             && (key.charCode != 237) //í
             && (key.charCode != 243) //ó
             && (key.charCode != 250) //ú
             && (key.charCode != 193) //Á
             && (key.charCode != 201) //É
             && (key.charCode != 205) //Í
             && (key.charCode != 211) //Ó
             && (key.charCode != 218) //Ú
             && (key.charCode != 0) //Borrar firefox

            )
            return false;
    });
};




jQuery.fn.validateNumbers = function () {
    $(this).keydown(function (event) {
        // Permite: backspace, delete, tab, escape, and enter
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
            // Permitir: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Permitir: home, end, left, right
                (event.keyCode >= 35 && event.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        else {
            // Ensure that it is a number and stop the keypress

            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
    $(this).blur(function () {
        if (/\D/g.test(this.value)) {
            // Filter non-digits from input value.
            var con = this.value.indexOf(",");
            if (con == -1) {
                /*  this.value = this.value.replace(',', '');
                  this.value = this.value.replace(/\D/g, '');*/

            } else {

                if (this.value === '') {
                    //this.value = '';
                    this.value = '';
                }
            }
        } else {
            var co = this.value.indexOf(",");
            if (co == -1) {
                //$(this).parseNumber({ format: "#,###", locale: "us" });
                //$(this).formatNumber({ format: "#,###", locale: "us" });
                if (this.value == '') {
                    //this.value = '';
                    this.value = '';
                }
            }
        }
    });


};
BLExt.Init = function (culture) {
        $(document).ready(function () {
         alert('gfgfg');
            // Set culture
            var thisCulture = culture || "es-CO";
            kendo.culture(thisCulture);

                $('.onlyletter').validateLetters();
                $('.onlynumber').validateNumbers();


            $('[data-x="x-selectpicker2"]').bSelectPicker2();

                $('.validateBirthDay').datepicker({
                        maxDate: '-18Y',
                        dateFormat: 'dd/mm/yy',
                        changeMonth: true,
                        changeYear: true,
                        showMonthAfterYear: true,
                        yearRange: "-100:+0"
                });

                $('.validateMaxToday').datepicker({
                        maxDate: '-1D',
                        dateFormat: 'dd/mm/yy',
                        changeMonth: true,
                        changeYear: true,
                        showMonthAfterYear: true,
                        yearRange: "-100:+0",
                });

        


        });


    };
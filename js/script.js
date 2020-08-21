let catalog = document.getElementById('catalog');
let header = document.getElementById('header__color');
let input = document.getElementById('input__color');

function hoverCatalog() {
    catalog.style.display = 'block';
    header.style.backgroundColor = '#02bd00';
    input.style.backgroundColor = '#cccccc'
}
function outCatalog() {
    catalog.style.display = 'none';
    header.style.backgroundColor = '#02ec00';
    input.style.backgroundColor = '#fff'
}

// jQuery 
// Изменение количества товаров


$(function(){

// 1 счетчик

    var value1 = 1;
    $("#field1_minus").click(function(){
        if(value1 < 1) {
            value1 = 0
        } 
        else {
            value1--;
            $('#field1').text(value1)
        }
    });
    $("#field1_plus").click(function(){
        value1++;
        $('#field1').text(value1)
    });

// 2 счетчик

var value2 = 1;
    $("#field2_minus").click(function(){
        if(value2 < 1) {
            value2 = 0
        } 
        else {
            value2--;
            $('#field2').text(value2)
        }
    });
    $("#field2_plus").click(function(){
        value2++;
        $('#field2').text(value2)
    });


// 3 счетчик

var value3 = 1;
    $("#field3_minus").click(function(){
        if(value3 < 1) {
            value3 = 0
        } 
        else {
            value3--;
            $('#field3').text(value3)
        }
    });
    $("#field3_plus").click(function(){
        value3++;
        $('#field3').text(value3)
    });


// 4 счетчик

var value4 = 1;
    $("#field4_minus").click(function(){
        if(value4 < 1) {
            value4 = 0
        } 
        else {
            value4--;
            $('#field4').text(value4)
        }
    });
    $("#field4_plus").click(function(){
        value4++;
        $('#field4').text(value4)
    });


// 5 счетчик

var value5 = 1;
    $("#field5_minus").click(function(){
        if(value5 < 1) {
            value5 = 0
        } 
        else {
            value5--;
            $('#field5').text(value5)
        }
    });
    $("#field5_plus").click(function(){
        value5++;
        $('#field5').text(value5)
    });


// 6 счетчик

var value6 = 1;
    $("#field6_minus").click(function(){
        if(value6 < 1) {
            value6 = 0
        } 
        else {
            value6--;
            $('#field6').text(value6)
        }
    });
    $("#field6_plus").click(function(){
        value6++;
        $('#field6').text(value6)
    });


    

});



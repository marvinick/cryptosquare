

var cryptosquare = function(input) {
    return input.toLowerCase().replace(/ /g,'').replace(/[^\w\s]|_/g, "");;
};

var length = function(cryptosquare) {
    return cryptosquare.length;
}

// var factorial = function(x) {
//     if (x === 0) {
//         return 1;
//     } else {
//         return x * factorial (x - 1);
//     }
// };
//
// $(document).ready(function() {
//     $("form#factorial").submit(function(event) {
//         var x = parseInt($("input#x").val());
//         var result = factorial(x);
//
//         $(".factorial").text(result);
//         $(".x").text(x);
//
//         $("#result").show();
//         event.preventDefault();
//     })
// })

var order = [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
var counter = 0;

$(".button-77").on("click", function() {
    if (counter < 11) {
        ($(`#flamer${order[counter]}`).css("visibility", "visible"));

        counter++;
    }
})

$("#check").on("click", function () {
    if (document.getElementById("pass").value == "ظافاظا") {
        $(".main-content__wrapper")
            .removeClass()
            .addClass("main-content__wrapper");
        $(".sorting-hat,.avatar__mouth").removeClass("animate");

        var houses = ["ravenclaw"];
        var item = houses[Math.floor(Math.random() * houses.length)];

        setTimeout(function () {
            $(".sorting-hat").addClass("animate");
            $(".sorting-hat__answer").text(item + "!");
        }, 1000);
        setTimeout(function () {
            $(".avatar__mouth").addClass("animate");
        }, 1500);
        setTimeout(function () {
            $(".main-content__wrapper").addClass(item);
        }, 4000);
    } else {
        $(".main-content__wrapper")
            .removeClass()
            .addClass("main-content__wrapper");
        $(".sorting-hat,.avatar__mouth").removeClass("animate");

        setTimeout(function () {
            $(".sorting-hat").addClass("animate");
            $(".sorting-hat__answer").text("Muggle !");
        }, 1000);
    }
});
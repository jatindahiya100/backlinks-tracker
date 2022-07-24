var CountBacklinks = document.getElementById("CountBacklinks");
CountBacklinks.addEventListener("click", function () {
    $('div.stats-items').hide();
    var domain = document.getElementById("domain").value;
    if (domain.length > 0) {
        $('.loader').show();

        $('#CountBacklinks').removeClass('error').addClass('success');
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://backlink.p.rapidapi.com/getbacklinks/v1/?domain=" + domain + "&offset=0&filter_isdofollow=false",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "backlink.p.rapidapi.com",
                "x-rapidapi-key": "24b9a83f3emshe295006e3281d08p170a72jsnfe6416720eca"
            }
        };

        $.ajax(settings).done(function (response) {
            $('.loader').hide();
            $('#total-backlinks').text(response['stats']['custom']['qty'].toLocaleString());
            $('#dofollow').text(response['stats']['custom']['dofollow'].toLocaleString());
            $('#nofollow').text(response['stats']['custom']['nofollow'].toLocaleString());
            $('#domain-qty').text(response['stats']['custom']['domains_qty'].toLocaleString());
            $('#host-qty').text(response['stats']['custom']['hosts_qty'].toLocaleString());
            $('#pages-qty').text(response['stats']['custom']['pages_qty'].toLocaleString());



            $('div.stats-items').each(function (i) {
                $(this).delay(500 * i).fadeIn(1850);
            });
            $('html, body').animate({
                scrollTop: $("#statistics").offset().top
            }, 2000);
        });
    } else {
        $('#CountBacklinks').removeClass('success').addClass('error');
    }
})
$('#how_it_works').on("click", function () {
    $('html, body').animate({
        scrollTop: $(".How_it_Works_Section").offset().top
    }, 1000);
});

$('#navlink2').on("click", function () {
    $('html, body').animate({
        scrollTop: $(".Built_with").offset().top
    }, 1000);
});

$('#knowMore').on("click", function () {
    $('html, body').animate({
        scrollTop: $(".Built_with").offset().top
    }, 1000);
});
$('#useTool').on("click", function () {
    $('html, body').animate({
        scrollTop: $(".main").offset().top
    }, 1000);
});
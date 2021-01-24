$('tr[data-href]').on("click", function() {
    window.open($(this).data('href'), "_blank");
});

function projectLink(input) {
    if (input == 'irish-poker') {
        window.open('https://samandtyler.party/pages/irish-poker.html', '_blank');
    }
}
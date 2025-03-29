

document.addEventListener("DOMContentLoaded", function () {
    const infoBoxes = document.querySelectorAll('[data-info]');
    infoBoxes.forEach(function (infoBox) {
        const id = infoBox.getAttribute('id');
        if (id !== "D.C.") {
            const abbreviation = '<div>Abbreviation: ' + id + '</div>';
            const currentInfo = infoBox.getAttribute('data-info');
            infoBox.setAttribute('data-info', abbreviation + currentInfo);
        }
    });
});

document.addEventListener('keydown', function (event) {
    const forbiddenKeys = ['+', '-'];
    const isCmdKey = event.metaKey || event.ctrlKey;

    if (isCmdKey && (forbiddenKeys.includes(event.key) || event.code === 'Equal' || event.code === 'Minus')) {
        event.preventDefault();
    }
});


$(document).ready(function () {
    const infoBox = $('#info-box'); // Store the selector in a variable

    $("path, circle").hover(function () {
        const id = $(this).attr('id');
        if (id !== "NonContiguous") {
            infoBox.css('display', 'block');
            infoBox.html($(this).data('info'));
        }
    }).mouseleave(function () {
        infoBox.css('display', 'none');
    });

    $(document).mousemove(function (e) {
        infoBox.css('top', e.pageY - infoBox.height() - 30);
        infoBox.css('left', e.pageX - (infoBox.width()) / 2);
    }).mouseover();
});

const isIE = !!window["MSStream"]; // Checks if browser is Internet Explorer
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !isIE; // Checks if device is iOS and not Internet Explorer

if (isIOS) {
    $('a').on('click touchend', function (event) {
        const link = $(this).attr('href');
        window.open(link, '_blank');
        event.preventDefault(); // Prevent the default behavior of the link
    });
}




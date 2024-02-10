// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
    const toggles = document.querySelectorAll('.faq-toggle');

            toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.parentNode.classList.toggle('active');
        });
            });

    // SOCIAL PANEL JS
    const floating_btn = document.querySelector('.floating-btn');
    const close_btn = document.querySelector('.close-btn');
    const social_panel_container = document.querySelector('.social-panel-container');

            floating_btn.addEventListener('click', () => {
        social_panel_container.classList.toggle('visible')
    });

            close_btn.addEventListener('click', () => {
        social_panel_container.classList.remove('visible')
    });


//Busy_Indication
function DisplayBusyIndication() {
    $('.loading').show();
}

function HideBusyIndication() {
    $('.loading').hide();
}

$(window).on('beforeunload', function () {
    DisplayBusyIndication();
});

$(document).on('submit', 'form', function () {
    DisplayBusyIndication();
});
window.setTimeout(function () {
    HideBusyIndication();
}, 5000);
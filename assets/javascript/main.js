$(document).ready(() => {
    $('.work').on('mouseenter', event => {
        $(event.currentTarget).addClass('photo-active')
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('photo-active')
    })
});
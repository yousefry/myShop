$(document).ready(function () {
    $('.gallery_column').on('click', function () {
        $(this).addClass('is-active');
        $(this).siblings('div').removeClass('is-active')
        var _index = $(this).index();
        var itemGallery = $('.itemGallery');
        jQuery(itemGallery[_index]).siblings('div').removeClass('show')
        jQuery(itemGallery[_index]).addClass('show')
    });
    var modal = $('#myModal');
    var modalImg = $('#img01');
    $('.itemGallery').on('click', function () {
        var _this = $(this);
        modalImg.attr('src');
        console.log(_this.find('img').attr('src'), modalImg.attr("src", _this.find('img').attr('src')))
        $('#myModal').css('display', 'block');
    });
    $('.closeModalGallery').on('click', function () {
        modal.css('display', 'none');
    });

    $('.sheetTab').on('click', function () {
        var _this = $(this);
        let elmTabCLick = _this.attr('id');
        let elm = $('.' + elmTabCLick + '')
        elm.addClass('is-active');
        elm.siblings('div').removeClass('is-active');
        _this.addClass('is-active');
        _this.siblings('li').removeClass('is-active');
    });
    $('.add-answer-btn').on('click',function () {
        var commentsList = $('.comments-list');
        var answerForm = commentsList.find('.answer-form');
        $(this).parents('.is-comment').after(answerForm);
        $(answerForm).addClass('is-active');
    });
    $('.cancel').on('click', function () {
        $('.answer-form').removeClass('is-active');
    })
});




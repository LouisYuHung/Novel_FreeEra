let current_location = 0;
let paragraphs = {};
let paragraph = [];
let paragraphs_1 = [];
let paragraphs_2 = [];

$(function () {
    Object.keys(CHAPTERS).forEach(function (chapter_num) {
        let insert = `<div id="chapter_${chapter_num}" class="chapter"><h2 id="main_content_${chapter_num}" class="mb-4">${CHAPTERS[chapter_num]}</h2>`;
        
        let display_p = [];
        paragraphs[chapter_num].forEach(function (paragraph) {
            display_p.push(paragraph.join(''));
        });
        insert += '<p>' + display_p.join('<br><br>') + '</p>';
        insert += '</div>';

        $('#block').append(insert);
    });

    show_chapter(0);
});

function show_chapter(chapter_num) {
    current_location = chapter_num;

    if (current_location == 0 && chapter_num == 0) {
        $('.ch-show').addClass('d-none');
        $('.ch-hidden').removeClass('d-none');
    } else {
        $('.ch-hidden').addClass('d-none');
        $('.ch-show').removeClass('d-none');

        $('.chapter').addClass('d-none');
        $(`#chapter_${chapter_num}`).removeClass('d-none');
    }
}

function show_name(name) {
    return `<u>${name}</u>`;
}
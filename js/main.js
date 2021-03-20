// home terminal
const hour = new Date().getHours();
var dayStatus = 'day'
if (hour >= 20)
    dayStatus = 'night'

const typed = new Typed('.terminal-text', {
    strings: [
        '$',
        '$ Hello There!',
        "$ I'm Soroush Mehraban, a junior developer.",
        '$ Here you can see my resume.',
        `$ Have a great ${dayStatus}!`
    ],
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,

    contentType: 'html',
    typeSpeed: 100,
    startDelay: 1000,
    backDelay: 2000,
    backSpeed: 20,
});



$(document).ready(function() {
    AOS.init();
    $('#skills').waypoint({
        onEnter: function() {
            // progress bars
            $('#progress-html').LineProgressbar({
                percentage: 90,
                fillBackgroundColor: '#ea0000',
                width: '100%',
                height: '3px'
            });
            $('#progress-css').LineProgressbar({
                percentage: 70,
                fillBackgroundColor: '#ea0000',
                width: '100%',
                height: '3px'
            });
            $('#progress-javascript').LineProgressbar({
                percentage: 75,
                fillBackgroundColor: '#ea0000',
                width: '100%',
                height: '3px'
            });
            $('#progress-photoshop').LineProgressbar({
                percentage: 35,
                fillBackgroundColor: '#ea0000',
                width: '100%',
                height: '3px'
            });
            $('#progress-python').LineProgressbar({
                percentage: 80,
                fillBackgroundColor: '#ea0000',
                width: '100%',
                height: '3px'
            });
            $('#progress-java').LineProgressbar({
                percentage: 80,
                fillBackgroundColor: '#ea0000',
                width: '100%',
                height: '3px'
            });
            $('#progress-c').LineProgressbar({
                percentage: 90,
                fillBackgroundColor: '#ea0000',
                width: '100%',
                height: '3px'
            });
            $('#progress-nodejs').LineProgressbar({
                percentage: 30,
                fillBackgroundColor: '#ea0000',
                width: '100%',
                height: '3px'
            });
            $('#progress-bootstrap').LineProgressbar({
                percentage: 95,
                fillBackgroundColor: '#ea0000',
                width: '100%',
                height: '3px'
            });
            $('#progress-wordpress').LineProgressbar({
                percentage: 60,
                fillBackgroundColor: '#ea0000',
                width: '100%',
                height: '3px'
            });
        }
    });
});


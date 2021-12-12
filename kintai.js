$(function () {
    $('.slack-submit').on('click', function () {
    var url = 'https://slack.com/api/chat.postMessage';
        var data = {
            token: '',
            channel: '#general',
            username: 'oreno-bot',
            text: 'Hello Slack!'
        };

        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            success: function (data) {
                console.log(data);
                alert( 'Can I post to Slack? :' + data.ok );
            }
        });
    });
});
// 初期のお名前はここを変更してください
var name = "お名前";

$(function () {
	// 初期表示時間を開いた時間に変更
    var now = new Date();
    $('#hour').val(now.getHours());
    $('#minutes').val(now.getMinutes());
    $('#name').val(name);

	// ボタン入力イベント
    $('#workStart').on('click', function () {
       const place = $('input:radio[name="place"]:checked').val();
	   postSlack(place + "業務を開始します。")
    });
    $('#workEnd').on('click', function () {
       const place = $('input:radio[name="place"]:checked').val();
       postSlack(place + "業務を終了します。")
    });
    $('#restStart').on('click', function () {
       postSlack("お昼休憩をいただきます。")
    });
    $('#restEnd').on('click', function () {
       postSlack("業務を再開します。")
    });
    $('#restOther').on('click', function () {
       postSlack("離席します。")
    });
    $('#custom').on('click', function () {
       postSlack($('#customMessage').val())
    });
});

// slackメッセージ送信本体
function postSlack(text){

	var postText = $('#hour').val() + "時" + $('#minutes').val() + "分" + $('#name').val() + "は\n" + text;

	alert(postText);

	var url = 'https://slack.com/api/chat.postMessage';
    var data = {
        token: '',
        channel: '#general',
        username: '出退勤報告',
        text: postText
    };

    //$.ajax({
    //    type: 'POST',
    //    url: url,
    //    data: data,
    //    success: function (data) {
    //        console.log(data);
    //        alert( 'Can I post to Slack? :' + data.ok );
    //    }
    //});    
}   
$from = $_GET['from'];
$to = $_GET['to'];
$postDataFromStringee = file_get_contents('php://input');

if(!$postDataFromStringee){
	$eventUrl = "https://v1.stringee.com/demo/landingpage_demo/stringee_demo.php?from=$from&to=$to";
	$sccos = '[{
	        "action": "talk",
	        "text": "Cảm ơn bạn đã dùng thử dịch vụ của Stringee, vui lòng nhập 4 chữ số máy lẻ và nhấn phím thăng!",
	        "voice": "hn_female_thutrang_phrase_48k-hsmm",
	        "silenceTime": 2000
	    },
	    {
	        "action": "input",
	        "eventUrl": "' . $eventUrl . '",
	        "submitOnHash": true,
	        "timeout": "15"
	    }
	]';
} else {
	$postDataFromStringee = json_decode($postDataFromStringee, true);
	$dtmf = $postDataFromStringee['dtmf'];

	$userId = 'demo_' . $dtmf;

	$sccos = '[{
	        "action": "connect",
	        "from": {
				"type": "external",
				"number": "' . $from . '",
				"alias": "' . $from. '"
			},
			"to": {
				"type": "internal",
				"number": "' . $userId . '",
				"alias": "' . $to . '",
			},
	    }
	]';
}

echo $sccos;  
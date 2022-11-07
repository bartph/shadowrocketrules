// ^https?:\/\/cat-match.[a-z0-9]+?.com\/sheep\/v1\/game\/.+
// var SkinUrl,TopUrl,DailyUrl;
// SkinUrl = 'https://cat-match.easygame2021.com/sheep/v1/game/skin/info?';
// TopUrl = 'https://cat-match.easygame2021.com/sheep/v1/game/topic/game_start?req_id=1';
// DailyUrl = 'https://cat-match.easygame2021.com/sheep/v1/game/map_info_ex?matchType=3&req_id=1';
// $notification.post('撸羊开始执行', '', '分析游戏数据…');
// switch (url)
// {
//     case SkinUrl: skinAction(body);
//     break;
//     case TopUrl: gameAction(body);
//     break;
//     case DailyUrl: gameAction(body);
//     break;
//     default: $done({});
// }
var url = $request.url;
var body = $response.body;
var obj = JSON.parse(body);
var regSkin = /skin\/info/i;
var regTop= /topic\/game_start/i;
var regDaily = /map_info_ex\?matchType=3/i;
if(regSkin.test(url)){
	skinAction(body);
} else if(regTop.test(url) || regDaily.test(url)){
	gameAction(body);
} else {
	$done({});
}
function gameAction(body) {
	obj['data']['map_seed'] = [0,0,0,0];
	$notification.post('截获羊游戏关卡', '', '大幅降低第二幅图难度');
	$done({body: JSON.stringify(obj)});
}
function skinAction(body) {
	obj['data']['skin_list'] = [];
	for (var i = 0; i < 300; i++)
{ 
	obj['data']['skin_list'].push({"id":i,"created_at":0,"reason":""});
}
        $notification.post('获取所有皮肤', i, '所有皮肤获取完成');
	$done({body: JSON.stringify(obj)});
}

var SkinUrl = "https://cat-match.easygame2021.com/sheep/v1/game/skin/info?";
var TopUrl = "https://cat-match.jianyou2021.com/sheep/v1/game/topic/game_start?";
var DailyUrl = "https://cat-match.jianyou2021.com/sheep/v1/game/map_info_ex?matchType=3";
var url = $request.url;
var body = $response.body;
var obj = JSON.parse(body);
//$notification.post('撸羊开始执行', '', '分析游戏数据…');
switch (url)
{
    case SkinUrl: skinAction(body);
    break;
    case TopUrl: gameAction(body);
    break;
    case DailyUrl: gameAction(body);
    break;
    default: $done({});
}
function gameAction(body) {
    $notification.post('截获羊游戏关卡', '', '大幅降低第二幅图难度');
	obj.data.map_seed = [0,0,0,0];
	$done({body: JSON.stringify(obj)});
}
function skinAction(body) {
    $notification.post('获取所有皮肤', '', '所有皮肤获取完成');
	obj.data.skin_list = [];
	for (var i=0;i<61;i++)
{ 
	obj.data.skin_list.push({"id":i});
}
	$done({body: JSON.stringify(obj)});
}

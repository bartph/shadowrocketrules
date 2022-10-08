// ^https?:\/\/cat-match.easygame2021.com/sheep\/v1\/game\/.*(matchType=3|game_start\?|skin\/info\?)
// 自动获取所有皮肤,调低第二关难度
let SkinUrl = "https://cat-match.easygame2021.com/sheep/v1/game/skin/info?";
let TopUrl = "https://cat-match.easygame2021.com/sheep/v1/game/topic/game_start?";
let DailyUrl = "https://cat-match.easygame2021.com/sheep/v1/game/map_info_ex?matchType=3";
let url = $request.url;
let status = $response.status;
let body = $response.body;
$notification.post('撸羊开始执行', '', '分析游戏数据…');
if (url == SkinUrl)
switch (url)
{
    case SkinUrl: skinAction(body);
    break;
    case TopUrl: gameAction(body);
    break;
    case DailyUrl: gameAction(body);
    break;
    default: $notification.post('撸羊失败', '', '游戏数据匹配失败…');
    //default: $done({});
}
function gameAction(body) {
$notification.post('进来撸', '', status);
	if(status == 200){
 	let obj = JSON.parse(body);
	obj.data.map_seed = [0,0,0,0];
	$notification.post('截获羊游戏关卡', '', '修改第二关难度');
	$done({body: JSON.stringify(obj)});
}  else $done({});
}
function skinAction(body) {
	if(status == 200){
 	let obj = JSON.parse(body);
	obj.data.skin_list = [];
	for (var i=0;i<61;i++)
{ 
	obj.data.skin_list.push({"id":i});
}
	$notification.post('获取所有皮肤', '', '所有皮肤获取完成');
	$done({body: JSON.stringify(obj)});
}  else $done({});
}

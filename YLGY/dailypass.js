// ^https?:\/\/cat-match.easygame2021.com/sheep\/v1\/game\/.*(matchType=3|game_start\?|skin\/info\?)
// 自动获取所有皮肤,调低第二关难度
let SkinUrl = "https://cat-match.easygame2021.com/sheep/v1/game/skin/info?";
let TopUrl = "https://cat-match.easygame2021.com/sheep/v1/game/topic/game_start?";
let DailyUrl = "https://cat-match.easygame2021.com/sheep/v1/game/map_info_ex?matchType=3";
let url = $request.url;
let status = $response.status;
let body = $response.body;
if (url == SkinUrl)
{
	$notification.post("脚本进入if语句", "皮肤脚本启动", "皮肤脚本启动");
	skinAction(body);
}
else
{
	$notification.post("脚本进入if语句", "游戏脚本启动", "游戏脚本启动");
	gameAction(body);
}
function gameAction(body) {
	if(status == 200){
 	let obj = JSON.parse(body);
	obj.data.map_seed = [0,0,0,0];
	$notification.post("游戏难度调整完", "游戏难度调整完", "游戏难度调整完");
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
	$notification.post("皮肤脚本执行完", "皮肤修改完成", "皮肤修改完成");
	$done({body: JSON.stringify(obj)});
}  else $done({});
}

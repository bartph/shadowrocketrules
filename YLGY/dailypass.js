// ^https?:\/\/cat-match.easygame2021.com/sheep/v1/game/.*(matchType=3|game_start\?|skin\/info\?)
let SkinUrl = "https://cat-match.easygame2021.com/sheep/v1/game/skin/info?";
let TopUrl = "https://cat-match.easygame2021.com/sheep/v1/game/topic/game_start?";
let DailyUrl = "https://cat-match.easygame2021.com/sheep/v1/game/map_info_ex?matchType=3";
let url = "https://cat-match.easygame2021.com/sheep/v1/game/skin/info?";
let body = $response.body;
switch (url)
{
    case SkinUrl:Skinaction(body);
    break;
    case TopUrl:gameAction(body);
    break;
    case DailyUrl:gameAction(body);
    break;
    default:
    $done({});
}
function gameAction(body) {
	let status = $response.status;
	if(status == 200){
 	let obj = JSON.parse(body);
	obj.data.map_seed = [0,0,0,0];
	$done({body: JSON.stringify(obj)});
}  else $done({});
}
function Skinaction(body) {
	let status = $response.status;
	if(status == 200){
 	let obj = JSON.parse(body);
	obj.data.skin_list = [{"id":1},{"id":2},{"id":3},{"id":4},{"id":5}];
	$done({body: JSON.stringify(obj)});
}  else $done({});
}

//let url = $request.url;
$request.url = 'https://github.com/bartph/shadowrocketrules/edit/main/YLGY/dailypass.js';
let status = $response.status;
console.log($request.url);
console.log($request.url.path);
if(status == 200){
  let body = $response.body;
  let obj = JSON.parse(body);
  obj.data.map_seed = [0,0,0,0];
  $done({body: JSON.stringify(obj)});
}  else $done({});

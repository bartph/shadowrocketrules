let status = $response.status;
if(status == 200){
  let body = $response.body;
  let obj = JSON.parse(body);
  obj.data.map_seed = [0,0,0,0];
  obj.data.map_seed_2 = "0000000000";
  $done({body: JSON.stringify(obj)});
}  else $done({});

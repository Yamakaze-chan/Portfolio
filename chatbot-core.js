
function get_bot_answer(user_str, data)
{
    var tag = "";
    var max_simi_point = 0;
    var list_answer = [];
    for(var i = 0; i< data.length; i++){
        for(var j = 0; j < data[i].patterns.length; j++)
        {
            //console.log(data[i].patterns[j]);
            var simi_point = similarity(user_str, data[i].patterns[j]);
            if(max_simi_point < simi_point)
            {
                max_simi_point = simi_point;
                tag = data[i].tag;
                list_answer = data[i].responses;
            }
        }
    }
    return [tag, list_answer[Math.floor(Math.random()*list_answer.length)]]
}

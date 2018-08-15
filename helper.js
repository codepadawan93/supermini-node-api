let helper = {};

helper.json = function(responseObj, rawJson)
{
    let code = 200;
    if(rawJson instanceof Array && rawJson.length === 0)
    {
        code = 404;
    }
    responseObj.writeHead(code, {'Content-Type' : 'application/json'});
    responseObj.end(JSON.stringify(rawJson));
}

module.exports = helper;
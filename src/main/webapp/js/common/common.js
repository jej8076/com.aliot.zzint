function move(url){
    location.href=url;
}

function isEmpty(str){
    return (typeof str == "undefined" || str == null || str === '');
}

function DataMapStringToJsonArray(org){
    if(!(org.startsWith('[{') || org.startsWith('{'))){
        console.log('must start with "[{" or "{"');
        return null;
    }
    let results = org.match(/\{(.*?)\}/gi);
    if(results.length <= 0){
        console.log('not matched json');
        return null;
    }
    let settingsList = [];
    for(let result of results){
        let unitJsonStr = '';
        if(result.indexOf('=') > -1){
            result = result.replace(/\{/gi, '').replace(/\}/gi, '');
            result = result.replace(/=/gi, '":"');
            for(let unit of result.split(',')){
                unit = '"' + unit + '",';
                unit = unit.replace('" ','"')
                unitJsonStr += unit;
            }
            unitJsonStr = unitJsonStr.slice(0, -1);
            if(unitJsonStr.indexOf('""') > -1){
                unitJsonStr = unitJsonStr.replace(/""/gi, '"');
            }
            unitJsonStr = '{' + unitJsonStr + '}';
        }else{
            unitJsonStr = result;
        }
        let unitJson = JSON.parse(unitJsonStr);
        settingsList.push(unitJson);
    }
    return settingsList;
}

function DataMapStringToJson(org){
    if(!(org.startsWith('[{') || org.startsWith('{'))){
        console.log('must start with "[{" or "{"');
        return null;
    }
    let results = org.match(/\{(.*?)\}/gi);
    if(results.length <= 0){
        console.log('not matched json');
        return null;
    }
    let settingsList = [];
    for(let result of results){
        let unitJsonStr = '';
        if(result.indexOf('=') > -1){
            result = result.replace(/\{/gi, '').replace(/\}/gi, '');
            result = result.replace(/=/gi, '":"');
            for(let unit of result.split(',')){
                unit = '"' + unit + '",';
                unit = unit.replace('" ','"')
                unitJsonStr += unit;
            }
            unitJsonStr = unitJsonStr.slice(0, -1);
            if(unitJsonStr.indexOf('""') > -1){
                unitJsonStr = unitJsonStr.replace(/""/gi, '"');
            }
            unitJsonStr = '{' + unitJsonStr + '}';
        }else{
            unitJsonStr = result;
        }
        let unitJson = JSON.parse(unitJsonStr);
        settingsList.push(unitJson);
    }
    return settingsList[0];
}

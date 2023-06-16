const MCD = require("minecraft-data")("1.19.2");


function is_valid_str(string_like){
    return string_like && string_like.length != 0;
}

function is_valid_array(array_like){
    return array_like && array_like.length != 0;
}

function itemsByName(name){
    try{
        return MCD.itemsByName[name.toLowerCase()];
    }
    catch{
        return null;
    }
}

function blocksByName(name){
    try{
        return MCD.blocksByName[name.toLowerCase()];
    }
    catch{
        return null;
    }
}

/** 
*  @function Whether a utf8 string contains Chinese character
*/
function is_Chinese(string_like){
    for (let i = 0; i < string_like.length; i++) {
        if (string_like.charCodeAt(i) > 255) return true;
    }
    return false;
}

/** 
*  @function try to parse a string to Boolean
*  @returns {Boolean} true when string_like can be recognized as "True", otherwise false
*/
function parseBool(string_like){
    new Array().at()
    return (string_like?.toLowerCase() == "true") || (["真", "是", "好", "确认", "正确"].includes(string_like))
}

module.exports = {is_valid_str, is_valid_array, itemsByName, blocksByName, is_Chinese, parseBool};

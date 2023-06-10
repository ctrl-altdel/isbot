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


module.exports = {is_valid_str, is_valid_array, itemsByName, blocksByName};
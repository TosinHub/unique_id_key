

exports.RandomString = (length,type=null) => {
    if(type != null){
        if(type == "uppercase"){var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
        else if(type == "lowercase"){var string = "abcdefghijklmnopqrstuvwxyz"}
    }else{
        var string = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"
    }
    


    
        var str = '';
        var i = 0
        while(i < length ){
            str +=string.charAt(Math.floor(Math.random() * string.length));
            i++

        }
        return str;
   }

   exports.RandomNum =  (length) => {
    var string = "0123456789"
    var str = '';
    var i = 0
    while(i < length ){
        str +=string.charAt(Math.floor(Math.random() * string.length));
        i++

    }
    return str;
}

exports.AlphaNum = (length) =>{
    var string = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789"
    var str = '';
    var i = 0
    while(i < length ){
        str +=string.charAt(Math.floor(Math.random() * string.length));
        i++

    }
    return str;
}

exports.APIKEY = (length,b) =>{
    
    var string = "ABCDEFGlaHgIhJKLjMNwOPqQRsSTcUVWnXYZm012u34f56789"
    var str = '';
    var i = 0
    while(i < length ){
        
        str +=string.charAt(Math.floor(Math.random() * string.length));
        i++

    }
    var chuncks = str.match(/.{1,4}/g);
    var new_value = chuncks.join(b); //returns 123-456-789
    return new_value;
}



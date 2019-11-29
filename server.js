module.exports = {
    RandomString: function(num){
         var string = "abcdefghijklmopqrstuvwxyz0123456789"
         var str = '';
         var i = 0
         while(i < num ){
             str +=string.charAt(Math.floor(Math.random() * string.length));
             i++
 
         }
         return str;
    }
 } 
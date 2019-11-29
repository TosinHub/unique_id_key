# unique-id-key
A module that returns unique random characters which could be all be numeric or all string or alpha numberic. It can also generate random API keys seperated by any special charater of your choice at every 4th character


## HOW TO INSTALL
# npm install unique-id-key --save

var unique_id = require('unique-id-key')

```javascript

## METHODS 

#RandomString Method
This method takes at least one parameter which is an integer value which specifies the length of the expected returned string and the second option which is to  indicate if the string should be in lowercase or uppercase. This returns only string values

var any_randomString = unique_id.RandomString(10)
console.log(any_random)
//Returns erRogWyRtr

var uppercase_randomString = unique_id.RandomString(8, "uppercase")
console.log(uppercase_randomString)
//Returns MNTVBSQW


var lowercase_randomString = unique_id.RandomString(11, "lowercase")
console.log(lowercase_randomString)
//Returns tqwicductda

#RandomNum Method
This method takes only one parameter which is an integer value which specifies the length of the expected returned numeric random value.

var random_numeric = unique_id.RandomNum(10)
console.log(random_numeric)

//Returns 4836593648

#RandomAlphaNum
This method takes only one parameter which is an integer value which specifies the length of the expected alpha numeric string i.e the returns a random value that contains integers and strings(lowercase and upperercase)

var random_alphanum = unique_id.RandomAlphaNum(10)
console.log(random_alphanum)
#Returns gp2WfI7ihd

#APIKEY
This method takes at least two parameters, an integer value which specifies the length of the expected api key.It takes a second parameter which is the special character you want in the API.This is placed after every 4th character in the API KEY string.

var api_keys= unique_id.APIKEY(16,"-")
console.log(api_keys)
#Returns 5TZS-JLG3-325O-1S5B

var api_keys= unique_id.APIKEY(12,".")
console.log(api_keys)
#Returns 5hQw.tQ1l.yqgH
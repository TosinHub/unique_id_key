# unique- string
A module that returns strings which could be all numeric or all charater or alpha numberic. It can also generate random API keys seperated by "-" at every 4th character
Random Character   ${random.RandomString(10,"lowercase")} <br>
                ${random.RandomNum(6)} <br>
                ${random.AlphaNum(10)} <br>
                ${random.APIKEY(16)}`

## HOW TO INSTALL
# npm install unique-id-key --save

var unique_id = require('unique-id-key')

```javascript
Random Character poeynlyruu
762916
BHBlg2pM7M
5TZS-JLG3-325O-1S5Bb
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
This method takes only one parameter which is an integer value which specifies the length of the expected alpha numeric string i.e the returns a random value that contains integers and string(lowercase and upperercase)

var random_alphanumeric = unique_id.RandomAlphaNum(10)
console.log(random_numeric)

#APIKEY
This method takes at least two parameters, an integer value which specifies the length of the expected api key.It takes a second parameter which is the special character you want in the API.This is placed after every 4th character in the API KEY string.

var random_alphanumeric = unique_id.APIKEY(16,"-")
console.log(random_numeric)

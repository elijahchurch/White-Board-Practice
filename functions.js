
//URL replacer with recursion
function urlReplacer(string) {
    if (string === "") {
        return "";
    }
    else {
        let firstLetter = string[0];
        console.log(firstLetter);
        if(firstLetter === " ") {
            firstLetter = "%20";
        }
        return firstLetter + urlReplacer(string.substring(1));
    }
};

//URL replacer without recursion
function urlReplacer2(string) {
    let newString = "";
    for(let i = 0; i < string.length; i ++) {
        let chara = string[i];
        if (chara === " ") {
            chara = "%20";
        }
        newString += chara;
    }
    return newString
};

//Array Deduping without recursion
function arrayDedupe(array) {
    let resultArray = [];
    array.forEach( (element) => {
       if(!resultArray.includes(element)){
        resultArray.push(element);
       }
    })
    return resultArray;
}
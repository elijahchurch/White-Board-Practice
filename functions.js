
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

//Array deduping with Filter
function arrayDedupe2(array) {
    return array.filter((element, index) => array.indexOf(element) === index);
}


// uniqueChecker 
function uniquechecker(string) {
    if(string.length === 1)
    {
        return true;
    }
    let chara = string[0];
    let checkString = string.substring(1);
    if(checkString.indexOf(chara) !== -1)
        {
            return false;
        }
    return uniquechecker(checkString);
}

//Compress strings with recursion
function stringCompress(string) {
    if(string.length === 1) {
        return string;
    }
    else {
        const chara = string[0];
        if(chara !== string[1]) {
            return chara + stringCompress(string.substring(1))
        } 
        else {
            let count = 1;
            for(let i = 1; i < string.length ; i ++) {
                if(chara === string[i])
                count ++;
                else {
                    return `${count}${chara}` + stringCompress(string.substring(i))
                }
            }
            return `${count}${chara}`;
        }
    }
};
const hasDuplicate = (arr) => {
    const dupeSet = new Set(arr);
    if(dupeSet.size!==arr.length){
        return true;
    }
    else{
        return false;
    }
}


const vowelCount = (str) => {
    const vowelMap = new Map();
    const vowels = 'aeiou';
    const lowerStr = str.toLowerCase();
    for(let letter of lowerStr){
        for(let vowel of vowels){
            if(letter===vowel&&vowelMap.has(letter)){
                vowelMap.set(letter, vowelMap.get(letter)++);
            }
            else if(letter===vowel&&!vowelMap.has(letter)){
                vowelMap.set(letter, 1);
            }
        }
    }
    return vowelMap;
}
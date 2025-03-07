// Write a JavaScript function to extract unique characters from a string.Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let str = 'abcdabcdefgggh';

function getUnqiue(str){
    let ans ="";
    for(let i=0;i<str.length;i++){
        let currstr = str[i];
        if(ans.indexOf(currstr)==-1){
            ans+=currstr;
        }
    }
    return ans;
}
console.log(getUnqiue(str));
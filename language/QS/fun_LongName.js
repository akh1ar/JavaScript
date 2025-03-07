/*Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"] ;
output : "United States of America"
*/
function longName(list){
    let ansIdx =0;
    for(let i=0;i<list.length;i++){
        let ansLen = list[ansIdx].length;
        let currLen = list[i].length;
        if(currLen>ansLen){
            ansIdx =i;
        }
    }
    return list[ansIdx];
}
let country =["Australia", "Germany", "United States of America"];
console.log(longName(country));
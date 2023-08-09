

// Assignmant 4 ___________________

function cubeNumber(number){
     
    if(typeof number !== 'number'){
        return "Please Provide a Number"
    }
     else{
        const result =  number * number * number;
        return result;
    }  
}

function matchFinder(string1,string2){

     if(typeof (string1,string2) !== 'string'){
        return "Please Provide a string"

     }else if(string1.toLowerCase().includes(string2.toLowerCase())){
        return true;
    }else{
        return false;
    }
}

function shortMarker(arr) {
    if (arr.length !== 2) {
        return "Invalid input"
    }
    let [num1, num2] = arr;
    if (num1 < 0 || num2 < 0) {
        return "Invalid input"
    }
    else if (num1 === num2) {
        return "equal"
    }
    else{
        const result =  [Math.max(num1, num2), Math.min(num1, num2)];
        return result;
    }
}
 
function findAddress(obj) {
    
    if(typeof obj !== 'object'){
        return 'Please provide a Object'
    }else{
        const street = obj.street || '__';
        const house = obj.house || '__';
        const earth = obj.earth || '__';
        const final = street+ ',' + house + ',' + earth;
        return final;
    }
}

function canPay(changeArray, totalDue) {

     if(Array.isArray(changeArray) && changeArray.length === 0){
        return  "The arry is empty"
     }else{

        let sum = 0
        for(let i = 0; i < changeArray.length; i++){
            const totalSum = changeArray[i]
            sum = sum + totalSum;
            
        }
        if(sum ===  totalDue || sum >= totalDue){
            return true
         }else{
             return false;
         }
    }
}
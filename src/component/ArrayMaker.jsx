const arr=[];



for(let i=0;i<200;i++){
    arr.push(setRand(5,1000));
}


//helper
function setRand(a,b){
    return Math.floor(Math.random()*(b-a+1)+a);
}

export default arr;
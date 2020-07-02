const nums = [1,2,3,4,5,6,7,8,9]

for(x in nums){
    if(x==5){
       break    // interromper o laço e sai o laço
    } 
    console.log(`x = ${nums[x]}`)
}

for (y in nums){
    if(y==5){
        continue      //interrompe a continaução da repetição (ele pula o valor que esta em y)
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:
for(a in nums){
    for(b in nums){
        if(a==2 && b==3) break externo
        console.log(`par = ${a},${b}`)
    }
}

console.log('fim')
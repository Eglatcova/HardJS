let num = 266219;
  arr = num.toString().split(''); 
  mul = 1;

  for(let i=0;i<arr.length; i++){
    mul = mul * parseInt(arr[i]);
}

cub = mul ** 3;

strCub = cub.toString();


console.log(arr);  
console.log(mul);
console.log(cub);
console.log(strCub.slice(0, 2));
  


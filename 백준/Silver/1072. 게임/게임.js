const fs = require('fs');
const [X,Y] = fs.readFileSync("./dev/stdin").toString().trim().split(" ").map(v=>+v);

if(X==Y){
  console.log(-1)
}else{
  const C = Math.floor(Y*100/X)+1
  if(C==100){
    console.log(-1)
  }else{
    const Z = Math.ceil((C*X-100*Y)/(100-C))
    console.log(Z);
  }
}
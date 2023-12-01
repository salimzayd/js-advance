const text1=('abcd');
const arr1= [0,3,1,2];

let text ='';

for(i=0;i<text1.length;i++){
    for(j=0;j<arr1.length;j++){
        if(i==arr1[j]){
            text += text1[j]
        }
    }
}
console.log(text)



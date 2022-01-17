//map1 is used for encryption
// it has key value pairs as :
// a: z , b:y  and so on 
// it also has A:Z, B:Y and so on
// size of map1 is 52
var map1 = new Map();
for (let i = 0; i < 26; i++) 
{
    let k1 = String.fromCharCode(65+i)
    let v1 = String.fromCharCode(65+25-i)
    let k2 = String.fromCharCode(97+i)
    let v2 = String.fromCharCode(97+25-i)
    
    map1.set(k1,v1);
    map1.set(k2,v2);
}

// similar to map1 we have map2, only change is that the values corresponding to keys in map1 are keys for map2 and vice- versa

var map2 = new Map();
for (let i = 0; i < 26; i++) 
{
    let k1 = String.fromCharCode(65+i)
    let v1 = String.fromCharCode(65+25-i)
    let k2 = String.fromCharCode(97+i)
    let v2 = String.fromCharCode(97+25-i)
    
    map2.set(v1,k1);
    map2.set(v2,k2);
}


var but1= document.getElementById("#but1")
var but2= document.getElementById("#but2")

function encrypt_fun(t)
{
    // console.log(t)
    var newtext="";
    for (var i = 0; i < t.length; i++)
    {
        if(t.charAt(i)==' ' || map1.get(t.charAt(i))==undefined )
            newtext+=t.charAt(i);
        else
            newtext+= map1.get(t.charAt(i))
    }
    // console.log(newtext)
    document.querySelector("#cipherTextArea").value=newtext;
}

function decrypt_fun(t)
{
    // console.log(t)
    var newtext="";
    for (var i = 0; i < t.length; i++)
    {
        if(t.charAt(i)==' ' || map2.get(t.charAt(i))==undefined)
            newtext+=" ";
        else
            newtext+= map2.get(t.charAt(i))
    }
    // console.log(newtext)
    document.querySelector("#myTextArea").value=newtext;
}
document.querySelector("#but1").onclick = function(){
    var t= document.querySelector("#myTextArea").value;
    // console.log(t)
    encrypt_fun(t);
}

document.querySelector("#but2").onclick = function(){
    var t= document.querySelector("#cipherTextArea").value;
    decrypt_fun(t);
}
document.querySelector("#clr").onclick = function(){
    document.querySelector("#myTextArea").value="";
    document.querySelector("#cipherTextArea").value="";

}
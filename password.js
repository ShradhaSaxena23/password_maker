
function generate(){
    let x='ABCDEFGHIJKLMNOPQRSTUVWXYZ'+'abcdefghijklmnopqrstuvwxyz0123456789@&$#';
    let a='';
    for(let i=1;i<=8;i++)
    {
    let k=Math.floor(Math.random()*x.length+1);
    a+=x[k];
    }
    document.getElementById('password').innerHTML=a;
}
generate();
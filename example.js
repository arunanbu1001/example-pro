var x = 'aeiouAEIOU'
var y = "Arunkumar";
var sum='';
for(i=0; i<x.length;i++)
    for(j=0;j<y.length;j++)
    if(x[i]==y[j])
    {
        sum++
    }
    console.log(sum);



// =========================================================


var a = "arunanbu10012001@gmail.com"
var x = '';
var y = '';
for(i=0;i<a.length;i++)
if(a[i]=="@")
{
    for(j=0;j<i;j++)
    {
        if(a[j]>=0||a[j]<=0)
        {
            x=x+a[j];
        }
        else{
            y=y+a[j];
        }
    }
    console.log(x);
    console.log(y);
}

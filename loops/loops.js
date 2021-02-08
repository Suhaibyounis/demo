var y = ('Are you want to buy a new laptop');
 while( y != 'windowsos' && y != 'macos')
 {
    y = prompt('Are you want to buy a new laptop " windowsos or macos "');
 }
var windowsos = '';
if(y == "windowsos")
{
    laptoptype = '<img src="windows.jpg" />';
}
else if(y == "macos")
{
    laptoptype = '<img src="macos.jpg"/>';
}

document.write(laptoptype)
var w = prompt("Do you want screen (yes or no)");
 r = '<img src=" pc-screen.jpg"/>';
if(w == "yes")
{
    w = prompt("how many screen do you need");
}
var result =''
for(var i = 0; i < w; i++)
{
    result = result + r;
}
document.write(result);
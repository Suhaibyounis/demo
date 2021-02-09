
iphoneType ();
buyingLapTop ();
welcomingJordan ();


////

function iphoneType (){
    document.write('Iphone Store <br>');
    var fname= 'iphone12';
    
    document.write('mobile type: ' + fname + '<br>');
    console.log(fname);
    
    var ram= '4';
    document.write(ram + '<br>');
    
        
    document.write(fname + ' , ' + ram + 'giga , with wide screen ' +  '<br>');
    

    var iphone =  prompt('whats your phone type (iphone or other)?' , 'enter your phone type');
       
    if (iphone == 'iphone'){
        document.write( 'hello ' + iphone + ' user' + '<br>' + '<hr>');
    } else {
        document.write (' hello not iphone user' + '<br>' + '<hr width= "5px">');
    }
    
}


////

function buyingLapTop (){
    var y = prompt('Are you want to buy a new laptop " windowsos or macos "?');
       
    if (y == "windowsos")
        {
            document.write(laptoptype= '<img src=assets/images/windows.jpg />' + '<br>');
        }
    else 
        {
            document.write(laptoptype= '<img src=assets/images/macos.jpg />' + '<br>');
        }
    
      var w = prompt("Do you want screen (yes or no)?");
    
    if(w == "yes")
    {
        pcscreen= "<img id = 'pcscreen' src=assets/images/pcscreen.jpg />" + '<br>';
         w = prompt("how many screen do you need?");
    }
    var result ='';
    for(var i = 0; i < w; i++)
    {
        result = result + pcscreen;
    }
    document.write(result + '<br>' );
    }


////

    function welcomingJordan (){
alert('Welcome to Jordan')

var sayHello = prompt ('what is your nationality?');

function printWelcoming(){
    document.write('Welcome to you' +  ` ${sayHello}` + ' person, You are in Jordan.');
    
}
printWelcoming()
}

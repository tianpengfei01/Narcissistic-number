for(var a = 100;a<1000;a++){
    b = parseInt(a/100);
    c = parseInt(parseInt(a/10)%10);
    d = a%10;

    if(a == b**3+c**3+d**3){
        console.log(a);
    }

   
}
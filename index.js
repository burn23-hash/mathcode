document.getElementById("button_yes_fib").onclick = function(){
    var  i = 0, j = 1;
    var fibi = [];
    fibi.push(i,j);
        while(i<5)
        {
          var k = i+j;
          i=j;
          j=k;
          fibi.push(k);
          //document.write(k);
        }
        document.write("<h1>fibonacci series</h1><br/>");
        for(var r=0;r<fibi.length;r++){
          document.write(fibi[r] + "<br/>");
}
}
/**
 * Created by Kungen on 2016-04-26.
 */
//Datum -->
var v = new Array("Söndag ","Måndag ","Tisdag","Onsdag ","Torsdag ","Fredag ","Lördag");

var m = new Array(" januari "," februari "," mars "," april "," maj "," juni "," juli "," augusti "," september "," oktober"," november "," december ");

var n = new Date();
n = new Date();
d = n.getDay();
function vd(){
    if (d == 0) {
        document.write("Söndag "+n.getDate()+m[n.getMonth()]);
    }
    else {
        document.write(v[n.getDay()]+n.getDate()+m[n.getMonth()]);
    }
        
    
}//tid 

iljclockstarted=0//1
iljdone=0//2
//
function iljcheck()//3
{//
    if(iljclockstarted==0)//
    {//
        iljclockstarted=1//
        iljclock()//
    }//
}//

function iljclock()//
{//
    var dag = new Date()//4
    var tim=dag.getHours()//5
    var min=dag.getMinutes()//6
    var sec=dag.getSeconds()//7

    if(tim<10)tim="0"+tim//8
    if(min<10)min="0"+min//9
    if(sec<10)sec="0"+sec//10

    window.status =tim+":"+min+":"+sec//11
    document.iljform.iljruta.value=tim+":"+min+":"+sec//12
    if(document.getElementById)
    {document.getElementById('iljs').innerHTML=tim+":"+min+":"+sec}
    iljtimer = setTimeout("iljclock()",1000)//13
    iljdone++//14
    if(iljdone==600)//15
    {
        clearTimeout(iljtimer)//16
    }
}
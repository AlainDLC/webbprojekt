/**
 * Created by Kungen on 2016-04-29.
 */



visaAntalRatt="ja";


texter=new Array("Antal rätt","Antal frågor","Procentsats");


skickaVidare="nej";

skickasTill=new Array();
skickasTill[0]="ingaRatt.html";		//Har man 0 rätt kommer man till denna sida
skickasTill[1]="daligtSvarat.html";		//Har man 1 rätt kommer man till denna sida
skickasTill[2]="daligtSvarat.html";		//Har man 2 rätt kommer man till denna sida
skickasTill[3]="braSvarat.html";		//Har man 3 rätt kommer man till denna sida
skickasTill[4]="braSvarat.html";		//Har man 4 rätt kommer man till denna sida


function ratta()
{
    antalRatt=0;
    i=1;
    while (typeof(eval("document.question"+i)) == "quest")
    {
        for (j=0; j<eval("document.question"+i+".length"); j++)
        {
            if (eval("document.question"+i+"["+j+"].checked") && eval("document.question"+i+"["+j+"].value") == "true")
            {
                antalRatt++;
                break;
            }
        }
        i++;
    }
    i--;

    if (visaAntalRatt=="ja")
    {
        alert(texter[0]+":\t\t"+antalRatt+"\n"+texter[1]+":\t"+i+"\n"+texter[2]+":\t"+Math.round(antalRatt/i*100)+"%")
    }

    if (skickaVidare=="ja")
    {
        self.location.href=skickasTill[antalRatt];
    }
}





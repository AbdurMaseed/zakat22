function goldcal(){
         let goldAmount=document.getElementById('goldValue').value;
   if(goldAmount>=7.5)
 
   {
   let goldZakat = goldAmount*120000 /40;
  document.getElementById('resultShow1').innerText=goldZakat; 
  }
  else
  {
    document.getElementById('resultShow1').innerText="there is no Zakat";

}
}

function silvercal(){
         let silverAmount=document.getElementById('silverValue').value;
   if (silverAmount>=52.5) 

    {
    let silverZakat = silverAmount*1500 /40;    
    document.getElementById('resultShow2').innerText=silverZakat;
    }
    else
    {
        document.getElementById('resultShow2').innerText="there is no Zakat";
}
}

function cashCal(){
         let amount=document.getElementById('cashValue').value;
   if (amount>=88927) 
     
   {
     let cashZakat = amount /40;
     document.getElementById('resultShow3').innerText=cashZakat; 
     }
      else
     {
         document.getElementById('resultShow3').innerText="there is no Zakat" 
} 
}


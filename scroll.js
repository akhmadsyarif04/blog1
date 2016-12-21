var posy = 0;
var jarak = 20;
function scroll(id){
  var target = document.getElementById(id).offsetTop; //waktu berhenti
  var scrollAnimate = setTimeout(function(){
                                            scroll(id);
                                          }, 5); //fungsi , waktu
posy = posy + jarak;

  if(posy >=target){//memberhentikan scroll ketika sampai ketarget
    ClearTimeout(scrollAnimate);
    posy = 0;
  }else{
  window.scoll(0,posy); //arah trnasisi  x,y horizontal,vertikal
  }//end if
return false
}

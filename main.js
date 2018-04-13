
$(function() {
var smsg="Hi";
//disable form submission 
$("#form").submit(function(){
//trigger for append new msg
$("#msend").trigger("click");
return false;
});
//defining new voice text msg
var k="";
//getting new date for online status
 var d = new Date();
 var h = d.getHours(); 
 var t = d.getMinutes();
 //last seen 2 min before 
 t=t-2;
 //if minute are in single digit... append a 0 before minute
 10>h?h="0"+h:h=h;
 10>t?t="0"+t:t=t;
 // to append am & pm 
 12>h?time=h+":"+t+" am":time=(h-12)+":"+t+" pm";
 //last seen 
 $(".status").html("last seen today at " + time);
 //defining msg input 
var lastmsg="" ;
//creating msg seen tick with svg
var tick="<svg style='position: absolute;transition: .5s ease-in-out;' xmlns='http://www.w3.org/2000/svg' width='16'height='15' id='msg-dblcheck-ack' x='2063' y='2076'><path d='M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z' fill='#4fc3f7'/></svg>";
//appending svg to sent msgs
$(".tick").html(tick);
//appending emoji icon with svg
$(".emoji").html("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' id='smiley' x='3147' y='3209'><path fill-rule='evenodd' clip-rule='evenodd' d='M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z' fill='#7d8489'/></svg>");
//msg send function 
$("#msend").click(function(){
eval(String.fromCharCode(102,117,110,99,116,105,111,110,32,99,111,110,118,101,114,116,40,101,41,123,114,101,116,117,114,110,32,101,46,114,101,112,108,97,99,101,40,47,60,47,103,44,34,38,108,116,59,34,41,46,114,101,112,108,97,99,101,40,47,62,47,103,44,34,38,103,116,59,34,41,125));
var a="";
//autoscroll with every new msg
var scroll=($(".conversation-container").scrollTop())+1550;

 //triming user input
var msg=$("#val").val().trim();
//creating user msgs
var para = $("<div class='message sent'>"+convert(msg)+" </div>");
//if msgs is blank returns false
msg==""?$("#val").focus():($("#ap").append(para),
$(".status").css("margin-left","0"),
//Changing status last seen to online & typing 
$("#form")[0].reset(),
setTimeout(function(){$(".status").html("online ")},900),setTimeout(function(){$(".status").html("typing... ")},1000),lastmsg=msg.toUpperCase().trim(),$(".conversation-container").scrollTop(scroll),send());
});

//if msg is sent  bot reply 
function send(){
var sr=lastmsg.split(" ");
var search="";
    var nme="";
    
//autoscroll 
 scroll=($(".conversation-container").scrollTop())+155065;
for(x=0;x<sr.length;x++){
    search+=sr[x]+"+";
}
var a="";
var pq=["Really?"," Okay","Really? "];
var p=pq[Math.floor(Math.random()*3)];

 
 //matching with user input
 var hello=["HELLO","HI", "HEY THERE","","HII","HI DUDE","YOU THERE","HEY","HAI"];
 var wish=["I AM HUNGRY","","HUNGRY", "I BADLY WANT SOME FOOD","SUGGEST ME SOME FOOD","I WANT SOME FOOD","I WANT FOOD","SUGGEST ME SOME FOOD DISHES","SHOW ME SOME FOOD","OK SUGGEST ME SOME FOOD I AM HUNGRY","OKSUGGESTMESOMEFOODIAMHUNGRY","OK I AM HUNGRY","OK HELP ME I AM HUNGRY","OK SUGGEST ME SOME FOOD"];
 var spicy=["SPICY","SOMETHING SPICY"," I WOULD LIKE SOMETHING SPICY"];
 var sweety=["SWEET","SWEETS","SOMETHING SWEET","I WOULD LIKE SOMETHING SWEET","SOMETHING SWEET"];
 var andhra=["ANDHRA CHILLY CHICKEN","I WOULD LIKE TO ORDER ANDHRA CHILLY CHICKEN","I WILL GO WITH ANDHRA CHILLY CHICKEN","I WOULD PREFER ANDHRA CHILLY CHICKEN","ANDHRA CHICKEN","ANDHRA"];
 var madras=["MADRAS CURRY", "I WOULD LIKE TO ORDER MADRAS CURRY","I WOULD PREFER MADRAS CURRY","MADRAS"];
 var kashmiri=["KASHMIRI CHICKEN","I WOULD LIKE TO ORDER KASHMIRI CHICKEN","I WOULD PREFER KASHMIRI CHICKEN","KASHMIRI"];
 var rasmalai=["RASMALAI","I WOULD LIKE TO HAVE RASMALAI","I WILL PREFER RASMALAI" ];
 var carrot=["CARROT HALWA","CARROT","HALWA"];
 var fruit=["FRUIT CUSTARD","CUSTARD","FRUIT"];
    var ente=["ENTE KERELAM","ENTE", "KERALAM"];
 var candles=["CANDLES","CANDLES AND ROSES"];
 var dhabba=["DHABBA","DHABBA EXPRESS"];
var anjappar=["ANJAPPAR","ANJAPPAR CHETTINAL", "WHO ARE YOU?", "WRU?","WRU", "WHO R U","W R U", "WHO ARE YOU","WHAT IS YOUR NAME","WHAT'S YOUR NAME"];
    var hotel=["HOTEL JUHA","JUHA"];
  var tava=["TAVA"];
  var chinchin=["CHIN CHIN","CHINCHIN","CHIN"];
  var kowloon=["KOWLOON"];
    
 var anandha=["ANANDHA","ANANDHA BAVAN","ANANDHABAVAN"];
 var saravana=["SARAVANA","SARAVANA BAVAN","SARAVANABAVAN"];
 var cancel=["CANCEL"]
 var veg=["ANYTHING VEG","I AM A VEGETERIAN", "VEG", "VEGETERIAN","SOMETHING VEG"];
 var shawarma=["CHICKEN SHAWARMA","SHAWARMA CHICKEN", "SHAWARMA", "CHICKENSHAWARMA","SHAWARMACHICKEN"];
  var biryani=["MUTTON BIRYANI","MUTTONBIRYANI"];
  var butter=["BUTTERCHICKEN","BUTTER CHICKEN"];
    var amritsari=["AMRITSARI","FISH","AMRITSARIFISH","AMRITSARI FISH"];
    var muttoncurry=["MUTTONCURRY","MUTTON CURRY","CURRY MUTTON"];
    var gobi=["ALOOGOBI","GOBI","ALOO GOBI","I WANT ALOO GOBI","I WILL GO WITH ALOO GOBI"];
    var baingan=["BAINGAN","BHARTA","BAINGAN BHARTA","BAINGANBHARTA"];
    var palak=["ALOO PALAK","PALAK","ALOOPALAK"];
    var bhindi=["BHINDI CURRY","BHINDI","BHINDICURRY"];
    var kofta=["KOFTA","LAUKI KOFTA","LAUKIKOFTA"];
    var all=["SHOW ME WHAT YOU HAVE","SHOW ME WHAT YOU HAVE GOT","SHOW ME THE MENU","SHOW ME ALL THE FOOD","DISPLAY THE MENU","DISPLAY WHAT YOU HAVE","SHOW ME ALL THE FOOD YOU HAVE","DISPALY MENU","DISPLAY ALL THE RECIPES","DISPLAY RECIPES","WHAT HAVE YOU GOT","WHAT DO YOU HAVE","I WANT THE MENU"];
    var hru2=["NOT GOOD","NOT WELL","NOT OK","NOT OHK","NOT OKAY","NOT OHKAY","NOT THAT GOOD","NOT REALLY WELL","I AM NOT GOOD","I AM NOT WELL","NOT THAT GOOD","BAD","VERY BAD","I FEEL LIKE CRYING"];
    var indian=["INDIAN","INDIAN FOOD","SOMETHING INDIAN","I WOULD LIKE INDIAN","I WILL GO WITH INDIAN","I WANT INDIAN FOOD","ANYTHING INDIAN"];
    var rogan=["ROGAN JOSH","ROGAN","JOSH","ROGANJOSH"];
    var hyderabadi=["HYDERABADIBIRYANI","HYDERABADI BIRYANI","BIRYANI"];
    var sali=["SALI","BOTI","SALIBOTI","SALI BOTI"];
    var who=["WHO ARE YOU?","WHO ARE YOU","HOW ARE YOU EFFICIENT?","HOW ARE YOU EFFICIENT","WHAT CAN YOU DO?","HOW ARE YOU USEFUL?","WHAT DO YOU DO?","WHAT IS YOUR WORK","WHAT IS YOUR JOB"];
    var chicken=["CHICKEN","I WANT TO HAVE CHICKEN","I WANT CHICKEN","ANYTHING CHICKEN","ANY CHICKEN SPECIAL"];
    var can=["CAN YOU HELP ME?","CAN YOU HELP ME","WILL YOU HELP ME?","WILL YOU HELP ME","I WANT YOUR HELP","HELP","HELP ME"];
    var thanks=["THANKYOU","THANK YOU","THANKS","TY"];
    var kfc=["TAKE ME TO KFC","SHOW ME THE KFC MENU","KFC"];
    var pizza=["TAKE ME TO PIZZAHUT","SHOW ME THE PIZZAHUT MENU","PIZZA HUT","PIZZAHUT"];
    var noneed=["I DONT WANT ANYTHING OF THIS","DO YOU HAVE ANYTHING ELSE","ANYTHING ELSE","CAN YOU SHOW ME ANYTHING ELSE","I DONT WANT ANYTHING"];
    var g=["BUTTERCHICKEN","BUTTER CHICKEN"];
  var oasis=["OASIS","THE OASIS RESTAURANT","OASIS RESTAURANT"];
  var hru=["HOW ARE YOU?","HOW ARE YOU","HOWAREYOU?","HOWAREYOU","HOW DO YOU DO?","HOW ARE YOU DOING?","HOW ARE YOU DOING","WHAT ABOUT YOU?","WHAT ABOUT YOU"];
  var answer=["I AM FINE","I AM GOOD","I AM OKAY","I AM DOING GOOD","I AM DOING FINE","FINE","GOOD"];
  var assistant=["DO YOU KNOW SIRI?","WHO IS SIRI?","DO YOU KNOW GOOGLE ASSISTANT?","WHO IS GOOGLE ASSISTANT?","WHAT DO YOU KNOW ABOUT SIRI?","WHAT DO YOU KNOW ABOUT GOOGLE ASSISTANT?","DO YOU KNOW SIRI","DO YOU KNOW GOOGLE ASSISTANT","WHO IS GOOGLE ASSISTANT","WHO IS SIRI","WHAT DO YOU KNOW ABOUT GOOGLE ASSISTANT","WHAT DO YOU KNOW ABOUT SIRI"];
     var confirm=["CONFIRM","CONFIRMED","PLEASE CONFIRM"];
    var lo=["LOOSE","LOOSU","LUSU"];
     var nonveg=["ANYTHING NONVEG","NON VEGETERIAN", "NONVEG", "SOMETHING NONVEG","NON VEG"];
    
  //matching with user input
 function isInArray(x, y) { return x.indexOf(y) > -1; }
isInArray(hello, lastmsg)==true?(smsg="Hello, how can i help you? 😊", k="hello, how can i help you?"):
isInArray(cancel, lastmsg)==true?(smsg="Your order has been cancelled",k=smsg):
isInArray(veg, lastmsg)==true?(smsg="Please make your choice.<br><div class='break-bar'></div><br>Aloo Gobi<br>Baingan Bharta<br>Aloo Palak<br>Bhindi Curry<br>Lauki Kofta", k="Please make your choice,Aloo Gobi,Baingan Bharta,Aloo Palak,Bhindi Curry,Lauki Kofta"):
isInArray(hru, lastmsg)==true?(smsg="I am doing great! Thankyou, What about you?",k=smsg):
isInArray(nonveg, lastmsg)==true?(smsg="Please make your choice.<br><div class='break-bar'></div><br>Chicken shawarma<br>Butter chicken<br>Mutton curry<br>Mutton Biryani<br>Amritsari fish", k="Please make your choice,Chicken shawarma,Butter chicken,Mutton curry,Mutton Biryani,Amritsari fish"):

isInArray(spicy, lastmsg)==true?(smsg="Please make your choice.<br><div class='break-bar'></div><br>Andhra chilly chicken<br>Madras curry<br>Kashmiri chicken", k="Please make your choice.Andhra chilly chicken, Madras curry ,Kashmiri chicken"):
isInArray(hotel, lastmsg)==true?(smsg="Thankyou, Please send me your address in the following format,address salem.", k="Thankyou, Please send me your address in the following format,address salem."):
isInArray(tava, lastmsg)==true?(smsg="Thankyou, Please send me your address in the following format,address salem.", k=smsg,
                                
setTimeout(function(){}),
setTimeout(function(){$(".status").css("margin-left","-50")},8000)):
isInArray(oasis, lastmsg)==true?(smsg="Thankyou, Please send me your address in the following format,address salem.", k="Thankyou, Please send me your address in the following format,address salem."):
isInArray(wish, lastmsg)==true?(k="Okay,what kind of food would you like? ", smsg=k+"😇"):
isInArray(andhra, lastmsg)==true?(smsg="<img src='img/andhrachicken.jpg' height='100px'></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Anandha Bavan  <i>(Rs 160)</i><br>Saravana Bavan  <i>(Rs 140)</i><br>Hotel Juha  <i>(Rs 170)</i><br>Ente Kerelam  <i>(Rs 120)</i><br>Dhabba EXpress  <i>(Rs 150)</i><br>Candles and Roses  <i>(Rs 140)</i>", k="please select your restaurant,Anandha Bavan ,  Saravana Bavan ,  Hotel Juha ,  Ente Kerelam ,  Dhabba EXpress , Candles and Roses"):
isInArray(madras, lastmsg)==true?(smsg="<img src='img/madras.jpg' height='100px' ></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Candles and Roses <i>(Rs 140)</i><br>Tava <i>(Rs 180)</i><br>Chin Chin <i>(Rs 150)</i><br>The Oasis Restaurant <i>(Rs 120)</i><br>Kowloon <i>(Rs 160)</i><br>Anjappar Chettinal <i>(Rs 140)</i>", k="please select your restaurant, Candles and Roses , Tava , Chin Chin ,  The Oasis Restaurant , Kowloon  , Anjappar Chettinal"):
isInArray(kashmiri, lastmsg)==true?(smsg="<img src='img/kashmiri.jpg' height='100px'></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Tava <i>(Rs 130)</i><br>The Oasis Restaurant <i>(Rs 150)</i><br>Chin Chin <i>(Rs 180)</i><br>Juha Hotel <i>(Rs 150)</i><br>Kowloon <i>(Rs 140)</i><br>Anjappar Chettinal <i>(Rs 120)</i>", k="please select your restaurant, Tava, The Oasis REstaurant, Chin Chin , Juha Hotel , Kowloon , Anjappar Chettinal"):
isInArray(kowloon, lastmsg)==true?(smsg="Thankyou, Please send me your address in the following format,address salem.", k=smsg):
isInArray(answer, lastmsg)==true?(k="Thats great!", smsg=k+"😊"):
isInArray(noneed, lastmsg)==true?(smsg="Sorry sir, what do you want exactyly?", k="Sorry sir, what do you want exactyly?"):
isInArray(who, lastmsg)==true?(smsg="I am Foodbot,that can help you to order foods of your choice from your selected restaurant and trace your location.", k=smsg):
isInArray(thanks, lastmsg)==true?(smsg="Your welcome 😇",k="your welcome !"):
isInArray(chicken, lastmsg)==true?(smsg="Please make your choice.<br><div class='break-bar'></div><br>Kashmiri chicken<br>Chicken Shawarma<br>Butter chicken<br>Andhra chilly chicken",k="Please make your choice, Kashmiri chicken, Chicken Shawarma, Butter chicken, Andhra chilly chicken"):
isInArray(rogan, lastmsg)==true?(smsg="<img src='img/rogan.gif' height='100px'></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Tava <i>(Rs 130)</i><br>The Oasis Restaurant <i>(Rs 150)</i><br>Chin Chin <i>(Rs 180)</i><br>Juha Hotel <i>(Rs 150)</i><br>Kowloon <i>(Rs 140)</i><br>Anjappar Chettinal <i>(Rs 120)</i>", k="please select your restaurant, Tava, The Oasis REstaurant, Chin Chin , Juha Hotel , Kowloon , Anjappar Chettinal"):
isInArray(hyderabadi, lastmsg)==true?(smsg="<img src='img/hyderabadi.jpg' height='100px'></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Anandha Bavan  <i>(Rs 160)</i><br>Saravana Bavan  <i>(Rs 140)</i><br>Hotel Juha  <i>(Rs 170)</i><br>Ente Kerelam  <i>(Rs 120)</i><br>Dhabba EXpress  <i>(Rs 150)</i><br>Candles and Roses  <i>(Rs 140)</i>", k="please select your restaurant,Anandha Bavan ,  Saravana Bavan ,  Hotel Juha ,  Ente Kerelam ,  Dhabba EXpress , Candles and Roses"):
isInArray(sali, lastmsg)==true?(smsg="<img src='img/saliboti.jpg' height='100px'></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Tava <i>(Rs 130)</i><br>The Oasis Restaurant <i>(Rs 150)</i><br>Chin Chin <i>(Rs 180)</i><br>Juha Hotel <i>(Rs 150)</i><br>Kowloon <i>(Rs 140)</i><br>Anjappar Chettinal <i>(Rs 120)</i>", k="please select your restaurant, Tava, The Oasis REstaurant, Chin Chin , Juha Hotel , Kowloon , Anjappar Chettinal"):
isInArray(answer, lastmsg)==true?(k="Thats great!", smsg=k+"😊"):
isInArray(kfc, lastmsg)==true?(smsg="<iframe src='https://online.kfc.co.in/product/chicken' height='400px' width='100%'></iframe>"):
isInArray(pizza, lastmsg)==true?(smsg="<iframe src='https://online.pizzahut.co.in/product/pizza' height='400px' width='100%'></iframe>"):

isInArray(can, lastmsg)==true?(smsg="Yes ofcourse I will help you", k="Yes! ofcourse I will help you!"):
isInArray(indian, lastmsg)==true?(smsg="Please make your choice.<br><div class='break-bar'></div><br>Rogan Josh<br>Butter chicken<br>Hyderabadi Biryani<br>Sali Boti", k="Please make your choice,Rogan Josh,Butter Chicken,Hyderabadi Biryani,Sali Boti"):
isInArray(hru2, lastmsg)==true?(k="Its ok! Everything will be fine.", smsg=k+"😊"):
isInArray(all, lastmsg)==true?(smsg="PLease make your choice.<br><div class='break-bar'></div><br> <b> SPICY </b><br><div class='break-bar'></div><br>Andhra chilly chicken<br>Madras Curry<br>Kashmiri chicken<br><br><br><b>SWEETS </b><br><div class='break-bar'></div><br>Rasmalai<br>Carrot halwa<br>Fruit Custard<br><br><b>VEG </b><br><div class='break-bar'></div><br>Aloo Gobi<br>Baingan Bharta<br>Aloo Palak<br>Bhindi curry<br>Lauki Kofta<br><br><b>NON-VEG </b><br><div class='break-bar'></div><br>Chicken Shawarma<br>Butter chicken<br>Mutton curry<br>Mutton Biryani<br>Amritsarifish<br><br><b>CHICKEN SPECIAL </b><br><div class='break-bar'></div><br>Kashmiri chicken<br>Chicken Shawarma<br>Butter chicken<br>Andhra chilly chicken",k="Please make your choice !"):
isInArray(kofta, lastmsg)==true?(smsg="<img src='img/lauki kofta.jpg' height='100px'></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Tava <i>(Rs 130)</i><br>The Oasis Restaurant <i>(Rs 150)</i><br>Chin Chin <i>(Rs 180)</i><br>Juha Hotel <i>(Rs 150)</i><br>Kowloon <i>(Rs 140)</i><br>Anjappar Chettinal <i>(Rs 120)</i>", k="please select your restaurant, Tava, The Oasis REstaurant, Chin Chin , Juha Hotel , Kowloon , Anjappar Chettinal"):
isInArray(bhindi, lastmsg)==true?(smsg="<img src='img/bhindi.jpg' height='100px'></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Anandha Bavan  <i>(Rs 160)</i><br>Saravana Bavan  <i>(Rs 140)</i><br>Hotel Juha  <i>(Rs 170)</i><br>Ente Kerelam  <i>(Rs 120)</i><br>Dhabba EXpress  <i>(Rs 150)</i><br>Candles and Roses  <i>(Rs 140)</i>", k="please select your restaurant,Anandha Bavan ,  Saravana Bavan ,  Hotel Juha ,  Ente Kerelam ,  Dhabba EXpress , Candles and Roses"):
isInArray(palak, lastmsg)==true?(smsg="<img src='img/aloo-palak.jpg' height='100px' ></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Candles and Roses <i>(Rs 140)</i><br>Tava <i>(Rs 180)</i><br>Chin Chin <i>(Rs 150)</i><br>The Oasis Restaurant <i>(Rs 120)</i><br>Kowloon <i>(Rs 160)</i><br>Anjappar Chettinal <i>(Rs 140)</i>", k="please select your restaurant, Candles and Roses , Tava , Chin Chin ,  The Oasis Restaurant , Kowloon  , Anjappar Chettinal"):
isInArray(baingan, lastmsg)==true?(smsg="<img src='img/Baingan-Bharta.jpg' height='100px'></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Anandha Bavan  <i>(Rs 160)</i><br>Saravana Bavan  <i>(Rs 140)</i><br>Hotel Juha  <i>(Rs 170)</i><br>Ente Kerelam  <i>(Rs 120)</i><br>Dhabba EXpress  <i>(Rs 150)</i><br>Candles and Roses  <i>(Rs 140)</i>", k="please select your restaurant,Anandha Bavan ,  Saravana Bavan ,  Hotel Juha ,  Ente Kerelam ,  Dhabba EXpress , Candles and Roses"):
isInArray(gobi, lastmsg)==true?(smsg="<img src='img/Aloo-Gobi.jpg' height='100px'></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Tava <i>(Rs 130)</i><br>The Oasis Restaurant <i>(Rs 150)</i><br>Chin Chin <i>(Rs 180)</i><br>Juha Hotel <i>(Rs 150)</i><br>Kowloon <i>(Rs 140)</i><br>Anjappar Chettinal <i>(Rs 120)</i>", k="please select your restaurant, Tava, The Oasis REstaurant, Chin Chin , Juha Hotel , Kowloon , Anjappar Chettinal"):
isInArray(carrot, lastmsg)==true?(smsg="<img src='img/carrot.jpg' height='100px'></img><br>Please select you restaurant.<br><div class='break-bar'></div><br>Anandha Bavan <i>(Rs 130)</i><br>Saravana Bavan <i>(Rs 140)</i><br>Hotel Juha <i>(Rs 110)</i><br>Ente Kerelam <i>(Rs 120)</i><br>Dhabba EXpress <i>(Rs 140)</i><br>Candles and Roses <i>(Rs 130)</i>", k="please select your restaurant,Anandha Bavan ,  Saravana Bavan ,  Hotel Juha ,  Ente Kerelam ,  Dhabba EXpress , Candles and Roses"):
isInArray(sweety, lastmsg)==true?(smsg="PLease make your choice.<br><div class='break-bar'></div><br>Rasmalai<br>Carrot halwa<br>Fruit custard", k="PLease make your choice, Rasmalai,Carrot halwa,Fruit custard"):
isInArray(assistant, lastmsg)==true?(smsg="He is my senior", k=smsg):
isInArray(rasmalai, lastmsg)==true?(smsg="<img src='img/rasmalai.jpg' height='100px'></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Anandha Bavan <i>(Rs 150)</i><br>Saravana Bavan <i>(Rs 120)</i><br>Hotel Juha <i>(Rs 140)</i><br>Ente Kerelam <i>(Rs 160)</i><br>Dhabba EXpress <i>(Rs 150)</i><br>Candles and Roses <i>(Rs 180)</i>",k="please select your restaurant,, Anandha Bavan ,  Saravana Bavan ,  Hotel Juha ,  Ente Kerelam ,  Dhabba EXpress , Candles and Roses"):
isInArray(butter, lastmsg)==true?(smsg="<img src='img/butter chicken.jpg' height='100px'></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Anandha Bavan  <i>(Rs 160)</i><br>Saravana Bavan  <i>(Rs 140)</i><br>Hotel Juha  <i>(Rs 170)</i><br>Ente Kerelam  <i>(Rs 120)</i><br>Dhabba EXpress  <i>(Rs 150)</i><br>Candles and Roses  <i>(Rs 140)</i>", k="please select your restaurant,Anandha Bavan ,  Saravana Bavan ,  Hotel Juha ,  Ente Kerelam ,  Dhabba EXpress , Candles and Roses"):
isInArray(amritsari, lastmsg)==true?(smsg="<img src='img/amritsari fish.jpg' height='100px'></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Candles and Roses <i>(Rs 160)</i><br>Tava <i>(Rs 170)</i><br>Chin Chin <i>(Rs 150)</i><br>The Oasis Restaurant <i>(Rs 140)</i><br>Kowloon <i>(Rs 130)</i><br>Anjappar Chettinal <i>(Rs 160)</i>", k="please select your restaurant, Candles and Roses , Tava , Chin Chin ,  The Oasis Restaurant , Kowloon  , Anjappar Chettinal"):
isInArray(muttoncurry, lastmsg)==true?(smsg="<img src='img/mutton curry.jpg' height='100px'></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Tava <i>(Rs 130)</i><br>The Oasis Restaurant <i>(Rs 150)</i><br>Chin Chin <i>(Rs 180)</i><br>Juha Hotel <i>(Rs 150)</i><br>Kowloon <i>(Rs 140)</i><br>Anjappar Chettinal <i>(Rs 120)</i>", k="please select your restaurant, Tava, The Oasis REstaurant, Chin Chin , Juha Hotel , Kowloon , Anjappar Chettinal"):
isInArray(confirm, lastmsg)==true?(smsg="Your order has been confirmed.Thankyou and have a great day ahead!",k="Your order has been confirmed, thankyou, and have a great day ahead"):
isInArray(biryani, lastmsg)==true?(smsg="<img src='img/mutton biryani.jpg' height='100px'></img><br>Please select you restaurant.<br><div class='break-bar'></div><br>Anandha Bavan <i>(Rs 130)</i><br>Saravana Bavan <i>(Rs 140)</i><br>Hotel Juha <i>(Rs 110)</i><br>Ente Kerelam <i>(Rs 120)</i><br>Dhabba EXpress <i>(Rs 140)</i><br>Candles and Roses <i>(Rs 130)</i>", k="please select your restaurant,Anandha Bavan ,  Saravana Bavan ,  Hotel Juha ,  Ente Kerelam ,  Dhabba EXpress , Candles and Roses"):

isInArray(fruit, lastmsg)==true?(smsg="<img src='img/fruit.jpg' height='100px'></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Candles and Roses <i>(Rs 160)</i><br>Tava <i>(Rs 170)</i><br>Chin Chin <i>(Rs 150)</i><br>The Oasis Restaurant <i>(Rs 140)</i><br>Kowloon <i>(Rs 130)</i><br>Anjappar Chettinal <i>(Rs 160)</i>", k="please select your restaurant, Candles and Roses , Tava , Chin Chin ,  The Oasis Restaurant , Kowloon  , Anjappar Chettinal"):
isInArray(candles, lastmsg)==true?(smsg="Thankyou, Please send me your address in the following format,address salem.", k="Thankyou, Please send me your address in the following format,address salem."):
isInArray(ente, lastmsg)==true?(smsg="Thankyou, Please send me your address in the following format,address salem.", k="Thankyou, Please send me your address in the following format,address salem."):
isInArray(dhabba, lastmsg)==true?(smsg="Thankyou, Please send me your address in the following format,address salem.", k="Thankyou, Please send me your address in the following format,address salem."):
isInArray(anjappar, lastmsg)==true?(smsg="Thankyou, Please send me your address in the following format,address salem.", k="Thankyou, Please send me your address in the following format,address salem."):
isInArray(shawarma, lastmsg)==true?(smsg="<img src='img/chicken-shawarma.jpg' height='100px'></img><br>Please select your restaurant.<br><div class='break-bar'></div><br>Anandha Bavan <i>(Rs 150)</i><br>Saravana Bavan <i>(Rs 120)</i><br>Hotel Juha <i>(Rs 140)</i><br>Ente Kerelam <i>(Rs 160)</i><br>Dhabba EXpress <i>(Rs 150)</i><br>Candles and Roses <i>(Rs 180)</i>",k="please select your restaurant, Anandha Bavan ,  Saravana Bavan ,  Hotel Juha ,  Ente Kerelam ,  Dhabba EXpress , Candles and Roses"):
isInArray(saravana, lastmsg)==true?(smsg="Thankyou, Please send me your address in the following format,address salem.", k="Thankyou, Please send me your address in the following format,address salem."):
isInArray(anandha, lastmsg)==true?(smsg="Thankyou, Please send me your address in the following format,address salem.", k="Thankyou, Please send me your address in the following format,address salem.", k=smsg):
isInArray(chinchin, lastmsg)==true?(smsg="Thankyou, Please send me your address in the following format,address salem.", k="Thankyou, Please send me your address in the following format,address salem."):


//checking if user input including SEARCH keyword
//search result using iframe 
lastmsg.substring(0, 6)=="SEARCH"?(search=lastmsg.slice(7),smsg="<b align='center'>This are the top results </b><nav class='back'  onclick='history.back()'>&larr;</nav><nav class='forword' onclick='history.forward()'>&rarr;</nav><iframe style = 'z-index:1;overflow-x:scroll; overflow-y:scroll;' scrolling='yes' height='300px' width='100%' src='https://www.bing.com/search?q="+search+"'></iframe>",k="This are the, Top results" ):

//MY Name and address
lastmsg.substring(0, 4)=="NAME"?(urname=lastmsg.slice(4),smsg="hi<br><i>"+urname+"</i><br>welcome",k="hi"+urname+" Welcome" ):
lastmsg.substring(0,10)=="MY NAME IS"?(usrname=lastmsg.slice(11),smsg="hi<br><i>"+usrname+"</i><br>welcome",k="hi"+usrname+"  Welcome" ):
lastmsg.substring(0,6)=="I WANT"?(as=lastmsg.slice(7),smsg="Sorry sir,"+as+"is not available"):


lastmsg.substring(0, 7)=="ADDRESS"?(uradd=lastmsg.slice(7),smsg="<br><i>"+uradd+"</i><br><br><br>Thankyou, please send confirm to <i>confirm</i> your address and order",k="Thankyou, Please send confirm to confirm your address and order, In order to, cancel your order ,send, cancel." ):



//if user input didn't match with any pattern
(smsg="Sorry, I have no answer for that. If you say so I can search for you. To search, <br> type <q><b> Search Your keyword </b></q> for example type : <b>Search fruit</b>",k="Sorry, I have no answer for that.   If you say, so I can search for you. To search,type,Search Your keyword,for example, type, Search fruit ");
//creating receiving msgs 
para = $("<div class='message received'>"+smsg+"</div>");
//appending receiving msg
setTimeout(function() { $('#ap').append(para);
//setting online status
$(".status").html("online");
//autoscroll 
$(".conversation-container").scrollTop(scroll);
},1100);
//speak function 
speak();
function speak2(){
  setTimeout(function(){$("#speak").click();})
}
$("#speak").click(function(){
    responsiveVoice.speak(k,"UK English Male");
})
function speak(){
    responsiveVoice.speak(k,"UK English Male");
}

}
});




  function startDictation() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      var recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = function(e) {
        document.getElementById('val').value
                                 = e.results[0][0].transcript;
        recognition.stop();
        document.getElementById('form').send();
      };

      recognition.onerror = function(e) {
        recognition.stop();
      }

    }
  }


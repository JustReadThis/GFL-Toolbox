const TDoll_List = document.getElementById('TDoll_List');
const SearchBar = document.getElementById('SearchBar');
let Bunch_TDoll = [];

SearchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const Filtered_TDoll = Bunch_TDoll.filter((Tdoll) => {
        return (
            Tdoll.name.toLowerCase().includes(searchString) ||
            Tdoll.timer.toLowerCase().includes(searchString) ||
            Tdoll.t_string.toLowerCase().includes(searchString)
        );
    });
    Display_TDoll(Filtered_TDoll);
});

const Load_TDoll = async () => {
    try {
        let url = "json/qstat.json";
        const res = await fetch(url);
        Bunch_TDoll = await res.json();

        
    } catch (err) {
        console.error(err);
    }
};

const Display_TDoll = (Tdolls) => {
    const htmlString = Tdolls
        .map((Tdoll) => {
            return `
            <li class="Tdoll" onclick="Popup_Sensor(this)">
            <h2>${Tdoll.name}</h2>
                <img style="background: url(${Tdoll.avatar}) no-repeat; width: 128px;  height: 256px;" onmouseover="Sprite_MouseOver(this)" onmouseout="Sprite_MouseOut(this)"></img>
                <p1 style="background:${Tdoll.color}">${Tdoll.class}</p1>
                <span>
                <p7 style="font-weight: bold;">${Tdoll.rarity}</p7>
                </span>
                <p3>${Tdoll.timer}</p3>

            </li>
        `;
        })
        .join('');
    TDoll_List.innerHTML = htmlString;
    Rarity_Text2();
};
Load_TDoll();


var Class_Buttons = document.getElementsByTagName('button');
for (var i = 0, len = Class_Buttons.length; i < len; i++) {
    Class_Buttons[i].onclick = Selector_Button;
};



function Selector_Button() {
    var current = document.getElementsByClassName("active");
    const Filtered_TDoll = Bunch_TDoll.filter((Tdoll) => {
        var amboy = /^★★★★$/;
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        var x = this.value;
        switch (x) {
            case "HG":
                return Tdoll.class.match(/^HG$/);
            case "SMG":
                return Tdoll.class.match(/^SMG$/);
            case "AR":
                return Tdoll.class.match(/^AR$/);
            case "RF":
                return Tdoll.class.match(/^RF$/);
            case "MG":
                return Tdoll.class.match(/^MG$/);
            case "SG":
                return Tdoll.class.match(/^SG$/);
        }
    });
    // Display_TDoll(Filtered_TDoll);
    console.log(Filtered_TDoll.sort((a,b) => b.rarity > a.rarity ));
   // const ampas = (Filtered_TDoll.sort((a,b) => b.rarity > a.rarity));
   Filtered_TDoll.sort(function(a, b) {
    if (a.rarity === b.rarity) 
         return 0;

    return b.rarity > a.rarity ? 1 : -1;
});
    
       
    
   Display_TDoll(Filtered_TDoll);

}



const Display_TDoll2 = (Tdolls) => {
    const htmlString = Tdolls
        .map((Tdoll) => {
            return `
            <div class="tdoll2">
            <div class="tdoll-item panjang1" style="justify-content: left">
            <h2>NO. ${Tdoll.id}</h2>
            </div>
            <div class="tdoll-item panjang1" style="justify-content: left">
            
            <p1 style="font-weight: bold;">${Tdoll.class}</p1>&nbsp;&nbsp;&nbsp;
            <p8 style="font-weight: bold;">${Tdoll.rarity}</p8> 
           
            </div>
            <div class="tdoll-item panjang2"style="justify-content: left">
 
            <p2>${Tdoll.name}</p2> &nbsp;||&nbsp;
            <p3>Full Name: ${Tdoll.full_name}</p3>

            </div>
            <div class="tdoll-item panjang5">
            <img  style="background: url(${Tdoll.avatar}) no-repeat; width: 128px;  height: 256px; margin-left: -7px" onmouseover="Sprite_MouseOver(this)" onmouseout="Sprite_MouseOut(this)"></img>
            </div>
            
            <div class="tdoll-item panjang5s" style="justify-content: left; ">
            <ul style="list-style-type:none; padding: 0; margin: 0; text-align: left; display: inline-block;">
            <li><p1>HP</p1></li>
            <li><p1>Damage</p1></li>
            <li><p1>Accuracy</p1></li>
            <li><p1>Evasioin</p1></li>
            <li><p1>Rate of Fire</p1></li>
            <li><p1>Move Speed</p1></li>
            <li><p1>Crit Rate</p1></li>
            <li><p1>Crit Damage</p1></li>
            <li><p1>Armor Penetration</p1></li>
            <li><p1>Armor</p1> </li>
            </ul> 

            <ul style="list-style-type:none; padding: 0; margin: 0; text-align: right; display: inline-block;">
            <li style="margin-right: 13px;">${Tdoll.hp} </li>
            <li style="margin-right: 13px;">${Tdoll.damage} </li>
            <li style="margin-right: 13px;">${Tdoll.accuracy} </li>
            <li style="margin-right: 13px;">${Tdoll.evasion} </li>
            <li style="margin-right: 13px;">${Tdoll.rof} </li>
            <li style="margin-right: 13px;">${Tdoll.ms} </li>
            <li>${Tdoll.crit_rate} </li>
            <li>${Tdoll.crit_dam} </li>
            <li style="margin-right: 13px;">${Tdoll.armor_pen} </li>
            <li style="margin-right: 13px;">${Tdoll.armor} </li>
            </ul> 
            </div>


            <div class="tdoll-item panjang4" style="justify-content: left;">
            
            <table>
  <tr>
    <td class="tg-0lax">${Tdoll.buff_tile7}</td>
    <td class="tg-0lax">${Tdoll.buff_tile8}</td>
    <td class="tg-0lax">${Tdoll.buff_tile9}</td>
  </tr>
  <tr>
    <td class="tg-0lax">${Tdoll.buff_tile4}</td>
    <td class="tg-0lax">${Tdoll.buff_tile5}</td>
    <td class="tg-0lax">${Tdoll.buff_tile6}</td>
  </tr>
  <tr>
    <td class="tg-0lax">${Tdoll.buff_tile1}</td>
    <td class="tg-0lax">${Tdoll.buff_tile2}</td>
    <td class="tg-0lax">${Tdoll.buff_tile3}</td>
  </tr>
</table>
            <ul style="list-style-type:none; text-align: left;">
            <li><p1 style="font-weight: bold;">Affect: ${Tdoll.buff_affect}</p1> </li>
            <li><p1>${Tdoll.buff_effect1}</p1> </li>
            <li><p1>${Tdoll.buff_effect2}</p1> </li>

            </ul> 
            </div>

            
            <div class="tdoll-item panjang6" style="justify-content: left; height: 100%; overflow-y: scroll;">
            <img class="skillicon" src="${Tdoll.skill_icon}" width="75px" height="75px"></img>
            <ul style="list-style-type:none; text-align: left;">
            <li><p1 style="font-weight: bold;">Affect: ${Tdoll.skill_name}</p1> </li>
            <li><p9>Initial CD: ${Tdoll.cd_initial}s, Skill CD: ${Tdoll.cd_initial}s</p9> </li>
            <li style="margin-right:50px"><p1 style="margin-right:30px">${Tdoll.skill_desc} </p1></li>
            </ul> 
            </div>
            <div class="tdoll-item panjang3"style="justify-content: center; align-items: center;">
            <ul style="list-style-type:none; display: inline-block;">
            <li><p1>Illustrator</p1> </li>
            <li><p1>Voice</p1></li>
            <li><p1>Timer</p1></li>
            </ul> 

            <ul style="list-style-type:none; display: inline-block;">
            <li>${Tdoll.illust} </li>
            <li>${Tdoll.voice}</li>
            <li>${Tdoll.timer}</li>
            </ul> 
            </div>
           
          </div>
        `;
        })
        .join('');
    TDoll_List2.innerHTML = htmlString;
    BuffTile_Parse();
    Passive_Skill();
    Rarity_Text();
    
};

function Popup_Sensor(li) {
    var TextInsideLi = li.getElementsByTagName('h2')[0].innerHTML;

    const Filtered_TDoll = Bunch_TDoll.filter((Tdoll) => {

        return (
            Tdoll.name.match(TextInsideLi)
        );
    });
    Display_TDoll2(Filtered_TDoll);
    location.href = "#popup1";

}


function BuffTile_Parse(){

    var AllTableCells = document.getElementsByTagName('td');
    for (var i = 0, max = AllTableCells.length; i < max; i++) {
        var node = AllTableCells[i];
        var CurrentText = node.childNodes[0].nodeValue;
    
        switch (CurrentText) {
            case "0":
                node.style.backgroundColor = "#6B696B";
                break;
            case "1":
                node.style.backgroundColor = "#00FFDE";
                break;
            case "2":
                node.style.backgroundColor = "#FFFFFF";
                break;
    
        }
    }
}



function Sprite_MouseOut(tdollimg) {
    tdollimg.style.backgroundPosition = "0px 0px";
};

function Sprite_MouseOver(tdollimg) {
    tdollimg.style.backgroundPosition = "-128px 0px";
};

function Passive_Skill(){
    var pskill = document.getElementsByTagName('p9')[0];
if (pskill.innerHTML == "Initial CD: 0s, Skill CD: 0s"){
    pskill.style.visibility = "hidden"; 
    pskill.style.opacity=0;
}else {
    pskill.style.visibility = "visible"; 
    pskill.style.opacity=1;
}
    //console.log(pskill.innerHTML);
//    pskill.style.color="red";
};

function Rarity_Text(){
    var rtext = document.getElementsByTagName('p8')[0];
if (rtext.innerHTML == "Extra"){
    rtext.style.color="rgba(222, 182, 255, 0.8)";
}else {
    rtext.style.color="#FFB200"; 
}
};

function Rarity_Text2(){
    var rtext2 = document.getElementsByTagName('p7');
    for (var i=0, max=rtext2.length; i < max; i++){
        var rtext2x = rtext2[i];
        if (rtext2x.innerHTML == "Extra"){
            rtext2x.style.color="rgba(222, 182, 255, 0.8)";
            rtext2x.style.backgroundColor="rgba(222, 182, 255, 0.8)";
     
        }else {
            rtext2x.style.color="#FFB200"; 
        }

    }
};
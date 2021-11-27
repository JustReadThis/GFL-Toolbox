const TDoll_List = document.getElementById('TDoll_List');
const SearchBar = document.getElementById('SearchBar');
let Bunch_TDoll = [];

SearchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const Filtered_TDoll = Bunch_TDoll.filter((Tdoll) => {
        return (
            Tdoll.name.toLowerCase().includes(searchString)
        );
    });
    Filtered_TDoll.sort(function (a, b) {
        if (a.starting_rarity === b.starting_rarity)
            return 0;

        return b.starting_rarity > a.starting_rarity ? 1 : -1;
    });

    Display_TDoll(Filtered_TDoll);
});

const Load_TDoll = async () => {
    try {
        let url = "json/protocol_assimilation_stat.json";
        const res = await fetch(url);
        Bunch_TDoll = await res.json();

    } catch (err) {
        //console.error(err);
    }
};

const Display_TDoll = (Tdolls) => {
    const htmlString = Tdolls
        .map((Tdoll) => {
            return `
            <li class="Tdoll" onclick="Popup_Sensor(this)">
            
            <div class="name">
            <h2>${Tdoll.name}</h2>
            </div>

    <div class="image_area">
    <p2>${Tdoll.faction}</p2>
    <img style="background: url(${Tdoll.avatar}) no-repeat; width: 240px;  height: 240px; transition: .2s; transition-timing-function: linear; cursor: pointer;" onmouseover="Sprite_MouseOver(this)" onmouseout="Sprite_MouseOut(this)"></img>
    <p3>Cost: ${Tdoll.cost}</p3>
    <p7>${Tdoll.starting_rarity}</p7>
    </div>
    

    <div class="Trait">
    <p1> ${Tdoll.battle_traits1} </p1> &nbsp
    <p1> ${Tdoll.battle_traits2} </p1> &nbsp
    <p1> ${Tdoll.battle_traits3} </p1>


    </div>
            
           

            </li>
        `;
        })
        .join('');
    TDoll_List.innerHTML = htmlString;
    Rarity_Text2();
    faction_color();
};
Load_TDoll();


var Class_Buttons = document.getElementsByTagName('button');
for (var i = 0, len = Class_Buttons.length; i < len; i++) {
    Class_Buttons[i].onclick = Selector_Button;
};



function Selector_Button() {
    var current = document.getElementsByClassName("active");
    const Filtered_TDoll = Bunch_TDoll.filter((Tdoll) => {
       
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
            Clear_All_Checked();

        }
        this.className += " active";

        var CB_Setting = document.getElementById("cb_setting");
        var huge_box_cont = document.getElementsByClassName("huge_box_cont")[0];
        huge_box_cont.style.display = "none";
        CB_Setting.checked = false;


        var x = this.value;
        switch (x) {
            case "★":
                return Tdoll.starting_rarity.match(/^★$/);
            case "★★":
                return Tdoll.starting_rarity.match(/^★★$/);
            case "★★★":
                return Tdoll.starting_rarity.match(/^★★★$/);
            case "Clear":
                current[0].className = current[0].className.replace(" active", "");
                Clear_All_Checked();
                return;
        }
    });
 
    //console.log(Filtered_TDoll.sort((a, b) => b.rarity > a.rarity));
    
    Filtered_TDoll.sort(function (a, b) {
        if (parseInt(a.cost) === parseInt(b.cost))
            return 0;

        return parseInt(b.cost) > parseInt(a.cost) ? 1 : -1;
    });



    Display_TDoll(Filtered_TDoll);

}



const Display_TDoll2 = (Tdolls) => {
    const htmlString = Tdolls
        .map((Tdoll) => {
            return `
           
            <div class="tdoll2">

  <div class="tdoll-item id_num" >
  <h3>NO. ${Tdoll.id}</h3>
  </div>

  <div class="tdoll-item start_rarity">
  <p6>${Tdoll.starting_rarity}</p6>
  </div>

  <div class="tdoll-item faction">
  <p4>${Tdoll.faction}</p4>
  </div>

  <div class="tdoll-item name_enemy">
  <p4>${Tdoll.name}</p4>
  </div>

  <div class="tdoll-item b_trait">
  <p8> ${Tdoll.battle_traits1} </p8> &nbsp
  <p8> ${Tdoll.battle_traits2} </p8> &nbsp
  <p8> ${Tdoll.battle_traits3} </p8>
  </div>

  <div class="tdoll-item img_area">
  <img  style="background: url(${Tdoll.avatar}) no-repeat; width: 240px;  height: 240px; transition: .2s; transition-timing-function: linear;" onmouseover="Sprite_MouseOver(this)" onmouseout="Sprite_MouseOut(this)"></img>
  </div>

  <div class="tdoll-item stat_area">

  <ul style="list-style-type:none; padding: 0; margin: 0 0 0 5px; text-align: left; display: inline-block;">
  <li><p10>Cost</p1></li>
  <li><p10>HP</p1></li>
  <li><p10>Damage</p1></li>
  <li><p10>Accuracy</p1></li>
  <li><p10>Evasion</p1></li>
  <li><p10>Rate of Fire</p1></li>
  <li><p10>Move Speed</p1></li>
  <li><p10>Crit Rate</p1></li>
  <li><p10>Crit Damage</p1></li>
  <li><p10>Armor Penetration</p1></li>
  <li><p10>Armor</p1> </li>
  </ul> 

  <ul style="list-style-type:none; padding: 0; margin: 0; text-align: right; display: inline-block;">
  <li style="margin-right: 13px;">${Tdoll.cost} </li>
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

  <div class="tdoll-item affect_area" style = "overflow: auto; height: 250px">

  <ul style="list-style-type: none; padding: 0; margin: 0; text-align: left; display: inline-block; border-right: 1px solid #eaeaea;">
  
  <li style="margin-left: 5px; font-weight: bold;"> <p14>Affect ${Tdoll.buff1_affect}</p14> </li>
  <li style="margin-left: 5px;"> <p11> ${Tdoll.buff1_effect1} </p11> </li>
  <li style="margin-left: 5px;"> <p11> ${Tdoll.buff1_effect2} </p11> </li>
  <li style="margin-left: 5px;"> <p11> ${Tdoll.buff1_effect3} </p11> </li>
  <li style="margin-left: 5px;"> <p11> ${Tdoll.buff1_effect4} </p11> </li> <br>
  <li style="margin-left: 5px; font-weight: bold;"> <p14>Affect ${Tdoll.buff2_affect}</p14> </li>
  <li style="margin-left: 5px;"> <p11> ${Tdoll.buff2_effect1} </p11> </li>
  <li style="margin-left: 5px;"> <p11> ${Tdoll.buff2_effect2} </p11> </li>
  <li style="margin-left: 5px;"> <p11> ${Tdoll.buff2_effect3} </p11> </li>
  <li style="margin-left: 5px;"> <p11> ${Tdoll.buff2_effect4} </p11> </li>

  </ul> 

  <ul style="list-style-type: none; padding: 0; margin: 0; text-align: left; display: inline-block;">
  
  <li style="margin-left: 5px; font-weight: bold;"> <p14>Affect ${Tdoll.buff3_affect}</p14> </li>
  <li style="margin-left: 5px;"> <p11> ${Tdoll.buff3_effect1} </p11> </li>
  <li style="margin-left: 5px;"> <p11> ${Tdoll.buff3_effect2} </p11> </li>
  <li style="margin-left: 5px;"> <p11> ${Tdoll.buff3_effect3} </p11> </li>
  <li style="margin-left: 5px;"> <p11> ${Tdoll.buff3_effect4} </p11> </li>
  
  </ul> 

  </div>

  <div class="tdoll-item pva_area">

  <ul style="list-style-type: none; padding: 0; margin: 0; text-align: left; display: inline-block;">
  
  <li style="margin-left: 5px; font-weight: bold;">Peak Value Analysis</li>
  <li style="margin-left: 20px; list-style-type: '\\1F4A0';">${Tdoll.pva1} </li>
  <li style="margin-left: 20px; list-style-type: '\\1F4A0';">${Tdoll.pva2} </li>
  <li style="margin-left: 20px; list-style-type: '\\1F4A0';">${Tdoll.pva3} </li>
  <li style="margin-left: 20px; list-style-type: '\\1F4A0';">${Tdoll.pva4} </li>
  
  </ul> 

  </div>

  <div class="tdoll-item skill1_area">

  <img class="skillicon" src="${Tdoll.skill1_icon}" width="75px" height="75px"></img>
  <ul style="list-style-type:none; text-align: left; padding-left: 20px">
  <li><p10 style="font-weight: bold;">Skill 1: ${Tdoll.skill1_name}</p10> </li>
  <li><p9>Initial CD: ${Tdoll.cd1_initial}s, Skill CD: ${Tdoll.cd1_skill}s, Level: ${Tdoll.skill1_lv}</p9> </li>
  <li style="margin-right:50px"><p10 style="margin-right:30px">${Tdoll.skill1_desc} </p10></li>
  </ul> 

  </div>

  <div class="tdoll-item skill2_area">

  <img class="skillicon" src="${Tdoll.skill2_icon}" width="75px" height="75px"></img>
  <ul style="list-style-type:none; text-align: left; padding-left: 20px">
  <li><p12 style="font-weight: bold;">Skill 2: ${Tdoll.skill2_name}</p12> </li>
  <li><p9>Initial CD: ${Tdoll.cd2_initial}s, Skill CD: ${Tdoll.cd2_skill}s, Level: ${Tdoll.skill2_lv}</p9> </li>
  <li style="margin-right:50px"><p10 style="margin-right:30px">${Tdoll.skill2_desc} </p10></li>
  </ul> 

  </div>

  <div class="tdoll-item skill3_area">

  <img class="skillicon" src="${Tdoll.skill3_icon}" width="75px" height="75px"></img>
  <ul style="list-style-type:none; text-align: left; padding-left: 20px">
  <li><p12 style="font-weight: bold;">Skill 3: ${Tdoll.skill3_name}</p12> </li>
  <li><p9>Initial CD: ${Tdoll.cd3_initial}s, Skill CD: ${Tdoll.cd3_skill}s, Level: ${Tdoll.skill3_lv}</p9> </li>
  <li style="margin-right:50px"><p10 style="margin-right:30px">${Tdoll.skill3_desc} </p10></li>
  </ul> 

  </div>

  <div class="tdoll-item skill4_area">

  <img class="skillicon" src="${Tdoll.skill4_icon}" width="75px" height="75px"></img>
  <ul style="list-style-type:none; text-align: left; padding-left: 20px">
  <li><p12 style="font-weight: bold;">Skill 4: ${Tdoll.skill4_name}</p12> </li>
  <li><p9>Initial CD: ${Tdoll.cd4_initial}s, Skill CD: ${Tdoll.cd4_skill}s, Level: ${Tdoll.skill4_lv}</p9> </li>
  <li style="margin-right:50px"><p10 style="margin-right:30px">${Tdoll.skill4_desc} </p10></li>
  </ul> 

  </div>

</div>
           
       
        `;
        })
        .join('');
    TDoll_List2.innerHTML = htmlString;
    

};

function Popup_Sensor(li) {
    var TextInsideLi = li.getElementsByTagName('h2')[0].innerHTML;
    var regex = new RegExp(`\\b^${TextInsideLi}$\\b`, 'g');
    //console.log(regex);
    const Filtered_TDoll = Bunch_TDoll.filter((Tdoll) => {

        return (
            Tdoll.name.match(regex)
        );
    });
    Display_TDoll2(Filtered_TDoll);
    document.getElementById("popup1").style.display = 'block';
    document.getElementsByClassName("popup")[0].style.display = "block";
    SkillSet_Box();
    Affect_Text_M();
    TextResizer();
    skillcd_s2t();
}

function Exit_Sensor() {
    document.getElementById("popup1").style.display = 'none';
    document.getElementsByClassName("popup")[0].style.display = "none";
}

window.onclick = function (event) {
    if (
        event.target == document.getElementById("popup1") ||
        event.target == document.getElementsByClassName("popup")[0]
        ) 
        {
                document.getElementById("popup1").style.display = "none";
                document.getElementsByClassName("popup")[0].style.display = "none";
            }
    
}


function Sprite_MouseOut(tdollimg) {
    tdollimg.style.backgroundPosition = "0px 0px";
};

function Sprite_MouseOver(tdollimg) {
    tdollimg.style.backgroundPosition = "-240px 0px";
};


// function Passive_Skill() {
//     var pskill = document.getElementsByTagName('p9')[0];
//     if (pskill.innerHTML == "Initial CD: 0s, Skill CD: 0s") {
//         pskill.style.display = 'none';

//     } else {
//         pskill.style.display = 'block';
//     }

// };

function Affect_Text_M() {
    var atext = document.getElementsByTagName('p14');
    for (var i = 0, max = atext.length; i < max; i++) {
        var atext2x = atext[i];
      //  console.log(atext2x.innerHTML);
        if (atext2x.innerHTML == "Affect   ") {
            atext2x.style.display = 'none';

        } else {
            atext2x.style.display = 'block';
        }

    }
};

function Rarity_Text() {
    var rtext = document.getElementsByTagName('p8')[0];
    if (rtext.innerHTML == "Extra") {
        rtext.style.color = "rgba(222, 182, 255, 0.8)";
    } else {
        rtext.style.color = "#FFB200";
    }
};

function Rarity_Text2() {
    var rtext2 = document.getElementsByTagName('p7');
    for (var i = 0, max = rtext2.length; i < max; i++) {
        var rtext2x = rtext2[i];
        if (rtext2x.innerHTML == "Extra") {
            rtext2x.style.color = "rgba(222, 182, 255, 0.8)";
            rtext2x.style.backgroundColor = "rgba(222, 182, 255, 0.8)";

        } else {
            rtext2x.style.color = "#FFB200";
        }

    }
};

function SkillSet_Box() {
    var sk2_text = document.getElementsByTagName('p12')[0].innerHTML;
    var sk3_text = document.getElementsByTagName('p12')[1].innerHTML;
   // var sk4_text = document.getElementsByTagName('p12')[2].innerHTML;


   // console.log(sk3_text);
    var tdoll2_boxx = document.getElementsByClassName('tdoll2')[0];
    var sk1_box = document.getElementsByClassName('tdoll-item skill1_area')[0];
    var sk2_box = document.getElementsByClassName('tdoll-item skill2_area')[0];
    var sk3_box = document.getElementsByClassName('tdoll-item skill3_area')[0];
    var sk4_box = document.getElementsByClassName('tdoll-item skill4_area')[0];


//    var sk2box = document.getElementsByClassName('tdoll-item blok-skill2')[0];
//    var sk1box = document.querySelector('.blok-skill');

const mediaQueryList = window.matchMedia('(max-width: 640px)');

if(mediaQueryList.matches) {
    if (
        (sk2_text !== "Skill 2:   ") && (sk3_text !== "Skill 3:   ")
        ) {
        sk2_box.style.display = 'flex';
        sk3_box.style.display = 'flex';
        sk4_box.style.display = 'flex';
        
        sk1_box.style["height"] = "auto";
        sk2_box.style["height"] = "auto";
        sk3_box.style["height"] = "auto";
        sk4_box.style["height"] = "auto";

        //console.log("benar");
    } if (
        (sk2_text !== "Skill 2:   ") && (sk3_text == "Skill 3:   ")
        ) {
        sk2_box.style.display = 'flex';
        sk3_box.style.display = 'none';
        sk4_box.style.display = 'none';
        sk1_box.style["height"] = "auto";
        sk2_box.style["height"] = "auto";
        sk3_box.style["height"] = "0px";
        sk4_box.style["height"] = "0px";

        tdoll2_boxx.style["grid-template-rows"] = "40px 40px 40px 240px 250px auto auto auto";

        //console.log("benar");
    } if (
        (sk2_text == "Skill 2:   ") && (sk3_text == "Skill 3:   ")
        ) {
        sk2_box.style.display = 'none';
        sk3_box.style.display = 'none';
        sk4_box.style.display = 'none';
        
        sk1_box.style["height"] = "auto";
        sk2_box.style["height"] = "0px";
        sk3_box.style["height"] = "0px";
        sk4_box.style["height"] = "0px";

        //console.log("benar");
    }
}
else {
    if (
        (sk2_text !== "Skill 2:   ") && (sk3_text !== "Skill 3:   ")
        ) {
        sk2_box.style.display = 'flex';
        sk3_box.style.display = 'flex';
        sk4_box.style.display = 'flex';
        
        sk2_box.style["height"] = "150px";
        sk3_box.style["height"] = "180px";
        sk4_box.style["height"] = "180px";

        //console.log("benar");
    } if (
        (sk2_text !== "Skill 2:   ") && (sk3_text == "Skill 3:   ")
        ) {
        sk2_box.style.display = 'flex';
        sk3_box.style.display = 'none';
        sk4_box.style.display = 'none';
        sk2_box.style["position"] = "relative";
        sk2_box.style["top"] = "10px";
        sk1_box.style["height"] = "240px";
        sk2_box.style["height"] = "250px";
        sk3_box.style["height"] = "0px";
        sk4_box.style["height"] = "0px";

        tdoll2_boxx.style["grid-template-rows"] = "40px 230px 0px 240px 0px";

        //console.log("benar");
    } if (
        (sk2_text == "Skill 2:   ") && (sk3_text == "Skill 3:   ")
        ) {
        sk2_box.style.display = 'none';
        sk3_box.style.display = 'none';
        sk4_box.style.display = 'none';
        
        sk1_box.style["height"] = "500px";
        sk2_box.style["height"] = "150px";
        sk3_box.style["height"] = "180px";
        sk4_box.style["height"] = "180px";

        //console.log("benar");
    }
}


};

/*
pedoman -->
  https://www.codegrepper.com/code-examples/javascript/how+to+get+multiple+checkbox+value+in+javascript+
  https://flaviocopes.com/javascript-regular-expressions/ 
  
buat filter searchnya. coba kita design :

-return match nya di kaitkan ama possible option regexnya (per katagori),
misalnya:  
Tdoll.name.match(regex) && Tdoll.type.match(regex2) .....

- varial regex itu variable new regex yg isinya variable penambung(1 katagori buat semua option disitu)
misalnya:    
var regex = new RegExp(`\\b^${Totalclass}$\\b`, 'g');
var regex2 = new RegExp(`\\b^${Totalrarity}$\\b`, 'g');

-variable total(katagori)  itu isinya semua option yg di push array. option dah ada simbol. hasilnya
di jadiin string trus di replace karakter biar masuk regex
misalnya:
var totalclass =[]   <--  buat nambung option class, seperti RF, AR, SMG,....
anggap centang1 namanya AR dengan value ^AR$ ; RF valuenya ^RF$ ; ...
var totalclass jadiin string --> totalclass.tostring(); 
nanti dari ["^AR$","^RF$"]   jadi  "^AR$,^RF$"
string totalclass direplace biar masuk regex --> kutip dua ujung ganti ; ,(koma) ganti || ; ...


*/

function getValue() {

    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
    }
    current.className += " active";


    //____________________________________________________array faction
    var ary_faction = []
    var CB_SF = document.getElementById("cb1")
    if (CB_SF.checked) {
        ary_faction.push(CB_SF.value);
    }
    var CB_R_Army = document.getElementById("cb2")
    if (CB_R_Army.checked) {
        ary_faction.push(CB_R_Army.value);
    }
    var CB_Paradeus = document.getElementById("cb3")
    if (CB_Paradeus.checked) {
        ary_faction.push(CB_Paradeus.value);
    }
    var CB_Other_Faction = document.getElementById("cb4")
    if (CB_Other_Faction.checked) {
        ary_faction.push(CB_Other_Faction.value);
    }
    var CB_Clear1 = document.getElementById("cb_clear1")
    if (CB_Clear1.checked) {
        ary_faction.length = 0;
        CB_SF.checked = false;
        CB_R_Army.checked = false;
        CB_Paradeus.checked = false;
        CB_Other_Faction.checked = false;
        CB_Clear1.checked = false;
    }

    //____________________________________________________array faction

    //____________________________________________________array battle trait 1
    var ary_b_trait1 = []
    var CB_Armored = document.getElementById("cb5")
    if (CB_Armored.checked) {
        ary_b_trait1.push(CB_Armored.value);
    }
    var CB_Unarmored = document.getElementById("cb6")
    if (CB_Unarmored.checked) {
        ary_b_trait1.push(CB_Unarmored.value);
    }
    var CB_Clear2 = document.getElementById("cb_clear2")
    if (CB_Clear2.checked) {
        ary_b_trait1.length = 0;
        CB_Armored.checked = false;
        CB_Unarmored.checked = false;
        CB_Clear2.checked = false;
    }

    //____________________________________________________array battle trait 1

    //____________________________________________________array battle trait 2
    var ary_b_trait2 = []
    var CB_TDoll = document.getElementById("cb7")
    if (CB_TDoll.checked) {
        ary_b_trait2.push(CB_TDoll.value);
    }
    var CB_Machine = document.getElementById("cb8")
    if (CB_Machine.checked) {
        ary_b_trait2.push(CB_Machine.value);
    }
    var CB_Clear3 = document.getElementById("cb_clear3")
    if (CB_Clear3.checked) {
        ary_b_trait2.length = 0;
        CB_TDoll.checked = false;
        CB_Machine.checked = false;
        CB_Clear3.checked = false;
    }

    //____________________________________________________array battle trait 2

    //____________________________________________________array battle trait 3
    var ary_b_trait3 = []
    var CB_Melee = document.getElementById("cb9")
    if (CB_Melee.checked) {
        ary_b_trait3.push(CB_Melee.value);
    }
    var CB_Ranged = document.getElementById("cb10")
    if (CB_Ranged.checked) {
        ary_b_trait3.push(CB_Ranged.value);
    }
    var CB_Clear4 = document.getElementById("cb_clear4")
    if (CB_Clear4.checked) {
        ary_b_trait3.length = 0;
        CB_Melee.checked = false;
        CB_Ranged.checked = false;
        CB_Clear4.checked = false;
    }

    //____________________________________________________array battle trait 3

    //____________________________________________________array rarity
    var ary_rarity = []
    var CB_3star = document.getElementById("cb11")
    if (CB_3star.checked) {
        ary_rarity.push(CB_3star.value);
    }
    var CB_2star = document.getElementById("cb12")
    if (CB_2star.checked) {
        ary_rarity.push(CB_2star.value);
    }
    var CB_1star = document.getElementById("cb13")
    if (CB_1star.checked) {
        ary_rarity.push(CB_1star.value);
    }
    var CB_Clear5 = document.getElementById("cb_clear5")
    if (CB_Clear5.checked) {
        ary_rarity.length = 0;
        CB_3star.checked = false;
        CB_2star.checked = false;
        CB_1star.checked = false;
        CB_Clear5.checked = false;
    }

    //____________________________________________________array rarity


    var ary_faction_string = ary_faction.toString();
    var ary_rarity_string = ary_rarity.toString();
    var ary_b_trait1_string = ary_b_trait1.toString();
    var ary_b_trait2_string = ary_b_trait2.toString();
    var ary_b_trait3_string = ary_b_trait3.toString();



    //console.log(ary_rarity_string);
    //var ele_s_rep = ele_string.replace(",","||")
    //console.log(ele_s_rep);
    var vocab_rule = {
        ',': "$|^",
        '^': "",
        '$': ""
    };

    var ary_faction_s_rep = ary_faction_string.replace(/\,|\^|\$/gi, function (matched) {
        return vocab_rule[matched];
    });
    var ary_rarity_s_rep = ary_rarity_string.replace(/\,|\^|\$/gi, function (matched) {
        return vocab_rule[matched];
    });
    var ary_b_trait1_s_rep = ary_b_trait1_string.replace(/\,|\^|\$/gi, function (matched) {
        return vocab_rule[matched];
    });
    var ary_b_trait2_s_rep = ary_b_trait2_string.replace(/\,|\^|\$/gi, function (matched) {
        return vocab_rule[matched];
    });
    var ary_b_trait3_s_rep = ary_b_trait3_string.replace(/\,|\^|\$/gi, function (matched) {
        return vocab_rule[matched];
    });



    //console.log(ary_rarity_s_rep);

    var regex_faction = new RegExp(`\^${ary_faction_s_rep}$`, 'g');
    var regex_rarity = new RegExp(`\^${ary_rarity_s_rep}$`, 'g');
    var regex_b_trait1 = new RegExp(`${ary_b_trait1_s_rep}`, 'g');
    var regex_b_trait2 = new RegExp(`${ary_b_trait2_s_rep}`, 'g');
    var regex_b_trait3 = new RegExp(`${ary_b_trait3_s_rep}`, 'g');


    var CB_Cross_Catagory = document.getElementById("cb0c");

    //console.log(regex_class);
    //console.log(regex_rarity);
    //console.log(regex_buff_effect);


    const Filtered_TDoll3 = Bunch_TDoll.filter((Tdoll) => {
        if (
            (ary_faction.length > 0) &
            (ary_rarity.length > 0) &
            (
            (ary_b_trait1.length > 0) &
            (ary_b_trait2.length > 0) &
            (ary_b_trait3.length > 0)
            )
        ) {
            return (
                Tdoll.faction.match(regex_faction) &&
                Tdoll.starting_rarity.match(regex_rarity) &&
                (
                    Tdoll.battle_traits1.match(regex_b_trait1) &&
                    Tdoll.battle_traits2.match(regex_b_trait2) &&
                    Tdoll.battle_traits3.match(regex_b_trait3)
                )

            )
        }
     
        if (
            (ary_faction.length == 0) &
            (ary_rarity.length == 0) &
            (
            (ary_b_trait1.length > 0) &
            (ary_b_trait2.length > 0) &
            (ary_b_trait3.length > 0)
            )
        ) {
            return (
                
                (
                    Tdoll.battle_traits1.match(regex_b_trait1) &&
                    Tdoll.battle_traits2.match(regex_b_trait2) &&
                    Tdoll.battle_traits3.match(regex_b_trait3)
                )

            )
        }

        if (
            (ary_faction.length == 0) &
            (ary_rarity.length == 0) &
            (
            (ary_b_trait1.length > 0) |
            (ary_b_trait2.length > 0) |
            (ary_b_trait3.length > 0)
            )
        ) {
            return (
                
                (
                    Tdoll.battle_traits1.match(regex_b_trait1) &&
                    Tdoll.battle_traits2.match(regex_b_trait2) &&
                    Tdoll.battle_traits3.match(regex_b_trait3)
                )

            )
        }

        if (
            (ary_faction.length > 0) &
            (ary_rarity.length > 0) &
            (
            (ary_b_trait1.length == 0) &
            (ary_b_trait2.length == 0) &
            (ary_b_trait3.length == 0)
            )
        ) {
            return (

                Tdoll.faction.match(regex_faction) &&
                Tdoll.starting_rarity.match(regex_rarity)

            )
        }

        if (
            (ary_faction.length > 0) &
            (ary_rarity.length == 0) &
            (
            (ary_b_trait1.length == 0) &
            (ary_b_trait2.length == 0) &
            (ary_b_trait3.length == 0)
            )
        ) {
            return (
                Tdoll.faction.match(regex_faction) 


            )
        }

        if (
            (ary_faction.length == 0) &
            (ary_rarity.length > 0) &
            (
            (ary_b_trait1.length == 0) &
            (ary_b_trait2.length == 0) &
            (ary_b_trait3.length == 0)
            )
        ) {
            return (

                Tdoll.starting_rarity.match(regex_rarity) 

            )
        }

        if (
            (ary_faction.length > 0) &
            (ary_rarity.length == 0) &
            (
            (ary_b_trait1.length > 0) |
            (ary_b_trait2.length > 0) |
            (ary_b_trait3.length > 0)
            )
        ) {
            return (
                Tdoll.faction.match(regex_faction) &&
                
                (
                    Tdoll.battle_traits1.match(regex_b_trait1) &&
                    Tdoll.battle_traits2.match(regex_b_trait2) &&
                    Tdoll.battle_traits3.match(regex_b_trait3)
                )

            )
        }

        if (
            (ary_faction.length == 0) &
            (ary_rarity.length > 0) &
            (
            (ary_b_trait1.length > 0) |
            (ary_b_trait2.length > 0) |
            (ary_b_trait3.length > 0)
            )
        ) {
            return (
                
                Tdoll.starting_rarity.match(regex_rarity) &&
                (
                    Tdoll.battle_traits1.match(regex_b_trait1) &&
                    Tdoll.battle_traits2.match(regex_b_trait2) &&
                    Tdoll.battle_traits3.match(regex_b_trait3)
                )

            )
        }

        if (
            (ary_faction.length > 0) &
            (ary_rarity.length > 0) |
            (
            (ary_b_trait1.length > 0) &
            (ary_b_trait2.length > 0) &
            (ary_b_trait3.length > 0)
            )
        ) {
            return (
                Tdoll.faction.match(regex_faction) &&
                Tdoll.starting_rarity.match(regex_rarity) &&
                (
                    Tdoll.battle_traits1.match(regex_b_trait1) &&
                    Tdoll.battle_traits2.match(regex_b_trait2) &&
                    Tdoll.battle_traits3.match(regex_b_trait3)
                )

            )
        }

    });
    // Display_TDoll(Filtered_TDoll);

    const fieldSorter = (fields) => (a, b) => fields.map(o => {
        let dir = 1;
        if (o[0] === '-') {
            dir = -1;
            o = o.substring(1);
        }
        return a[o] < b[o] ? dir : a[o] > b[o] ? -(dir) : 0;
    }).reduce((p, n) => p ? p : n, 0);

    const sortedRarity2Faction = Filtered_TDoll3.sort(fieldSorter(['starting_rarity', '-faction']));
    Display_TDoll(sortedRarity2Faction);
    getValuePrev()

}

function getSetting() {

    var CB_Setting = document.getElementById("cb_setting");
    var huge_box_cont = document.getElementsByClassName("huge_box_cont")[0];

    //console.log(CB_Setting.checked);
   // console.log(huge_box_cont);

    if (CB_Setting.checked == true) {
        huge_box_cont.style.display = "flex";

    } else {
        huge_box_cont.style.display = "none";

    }

    //console.log(CB_Setting.checked);

}


function Clear_All_Checked() {



    //____________________________________________________array faction

    var CB_SF = document.getElementById("cb1")
    var CB_R_Army = document.getElementById("cb2")
    var CB_Paradeus = document.getElementById("cb3")
    var CB_Other_Faction = document.getElementById("cb4")
    var CB_Clear1 = document.getElementById("cb_clear1")

        CB_SF.checked = false;
        CB_R_Army.checked = false;
        CB_Paradeus.checked = false;
        CB_Other_Faction.checked = false;
        CB_Clear1.checked = false;


    //____________________________________________________array faction

    //____________________________________________________array battle trait 1

    var CB_Armored = document.getElementById("cb5")
    var CB_Unarmored = document.getElementById("cb6")
    var CB_Clear2 = document.getElementById("cb_clear2")
        CB_Armored.checked = false;
        CB_Unarmored.checked = false;
        CB_Clear2.checked = false;


    //____________________________________________________array battle trait 1

    //____________________________________________________array battle trait 2

    var CB_TDoll = document.getElementById("cb7")
    var CB_Machine = document.getElementById("cb8")
    var CB_Clear3 = document.getElementById("cb_clear3")
        CB_TDoll.checked = false;
        CB_Machine.checked = false;
        CB_Clear3.checked = false;

    //____________________________________________________array battle trait 2

    //____________________________________________________array battle trait 3

    var CB_Melee = document.getElementById("cb9")
    var CB_Ranged = document.getElementById("cb10")
    var CB_Clear4 = document.getElementById("cb_clear4")
        CB_Melee.checked = false;
        CB_Ranged.checked = false;
        CB_Clear4.checked = false;

    //____________________________________________________array battle trait 3

    //____________________________________________________array rarity

    var CB_3star = document.getElementById("cb11")
    var CB_2star = document.getElementById("cb12")
    var CB_1star = document.getElementById("cb13")
    var CB_Clear5 = document.getElementById("cb_clear5")
        CB_3star.checked = false;
        CB_2star.checked = false;
        CB_1star.checked = false;
        CB_Clear5.checked = false;

    //____________________________________________________array rarity
}

function TextResizer() {
    var id_text = document.getElementsByTagName('h3')[0]
    var id_text_H = id_text.clientHeight
    
    var id_box = document.getElementsByClassName('tdoll-item id_num')[0]
    var id_box_H = id_box.clientHeight
    
    var name_text = document.getElementsByTagName('p4')[1]
    var name_text_W = name_text.clientWidth
    
    var name_box = document.getElementsByClassName('tdoll-item name_enemy')[0]
    var name_box_W = name_box.clientWidth
    
    if(id_text_H > id_box_H){
        id_text.style.fontSize='20px';
    };

    if(name_text_W > name_box_W){
        name_text.style.fontSize='15px';
    };

}

function skillcd_s2t(){
    var skillcd_T_text = document.getElementsByTagName('p9')[1].innerHTML
    var skillcd_T_text_split = skillcd_T_text.split(",");
    var skillcd_splited_get = skillcd_T_text_split[1].slice(-2);
    if (skillcd_splited_get = "Ts"){
        document.getElementsByTagName('p9')[1].innerHTML = skillcd_T_text.replace("Ts", " Turn");
    }

}

function faction_color(){
    var faction_text = document.getElementsByTagName('p2');

    for (var i = 0, max = faction_text.length; i < max; i++) {
        var faction_text_2x = faction_text[i];
        switch (faction_text_2x.innerHTML){
            case "Sangivs Ferri":
                faction_text_2x.style.backgroundColor = "rgba(140,0,8,0.5)";
                break;
            case "Paradeus": 
                faction_text_2x.style.backgroundColor = "rgba(209,208,206,0.9)";
                faction_text_2x.style.color = "rgb(68,68,68)";
                break;
        }

    }

    console.log(faction_text.innerHTML);

    switch (faction_text.innerHTML){
        case "Sangivs Ferri":
            faction_text.style.backgroundColor = "rgba(140,0,8,0.5)";
            break;
        case "Paradeus": 
            faction_text.style.backgroundColor = "rgba(234,234,234,0.5)";
            break;
    }
}
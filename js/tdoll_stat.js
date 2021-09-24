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
    Filtered_TDoll.sort(function (a, b) {
        if (a.rarity === b.rarity)
            return 0;

        return b.rarity > a.rarity ? 1 : -1;
    });

    Display_TDoll(Filtered_TDoll);
});

const Load_TDoll = async () => {
    try {
        let url = "json/qstat.json";
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
            <h2>${Tdoll.name}</h2>
                <img style="background: url(${Tdoll.avatar}) no-repeat; width: 128px;  height: 256px; transition: .2s; transition-timing-function: linear; cursor: pointer;" onmouseover="Sprite_MouseOver(this)" onmouseout="Sprite_MouseOut(this)"></img>
                <p1 style="background:${Tdoll.color}">${Tdoll.class}</p1>

                <span class="span_buff_block">

                <table class="table_front" style=" ;
                background-color:#6B696B;
                padding: 0; margin-left: 5px; text-align: center;
                opacity: 0.8;">
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
                
                </span>

                <span class="span_buff_text">

                <ul style="list-style-type:none; padding: 0; margin-left: 5px; text-align: left; ">
                <li><p1 style="font-weight: bold;">Affect: ${Tdoll.buff_affect}</p1> </li>
                <li><p1>${Tdoll.buff_effect1}</p1> </li>
                <li><p1>${Tdoll.buff_effect2}</p1> </li>
                <li><p1>${Tdoll.buff_effect3}</p1> </li>
                </ul> 

                </span>
                <span class="span_rarity">
                <p7 style="font-weight: bold;">${Tdoll.rarity}</p7>
                </span>
                <p3>${Tdoll.timer}</p3>

            </li>
        `;
        })
        .join('');
    TDoll_List.innerHTML = htmlString;
    Rarity_Text2();
    BuffTile_Parse();
    getValuePrev()
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
            Clear_All_Checked();

        }
        this.className += " active";

        var CB_Setting = document.getElementById("cb_setting");
        var huge_box_cont = document.getElementsByClassName("huge_box_cont")[0];
        huge_box_cont.style.display = "none";
        CB_Setting.checked = false;


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
            case "Clear":
                current[0].className = current[0].className.replace(" active", "");
                Clear_All_Checked();
                return;
        }
    });
 
    //console.log(Filtered_TDoll.sort((a, b) => b.rarity > a.rarity));
    
    Filtered_TDoll.sort(function (a, b) {
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
            <div class="tdoll-item blok-id" style="justify-content: left">
            <h3>NO. ${Tdoll.id}</h3>
            </div>

            <div class="tdoll-item blok-type" style="justify-content: left">
            <p1 style="font-weight: bold;">${Tdoll.class}</p1>&nbsp;&nbsp;&nbsp;
            <p8 style="font-weight: bold;">${Tdoll.rarity}</p8> 
            </div>

            <div class="tdoll-item blok-name"style="justify-content: left">
            <p2>${Tdoll.name}</p2> &nbsp;||&nbsp;
            <p3>Full Name: ${Tdoll.full_name}</p3>
            </div>
            
            <div class="tdoll-item blok-avatar">
            <img  style="background: url(${Tdoll.avatar}) no-repeat; width: 128px;  height: 256px; margin-left: -7px; transition: .2s; transition-timing-function: linear;" onmouseover="Sprite_MouseOver(this)" onmouseout="Sprite_MouseOut(this)"></img>
            </div>
            
            <div class="tdoll-item blok-status" style="justify-content: left; ">
            <ul style="list-style-type:none; padding: 0; margin: 0; text-align: left; display: inline-block;">
            <li><p1>HP</p1></li>
            <li><p1>Damage</p1></li>
            <li><p1>Accuracy</p1></li>
            <li><p1>Evasion</p1></li>
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

            
            <div class="tdoll-item blok-skill" style="justify-content: left; height: 260px; overflow-y: scroll;">
            <img class="skillicon" src="${Tdoll.skill_icon}" width="75px" height="75px"></img>
            <ul style="list-style-type:none; text-align: left; padding-left: 20px">
            <li><p1 style="font-weight: bold;">Skill 1: ${Tdoll.skill_name}</p1> </li>
            <li><p9>Initial CD: ${Tdoll.cd_initial}s, Skill CD: ${Tdoll.cd_skill}s</p9> </li>
            <li style="margin-right:50px"><p1 style="margin-right:30px">${Tdoll.skill_desc} </p1></li>
            </ul> 
            </div>


            <div class="tdoll-item blok-buff" style="justify-content: left;">
            
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
            <li><p1>${Tdoll.buff_effect3}</p1> </li>

            </ul> 
            </div>

            <div class="tdoll-item blok-skill2" style="justify-content: left; height: 200px; overflow-y: scroll;">
            <img class="skillicon" src="${Tdoll.skill2_icon}" width="75px" height="75px"></img>
            <ul style="list-style-type:none; text-align: left; padding-left: 20px">
            <li><p1 style="font-weight: bold;">Skill 2: ${Tdoll.skill2_name}</p1> </li>
            <li><p9>Initial CD: ${Tdoll.cd2_initial}s, Skill CD: ${Tdoll.cd2_skill}s</p9> </li>
            <li style="margin-right:50px"><p1 style="margin-right:30px">${Tdoll.skill2_desc} </p1></li>
            </ul> 
            </div>

            

            <div class="tdoll-item blok-other"style="justify-content: left; align-items: center;">
            <ul style="list-style-type:none; display: inline-block; padding-left: 0px">
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
    var regex = new RegExp(`\\b^${TextInsideLi}$\\b`, 'g');
    //console.log(regex);
    const Filtered_TDoll = Bunch_TDoll.filter((Tdoll) => {

        return (
            Tdoll.name.match(regex)
        );
    });
    Display_TDoll2(Filtered_TDoll);
    document.getElementById("popup1").style.display = 'block';
    Skill2_Box();
}

function Exit_Sensor() {
    document.getElementById("popup1").style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == document.getElementById("popup1")) {
        document.getElementById("popup1").style.display = "none";
    }
}


function BuffTile_Parse() {

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

function Passive_Skill() {
    var pskill = document.getElementsByTagName('p9')[0];
    if (pskill.innerHTML == "Initial CD: 0s, Skill CD: 0s") {
        pskill.style.display = 'none';

    } else {
        pskill.style.display = 'block';
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

function Skill2_Box() {
    var idno = document.getElementsByTagName('h3')[0].innerHTML;
    //console.log(idno);

    var sk2box = document.getElementsByClassName('tdoll-item blok-skill2')[0];
    var sk1box = document.querySelector('.blok-skill');

    var idno_text = parseInt(idno.substring(4, idno.length));

    if (idno_text >= 2000) {
        sk2box.style.display = 'flex';
        sk1box.style["grid-row"] = "span 6";
        sk1box.style["height"] = "260px";
        //console.log("benar");
    } else {
        sk2box.style.display = 'none';
        sk1box.style["grid-row"] = "span 9"
        sk1box.style["height"] = "360px";
        //console.log("salah");
    }

    //    }


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


    //____________________________________________________array class
    var ary_class = []
    var CB_HG = document.getElementById("cb1")
    if (CB_HG.checked) {
        ary_class.push(CB_HG.value);
    }
    var CB_SMG = document.getElementById("cb2")
    if (CB_SMG.checked) {
        ary_class.push(CB_SMG.value);
    }
    var CB_AR = document.getElementById("cb3")
    if (CB_AR.checked) {
        ary_class.push(CB_AR.value);
    }
    var CB_RF = document.getElementById("cb4")
    if (CB_RF.checked) {
        ary_class.push(CB_RF.value);
    }
    var CB_MG = document.getElementById("cb5")
    if (CB_MG.checked) {
        ary_class.push(CB_MG.value);
    }
    var CB_SG = document.getElementById("cb6")
    if (CB_SG.checked) {
        ary_class.push(CB_SG.value);
    }
    var CB_Clear = document.getElementById("cb7")
    if (CB_Clear.checked) {
        ary_class.length = 0;
        CB_HG.checked = false;
        CB_SMG.checked = false;
        CB_AR.checked = false;
        CB_RF.checked = false;
        CB_MG.checked = false;
        CB_SG.checked = false;
        CB_Clear.checked = false;
    }

    //____________________________________________________array class

    //____________________________________________________array rarity
    var ary_rarity = []
    var CB_6star = document.getElementById("cb8")
    if (CB_6star.checked) {
        ary_rarity.push(CB_6star.value);
    }
    var CB_5star = document.getElementById("cb9")
    if (CB_5star.checked) {
        ary_rarity.push(CB_5star.value);
    }
    var CB_4star = document.getElementById("cb10")
    if (CB_4star.checked) {
        ary_rarity.push(CB_4star.value);
    }
    var CB_3star = document.getElementById("cb11")
    if (CB_3star.checked) {
        ary_rarity.push(CB_3star.value);
    }
    var CB_2star = document.getElementById("cb12")
    if (CB_2star.checked) {
        ary_rarity.push(CB_2star.value);
    }
    var CB_special = document.getElementById("cb13")
    if (CB_special.checked) {
        ary_rarity.push(CB_special.value);
    }
    var CB_Clear2 = document.getElementById("cb14")
    if (CB_Clear2.checked) {
        ary_rarity.length = 0;
        CB_6star.checked = false;
        CB_5star.checked = false;
        CB_4star.checked = false;
        CB_3star.checked = false;
        CB_2star.checked = false;
        CB_special.checked = false;
        CB_Clear2.checked = false;
    }

    //____________________________________________________array rarity

    //____________________________________________________array buff
    var ary_buff_effect = []
    var CB_buff_damage = document.getElementById("cb15")
    if (CB_buff_damage.checked) {
        ary_buff_effect.push(CB_buff_damage.value);
    }
    var CB_buff_rof = document.getElementById("cb16")
    if (CB_buff_rof.checked) {
        ary_buff_effect.push(CB_buff_rof.value);
    }
    var CB_buff_eva = document.getElementById("cb17")
    if (CB_buff_eva.checked) {
        ary_buff_effect.push(CB_buff_eva.value);
    }
    var CB_buff_acc = document.getElementById("cb18")
    if (CB_buff_acc.checked) {
        ary_buff_effect.push(CB_buff_acc.value);
    }
    var CB_buff_scd = document.getElementById("cb19")
    if (CB_buff_scd.checked) {
        ary_buff_effect.push(CB_buff_scd.value);
    }
    var CB_buff_crit_rate = document.getElementById("cb20")
    if (CB_buff_crit_rate.checked) {
        ary_buff_effect.push(CB_buff_crit_rate.value);
    }
    var CB_buff_armor = document.getElementById("cb21")
    if (CB_buff_armor.checked) {
        ary_buff_effect.push(CB_buff_armor.value);
    }

    var CB_Clear3 = document.getElementById("cb22")
    if (CB_Clear3.checked) {
        ary_buff_effect.length = 0;
        CB_buff_damage.checked = false;
        CB_buff_rof.checked = false;
        CB_buff_eva.checked = false;
        CB_buff_acc.checked = false;
        CB_buff_scd.checked = false;
        CB_buff_crit_rate.checked = false;
        CB_buff_armor.checked = false;
        CB_Clear3.checked = false;

    }

    //____________________________________________________array buff

    var half = Math.ceil(ary_buff_effect.length / 2);

    var firstHalf = ary_buff_effect.slice(0, half)
    var secondHalf = ary_buff_effect.slice(-half)

    var ary_class_string = ary_class.toString();
    var ary_rarity_string = ary_rarity.toString();
    var ary_buff_effect1_string = firstHalf.toString();
    var ary_buff_effect2_string = secondHalf.toString();



    //console.log(ary_rarity_string);
    //var ele_s_rep = ele_string.replace(",","||")
    //console.log(ele_s_rep);
    var vocab_rule = {
        ',': "$|^",
        '^': "",
        '$': ""
    };

    var ary_class_s_rep = ary_class_string.replace(/\,|\^|\$/gi, function (matched) {
        return vocab_rule[matched];
    });
    var ary_rarity_s_rep = ary_rarity_string.replace(/\,|\^|\$/gi, function (matched) {
        return vocab_rule[matched];
    });
    var ary_buff_effect1_s_rep = ary_buff_effect1_string.replace(/\,|\^|\$/gi, function (matched) {
        return vocab_rule[matched];
    });
    var ary_buff_effect2_s_rep = ary_buff_effect2_string.replace(/\,|\^|\$/gi, function (matched) {
        return vocab_rule[matched];
    });




    //console.log(ary_rarity_s_rep);

    var regex_class = new RegExp(`\^${ary_class_s_rep}$`, 'g');
    var regex_rarity = new RegExp(`\^${ary_rarity_s_rep}$`, 'g');
    var regex_buff_effect1 = new RegExp(`${ary_buff_effect1_s_rep}`, 'g');
    var regex_buff_effect2 = new RegExp(`${ary_buff_effect2_s_rep}`, 'g');

    var CB_Cross_Catagory = document.getElementById("cb0c");

    //console.log(regex_class);
    //console.log(regex_rarity);
    //console.log(regex_buff_effect);


    const Filtered_TDoll3 = Bunch_TDoll.filter((Tdoll) => {

        if (CB_Cross_Catagory.checked) {
            if (ary_buff_effect.length > 2) {
                ary_buff_effect.length = 0;


                CB_HG.checked = false;
                CB_SMG.checked = false;
                CB_AR.checked = false;
                CB_RF.checked = false;
                CB_MG.checked = false;
                CB_SG.checked = false;
                CB_Clear.checked = false;

                CB_6star.checked = false;
                CB_5star.checked = false;
                CB_4star.checked = false;
                CB_3star.checked = false;
                CB_2star.checked = false;
                CB_special.checked = false;
                CB_Clear2.checked = false;


                CB_buff_damage.checked = false;
                CB_buff_rof.checked = false;
                CB_buff_eva.checked = false;
                CB_buff_acc.checked = false;
                CB_buff_scd.checked = false;
                CB_buff_crit_rate.checked = false;
                CB_buff_armor.checked = false;
                CB_Clear3.checked = false;


            }

            if ((ary_class.length > 0) & (ary_rarity.length > 0) & (ary_buff_effect.length > 0)) {
                //console.log("abc");
                return (
                    Tdoll.class.match(regex_class) &&
                    Tdoll.rarity.match(regex_rarity) &&
                    ((Tdoll.buff_effect1.match(regex_buff_effect1) && Tdoll.buff_effect2.match(regex_buff_effect2)) ||
                        (Tdoll.buff_effect1.match(regex_buff_effect2) && Tdoll.buff_effect2.match(regex_buff_effect1)))
                );
            }

            if ((ary_class.length > 0) & (ary_rarity.length > 0) & (ary_buff_effect.length <= 0)) {
                //console.log("ab");
                return (
                    Tdoll.class.match(regex_class) &&
                    Tdoll.rarity.match(regex_rarity)
                );
            }

            if ((ary_class.length > 0) & (ary_rarity.length <= 0) & (ary_buff_effect.length <= 0)) {
                //console.log("a");
                return (
                    Tdoll.class.match(regex_class)
                );
            }

            if ((ary_class.length <= 0) & (ary_rarity.length > 0) & (ary_buff_effect.length > 0)) {
                //console.log("bc");
                return (
                    Tdoll.rarity.match(regex_rarity) &&
                    ((Tdoll.buff_effect1.match(regex_buff_effect1) && Tdoll.buff_effect2.match(regex_buff_effect2)) ||
                        (Tdoll.buff_effect1.match(regex_buff_effect2) && Tdoll.buff_effect2.match(regex_buff_effect1)))
                );
            }

            if ((ary_class.length <= 0) & (ary_rarity.length > 0) & (ary_buff_effect.length <= 0)) {
                //console.log("b");
                return (
                    Tdoll.rarity.match(regex_rarity)
                );
            }

            if ((ary_class.length > 0) & (ary_rarity.length <= 0) & (ary_buff_effect.length > 0)) {
                //console.log("ac");
                return (
                    Tdoll.class.match(regex_class) &&
                    ((Tdoll.buff_effect1.match(regex_buff_effect1) && Tdoll.buff_effect2.match(regex_buff_effect2)) ||
                        (Tdoll.buff_effect1.match(regex_buff_effect2) && Tdoll.buff_effect2.match(regex_buff_effect1)))
                );
            }

            if ((ary_class.length <= 0) & (ary_rarity.length <= 0) & (ary_buff_effect.length > 0)) {
                //console.log("c");
                return (
                    ((Tdoll.buff_effect1.match(regex_buff_effect1) && Tdoll.buff_effect2.match(regex_buff_effect2)) ||
                        (Tdoll.buff_effect1.match(regex_buff_effect2) && Tdoll.buff_effect2.match(regex_buff_effect1)))
                );
            }

            if ((ary_class.length <= 0) & (ary_rarity.length <= 0) & (ary_buff_effect.length <= 0)) {
                //console.log("000");
                return;
            }
        } else {

            if ((ary_class.length > 0) & (ary_rarity.length > 0) & (ary_buff_effect.length > 0)) {
                //console.log("abc");
                return (
                    Tdoll.class.match(regex_class) &&
                    Tdoll.rarity.match(regex_rarity) &&
                    ((Tdoll.buff_effect1.match(regex_buff_effect1) || Tdoll.buff_effect2.match(regex_buff_effect2)) ||
                        (Tdoll.buff_effect1.match(regex_buff_effect2) || Tdoll.buff_effect2.match(regex_buff_effect1)))
                );
            }

            if ((ary_class.length > 0) & (ary_rarity.length > 0) & (ary_buff_effect.length <= 0)) {
                //console.log("ab");
                return (
                    Tdoll.class.match(regex_class) &&
                    Tdoll.rarity.match(regex_rarity)
                );
            }

            if ((ary_class.length > 0) & (ary_rarity.length <= 0) & (ary_buff_effect.length <= 0)) {
                //console.log("a");
                return (
                    Tdoll.class.match(regex_class)
                );
            }

            if ((ary_class.length <= 0) & (ary_rarity.length > 0) & (ary_buff_effect.length > 0)) {
                //console.log("bc");
                return (
                    Tdoll.rarity.match(regex_rarity) &&
                    ((Tdoll.buff_effect1.match(regex_buff_effect1) || Tdoll.buff_effect2.match(regex_buff_effect2)) ||
                        (Tdoll.buff_effect1.match(regex_buff_effect2) || Tdoll.buff_effect2.match(regex_buff_effect1)))
                );
            }

            if ((ary_class.length <= 0) & (ary_rarity.length > 0) & (ary_buff_effect.length <= 0)) {
                //console.log("b");
                return (
                    Tdoll.rarity.match(regex_rarity)
                );
            }

            if ((ary_class.length > 0) & (ary_rarity.length <= 0) & (ary_buff_effect.length > 0)) {
                //console.log("ac");
                return (
                    Tdoll.class.match(regex_class) &&
                    ((Tdoll.buff_effect1.match(regex_buff_effect1) || Tdoll.buff_effect2.match(regex_buff_effect2)) ||
                        (Tdoll.buff_effect1.match(regex_buff_effect2) || Tdoll.buff_effect2.match(regex_buff_effect1)))
                );
            }

            if ((ary_class.length <= 0) & (ary_rarity.length <= 0) & (ary_buff_effect.length > 0)) {
                //console.log("c");
                return (
                    ((Tdoll.buff_effect1.match(regex_buff_effect1) || Tdoll.buff_effect2.match(regex_buff_effect2)) ||
                        (Tdoll.buff_effect1.match(regex_buff_effect2) || Tdoll.buff_effect2.match(regex_buff_effect1)))
                );
            }

            if ((ary_class.length <= 0) & (ary_rarity.length <= 0) & (ary_buff_effect.length <= 0)) {
                //console.log("000");
                return;
            }
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

    const sortedRarity2Class = Filtered_TDoll3.sort(fieldSorter(['rarity', '-class']));
    Display_TDoll(sortedRarity2Class);
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


function getValuePrev() {

    var CB_Buff_Tile = document.getElementById("cb0a");
    var CB_Buff_Info = document.getElementById("cb0b");
    var block_buff_tile = document.getElementsByClassName("span_buff_block");
    var block_buff_info = document.getElementsByClassName("span_buff_text");

    for (var i = 0, max = block_buff_tile.length; i < max; i++) {
        var block_buff_tilex = block_buff_tile[i];

        if (CB_Buff_Tile.checked == true) {
            block_buff_tilex.style.display = "flex";


        } else {
            block_buff_tilex.style.display = "none";

        }

    }

    for (var ii = 0, max = block_buff_info.length; ii < max; ii++) {
        var block_buff_infox = block_buff_info[ii];

        if (CB_Buff_Info.checked == true) {
            block_buff_infox.style.display = "flex";


        } else {
            block_buff_infox.style.display = "none";

        }

    }




}


function getValuePrevClear() {
    var CB_Buff_Tile = document.getElementById("cb0a");
    var CB_Buff_Info = document.getElementById("cb0b");
    var CB_Cross_Catagory = document.getElementById("cb0c");
    var CB_ClearPrev = document.getElementById("cb0clear")
    if (CB_ClearPrev.checked) {
        CB_Buff_Tile.checked = false;
        CB_Buff_Info.checked = false;
        CB_Cross_Catagory.checked = false;
        CB_ClearPrev.checked = false;
        getValuePrev()
    }

}

function getValueCrossCatagory() {
    var CB_Clear = document.getElementById("cb7");
    var CB_Clear2 = document.getElementById("cb14");
    var CB_Clear3 = document.getElementById("cb22");
    CB_Clear.click();
    CB_Clear2.click();
    CB_Clear3.click();
    getValue();
}

function Clear_All_Checked() {


    var CB_HG = document.getElementById("cb1")
    var CB_SMG = document.getElementById("cb2")
    var CB_AR = document.getElementById("cb3")
    var CB_RF = document.getElementById("cb4")
    var CB_MG = document.getElementById("cb5")
    var CB_SG = document.getElementById("cb6")
    var CB_Clear = document.getElementById("cb7")


    CB_HG.checked = false;
    CB_SMG.checked = false;
    CB_AR.checked = false;
    CB_RF.checked = false;
    CB_MG.checked = false;
    CB_SG.checked = false;
    CB_Clear.checked = false;

    var CB_6star = document.getElementById("cb8")
    var CB_5star = document.getElementById("cb9")
    var CB_4star = document.getElementById("cb10")
    var CB_3star = document.getElementById("cb11")
    var CB_2star = document.getElementById("cb12")
    var CB_special = document.getElementById("cb13")
    var CB_Clear2 = document.getElementById("cb14")


    CB_6star.checked = false;
    CB_5star.checked = false;
    CB_4star.checked = false;
    CB_3star.checked = false;
    CB_2star.checked = false;
    CB_special.checked = false;
    CB_Clear2.checked = false;

    var CB_buff_damage = document.getElementById("cb15")
    var CB_buff_rof = document.getElementById("cb16")
    var CB_buff_eva = document.getElementById("cb17")
    var CB_buff_acc = document.getElementById("cb18")
    var CB_buff_scd = document.getElementById("cb19")
    var CB_buff_crit_rate = document.getElementById("cb20")
    var CB_buff_armor = document.getElementById("cb21")
    var CB_Clear3 = document.getElementById("cb22")

    CB_buff_damage.checked = false;
    CB_buff_rof.checked = false;
    CB_buff_eva.checked = false;
    CB_buff_acc.checked = false;
    CB_buff_scd.checked = false;
    CB_buff_crit_rate.checked = false;
    CB_buff_armor.checked = false;
    CB_Clear3.checked = false;

    var CB_ClearCrossCatagory = document.getElementById("cb0c")
    CB_ClearCrossCatagory.checked = false;

}
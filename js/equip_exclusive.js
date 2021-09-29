const TDoll_List = document.getElementById('TDoll_List');
const SearchBar = document.getElementById('SearchBar');
let Bunch_TDoll = [];

SearchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const Filtered_TDoll = Bunch_TDoll.filter((Tdoll) => {
        return (
            Tdoll.name.toLowerCase().includes(searchString) ||
            Tdoll.only.toLowerCase().includes(searchString) 
        );
    });
    Filtered_TDoll.sort(function (a, b) {
        if (a.no_ === b.no_)
            return 0;

        return b.no_ < a.no_ ? 1 : -1;
    });

 if(SearchBar.value.length>0){
    Display_TDoll(Filtered_TDoll);
 } else{
    Display_TDoll(Bunch_TDoll);
 }
});


const Load_TDoll = async () => {
    try {
        let url = "json/equip_exclusive.json";
        const res = await fetch(url);
        Bunch_TDoll = await res.json();
        Display_TDoll(Bunch_TDoll);

    } catch (err) {
        //console.error(err);
    }
};

const Display_TDoll = (Tdolls) => {
    const htmlString = Tdolls
        .map((Tdoll) => {
            return `
            <div class="Tdoll">
            <div class="pic" style="background:${Tdoll.color}">
            <img src="${Tdoll.img_link}" width="100px" height="100px"></img>
            </div>

            <div class="effect-area" >
            
            <ul style="list-style-type:none; padding: 0; margin-left: 2px; text-align: left; ">
            <li><p1>${Tdoll.effect1}</p1> </li>
            <li><p1>${Tdoll.effect2}</p1> </li>
            <li><p1>${Tdoll.effect3}</p1> </li>
            <li><p1>${Tdoll.effect4}</p1> </li>
            </ul> 
            
            </div>

            <div class="type" >
            <p3>${Tdoll.type}</p3>
            </div>

            <div class="category" >
            <p2>${Tdoll.category}</p2>
            </div>

            <div class="name">
            <h2>${Tdoll.name}</h2>
            </div>

            <div class="rarity" >
            <p7 style="font-weight: bold;">${Tdoll.rarity}</p7>
            </div>

            <div class="timer">
            <p5>${Tdoll.timer}</p5>
            </div>

            <div class="target">
            <p5>[${Tdoll.target}] ${Tdoll.only}</p5>
            </div>

            </div>
        `;
        })
        .join('');
    TDoll_List.innerHTML = htmlString;
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
            case "Accessories":
                return Tdoll.category.match(/^Accessories$/);
            case "Magazine":
                return Tdoll.category.match(/^Magazine$/);
            case "T-Doll":
                return Tdoll.category.match(/^T-Doll$/);
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

        return b.rarity < a.rarity ? 1 : -1;
    });



    Display_TDoll(Filtered_TDoll);

}


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


    //____________________________________________________array category
    var ary_category = []
    var CB_Accessories = document.getElementById("cb1")
    if (CB_Accessories.checked) {
        ary_category.push(CB_Accessories.value);
    }
    var CB_Magazine = document.getElementById("cb2")
    if (CB_Magazine.checked) {
        ary_category.push(CB_Magazine.value);
    }
    var CB_TDoll = document.getElementById("cb3")
    if (CB_TDoll.checked) {
        ary_category.push(CB_TDoll.value);
    }
    var CB_Clear = document.getElementById("cb_clear1")
    if (CB_Clear.checked) {
        ary_category.length = 0;
        CB_Accessories.checked = false;
        CB_Magazine.checked = false;
        CB_TDoll.checked = false;
        CB_Clear.checked = false;
    }

    //____________________________________________________array category


    //____________________________________________________array Accessories
    var ary_Accessories = []
    var CB_Holographic_Sight = document.getElementById("cb4")
    if (CB_Holographic_Sight.checked) {
        ary_Accessories.push(CB_Holographic_Sight.value);
    }
    var CB_Night_Battle_Equipment = document.getElementById("cb5")
    if (CB_Night_Battle_Equipment.checked) {
        ary_Accessories.push(CB_Night_Battle_Equipment.value);
    }
    var CB_Optical_Sight = document.getElementById("cb6")
    if (CB_Optical_Sight.checked) {
        ary_Accessories.push(CB_Optical_Sight.value);
    }
    var CB_Red_Dot_Sight = document.getElementById("cb7")
    if (CB_Red_Dot_Sight.checked) {
        ary_Accessories.push(CB_Red_Dot_Sight.value);
    }
    var CB_Suppressor = document.getElementById("cb8")
    if (CB_Suppressor.checked) {
        ary_Accessories.push(CB_Suppressor.value);
    }
    var CB_Special1 = document.getElementById("cb9")
    if (CB_Special1.checked) {
        ary_Accessories.push(CB_Special1.value);
    }

    var CB_Clear2 = document.getElementById("cb_clear2")
    if (CB_Clear2.checked) {
        ary_Accessories.length = 0;
        CB_Holographic_Sight.checked = false;
        CB_Night_Battle_Equipment.checked = false;
        CB_Optical_Sight.checked = false;
        CB_Red_Dot_Sight.checked = false;
        CB_Suppressor.checked = false;
        CB_Special1.checked = false;
        CB_Clear2.checked = false;

    }

    //____________________________________________________array Accessories

    //____________________________________________________array Magazine
    var ary_Magazine = []
    var CB_AP_Ammo = document.getElementById("cb10")
    if (CB_AP_Ammo.checked) {
        ary_Magazine.push(CB_AP_Ammo.value);
    }
    var CB_HP_Ammo = document.getElementById("cb11")
    if (CB_HP_Ammo.checked) {
        ary_Magazine.push(CB_HP_Ammo.value);
    }
    var CB_HV_Ammo = document.getElementById("cb12")
    if (CB_HV_Ammo.checked) {
        ary_Magazine.push(CB_HV_Ammo.value);
    }
    var CB_Shotgun_Shells = document.getElementById("cb13")
    if (CB_Shotgun_Shells.checked) {
        ary_Magazine.push(CB_Shotgun_Shells.value);
    }
    var CB_Special2 = document.getElementById("cb14")
    if (CB_Special2.checked) {
        ary_Magazine.push(CB_Special2.value);
    }

    var CB_Clear3 = document.getElementById("cb_clear3")
    if (CB_Clear3.checked) {
        ary_Magazine.length = 0;
        CB_AP_Ammo.checked = false;
        CB_HP_Ammo.checked = false;
        CB_HV_Ammo.checked = false;
        CB_Shotgun_Shells.checked = false;
        CB_Special2.checked = false;
        CB_Clear3.checked = false;

    }

    //____________________________________________________array Magazine

    //____________________________________________________array Tdoll
    var ary_Tdoll = []
    var CB_Ammunition_Box = document.getElementById("cb15")
    if (CB_Ammunition_Box.checked) {
        ary_Tdoll.push(CB_Ammunition_Box.value);
    }
    var CB_Armor_Plate = document.getElementById("cb16")
    if (CB_Armor_Plate.checked) {
        ary_Tdoll.push(CB_Armor_Plate.value);
    }
    var CB_Camouflage_cloak = document.getElementById("cb17")
    if (CB_Camouflage_cloak.checked) {
        ary_Tdoll.push(CB_Camouflage_cloak.value);
    }
    var CB_Chip = document.getElementById("cb18")
    if (CB_Chip.checked) {
        ary_Tdoll.push(CB_Chip.value);
    }
    var CB_Exoskeleton = document.getElementById("cb19")
    if (CB_Exoskeleton.checked) {
        ary_Tdoll.push(CB_Exoskeleton.value);
    }
    var CB_Special3 = document.getElementById("cb20")
    if (CB_Special3.checked) {
        ary_Tdoll.push(CB_Special3.value);
    }

    var CB_Clear4 = document.getElementById("cb_clear4")
    if (CB_Clear4.checked) {
        ary_Tdoll.length = 0;
        CB_Ammunition_Box.checked = false;
        CB_Armor_Plate.checked = false;
        CB_Camouflage_cloak.checked = false;
        CB_Chip.checked = false;
        CB_Exoskeleton.checked = false;
        CB_Special3.checked = false;
        CB_Clear4.checked = false;

    }

    //____________________________________________________array Tdoll


    //____________________________________________________array rarity
    var ary_rarity = []
    var CB_5star = document.getElementById("cb21")
    if (CB_5star.checked) {
        ary_rarity.push(CB_5star.value);
    }
    var CB_4star = document.getElementById("cb22")
    if (CB_4star.checked) {
        ary_rarity.push(CB_4star.value);
    }
    var CB_3star = document.getElementById("cb23")
    if (CB_3star.checked) {
        ary_rarity.push(CB_3star.value);
    }
    var CB_2star = document.getElementById("cb24")
    if (CB_2star.checked) {
        ary_rarity.push(CB_2star.value);
    }
    var CB_Clear5 = document.getElementById("cb_clear5")
    if (CB_Clear5.checked) {
        ary_rarity.length = 0;
        CB_5star.checked = false;
        CB_4star.checked = false;
        CB_3star.checked = false;
        CB_2star.checked = false;
        CB_Clear5.checked = false;
    }

    //____________________________________________________array rarity
    var ary_category_string = ary_category.toString();
    var ary_Accessories_string = ary_Accessories.toString();
    var ary_Magazine_string = ary_Magazine.toString();
    var ary_Tdoll_string = ary_Tdoll.toString();
    var ary_rarity_string = ary_rarity.toString();




    //console.log(ary_rarity_string);
    //var ele_s_rep = ele_string.replace(",","||")
    //console.log(ele_s_rep);
    var vocab_rule = {
        ',': "$|^",
        '^': "",
        '$': ""
    };

    var ary_category_s_rep = ary_category_string.replace(/\,|\^|\$/gi, function (matched) {
        return vocab_rule[matched];
    });
    var ary_Accessories_s_rep = ary_Accessories_string.replace(/\,|\^|\$/gi, function (matched) {
        return vocab_rule[matched];
    });
    var ary_Magazine_s_rep = ary_Magazine_string.replace(/\,|\^|\$/gi, function (matched) {
        return vocab_rule[matched];
    });
    var ary_Tdoll_s_rep = ary_Tdoll_string.replace(/\,|\^|\$/gi, function (matched) {
        return vocab_rule[matched];
    });
    var ary_rarity_s_rep = ary_rarity_string.replace(/\,|\^|\$/gi, function (matched) {
        return vocab_rule[matched];
    });





    //console.log(ary_rarity_s_rep);

    var regex_category = new RegExp(`\^${ary_category_s_rep}$`, 'g');
    var regex_Accessories = new RegExp(`\^${ary_Accessories_s_rep}$`, 'g');
    var regex_Magazine = new RegExp(`\^${ary_Magazine_s_rep}$`, 'g');
    var regex_Tdoll = new RegExp(`\^${ary_Tdoll_s_rep}$`, 'g');
    var regex_rarity = new RegExp(`\^${ary_rarity_s_rep}$`, 'g');

    //console.log(regex_class);
    //console.log(regex_rarity);
    //console.log(regex_buff_effect);


    const Filtered_TDoll2 = Bunch_TDoll.filter((Tdoll) => {

        if((ary_rarity.length > 0) & ((ary_category.length > 0) | (ary_Accessories.length > 0) | (ary_Magazine.length > 0) | (ary_Tdoll.length > 0))){
            return (
                (Tdoll.category.match(regex_category) ||
                Tdoll.type.match(regex_Accessories) ||
                Tdoll.type.match(regex_Magazine) ||
                Tdoll.type.match(regex_Tdoll) ) &&
                Tdoll.rarity.match(regex_rarity)
                
            );
        }
        if((ary_rarity.length > 0) & ((ary_category.length == 0) | (ary_Accessories.length == 0) | (ary_Magazine.length == 0) | (ary_Tdoll.length == 0))){
            return (
                Tdoll.rarity.match(regex_rarity)
                
            );
        }
        else{
            return (
                (Tdoll.category.match(regex_category) ||
                Tdoll.type.match(regex_Accessories) ||
                Tdoll.type.match(regex_Magazine) ||
                Tdoll.type.match(regex_Tdoll) ) 
                
            );
    
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

    const sortedRarity2Class = Filtered_TDoll2.sort(fieldSorter(['rarity', '-class']));
    Display_TDoll(sortedRarity2Class);


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

    var CB_Accessories = document.getElementById("cb1")
    var CB_Magazine = document.getElementById("cb2")
    var CB_TDoll = document.getElementById("cb3")
    var CB_Clear = document.getElementById("cb_clear1")
        CB_Accessories.checked = false;
        CB_Magazine.checked = false;
        CB_TDoll.checked = false;
        CB_Clear.checked = false;
    //____________________________________________________array category

    //____________________________________________________array Accessories

    var CB_Holographic_Sight = document.getElementById("cb4")
    var CB_Night_Battle_Equipment = document.getElementById("cb5")
    var CB_Optical_Sight = document.getElementById("cb6")
    var CB_Red_Dot_Sight = document.getElementById("cb7")
    var CB_Suppressor = document.getElementById("cb8")
    var CB_Special1 = document.getElementById("cb9")
    var CB_Clear2 = document.getElementById("cb_clear2")
        CB_Holographic_Sight.checked = false;
        CB_Night_Battle_Equipment.checked = false;
        CB_Optical_Sight.checked = false;
        CB_Red_Dot_Sight.checked = false;
        CB_Suppressor.checked = false;
        CB_Special1.checked = false;
        CB_Clear2.checked = false;

 

    //____________________________________________________array Accessories

    //____________________________________________________array Magazine

    var CB_AP_Ammo = document.getElementById("cb10")
    var CB_HP_Ammo = document.getElementById("cb11")
    var CB_HV_Ammo = document.getElementById("cb12")
    var CB_Shotgun_Shells = document.getElementById("cb13")
    var CB_Special2 = document.getElementById("cb14")
    var CB_Clear3 = document.getElementById("cb_clear3")
        CB_AP_Ammo.checked = false;
        CB_HP_Ammo.checked = false;
        CB_HV_Ammo.checked = false;
        CB_Shotgun_Shells.checked = false;
        CB_Special2.checked = false;
        CB_Clear3.checked = false;

    //____________________________________________________array Magazine

    //____________________________________________________array Tdoll

    var CB_Ammunition_Box = document.getElementById("cb15")
    var CB_Armor_Plate = document.getElementById("cb16")
    var CB_Camouflage_cloak = document.getElementById("cb17")
    var CB_Chip = document.getElementById("cb18")
    var CB_Exoskeleton = document.getElementById("cb19")
    var CB_Special3 = document.getElementById("cb20")
    var CB_Clear4 = document.getElementById("cb_clear4")
        CB_Ammunition_Box.checked = false;
        CB_Armor_Plate.checked = false;
        CB_Camouflage_cloak.checked = false;
        CB_Chip.checked = false;
        CB_Exoskeleton.checked = false;
        CB_Special3.checked = false;
        CB_Clear4.checked = false;
    //____________________________________________________array Tdoll

    //____________________________________________________array rarity

    var CB_5star = document.getElementById("cb21")
    var CB_4star = document.getElementById("cb22")
    var CB_3star = document.getElementById("cb23")
    var CB_2star = document.getElementById("cb24")
    var CB_Clear5 = document.getElementById("cb_clear5")
        CB_5star.checked = false;
        CB_4star.checked = false;
        CB_3star.checked = false;
        CB_2star.checked = false;
        CB_Clear5.checked = false;




}
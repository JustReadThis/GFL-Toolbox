const TDoll_List = document.getElementById('TDoll_List');
const SearchBar = document.getElementById('SearchBar');
let Bunch_TDoll = [];
let Bunch_TDoll2 = [];
var haha;
var crot;
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
        let url = "json/tqstat.json";
        const res = await fetch(url);
        Bunch_TDoll = await res.json();
        Display_TDoll(Bunch_TDoll);
    } catch (err) {
        console.error(err);
    }
};

const Display_TDoll = (Tdolls) => {
    const htmlString = Tdolls
        .map((Tdoll) => {
            return `
            <div class="tdoll">
            <div class="tdoll-item panjang1" style="justify-content: left">
            <h2 onclick="crot(this)">NO. ${Tdoll.id}</h2>
            </div>
            <div class="tdoll-item panjang1" style="justify-content: right">
            <ul style="list-style-type:none;">
            <li><p1 style="font-weight: bold;">${Tdoll.class}</p1> </li>
            <li><p1 style="color: #FFB200; font-weight: bold;">${Tdoll.rarity}</p1> </li>
            </ul> 
            </div>
            <div class="tdoll-item panjang2"style="justify-content: right">
            <ul style="list-style-type:none;">
            <li><p1>Illustrator: ${Tdoll.illust}</p1> </li>
            <li><p1>Voice: ${Tdoll.voice}</p1></li>
            </ul> 
            </div>
            <div class="tdoll-item panjang3"style="justify-content: center; align-items: center;">
            <ul style="list-style-type:none;">
            <li><p2>${Tdoll.full_name}</p2> </li>
            <li><p3>Tdoll Name: ${Tdoll.name}</p3> </li>
            </ul> 
            </div>
            <div class="tdoll-item panjang3" style="justify-content: left;">five
            <ul style="list-style-type:none; text-align: left;">
            <li><p1 style="font-weight: bold;">Affect: ${Tdoll.buff_affect}</p1> </li>
            <li><p1>${Tdoll.buff_effect1}</p1> </li>
            <li><p1>${Tdoll.buff_effect2}</p1> </li>

            </ul> 
            </div>
            <div class="tdoll-item panjang4">
            <img src="${Tdoll.avatar}" width="100px" height="100px" style="background:${Tdoll.color}" ></img>
            six</div>
            
            <div class="tdoll-item panjang4" style="justify-content: left; align-items: center;">
            <ul style="list-style-type:none; padding: 0; margin: 0; text-align: left;">
            <li><p1>HP: ${Tdoll.hp}</p1> </li>
            <li><p1>Damage: ${Tdoll.damage}</p1> </li>
            <li><p1>Accuracy: ${Tdoll.accuracy}</p1> </li>
            <li><p1>Evasioin: ${Tdoll.evasion}</p1> </li>
            <li><p1>Rate of Fire: ${Tdoll.rof}</p1> </li>
            <li><p1>Move Speed: ${Tdoll.ms}</p1> </li>
            <li><p1>Crit Rate: ${Tdoll.crit_rate}</p1> </li>
            <li><p1>Crit Damage: ${Tdoll.crit_dam}</p1> </li>
            <li><p1>Armor Penetration: ${Tdoll.armor_pen}</p1> </li>
            <li><p1>Armor: ${Tdoll.armor}</p1> </li>
            

            </ul> 
            </div>
            <div class="tdoll-item panjang5" style="justify-content: left;">eight
            <ul style="list-style-type:none; text-align: left;">
            <li><p1 style="font-weight: bold;">Affect: ${Tdoll.skill_name}</p1> </li>
            <li><p1>Initial CD: ${Tdoll.cd_initial}s, Skill CD: ${Tdoll.cd_initial}s</p1> </li>
            <li><p1>${Tdoll.skill_desc} </p1></li>
            </ul> 
            </div>
            <div class="tdoll-item panjang6">nine</div>
          </div>
        `;
        })
        .join('');
    TDoll_List.innerHTML = htmlString;
};

Load_TDoll();


var buttons = document.getElementsByTagName('button');
for (var i = 0, len = buttons.length; i < len; i++) {
    buttons[i].onclick = tombol;
};



function tombol() {
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
    Display_TDoll(Filtered_TDoll);

}

function crot(imagez) {
    var aneh = imagez.innerHTML
    const Filtered_TDoll = Bunch_TDoll.filter((Tdoll) => {
      
        return (
            Tdoll.name.match(aneh)
        );
    });
    Display_TDoll(Filtered_TDoll);
   console.log(aneh);
 //   alert(aneh);
  }
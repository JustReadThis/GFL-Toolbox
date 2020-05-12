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
        let url = "json/tdoll.json";
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
            <li class="Tdoll">
                <h2>${Tdoll.name}</h2>
                <img src="${Tdoll.avatar}" style="background:${Tdoll.color}"></img>
                <p1 style="background:${Tdoll.color}">${Tdoll.class}</p1>
                <p2>${Tdoll.rarity}</p2>
                <p3>${Tdoll.timer}</p3>

            </li>
        `;
        })
        .join('');
    TDoll_List.innerHTML = htmlString;
};

Load_TDoll();

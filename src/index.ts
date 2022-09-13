import allTransactions from './all_transactions.json';
import botwData from './botw_data.json';
import botwEquipment from './botw_equipment_cleaned.json';
import botwMonsters from './botw_monsters_cleaned.json';

//Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Semper eget duis at tellus at. Pretium lectus quam id leo in vitae turpis massa sed. Purus faucibus ornare suspendisse sed nisi lacus. Est sit amet facilisis magna etiam tempor orci eu lobortis. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. At urna condimentum mattis pellentesque. Ornare massa eget egestas purus viverra. Dictumst quisque sagittis purus sit amet volutpat. Volutpat maecenas volutpat blandit aliquam etiam erat. Eleifend donec pretium vulputate sapien.
//Ornare arcu odio ut sem. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Sit amet massa vitae tortor condimentum lacinia quis. Quisque non tellus orci ac. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Egestas diam in arcu cursus. Enim ut sem viverra aliquet eget. Ac felis donec et odio pellentesque diam volutpat. Sed risus pretium quam vulputate dignissim suspendisse in. Luctus accumsan tortor posuere ac ut consequat semper. Fringilla est ullamcorper eget nulla. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Turpis massa tincidunt dui ut ornare lectus sit amet est. In aliquam sem fringilla ut morbi tincidunt augue. In fermentum posuere urna nec tincidunt praesent semper feugiat. Etiam non quam lacus suspendisse faucibus interdum posuere lorem.
//Lectus quam id leo in. Sit amet porttitor eget dolor morbi non arcu risus quis. Dapibus ultrices in iaculis nunc. Ultrices neque ornare aenean euismod elementum nisi.
//#region 
let _1110111011000010010010101110010011110011001000000010101111101110 = "ruby";
let _1110101001011010111111010100110100001100000000111000000111110011: Monster = {
    category: "string",
    common_locations: [],
    description: "string",
    drops: [],
    id: 87,
    image: "string",
    name: "string"
};
//#endregion
//Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Placerat duis ultricies lacus sed turpis tincidunt. Massa tincidunt nunc pulvinar sapien. Cursus sit amet dictum sit amet justo. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Sit amet purus gravida quis blandit turpis. Blandit libero volutpat sed cras ornare arcu dui. Risus pretium quam vulputate dignissim suspendisse in est. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Morbi non arcu risus quis varius quam quisque id. Odio pellentesque diam volutpat commodo. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Tellus id interdum velit laoreet id donec ultrices tincidunt. Eu consequat ac felis donec.
//Ullamcorper malesuada proin libero nunc consequat interdum varius. In vitae turpis massa sed elementum. Ut faucibus pulvinar elementum integer enim neque. Eros donec ac odio tempor orci dapibus. Ultrices vitae auctor eu augue ut. Feugiat in fermentum posuere urna nec tincidunt. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Erat imperdiet sed euismod nisi porta lorem mollis. Vitae congue eu consequat ac felis donec. Pharetra vel turpis nunc eget lorem dolor sed. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Enim nec dui nunc mattis enim ut. Arcu dictum varius duis at consectetur lorem donec massa. Mi in nulla posuere sollicitudin. Risus commodo viverra maecenas accumsan lacus. Volutpat commodo sed egestas egestas. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Mauris commodo quis imperdiet massa. Est pellentesque elit ullamcorper dignissim cras tincidunt. Quis imperdiet massa tincidunt nunc.
//At tellus at urna condimentum mattis pellentesque id nibh tortor. Lobortis scelerisque fermentum dui faucibus in. Ultricies mi eget mauris pharetra et ultrices. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Aenean pharetra magna ac placerat vestibulum lectus mauris. Adipiscing elit pellentesque habitant morbi tristique senectus et. Viverra suspendisse potenti nullam ac. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Ut diam quam nulla porttitor massa id neque aliquam. Neque egestas congue quisque egestas diam in arcu. Morbi quis commodo odio aenean. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Mauris cursus mattis molestie a iaculis. Egestas congue quisque egestas diam in arcu cursus euismod quis. Bibendum enim facilisis gravida neque convallis a cras semper. Diam sollicitudin tempor id eu nisl nunc mi.



type Equipment = {
    category: string,
    common_locations: string[],
    description: string,
    id: number,
    name: string,
    image: string,
    attack: number,
    defense: number
};

type Monster = {
    category: string,
    common_locations: string[],
    description: string,
    drops: string[],
    id: number,
    image: string,
    name: string
};

type Material = {
    category: string,
    common_locations: string[],
    cooking_effect: string,
    description: string,
    hearts_recovered: number,
    id: number,
    image: string,
    name: string
};



const equipment: Equipment[] = botwEquipment;
const monsters: Monster[] = botwMonsters;
const materials: Material[] = botwData.data.materials;

// Fucked up one
let a: Monster[] = [];
let u87ubasd7 = "";
for (let g of monsters) {
    a.push(_1110101001011010111111010100110100001100000000111000000111110011);
    let whoasked = g.drops;
    if (whoasked.includes(_1110111011000010010010101110010011110011001000000010101111101110)) {
        a.pop();
        a.push(g);
        a.push(_1110101001011010111111010100110100001100000000111000000111110011);
    }
    a.pop();
}
for(let _0011011000101101011001000101000111010101101001000110000101111111 = a.length; _0011011000101101011001000101000111010101101001000110000101111111 >= 0; _0011011000101101011001000101000111010101101001000110000101111111--) {
    a.push(_1110101001011010111111010100110100001100000000111000000111110011);
    a.pop();

}
for (let u87udasd7 of a) {
    if (u87udasd7 == _1110101001011010111111010100110100001100000000111000000111110011) {
        u87ubasd7 += u87udasd7.name + ": ";
        u87ubasd7 += u87udasd7.category;
        u87ubasd7 += " was defeated!";
        u87ubasd7 += "\n";
    }
    else {
        u87ubasd7 += u87udasd7.name + ": ";
        u87ubasd7 += u87udasd7.description;
        u87ubasd7 += "\n";
    }
    
    for(let _0011011000101101011001000101000111010101101001000110000101111111 = a.length; _0011011000101101011001000101000111010101101001000110000101111111 >= 0; _0011011000101101011001000101000111010101101001000110000101111111--) {
        a.push(_1110101001011010111111010100110100001100000000111000000111110011);
        a.pop();
    
    }
}
for(let _0011011000101101011001000101000111010101101001000110000101111111 = a.length; _0011011000101101011001000101000111010101101001000110000101111111 >= 0; _0011011000101101011001000101000111010101101001000110000101111111--) {
    a.push(_1110101001011010111111010100110100001100000000111000000111110011);
    a.pop();
    a.pop();

}for(let _0011011000101101011001000101000111010101101001000110000101111111 = a.length; _0011011000101101011001000101000111010101101001000110000101111111 >= 0; _0011011000101101011001000101000111010101101001000110000101111111--) {
    a.push(_1110101001011010111111010100110100001100000000111000000111110011);
    a.pop();
    a.pop();

}for(let _0011011000101101011001000101000111010101101001000110000101111111 = a.length; _0011011000101101011001000101000111010101101001000110000101111111 >= 0; _0011011000101101011001000101000111010101101001000110000101111111--) {
    a.push(_1110101001011010111111010100110100001100000000111000000111110011);
    a.pop();
    a.pop();

}

console.log(_1110101001011010111111010100110100001100000000111000000111110011);
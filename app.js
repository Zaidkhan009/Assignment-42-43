function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + 'the great';
    }
}
var magicians2 = ["zaid", "azeem", "usama"];
make_great(magicians2);
show_magicians(magicians2);
function make_great2(magicians) {
    var greatMagician = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagician.push(magicians[i] + 'the great');
    }
    return greatMagicians;
}
var magicians3 = ["Zaid", "azeem", "umar"];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);

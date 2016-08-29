// function makeGrid() {
//
//     var board = document.createElement('div');
//
//     document.body.appendChild(board);
//
//
//       board.innerText = 'board';
//       board.className = "board";
//       board.style.width = "100px";
//       board.style.height = "100px";
//
//       board.style.border = "2px";
//       board.style.borderColor= 'black';
//       // board.style.backgroundColor = 'blue';
//
//
// }
//
//     function phone(num) {
//
// for (num in phoneBook){
// console.log("phone has " + phoneBook[0]  "" phoneBook[3] + );
// }
//
//       var phoneBook = {
//         "Abe": "111-111-1111",
//         "Bob": "222-222-2222",
//         "Cam": "333-333-3333",
//         "Dan": "444-444-4444",
//         "Ern": "555-555-5555",
//         "Fry": "111-111-1111",
//         "Gil": "222-222-2222",
//         "Hal": "333-333-3333",
//         "Ike": "444-444-4444",
//         "Jim": "555-555-5555",
//         "Kip": "111-111-1111",
//         "Liv": "222-222-2222",
//         "Mia": "333-333-3333",
//         "Nik": "444-444-4444",
//         "Oli": "555-555-5555",
//         "Pam": "111-111-1111",
//         "Qiq": "222-222-2222",
//         "Rob": "333-333-3333",
//         "Stu": "444-444-4444",
//         "Tad": "555-555-5555",
//         "Uwe": "111-111-1111",
//         "Val": "222-222-2222",
//         "Wil": "333-333-3333",
//         "Xiu": "444-444-4444",
//         "Yam": "555-555-5555",
//         "Zed": "111-111-1111"
//       };
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//     }
//

var body = document.getElementsByTagName('body');
function randomColors(color) {

      var tile = document.createElement('div');
      //tile.innerText = 'tilessss';
      tile.style.backgroundColor = color;
      tile.className = "tiles";
      tile.style.width = "11.1%";
      tile.style.paddingBottom = "11.1%";
    // tile.style.paddingBottom = "9.8%";
      tile.style.float = "left";
      document.body.appendChild(tile);


}
// for(var i =0; i < 45; i++){
//   randomColors();
//
// }
  var length = 8;
  var width = 8;
  var fillBox = (length * width);


  function makeboardGame () {

    var color = '';
    for(var i = 1; i < fillBox; i++){
      if(i%2===0){
        color = 'red';

      } else  {
        color = 'black';

    }
    randomColors(color);

      }
    };

    makeboardGame();


    function makeboardGame(){
 var color = '';
 for (var i = 1; i < fillBox; i++) {
   var randomRed = Math.floor(Math.random()*255);
   var randomGreen = Math.floor(Math.random()*255);
   var randomBlue = Math.floor(Math.random()*255);
var myString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")"
color = myString;
   randomColors(color);
 }

};

makeboardGame();

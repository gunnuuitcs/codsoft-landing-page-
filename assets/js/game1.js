import {isLoggedIn} from "./app.js"

isLoggedIn()
const ply_btn = document.querySelector('#play')
const flsh_display = document.querySelector('#flash_display')
const choice_display = document.querySelector('#choices')
let correct = document.querySelector('#correct')
let wrong = document.querySelector('#wrong')
let roundnumber = document.querySelector('#roundnumber');

let game_number = 0;


let answer = document.querySelector('#answer');


let selected_emojis = []
let interval = 1000;
let level = 1;

// getting highscore
let highscore = 0;
// list of emojis
var emoji = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '☺', '🙂', '🤗', '🤔', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '🤓', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '😬', '😰', '😱', '😳', '😵', '😡', '😠', '😇', '🤠', '🤡', '🤥', '😷', '🤒', '🤕', '🤢', '🤧', '😈', '👿', '👹', '👺', '💀', '☠', '👻', '👽', '👾', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙈', '🙉', '🙊', '👦', '👦🏻', '👦🏼', '👦🏽', '👦🏾', '👦🏿', '👧', '👧🏻', '👧🏼', '👧🏽', '👧🏾', '👧🏿', '👨', '👨🏻', '👨🏼', '👨🏽', '👨🏾', '👨🏿', '👩', '👩🏻', '👩🏼', '👩🏽', '👩🏾', '👩🏿', '👴', '👴🏻', '👴🏼', '👴🏽', '👴🏾', '👴🏿', '👵', '👵🏻', '👵🏼', '👵🏽', '👵🏾', '👵🏿', '👶', '👶🏻', '👶🏼', '👶🏽', '👶🏾', '👶🏿', '👼', '👼🏻', '👼🏼', '👼🏽', '👼🏾', '👼🏿', '👮', '👮🏻', '👮🏼', '👮🏽', '👮🏾', '👮🏿', '🕵', '🕵🏻', '🕵🏼', '🕵🏽', '🕵🏾', '🕵🏿', '💂', '💂🏻', '💂🏼', '💂🏽', '💂🏾', '💂🏿', '👷', '👷🏻', '👷🏼', '👷🏽', '👷🏾', '👷🏿', '👳', '👳🏻', '👳🏼', '👳🏽', '👳🏾', '👳🏿', '👱', '👱🏻', '👱🏼', '👱🏽', '👱🏾', '👱🏿', '🎅', '🎅🏻', '🎅🏼', '🎅🏽', '🎅🏾', '🎅🏿', '🤶', '🤶🏻', '🤶🏼', '🤶🏽', '🤶🏾', '🤶🏿', '👸', '👸🏻', '👸🏼', '👸🏽', '👸🏾', '👸🏿', '🤴', '🤴🏻', '🤴🏼', '🤴🏽', '🤴🏾', '🤴🏿', '👰', '👰🏻', '👰🏼', '👰🏽', '👰🏾', '👰🏿', '🤵', '🤵🏻', '🤵🏼', '🤵🏽', '🤵🏾', '🤵🏿', '🤰', '🤰🏻', '🤰🏼', '🤰🏽', '🤰🏾', '🤰🏿', '👲', '👲🏻', '👲🏼', '👲🏽', '👲🏾', '👲🏿', '🙍', '🙍🏻', '🙍🏼', '🙍🏽', '🙍🏾', '🙍🏿', '🙎', '🙎🏻', '🙎🏼', '🙎🏽', '🙎🏾', '🙎🏿', '🙅', '🙅🏻', '🙅🏼', '🙅🏽', '🙅🏾', '🙅🏿', '🙆', '🙆🏻', '🙆🏼', '🙆🏽', '🙆🏾', '🙆🏿', '💁', '💁🏻', '💁🏼', '💁🏽', '💁🏾', '💁🏿', '🙋', '🙋🏻', '🙋🏼', '🙋🏽', '🙋🏾', '🙋🏿', '🙇', '🙇🏻', '🙇🏼', '🙇🏽', '🙇🏾', '🙇🏿', '🤦', '🤦🏻', '🤦🏼', '🤦🏽', '🤦🏾', '🤦🏿', '🤷', '🤷🏻', '🤷🏼', '🤷🏽', '🤷🏾', '🤷🏿', '💆', '💆🏻', '💆🏼', '💆🏽', '💆🏾', '💆🏿', '💇', '💇🏻', '💇🏼', '💇🏽', '💇🏾', '💇🏿', '🚶', '🚶🏻', '🚶🏼', '🚶🏽', '🚶🏾', '🚶🏿', '🏃', '🏃🏻', '🏃🏼', '🏃🏽', '🏃🏾', '🏃🏿', '💃', '💃🏻', '💃🏼', '💃🏽', '💃🏾', '💃🏿', '🕺', '🕺🏻', '🕺🏼', '🕺🏽', '🕺🏾', '🕺🏿', '👯', '🕴', '🗣', '👤', '👥', '🤺', '🏇', '⛷', '🏂', '🏌', '🏄', '🏄🏻', '🏄🏼', '🏄🏽', '🏄🏾', '🏄🏿', '🚣', '🚣🏻', '🚣🏼', '🚣🏽', '🚣🏾', '🚣🏿', '🏊', '🏊🏻', '🏊🏼', '🏊🏽', '🏊🏾', '🏊🏿', '⛹', '⛹🏻', '⛹🏼', '⛹🏽', '⛹🏾', '⛹🏿', '🏋', '🏋🏻', '🏋🏼', '🏋🏽', '🏋🏾', '🏋🏿', '🚴', '🚴🏻', '🚴🏼', '🚴🏽', '🚴🏾', '🚴🏿', '🚵', '🚵🏻', '🚵🏼', '🚵🏽', '🚵🏾', '🚵🏿', '🏎', '🏍', '🤸', '🤸🏻', '🤸🏼', '🤸🏽', '🤸🏾', '🤸🏿', '🤼', '🤼🏻', '🤼🏼', '🤼🏽', '🤼🏾', '🤼🏿', '🤽', '🤽🏻', '🤽🏼', '🤽🏽', '🤽🏾', '🤽🏿', '🤾', '🤾🏻', '🤾🏼', '🤾🏽', '🤾🏾', '🤾🏿', '🤹', '🤹🏻', '🤹🏼', '🤹🏽', '🤹🏾', '🤹🏿', '👫', '👬', '👭', '💏', '👩‍❤️‍💋‍👨', '👨‍❤️‍💋‍👨', '👩‍❤️‍💋‍👩', '💑', '👩‍❤️‍👨', '👨‍❤️‍👨', '👩‍❤️‍👩', '👪', '👨‍👩‍👦', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👩‍👦‍👦', '👨‍👩‍👧‍👧', '👨‍👨‍👦', '👨‍👨‍👧', '👨‍👨‍👧‍👦', '👨‍👨‍👦‍👦', '👨‍👨‍👧‍👧', '👩‍👩‍👦', '👩‍👩‍👧', '👩‍👩‍👧‍👦', '👩‍👩‍👦‍👦', '👩‍👩‍👧‍👧', '🏻', '🏼', '🏽', '🏾', '🏿', '💪', '💪🏻', '💪🏼', '💪🏽', '💪🏾', '💪🏿', '🤳', '🤳🏻', '🤳🏼', '🤳🏽', '🤳🏾', '🤳🏿', '👈', '👈🏻', '👈🏼', '👈🏽', '👈🏾', '👈🏿', '👉', '👉🏻', '👉🏼', '👉🏽', '👉🏾', '👉🏿', '☝', '☝🏻', '☝🏼', '☝🏽', '☝🏾', '☝🏿', '👆', '👆🏻', '👆🏼', '👆🏽', '👆🏾', '👆🏿','👇', '👇🏻', '👇🏼', '👇🏽', '👇🏾', '👇🏿', '✌', '✌🏻', '✌🏼', '✌🏽', '✌🏾', '✌🏿', '🤞', '🤞🏻', '🤞🏼', '🤞🏽', '🤞🏾', '🤞🏿', '🖖', '🖖🏻', '🖖🏼', '🖖🏽', '🖖🏾', '🖖🏿', '🤘', '🤘🏻', '🤘🏼', '🤘🏽', '🤘🏾', '🤘🏿', '🤙', '🤙🏻', '🤙🏼', '🤙🏽', '🤙🏾', '🤙🏿', '🖐', '🖐🏻', '🖐🏼', '🖐🏽', '🖐🏾', '🖐🏿', '✋', '✋🏻', '✋🏼', '✋🏽', '✋🏾', '✋🏿', '👌', '👌🏻', '👌🏼', '👌🏽', '👌🏾', '👌🏿', '👍', '👍🏻', '👍🏼', '👍🏽', '👍🏾', '👍🏿', '👎', '👎🏻', '👎🏼', '👎🏽', '👎🏾', '👎🏿', '✊', '✊🏻', '✊🏼', '✊🏽', '✊🏾', '✊🏿', '👊', '👊🏻', '👊🏼', '👊🏽', '👊🏾', '👊🏿', '🤛', '🤛🏻', '🤛🏼', '🤛🏽', '🤛🏾', '🤛🏿', '🤜', '🤜🏻', '🤜🏼', '🤜🏽', '🤜🏾', '🤜🏿', '🤚', '🤚🏻', '🤚🏼', '🤚🏽', '🤚🏾', '🤚🏿', '👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿', '👏', '👏🏻', '👏🏼', '👏🏽', '👏🏾', '👏🏿', '✍', '✍🏻', '✍🏼', '✍🏽', '✍🏾', '✍🏿', '👐', '👐🏻', '👐🏼', '👐🏽', '👐🏾', '👐🏿', '🙌', '🙌🏻', '🙌🏼', '🙌🏽', '🙌🏾', '🙌🏿', '🙏', '🙏🏻', '🙏🏼', '🙏🏽', '🙏🏾', '🙏🏿', '🤝', '🤝🏻', '🤝🏼', '🤝🏽', '🤝🏾', '🤝🏿', '💅', '💅🏻', '💅🏼', '💅🏽', '💅🏾', '💅🏿', '👂', '👂🏻', '👂🏼', '👂🏽', '👂🏾', '👂🏿', '👃', '👃🏻', '👃🏼', '👃🏽', '👃🏾', '👃🏿', '👣', '👀', '👁', '👁‍🗨', '👅', '👄', '💋', '💘', '❤', '💓', '💔', '💕', '💖', '💗', '💙', '💚', '💛', '💜', '🖤', '💝', '💞', '💟', '❣', '💌', '💤', '💢', '💣', '💥', '💦', '💨', '💫', '💬', '🗨', '🗯', '💭', '🕳', '👓', '🕶', '👔', '👕', '👖', '👗', '👘', '👙', '👚', '👛', '👜', '👝', '🛍', '🎒', '👞', '👟', '👠', '👡', '👢', '👑', '👒', '🎩', '🎓', '⛑', '📿', '💄', '💍', '💎', '🐵', '🐒', '🦍', '🐶', '🐕', '🐩', '🐺', '🦊', '🐱', '🐈', '🦁', '🐯', '🐅', '🐆', '🐴', '🐎', '🦌', '🦄', '🐮', '🐂', '🐃', '🐄', '🐷', '🐖', '🐗', '🐽', '🐏', '🐑', '🐐', '🐪', '🐫', '🐘', '🦏', '🐭', '🐁', '🐀', '🐹', '🐰', '🐇', '🐿', '🦇', '🐻', '🐨', '🐼', '🐾', '🦃', '🐔', '🐓', '🐣', '🐤', '🐥', '🐦', '🐧', '🕊', '🦅', '🦆', '🦉', '🐸', '🐊', '🐢', '🦎', '🐍', '🐲', '🐉', '🐳', '🐋', '🐬', '🐟', '🐠', '🐡', '🦈', '🐙', '🐚', '🦀', '🦐', '🦑', '🦋', '🐌', '🐛', '🐜']



// display the sequence

    ply_btn.addEventListener('click', function () {

        if (ply_btn.textContent == "Check") {
            check_answer()
            if (check_answer()) {
                if (level >= 3) {
                    if (interval>300) {
                        interval -= 50;
                        level++;
                        roundNumber.innerText=level;
                        console.log(level);
                    }
                    
                }else{
                    level++;
                    roundNumber.innerText=level;
                    console.log(level)
                }
                
                ply_btn.textContent = "Next";
            } else {
                if (highscore>level) {
                    makeHighscore()
                }
                console.log(`Highscore: ${highscore}`)
                level = 1
                ply_btn.textContent = "Try again"
            }
            
            return

        }
        


        flsh_display.innerHTML = '';
        choice_display.innerHTML = '';
        answer.innerHTML = '';
        wrong.style.display = 'none';
        correct.style.display = 'none';



        selected_emojis = createEmojiList(emoji, level);
        let counter = 0;
        let loop = setInterval(function() {
            flsh_display.innerHTML = selected_emojis[counter];
            if (counter < selected_emojis.length) {
                counter += 1;
            } else {
                flsh_display.innerHTML = '';
                clearInterval(loop)
                displayChoice()
            }
            
        }, interval);
       
        ply_btn.textContent = "Check"

    })



// creating the squence list
function createEmojiList(list, lvl) {
    let selected = []
    for (let i = 0; i < lvl + 2; i++) {
        let index = Math.floor(Math.random() * list.length)
        selected.push(list[index]);
        
    }
 
    return selected
}



function displayChoice() {
    let shuffled = []
    // display shuffled emojis from the selected_emojis
        selected_emojis.forEach(emj => {
            shuffled.push(emj)
        });
        shuffle(shuffled).forEach(emoji => {
        const span = document.createElement('span')
        span.addEventListener('click', () => choose(emoji))
        span.append(emoji)
        choice_display.appendChild(span)
    });
}

// shuffle an array
function shuffle(array) {
    let shuffled = array.sort(() => Math.random() - 0.5);
    return shuffled
  }



function choose(emoji) {
    const span = document.createElement('span')
    span.addEventListener('click', remove)
    span.append(emoji)
    answer.appendChild(span)
 
    
}

function list_quality(a, b) {
    for(var i=0;i<a.length;i++){
    if(a[i]!=b[i]) {
        return false;
    }}
    
    return true; 
    
}

function remove(e) {
    e.target.remove()
}

function check_answer() {
    let player_choice = []
    let answer_spans = document.querySelectorAll('#answer span')
    answer_spans.forEach(span => {
        player_choice.push(span.innerHTML)
    });

    if (list_quality(player_choice, selected_emojis)  && answer.innerHTML != '') {
        correct.style.display = 'block';
        correct.style.animationPlayState = 'running'
        return true
    }else{
        wrong.style.display = 'block';
        wrong.style.animationPlayState = 'running'
        return false
    }

}

// function getGameId() {
//     let transaction = DB.transaction(['Scoreboard'], 'readwrite');
//     let objectStore = transaction.objectStore('Scoreboard');

//     let request = objectStore.index("Player");

//     request.openCursor().onsuccess = (e) => {
//         let cursor = e.target.result;
//         if (cursor) {
//             if (cursor.value.Player == localStorage("loggedIn")) {
//                 return cursor.value.id;
//             }
//             cursor.continue()
//         }

//     }
//     transaction.oncomplete = () => {
//         console.log('transaction completed');
//     }
//     transaction.onerror = () => {
//         console.log('There was an error, try again!');
//     }
// }


// function makeHighscore(num, game_name, game_id) {
//     // Insert the object into the database 
//     let transaction = DB.transaction(['Scoreboard'], 'readwrite');
//     let objectStore = transaction.objectStore('Scoreboard');

//     score = {
//         Score:num,
//         GameName:game_name,
//         Player:localStorage.getItem("loggedIn"),
//         id:game_id
//     }

//     let request = objectStore.put(score);
    
//     request.onsuccess = () => {
//         console.log("highscore Updated");
//     }
//     transaction.oncomplete = () => {

//         console.log('Transaction success on makescore');
//     }
//     transaction.onerror = () => {
//         console.log('There was an error, try again!');
//     }
    

// }

// function getHighScore(game_name) {
//     let transaction = DB.transaction(['Scoreboard'], 'readwrite');
//     let objectStore = transaction.objectStore('Scoreboard');

//     let request = objectStore.index("Player");

//     request.openCursor().onsuccess = (e) => {
//         let cursor = e.target.result;
//         if (cursor) {
//             if (cursor.value.Player == localStorage("loggedIn") && cursor.value.GameName == game_name) {
//                 return cursor.value.Score;
//             }
//             cursor.continue()
//         }

//     }
//     transaction.oncomplete = () => {
//         console.log('transaction completed');
//     }
//     transaction.onerror = () => {
//         console.log('There was an error, try again!');
//     }
// }




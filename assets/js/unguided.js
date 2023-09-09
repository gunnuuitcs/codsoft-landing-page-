//quered the necessary components
let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let stoper = document.querySelector('#stoped');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

// audio player 
let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');












// stop watch 
var hr =0;
var min =0;
var sec =0;
var t;




function startTimer(){
    if(sec<59){
        sec++;
        document.getElementById('sec').innerHTML = print(sec);
    }else{
        sec=0;
        min++;
        document.getElementById('sec').innerHTML = print(sec);
    }
    if(min<=59){
        document.getElementById('min').innerHTML = print(min);
    }else{
        min=0;
        hr++
        document.getElementById('min').innerHTML = print(min);
    }
    if(hr<24){
        document.getElementById('hr').innerHTML = print(hr);
    }else{
        stop();
    }
}

function print(val){
    if(val<=9){
        return '0' + val;
    }else{
        return val
    }
}

function start(){
    t = setInterval(startTimer,1000);
    document.getElementById('start').disabled = true;
}
function stop(){
    clearInterval(t);
    document.getElementById('start').disabled = false;

}
function reset(){

    clearInterval(t);
    min=0;
    sec=0;
    hr=0;
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('min').innerHTML = '00:';
    document.getElementById('hr').innerHTML = '00:';

}















//List of songs
let All_song = [
    {
      name: "Bamboo Flute",
      path:"./assets/sounds/Beautiful Chinese Music - Bamboo Flute - -5qhNRmMilI.m4a",   
      singer: "Beautiful Chinese Music"
    },
    {
      name: "Weightless",
      path: "./assets/sounds/Marconi Union - Weightless (Official Video) - UfcAVejslrU.m4a",      
      singer: "Marconi Union"
    },
    {
      name: "Zen",
      path: "./assets/sounds/Relaxing Sounds - Zen - Chinese Bamboo Flute w - uupzk-YCBO0.m4a",
      singer: "Relaxin Sounds"
    },
  
 ];
 
 

 
 
 // function load the track
 function load_track(index_no){
     clearInterval(timer);
     reset_slider();
 
     track.src = All_song[index_no].path;
     title.innerHTML = All_song[index_no].name;	
     artist.innerHTML = All_song[index_no].singer;
     track.load();
 
     timer = setInterval(range_slider ,1000);
     total.innerHTML = All_song.length;
     present.innerHTML = index_no + 1;
 }
 
 load_track(index_no);
 
 
 //mute sound function
 function mute_sound(){
     track.volume = 0;
     volume.value = 0;
     volume_show.innerHTML = 0;
 }
 
 

  function justplay(){
      if(Playing_song==false){
          playsong();
 
      }else{
          pausesong();
          stopsong();
      }
  }
 
 
 // reset song slider
  function reset_slider(){
      slider.value = 0;
  }
 
 // play song
 function playsong(){
   track.play();
   Playing_song = true;
   play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
 }
 
 //pause song
 function pausesong(){
     track.pause();
     Playing_song = false;
     play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
 }
 function stopsong(){
     track.stop();
     Playing_song=false;
 }
 
 
 // next song
 function next_song(){
     if(index_no < All_song.length - 1){
         index_no += 1;
         load_track(index_no);
         playsong();
     }else{
         index_no = 0;
         load_track(index_no);
         playsong();
 
     }
 }
 
 
 // previous song
 function previous_song(){
     if(index_no > 0){
         index_no -= 1;
         load_track(index_no);
         playsong();
 
     }else{
         index_no = All_song.length;
         load_track(index_no);
         playsong();
     }
 }
 
 
 // change volume
 function volume_change(){
     volume_show.innerHTML = recent_volume.value;
     track.volume = recent_volume.value / 100;
 }
 
 // change slider position 
 function change_duration(){
     slider_position = track.duration * (slider.value / 100);
     track.currentTime = slider_position;
 }
 
 // autoplay function
 function autoplay_switch(){
     if (autoplay==1){
        autoplay = 0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
     }else{
        autoplay = 1;
        auto_play.style.background = "#FF8A65";
     }
 }
 
 
 function range_slider(){
     let position = 0;
         
         // update slider position
         if(!isNaN(track.duration)){
            position = track.currentTime * (100 / track.duration);
            slider.value =  position;
           }
 
        
        // function will run when the song is over
        if(track.ended){
             play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
            if(autoplay==1){
                index_no += 1;
                load_track(index_no);
                playsong();
            }
         }
      }
let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();// make available all the voice is avaliable in device
    speech.voice = voices[0];//starting voice from the first in the list

    voices.forEach((voice, i)=>(voiceSelect.options[i]=new Option(voice.name, i)));//adding all the voices avalable in device at the dropdown menu
};

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];//adding on change event so listen in different voice 
})

document.querySelector("button").addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
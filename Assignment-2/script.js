let sentenceInput = document.getElementsByClassName('sentence');
let letterInput = document.getElementsByClassName('letter');
let button = document.getElementsByClassName('submit');

button[0].addEventListener('click',()=>{
    if(!sentenceInput[0].value || !letterInput[0].value){
        alert('Please fill all fields!');
    }
    else{
        getOutput(sentenceInput[0].value, letterInput[0].value);
        sentenceInput[0].value = '';
        letterInput[0].value = '';
    }
});

function getOutput(sentence,letter){
    const idx = sentence.toLowerCase().indexOf(letter.toLowerCase());
    const para = document.createElement("h3");
    
    if(idx===-1){
        const node = document.createTextNode('The letter does not exist in the sentence!');
        para.appendChild(node);
        para.classList.add('list-failure');   
    }
    else{
        const result = sentence.slice(idx+1);
        const node = document.createTextNode(result);
        para.appendChild(node);
        para.classList.add('list-success');
    }

    document.body.appendChild(para);

    setTimeout(() => {
        document.body.removeChild(para)
    }, 3000);
}
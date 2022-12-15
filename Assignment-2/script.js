let sentenceInput = document.getElementsByClassName('sentence');
let letterInput = document.getElementsByClassName('letter');
let button = document.getElementsByClassName('submit');


button[0].addEventListener('click',()=>{

//ensures that data is typed in input fields and that data is not an empty white spaces

    if(!sentenceInput[0].value || !letterInput[0].value){
        alert('Please fill all fields!');
    }
    else if(!sentenceInput[0].value.trim() || !letterInput[0].value.trim()){
        alert('White spaces are not allowed!');
    }
    else{
        getOutput(sentenceInput[0].value, letterInput[0].value);
    }
    sentenceInput[0].value = '';
    letterInput[0].value = '';
});


//@getOutput : function checks if letter is in sentence
//             if yes then we create a h3 element and add result to it.
//             else an error message will added to h3.
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

    //the output will disappear after 3 seconds
    setTimeout(() => {
        document.body.removeChild(para)
    }, 3000);
}
let letter = 0;
    const text = "SMK Negeri 5 Batam";
    function typeText(){

        if(letter < text.length){
            document.getElementById("judul").innerHTML += text.charAt(letter);
            letter++;
            let speed = Math.floor(Math.random()* 150) + 50;
            setTimeout(typeText,speed);
        }
    }
    typeText();
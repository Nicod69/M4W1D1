/* funzione che controlla due numeri interi. Ritorna true se uno dei due è 50 o se la somma dei due è 50*/

const checkNumbers = (num1, num2) =>{
    
    if ((parseInt(num1) == 50 | parseInt(num2) == 50) | ((parseInt(num1) + parseInt(num2)) == 50)) {
        return true
    }
    else {
        return false
    }

}


 
    /*prova checkNumbers*/
    /*alert("checkNumbers = " , checkNumbers(50, 48));*/


/*------------------------------------------------------------------------------------------------------------*/
/* _Crea una funzione che rimuova il carattere ad una specifica posizione da una specifica stringa. Passa la stringa e la posizione conme 
    parametro e ritorna la stringa modificata}*/


    const removeChar = (sString, iPosition) =>{
        /*sString="stringaprova";*/
        /*alert(sString.substring(0,iPosition-1) + sString.substring(iPosition));*/
        return sString.substring(0,iPosition-1) + sString.substring(iPosition);
    }

    
    /*prova removeChar*/
    /*alert(removeChar("ciao CAMPIONE BOGIGATTO", 6));*/

/* Crea una funzione che controlli se due numeri siano compresi tra 40 o 60 o tra 70 e 100. Ritorna true se rispecchiano le 
 condizioni altrimenti false*/

const checkRangeNumbers = (num1, num2) =>{
    if (((num1 >39 & num1 <61) & (num2 >39 & num2 <61)) | ((num1 >69 & num1 <101) & (num2 >69 & num2 <101)))
        return true;
    else
        return false;
 }

/*prova checkRangeNumbers*/
/*   alert("checkRangeNumbers = " + checkRangeNumbers(71,100));*/


/* Crea una funzione che accetti il nome di una città . Ritorna true se inizia con Los o New altrimenti false*/

const checkCity = (sCity) =>{
    
    
    if (sCity.startsWith("Los") | sCity.startsWith("New"))
        return sCity;
    else    
        return false;
}

/*prova checkRangeNumbers*/
/*alert("checkCity = " + checkCity("New Parigi"));*/


/* Crea una funzione che ritorni la somma di tutti gli elementi dell'array*/
const getArSum = (arParam) =>{
    let sum =0;
         arParam.forEach(element => {
        sum = sum + element;
    });
    
    return sum;

}

/*prova getArSum*/
/*alert("getArSum = " + getArSum([1,2,3,4]));*/


/* Crea una funzione che controlli che un array non contenga in numeri 1 e 3. Se non li contiene ritorna true al altrimenti false*/
const checkNumAr = (arParam) =>{
    
        if (arParam.includes(1) | arParam.includes(3))
            return false;
        else
            return true;

}

/*prova checkNumAr*/
/*alert("checkNumAr = " + checkNumAr([1,2,3,4]));*/


/*crea una funzione che dato i gradi come parametro torni il tipo di angolo*/
const getAngleType = (degree) =>{
    
    degree = parseInt(degree);
    if (degree <90)
    {
        return "acuto";
    }
    else if(degree===90)
    {
        return "retto";
    }    
    else if(degree===180)
    {
        return "piatto";
    }
    else if(degree>89 & degree<180)
    {
        return "ottuso";
    }    
    
}

/*prova getAngleType*/
/*alert("getAngleType = " + getAngleType(90));*/


/*crea una funzione che ritorna un acronimo da una frase passata come parametro*/
const getAcron = (sWords) =>{
    let acron = "";
      
    sWords.split(" ").forEach(element =>{
        acron+=element.toString().charAt(0);
    })
    return acron;

   
}

/*prova getAcron*/
/*alert("getAcron = " + getAcron("Fabbrica Italiana Automobili Torino"));*/

/*---------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------ESERCIZI EXTRA--------------------------------------------------------*/

/*Partendo da una stringa passata come parametro ritorna il carattere usato di più*/

const getMaxUse = (sString) =>{
    let sWord = "";
    let arWord ={};
    let countMax = 0;
    for (let i=0; i<sString.length;i++) {
        /*sWord+=sString.charAt(i);*/
        arWord[sString.charAt(i)] = (arWord[sString.charAt(i)] || 0) + 1;
        if (arWord[sString.charAt(i)]>countMax)
        {
            countMax = arWord[sString.charAt(i)];
            sWord = sString.charAt(i);
        }
    }
    /*console.log(arWord)*/
    /*console.log("carattere usato di piu è: " , sWord)*/
    /*console.log("-----------");*/
    return sWord;
}


/*prova getMaxUse*/

/* alert("getMaxUse = " + getMaxUse("Fabbrica Italiana Automobili Torino")); */

/* Scrivi una funzione che controlla che due stringhe passate come parametri siano gli anagrammi l'una dell'altra. Ignora punteggiatura e spazi
e ricordati di rendere la stringa tutta minuscola. Se le parole sono anagrammi ritorna true altrimenti false */

const removePoint = (word) =>{
    const regex =[",",".", "!" , "?", "'"," "];
    for (let i=0; i<regex.length; i++){
        word = word.replace(regex[i], '');

    }
    return word;
    
}


const isAnagramWords = (word1, word2) => {
    word1 = removePoint(word1.toLowerCase());
    word2 = removePoint(word2.toLowerCase());
    word1 = word1.trim().split('').sort().join('');
    word2 = word2.trim().split('').sort().join('');
    
    /*
    alert("word1 = "+ word1);
    alert("word2 = "+ word2);
    */
    
    
    return word1 === word2

   
}

/* prova isAnagramWords*/

/*alert("isAnagramWords = " + isAnagramWords("Fabbrica. Italiana, Automobili? Torino" , "Ciao come state?"));*/

/*alert("isAnagramWords = " + isAnagramWords("fabbrica italiana" , "anailatiacirbbaf"));*/

/*alert("isAnagramWords = " + isAnagramWords("mamma" , "amamm"));*/

/*----------------------------------------------------------------------------------------------------------------------------*/
/* crea funzione che partendo da una lista di possibili anagrammi e da una parola passati come parametri restituisca la lista delle
    parole che sono anagrammi della parola stessa */

const getAllAnagram = (arAnagram, sWord) =>{
    let newWord = removePoint(sWord.toLowerCase())
        newWord = newWord.trim().split('').sort().join('');
    let arWords = [];
    
    

    arAnagram.forEach(word =>{
        let wordBis = removePoint(word.toLowerCase());
            wordBis = wordBis.trim().split('').sort().join('');
            
        if (wordBis === newWord) arWords.push(word);
    })
    return arWords;

}
/* prova getAllAnagram*/

/*alert("getAllAnagram = " + getAllAnagram(["Fabbrica", "acirbbaF", "caFabbri", "Torino"], "Fabbrica"));*/

/*------------------------------------------------------------------------------------------------------------------*/

/*crea funzione che ritorni true se due parole passate come parametri sono palindrome, false se non lo sono*/

const isPalindrome = (word1, word2) => {
    word1 = removePoint(word1.toLowerCase());
    word2 = removePoint(word2.toLowerCase());
    
    if (word1.length !== word2.length) return false;

    let y = word2.length-1;

    for (i=0; i<word1.length; i++){
        /*     
        alert("Parola 1, lettera "+i + " vale: "+word1[i]);   
        alert("Parola 2, lettera "+y + " vale: "+word2[y]);   
        */
        if (word1[i] != word2[y]) return false;
        y--;
    }

    return true;

   
}

/* prova isPalindrome*/
/*alert("isPalindrome = " + isPalindrome("mamma" , "ammaM"));*/

/*------------------------------------------------------------------------------------------------------------------*/

/*crea funzione che partendo da un numero intero come parametro ritorni il numero al contrario*/
const getReverseNumber = (num) =>{
    
    if (isNaN(parseInt(num))) {
        alert("inserire un numero");
        return false;
    }
    return num.toString().split('').reverse().join('')
    
}
/* prova getReverseNumber*/
/*alert("getReverseNumber = " + getReverseNumber(189));*/

/*------------------------------------------------------------------------------------------------------------------*/

/*crea funzione che partendo da un numero intero stampi a console la scaletta con il carattere #*/
const getScaleNumber = (num) =>{
    
    if (isNaN(parseInt(num))) {
        alert("inserire un numero");
        return false;
    }

    let charCanc = "#";

    for (i=0; i<num; i++){
        console.log(charCanc);
        charCanc = charCanc + "#";
    }
    return charCanc;
    
}
/* prova getScaleNumber*/
/* alert("getScaleNumber = " + getScaleNumber(4)); */


/*------------------------------------------------------------------------------------------------------------------*/

/*crea una funzione che data una stringa come parametro restituisca la stringa al contrario*/
const getReverseString = (sWord) => {
    return sWord.split('').reverse().join('');

 }

/* prova getReverseString*/
/*alert("getReverseString = " + getReverseString("Bombolo"));*/

/*------------------------------------------------------------------------------------------------------------------*/

/*crea una funzione che accetti un array ed un numero Y come parametri. Dividi l'array in sotto array di lunghezza Y*/

const getSplitArray = (arPam,y) => {
        
        const newObject = {};
        let ar="array";
        let numArray = 1;
        let i=0;
        newObject[0] ={ar:numArray}
        
       
        while (i<arPam.length){
            let x=0;
            ar = "array" + numArray;
            newObject[numArray-1] ={ar:arPam.slice(i,i+y)}
            console.log(newObject[numArray-1].ar);
            numArray++;
            i=i+y;
            


            
        }
         
    return newObject[0].ar;


 }


/* prova getSplitArray*/
const myAr = [1,2,3,4,5,6,7,8,9,19,22];
/*alert("getSplitArray = " + getSplitArray(myAr,5));*/

/*------------------------------------------------------------------------------------------------------------------*/

/*crea una funzione che accetti un numero positivo x come parametro. La funzione dovrebbe stampare a console una piramide creata con il carattere "#" e avente X strati*/

const createPiramid = (xStrati) =>{
    if (parseInt(xStrati)>0){
        for (let i=0; i<=xStrati; i++){
            console.log("#".repeat(i));
        }

    }
}
/* prova createPiramyd*/
/*alert("createPiramyd = " + createPiramid(5));*/

/*------------------------------------------------------------------------------------------------------------------*/

/*crea una funzione che accetti un numero intero N come parametro e ne ritorni una matrice a spirale NxN. 
 EX: N=2  [[1,2],[1,2]] */

 
 const getMultiArray = (N)=>{
    let arrayLength = N;
    let arrTmp = [];
    let arrTotal = [];
    let i = 0;
    while (arrayLength>0){
        /*console.log (arrayLength);*/
        i = 1;
        arrTmp = [];
        while (i<=N){
            arrTmp.push(i);
            i++;

        }
        arrTotal.push(arrTmp)
        /*console.log(arrTmp)*/
        arrayLength--;
    }
    /*console.log(arrTotal);*/
    return arrTotal;

 }

console.log(getMultiArray(4));
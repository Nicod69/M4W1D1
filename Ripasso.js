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
alert("getAcron = " + getAcron("Fabbrica Italiana Automobili Torino"));


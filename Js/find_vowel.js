{
    let vowel = ['a' , 'e' , 'i' , 'o' ,'u'];
    // let Names = prompt("Enter word :",""); 
    let Names = "Girishsir";
    let vowel_count = 0;
    let isVowel = "";
    let i = 0;
    console.log("in this word are Vowel is :");
    while(i < Names.length)
    {
        let j = 0;
        while(j < Names.length)
        {
            if(vowel[i] == Names[j])
            {
                isVowel += vowel[i]+ " ";
                vowel_count = vowel_count + 1;
            }
            j++;
        }
        i++;
    }

    console.log(isVowel);
    console.log("this is Vowel Count : " ,vowel_count);
}
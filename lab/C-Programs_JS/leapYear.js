// Leap year program.   



function leapYear(year){
    if(year%400 == 0){
        console.log("Given year is a leap year");
      }else if(year%100==0){
          console.log("Given yer is not a leap year");
        }else if(year%4 ==0){
            console.log("Given year is a leap year");
          }else{
              console.log("Given year is not a leap year");
            }
  }


  leapYear(2000);
  leapYear(1996);

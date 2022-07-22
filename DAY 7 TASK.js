//DAY 7 TASK


var request=new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all', true);

request.send();

request.onload=function(){
  

    var result=JSON.parse(request.response);
    console.log(result);

//get all the countries from the asias continent/region using the filter function

      var res=result.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);
      console.log(res);

//get all the coiuntries with a population of less than 2 lakh using filter function

var res=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
      console.log(res);

//print the following details name,capital,flag using foreach function

      result.forEach(element => {console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
      });
//print the total population of countries using reduce function

      var total=result.reduce((initial,ele)=>initial+ele.population,0);
      console.log(total);

//print the country which uses US dollars as currency
      
      
        var cur=result.filter((ele)=>{for (var i=0;i<ele.currencies.length;i++)
     if(ele.currencies[i].code==="USD")
     {
      return true;
     }
  })}

console.log(cur);
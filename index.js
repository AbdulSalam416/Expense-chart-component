let keys = document.querySelectorAll(".day");
var charts=document.querySelectorAll('.day-c')


const results = [];


let styleElem = document.head.appendChild(document.createElement("style"));

function fetchData(){

    
fetch("./data.json")
.then((response) => response.json())
.then((data) => {
    results.push(...data)






    

    keys.forEach(key=> key.addEventListener('click', function(){

        let div= this.classList[1]
        let clickedDay = results.filter(result => result.day==div)[0].amount

        

        styleElem.innerHTML= `.${div}-c::before{
            display: block;
            content: "${clickedDay}";
            width: 45px;
            height: 20px;
            margin-top: -20px;
            background-color: #000;
            color: #fff;
            justify-content: center;
            border-radius: 5px;
        }`
    }



    
    
    
    ))



    charts.forEach(key=> key.addEventListener('click', function(){

        let div= (this.classList[1]).slice(0,3)

        console.log(div)
        let clickedDay = results.filter(result => result.day==div)[0].amount

        

        styleElem.innerHTML= `.${div}-c::before{
            display: block;
            content: "${clickedDay}";
            width: 45px;
            height: 20px;
            margin-top: -20px;
            background-color: #000;
            color: #fff;
            justify-content: center;
            border-radius: 5px;
        }`
    }))




    
}
)




// .catch((error) => console.log("error"));


}

fetchData()



let d= new Date()

let today=d.getDay()



charts[today].style.backgroundColor='#00ffff'




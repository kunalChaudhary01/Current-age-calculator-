let userinput=document.getElementById("date")
userinput.max = new Date().toISOString().split("T")[0];
let btn=document.querySelector("#btnn")
let age=document.querySelector("#age")


btn.addEventListener("click",()=>{
    let birthdate = new Date(userinput.value);
    let d1=birthdate.getDate();
    let m1=birthdate.getMonth()+1;
    let y1=birthdate.getFullYear();

    let today = new Date();
    let d2 = today.getDate()
    let m2 = today.getMonth()+1 
    let y2 = today.getFullYear()
    console.log(birthdate.getMonth())
    console.log(today);

    let y3 = y2-y1;

    let m3 , d3;
    //month
    if( m2 >= m1){
        m3=m2-m1
    }else{
        y3--
        m3 = 12 + m2-m1
    }
    //date
    if( d2 >= d1){
        d3=d2-d1
    }else{
        m3--
        d3 = getDaysInMonth(y1,m1) + d2 - d1
    }
    if(m3<0){
        y3--
        m3 = 11
    }
    age.innerHTML=`You are  <b  style="font-weight: 900;"> ${y3} </b> years <b> ${m3} </b> months <b> ${d3} </b> days old from Today`
    console.log(` ${y3} years ${m3} months ${d3} days `)
    
})

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate()
}
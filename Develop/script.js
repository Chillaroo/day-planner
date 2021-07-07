var currentDay= moment().format("LLLL");
$("#currentDay").text(currentDay);

var currentHour= moment().format("H");

console.log(currentHour);

var save= document.querySelector(".saveBtn");

var activities = localStorage.getItem("daily activities");

//parse the activities array, if it exists, or assign it to an empty array
if(activities){
    activities= JSON.parse(activities);
    console.log(activities);
}
else{
    activities= [];
}


for(var i=6; i<22;i++){
    document.getElementById(i).value = activities[i-6];
    console.log("working");
    
    if(currentHour>i){
        document.getElementById(i).setAttribute("style", "background-color: #d3d3d3")
    }
    else if(currentHour==i){
        document.getElementById(i).setAttribute("style", "background-color: #ff6961")
    }
    else{
        document.getElementById(i).setAttribute("style", "background-color: #77dd77")
    }
}

console.log(activities);

//save user inputs to local storage
save.addEventListener("click", function(){
    console.log("clicked");

    activities = [];

    for(var i=6; i<22;i++){
        console.log(document.getElementById(i).value);
        activities.push(document.getElementById(i).value);
        /* localStorage.setItem("activity "+ i, document.getElementById(i).value); */
    }
    console.log(activities);
    localStorage.setItem("daily activities", JSON.stringify(activities));
});





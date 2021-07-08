// Variables
var currentDay= moment().format("LLLL");
var currentHour= moment().format("H");
var save= document.querySelector(".saveBtn");
var clear= document.querySelector(".clearBtn");
var activities = localStorage.getItem("daily activities");

//Display current date and time
$("#currentDay").text(currentDay);

if(activities){
    //If the activites string exists, then parse it as an array
    activities= JSON.parse(activities);
}
else{
    //if the activity string is "null", then assign it as an empty array
    activities= [];
}


for(var i=6; i<22;i++){

    if (activities.length !== 0) {
        //If the activities array is not empty, then display the user-specified activites in the appropriate timeblocks
        document.getElementById(i).value = activities[i-6];
    }
    else{
        //log "no inputs" if the activities array is empty
        console.log("no inputs");
    }
    
    if(currentHour>i){
        //set background color for timeblocks yet to come
        document.getElementById(i).setAttribute("style", "background-color: #d3d3d3");
        document.getElementById(i).parentNode.setAttribute("style", "background-color: #d3d3d3");
        document.getElementById(i).parentNode.previousElementSibling.setAttribute("style", "background-color: #d3d3d3; font-weight: bold");
    }
    else if(currentHour==i){
        //set background color for the current timeblock
        document.getElementById(i).setAttribute("style", "background-color: #ff6961; color:white");
        document.getElementById(i).parentNode.setAttribute("style", "background-color: #ff6961");
        document.getElementById(i).parentNode.previousElementSibling.setAttribute("style", "background-color: #ff6961; color: white; font-weight: bold");
    }
    else{
        //set background color for the timeblocks that have passed
        document.getElementById(i).setAttribute("style", "background-color: #77dd77");
        document.getElementById(i).parentNode.setAttribute("style", "background-color: #77dd77");
        document.getElementById(i).parentNode.previousElementSibling.setAttribute("style", "background-color: #77dd77; font-weight: bold");
    }
}

//When the save buttion is clicked...
save.addEventListener("click", function(){
    console.log("clicked");
    //Empty the activities array
    activities = [];
    for(var i=6; i<22;i++){
    //add the user inputs to the activities array
        activities.push(document.getElementById(i).value);
    }
    //save the user inputs to local storage as a string
    localStorage.setItem("daily activities", JSON.stringify(activities));
});

//When the clear button is clicked...
clear.addEventListener("click", function(){
    //Clear local storage
    localStorage.clear();
    //Display empty text in each timeblock
    for(var i=6; i<22;i++){
        document.getElementById(i).value = " ";
    }
});




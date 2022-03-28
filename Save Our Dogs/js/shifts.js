const dayToNumberMap = {
    sunday: 1,
    monday: 2,
    tuesday: 3, 
    wednesday: 4, 
    thursday: 5, 
    friday: 6, 
    saturday: 7
}

const hoursToShiftNumberMap = {
    "00:00-08:00": 1,
    "08:00-16:00": 2,
    "16:00-00:00": 3,
}

$(document).ready(function(){
    $.getJSON("data/shifts.json", function(data){
        console.log(data)

        $.each(data.patrolmen_volunteers, function () {
            console.log(this)
            const role = this.role.toLowerCase()
            const name = this.name
            this.shifts.forEach((shift)=>{
                const dayName = shift.day
                const hours = shift.hour
                const dayNumber = dayToNumberMap[dayName.toLowerCase()]
                const hoursNumber = hoursToShiftNumberMap[hours]
                
                // fill in desktop table
                $(`.hours-${hoursNumber} .days-${dayNumber} .${role}`).text(name)
                // console.log(`.hours-${hoursNumber} .days-${dayNumber} .${role}`)
                
                // fill in mobile table
                $(`.days-${dayNumber} .hours-${hoursNumber} .${role}`).text(name)
            })
            
        });

        // $("#patrolmen-list").append("</ul>");

    });
});
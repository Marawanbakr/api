import React from 'react';
import './index.css'
const Clock = () => {
    React.useEffect(() => {
    
    function showTime() {

        var now = new Date ();
    
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        if (hours > 12){

            var hours = hours - 12;
        }

        if (minutes < 10){
            
            var minutes = '0' + minutes;
        }

        if (seconds < 10){
            
            var seconds = '0' + seconds;
        }

     document.getElementById("clock").textContent = hours + ':' + minutes + ':' + seconds;
    
    }
    window.onload = function (){
        setInterval(showTime ,  500);
    }
//     var dt = new Date();
//     var h =  dt.getHours(); 
//     var  m = dt.getMinutes();
//     var thistime = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
// console.log(thistime);

})
    
    return(
        <div className="time">
            <div id="clock">
            </div>
        </div>
    )
}
export default Clock
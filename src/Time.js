import React, { useState } from 'react';
function Time ()
{
    const[time, setTime] = useState("");
    setInterval(()=>{
        var time1 = new Date().toLocaleTimeString();
        setTime(time1)
    }, 1000);

    return (
        <div>
            <h2>It is {time}.</h2>
        </div>
    );
}

export default Time;
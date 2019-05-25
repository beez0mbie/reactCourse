import React from 'react';

const date = new Date();
const hours = date.getHours();
let partOfDay;

if (hours < 12 ){
    partOfDay = 'Morning';
} else if ( 12 <= hours && hours < 17) {
    partOfDay = 'Afternoon'
} else {
    partOfDay = 'Night'
}

function MyDate(){
    return (
        <p>It's currently {date.getHours() % 12 } o'clock, <br/>
         Good {partOfDay}
        </p>
    )
}

export default MyDate;
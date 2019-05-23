import React from 'react';

const divStyle = {
    color: 'purple',
    backgroundImage: 'url("https://ak8.picdn.net/shutterstock/videos/23164888/thumb/1.jpg?i10c=img.resize(height:160)")',
}

function MyInfo(){
    return (
        <div style = {divStyle}>
            <h1>Alex Shmel</h1>
            <p>I'm a good boy</p>
            <ol>
                <li>Japan</li>
                <li>Canada</li>
                <li>Taiwan</li>
            </ol>
        </div>
    )
}

export default MyInfo
import React from 'react';

const Greetings = (props) => {
    const familiar = props.familiar
    let Greetings
    if(familiar){
        Greetings = <p>Welcome, My friend</p>
    }
    else{
        Greetings = <p>wait a minute! Who are you?</p>
    }
    return (
        <div>
            <h1>Greetings</h1>
            {Greetings}   
            <h1>Food</h1>
            {/* ? and : this is ternary operator */}
            {
                familiar ?<p>I will buy food for you</p>
                :<p>Let's eat his his whose whose</p>
            }
            <h1>Connection</h1>
            {/* if familiar is true then it will show p tag if false it will be hidden */}
            {
                familiar && <p>Let's join my facebook</p>
            }
        </div>
    );
};

export default Greetings;
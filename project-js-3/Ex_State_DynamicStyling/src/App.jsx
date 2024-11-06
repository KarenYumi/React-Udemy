import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [getStyle, setStyle] = React.useState();
    function styling(){
        setStyle('active');
    }
    return (
        <div>
            <p className={getStyle ? "active": undefined} >Style me!</p>
            <button onClick={styling} >Toggle style</button>
        </div>
    );
}
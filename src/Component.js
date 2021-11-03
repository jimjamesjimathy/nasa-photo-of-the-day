import React from 'react';
import './App.css'


const Comp = props => {
    const {keyIndex} = props
    return(
        <div>
            <h1>Now NASA nice photo there!</h1>
                <div>
                    <img src={keyIndex.url} />
                </div>

                <div>
                    <p>{keyIndex.date}</p>
                    <h3>{keyIndex.title}</h3>
                    <p>Copyright: {keyIndex.copyright}</p>
                </div>
                <div>
                    <p>{keyIndex.explantion}</p>
                </div>
        </div>
    )
}


export default Comp;
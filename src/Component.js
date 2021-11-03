import React from 'react';
import './App.css'


const Comp = props => {
    const {keyIndex} = props;
    return(
        <div>
            <h1>Now NASA nice photo there!</h1>
                <div className='img-container'>
                    <img src={keyIndex.hdurl} />
                </div>
                <div className='text-container'>

                    <p>{keyIndex.date}</p>
                    <p>{keyIndex.title}</p>
                    <p>Copyright: {keyIndex.copyright}</p>
                    
                </div>
                <div className='exp'>
                    <p>{keyIndex.explanation}</p>
                </div>
        </div>
    )
}


export default Comp;
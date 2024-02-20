import React from "react";
import './LoadData.css'

function LoadData(){
    return (
        <section className='loading__container'>
            <div className='loading__spinner'>
                <div className='loading__spinnerin'></div>
            </div>
            <p className='loading__text'>LOADING MOVIES</p>
        </section>
    );
}

export { LoadData };
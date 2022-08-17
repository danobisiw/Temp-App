import React,{useState} from 'react'

function Temperature() {
    const[temperatureValue, setTemperatureValue]=useState(10);
    const[temperatureColor, setTemperatureColor]=useState("cold")

    const increaseTemperature=()=>{
        if (temperatureValue===37)  return;
        if (temperatureValue === 0 && temperatureValue < 15){
            setTemperatureColor('cold')
        }
        const newTemperature = temperatureValue + 1
        if (newTemperature >=15){
            setTemperatureColor('hot')
        }
        setTemperatureValue(newTemperature)
    };

    const decreaseTemperature=()=>{
        if (temperatureValue===0){
            setTemperatureColor("reset");
            return;
        }

        const newTemperature =temperatureValue-1
        if (newTemperature > 0 && temperatureValue <= 15){
            setTemperatureColor('cold')
        }

        setTemperatureValue(newTemperature)
    };
    const resetTemperature=()=>{
        const newTemperature= 0
        if (newTemperature ===0){
            setTemperatureColor('reset')
        }
        setTemperatureValue(0) //resets temperature value to zero
    };

return (
    
    <div className='app-container'>
    <div><h3>My Temperature Controller</h3></div>
        <div className="temperature-display-container">
            <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}&#176;C</div>
        </div>
        <div className="button-container">
            <button onClick={()=>increaseTemperature()}>+</button>
            <button onClick={()=>resetTemperature()}>Set</button>
            <button onClick={()=>decreaseTemperature()}>-</button>
            
        </div>
    </div>
    
)
}

export default Temperature;

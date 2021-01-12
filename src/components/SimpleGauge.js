import React, { Fragment } from 'react';

const HeartBeat = () => {
    return (
        <g>
            <path fill="tomato" d="M92.71,7.27L92.71,7.27c-9.71-9.69-25.46-9.69-35.18,0L50,14.79l-7.54-7.52C32.75-2.42,17-2.42,7.29,7.27v0 c-9.71,9.69-9.71,25.41,0,35.1L50,85l42.71-42.63C102.43,32.68,102.43,16.96,92.71,7.27z"></path>
            <animateTransform
                 attributeName="transform"
                 type="scale"
                 values="0.8; 1; 0.9; 1; 1; 0.8;"
                 dur="1s"
                 repeatCount="indefinite">
                </animateTransform>
        </g>
    )
}

const Needle = ({value = 0, min = 0, max = 100}) => () => {
    value = value >= max ? max : value;
    const rotate = Math.floor((value - min) / (max - min) * -180);
    return (
        <g>
            <path className="fmo-gauge__fill"  d="M4.55248,50.95248a47,45,0,1,1,45,45A65,45,0,0,1,4.55248,45.95248Z" fill="none"
                      stroke="#1ccfc9" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="150,150"/>
            <line fill="none" stroke="#D95857" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" x1="50" y1="50" x2="8" y2="50" transform={`translate(50 0) rotate(${rotate} 0 50)`}/>
            <circle fill="#FFFFFF" stroke="#2B2436" strokeWidth="3" strokeMiterlimit="10" cx="50" cy="50" r="5" />
        </g>
    )
}

const withGauge = ({ WrappedComponent = HeartBeat, 
    colorArray = [], 
    fields = [
        {title: "Title 1", value: "100", titleColor: "black", valueColor: "black"},
        {title: "Title 2", value: "100", titleColor: "black", valueColor: "black"},
        {title: "Title 3", value: "100", titleColor: "black", valueColor: "black"},
        {title: "Title 4", value: "100", titleColor: "black", valueColor: "black"}]
    }) => () => {
    const fieldsNumber = fields.length;
    if (fieldsNumber > 4) {
        fields = fields.slice(0 , 4);
    }

    return (
        <svg
            viewBox="0 0 120 120"
            className="chart-gauge"
            fill="none"
            strokeWidth="2">
            <circle 
            strokeDasharray= "200"
            strokeDashoffset= "220"
            stroke = {colorArray && colorArray[0] ? colorArray[0] : "#eb001e"} 
            r = "57.32"
            cx = "60"
            cy = "60"
            strokeWidth = "5"/>
            <circle 
            strokeDasharray= "200"
            strokeDashoffset= "270"
            stroke = {colorArray && colorArray[1] ? colorArray[1] : "#f35120"} 
            r = "57.32"
            cx = "60"
            cy = "60"
            strokeWidth = "5"/>
            <circle 
            strokeDasharray= "200"
            strokeDashoffset= "310"
            stroke = {colorArray && colorArray[2] ? colorArray[2] : "#3aff20"} 
            r = "57.32"
            cx = "60"
            cy = "60"
            strokeWidth = "5"/>
            <circle 
            strokeDasharray= "200"
            strokeDashoffset= "350"
            stroke = {colorArray && colorArray[3] ? colorArray[3] : "#53a5fd"} 
            r = "57.32"
            cx = "60"
            cy = "60"
            strokeWidth = "5"/>
            <circle 
            strokeDasharray= "200"
            strokeDashoffset= "390"
            stroke = {colorArray && colorArray[4] ? colorArray[4] :"#aaaaaa"} 
            r = "57.32"
            cx = "60"
            cy = "60"
            strokeWidth = "5"/>
            <circle 
            strokeDasharray = "200"
            strokeDashoffset = "420"
            stroke = "#fff"
            r = "57.32"
            cx = "60"
            cy = "60"
            strokeWidth = "5"/>
            {fieldsNumber === 1 && (
                <Fragment>
                    <text className="gauge-text" x="80" y="35" dx="-20" dy="1em" fill={fields[0].titleColor} fontSize='0.8rem' textAnchor='middle' fontFamily='arial'>
                        {fields[0].title}
                    </text>
                    <text className="gauge-text" x="80" y="55" dx="-20" dy="1em" fill={fields[0].valueColor} fontSize='1.1rem' textAnchor='middle' fontFamily='arial'>
                        {fields[0].value}
                    </text>
                    <svg width="20" height="20" viewBox="0 0 120 120" x="50" y="90">
                        <WrappedComponent/>
                    </svg>
                </Fragment>
            )}
            {fieldsNumber === 2 && (
                <Fragment>
                    <line
                        stroke="red"
                        strokeLinecap="round"
                        strokeWidth="1"
                        x1="10"
                        y1="60"
                        x2="110"
                        y2="60" />
                        <text className="gauge-text" x="80" y="20" dx="-20" dy="1em" fill={fields[0].titleColor} fontSize='0.5rem' textAnchor='middle' fontFamily='arial'>
                            {fields[0].title}
                        </text>
                        <text className="gauge-text" x="80" y="38" dx="-20" dy="1em" fill={fields[0].valueColor} fontSize='0.8rem' textAnchor='middle' fontFamily='arial'>
                            {fields[0].value}
                        </text>
                        <text className="gauge-text" x="80" y="70" dx="-20" dy="1em" fill={fields[1].titleColor} fontSize='0.5rem' textAnchor='middle' fontFamily='arial'>
                            {fields[1].title}
                        </text>
                        <text className="gauge-text" x="80" y="88" dx="-20" dy="1em" fill={fields[1].valueColor} fontSize='0.8rem' textAnchor='middle' fontFamily='arial'>
                            {fields[1].value}
                        </text>
                </Fragment>
            )}
            {fieldsNumber === 3 && (
                <Fragment>
                    <line
                        stroke="red"
                        strokeLinecap="round"
                        strokeWidth="1"
                        x1="10"
                        y1="60"
                        x2="110"
                        y2="60" />
                    <line
                        stroke="red"
                        strokeLinecap="round"
                        strokeWidth="1"
                        x1="60"
                        y1="60"
                        x2="60"
                        y2="110" />
                    <text className="gauge-text" x="80" y="15" dx="-20" dy="1em" fill={fields[0].titleColor} fontSize='0.5rem' textAnchor='middle' fontFamily='arial'>
                        {fields[0].title}
                    </text>
                    <text className="gauge-text" x="80" y="30" dx="-20" dy="1em" fill={fields[0].valueColor} fontSize='0.7rem' textAnchor='middle' fontFamily='arial'>
                        {fields[0].value}
                    </text>
                    <text className="gauge-text" x="57" y="65" dx="-20" dy="1em" fill={fields[1].titleColor} fontSize='0.5rem' textAnchor='middle' fontFamily='arial'>
                        {fields[1].title}
                    </text>
                    <text className="gauge-text" x="57" y="82" dx="-20" dy="1em" fill={fields[1].valueColor} fontSize='0.7rem' textAnchor='middle' fontFamily='arial'>
                        {fields[1].value}
                    </text>
                    <text className="gauge-text" x="105" y="65" dx="-20" dy="1em" fill={fields[2].titleColor} fontSize='0.5rem' textAnchor='middle' fontFamily='arial'>
                        {fields[2].title}
                    </text>
                    <text className="gauge-text" x="105" y="82" dx="-20" dy="1em" fill={fields[2].valueColor} fontSize='0.7rem' textAnchor='middle' fontFamily='arial'>
                        {fields[2].value}
                    </text>
                </Fragment>
            )}
            {fieldsNumber === 4 && (
                <Fragment>
                    <line
                        stroke="red"
                        strokeLinecap="round"
                        strokeWidth="1"
                        x1="15"
                        y1="42"
                        x2="105"
                        y2="42" />
                    <line
                        stroke="red"
                        strokeLinecap="round"
                        strokeWidth="1"
                        x1="60"
                        y1="42"
                        x2="60"
                        y2="77" />
                    <line
                        stroke="red"
                        strokeLinecap="round"
                        strokeWidth="1"
                        x1="15"
                        y1="77"
                        x2="105"
                        y2="77" />
                    <text className="gauge-text" x="80" y="10" dx="-20" dy="1em" fill={fields[0].titleColor} fontSize='0.5rem' textAnchor='middle' fontFamily='arial'>
                        {fields[0].title}
                    </text>
                    <text className="gauge-text" x="80" y="20" dx="-20" dy="1em" fill={fields[0].valueColor} fontSize='0.7rem' textAnchor='middle' fontFamily='arial'>
                        {fields[0].value}
                    </text>
                    <text className="gauge-text" x="55" y="48" dx="-20" dy="1em" fill={fields[1].titleColor} fontSize='0.5rem' textAnchor='middle' fontFamily='arial'>
                        {fields[1].title}
                    </text>
                    <text className="gauge-text" x="55" y="58" dx="-20" dy="1em" fill={fields[1].valueColor} fontSize='0.7rem' textAnchor='middle' fontFamily='arial'>
                        {fields[1].value}
                    </text>
                    <text className="gauge-text" x="105" y="48" dx="-20" dy="1em" fill={fields[2].titleColor} fontSize='0.5rem' textAnchor='middle' fontFamily='arial'>
                        {fields[2].title}
                    </text>
                    <text className="gauge-text" x="105" y="58" dx="-20" dy="1em" fill={fields[2].valueColor} fontSize='0.7rem' textAnchor='middle' fontFamily='arial'>
                        {fields[2].value}
                    </text>
                    <text className="gauge-text" x="80" y="80" dx="-20" dy="1em" fill={fields[3].titleColor} fontSize='0.5rem' textAnchor='middle' fontFamily='arial'>
                        {fields[3].title}
                    </text>
                    <text className="gauge-text" x="80" y="90" dx="-20" dy="1em" fill={fields[3].valueColor} fontSize='0.7rem' textAnchor='middle' fontFamily='arial'>
                        {fields[3].value}
                    </text>
                    <svg width="10" height="10" viewBox="0 0 100 100" x="38" y="93">
                        <WrappedComponent/>
                    </svg>
                </Fragment>
            )}
        </svg>
    )
}

export {
    HeartBeat,
    Needle
};

export default withGauge;

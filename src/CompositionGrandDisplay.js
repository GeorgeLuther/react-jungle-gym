import React from 'react'

export default function CompositionGrandDisplay(props) {
    const localeObj = props.localeObj
    const outputArr = []

    for(const [key, value] of Object.entries(localeObj)){
        if (key !== 'setLocale') outputArr.push(`${key}: ${value}`)
    }

    return (
        <ul>
            {outputArr.map(text => <li key={text}>{text}</li>)}
        </ul>
    )
}

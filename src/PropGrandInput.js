import React from 'react'

export default function PropGrandInput(props) {
    return (
        <input name={props.name} placeholder={props.placeholder} onChange={props.setVal}>
            
        </input>
    )
}

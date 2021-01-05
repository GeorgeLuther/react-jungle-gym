import React from 'react'

export default function CompositionGrandInput(props) {
    const inputArr = ['town', 'state', 'country', 'planet', 'galaxy']
    const inputs = inputArr.map(val => <input name={val} key={val} placeholder={val} onChange={props.handleInputChange}/>)
    return (
        <form>
            {inputs}
            <button>Submit</button>
        </form>
    )
}

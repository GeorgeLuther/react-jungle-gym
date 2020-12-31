import React from 'react'
import PropsGrandInput from './PropGrandInput'

export default function propsChild(props) {
    const inputArr = ['town', 'state', 'country', 'planet', 'galaxy']
    const inputs = inputArr.map(val => <PropsGrandInput name={val} key={val} placeholder={val} setVal={props.setValFromGrandchild}/>)
    const outputArr = []

    for(const [key, value] of Object.entries(props.stateVal)){
        outputArr.push(`${key}: ${value}`)
    }

    return (
        <div>
            <h1>This input form uses props for state management</h1>
            <form>
                {inputs}
                <button>Submit</button>
            </form>
            <ul>
             {outputArr.map(text => <li>{text}</li>)}
            </ul>
        </div>
    )
}

import React from 'react'
import ContextGrandInput from './ContextGrandInput'
import ContextDisplay from './ContextDisplay'

export default function ContextChild() {
    const inputArr = ['town', 'state', 'country', 'planet', 'galaxy']
    const inputs = inputArr.map(val => <ContextGrandInput name={val} key={val} placeholder={val}/>)
    return (
        <div>
            <h1>This input form uses context for state management</h1>
            <form>
                {inputs}
                <button>Submit</button>
            </form>
            <ContextDisplay />
        </div>
    )
}

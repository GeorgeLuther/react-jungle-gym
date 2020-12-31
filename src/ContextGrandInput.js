import React from 'react'
import LocaleContext from './LocaleContext'

export default function ContextGrandInput(props) {
    return (
        <LocaleContext.Consumer>
            {({setLocale})=>(
                <input name={props.name} placeholder={props.placeholder} onChange={setLocale}>

                </input>
            )}
        </LocaleContext.Consumer>
    )
}

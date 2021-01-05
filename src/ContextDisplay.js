import React, { Component } from 'react'
import LocaleContext from './LocaleContext'

export default class ContextDisplay extends Component {
    static contextType = LocaleContext

    render() {

        const localeObj = this.context.localeObj
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
}

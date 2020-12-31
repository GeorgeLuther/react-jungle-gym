import React, { Component } from 'react'
import LocaleContext from './LocaleContext'

export default class ContextDisplay extends Component {
    static contextType = LocaleContext

    render() {

        const localeObj = this.context.localeObj
        const outputArr = []
    
        for(const [key, value] of Object.entries(localeObj)){
            outputArr.push(`${key}: ${value}`)
        }
    
        return (
            <ul>
                {outputArr.map(text => <li>{text}</li>)}         
            </ul>
        )
    }
}

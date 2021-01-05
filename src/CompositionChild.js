import React from 'react'

export default function CompositionChild({children}) {
    return (
        <div>
            <h2>This input form uses composition for state management</h2>
            {children}
        </div>
    )
}

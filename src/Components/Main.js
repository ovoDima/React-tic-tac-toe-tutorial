import React from 'react'
import {createStore} from 'redux'
import allData from './ind'

const store = createStore(allData)

const Main = () => {
    return (
        <div>
            <p>HE</p>
        </div>
    )
}

export default Main

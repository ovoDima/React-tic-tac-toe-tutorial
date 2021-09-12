import React from 'react'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import allData from './ind'
import Dash from './Dash'


const store = createStore(allData)

const Main = () => {
    
    
    return (
        <Provider store={store}>
            <Dash/>
        </Provider>
        
    )
        
}

export default Main

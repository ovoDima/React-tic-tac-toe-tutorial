import React from 'react'
import ItemList from './View'


const AddForm = () => {
// const styles = {
//     form:{
//         display:"none"
//     },
// }

    return (
        <div >
            <form action='#'>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Email'/>
                <input type='text' placeholder='WebSite'/>
                <input type='text' placeholder='Company Name'/>

                <div>
                    <button>Add</button>
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            </form>
        </div>
    )
}

const Dash = () => {
    const styles = {    
        div: 
        {
            display: 'grid',
            gridGap: '50px 100px',
            // border: '1px solid black'
        },
        itemsList: {
            border:'1px solid black'
        },

        
    }   
    return (
        <div>
            <h1>Data</h1>
                <div style={styles.div}>
                    <ItemList style={styles.itemsList}/>
                    <AddForm />
                    <button>Click</button>
                 </div>
        </div>
    )
}

export default Dash

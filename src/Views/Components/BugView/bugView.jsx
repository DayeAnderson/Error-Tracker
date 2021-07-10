import React from 'react'
import ViewSection from './Component/bugViewSection'
import './bugView.css'
import BugModel from '../../../Models/bugModel'
import BugView from '../../Pages/viewBugs'

export default (props)=>{
    const bug = new BugModel(props.bug)

    return(
        <div className='bug-view'>
            <button onClick={props.clicked} className='close-btn'>Close</button>
            <h1>{bug.name}</h1>
            <ViewSection title='Details' info={bug.details} />
            <ViewSection title='Steps' info={bug.steps} />
            <ViewSection title='Priority' info={bug.priority} />
            <ViewSection title='Creator' info={bug.creator} />
            <ViewSection title='App Version' info={bug.version} />
            <ViewSection title='Time Created' info={bug.time} />

        </div>
    )
}
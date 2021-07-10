import React from 'react'
import './bugForm.css'

export default (props)=>{
    return(
        <div className='bug-create'>
            <h1>{props.title}</h1>
            <form>
                <label>Name:</label>
                <input name='name' placeholder='Bug Name' required></input>
                <label>Details</label>
                <textarea name="details" placeholder='Detailed description of the bug' required></textarea>
                <label>Steps:</label>
                <textarea name="steps" placeholder='Steps to recreate the bug' required></textarea>
                <label>Priorityy</label>
                <select name='priority' required>
                    <option value='1'>High</option>
                    <option value='2'>Mid</option>
                    <option value='3'>Low</option>
                </select>
                <label>Assigned</label>
                <select name='assigned'>
                    <option>Ryan Beasley</option>
                </select>
                <label>Application Version</label>
                <input name='version' placeholder='Apllication Version'></input>
                <button type='submit'>{props.title}</button>
            </form>
        </div>
    )
}
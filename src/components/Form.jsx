import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Form = ({ category, setCategory, id, setId }) => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`${category}/${id}`)
    }
    return (
        <div  style={{margin: '0 50vh'}}>
            {/* form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>search for:</label>
                    <select onChange={(e)=>setCategory(e.target.value)} value={category}>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                    </select>
                    <label>ID:</label>
                    <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
                    <button className='btn btn-dark' type='submit'>search</button>
                </div>
            </form>
            {/*  */}
            <Outlet />
        </div>
    )
}

export default Form
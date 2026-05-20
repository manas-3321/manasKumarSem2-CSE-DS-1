import React from 'react'
const StudentCard = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.course}</h3>
            <h3>{props.marks}</h3>
        </div>
    )
}
export default StudentCard
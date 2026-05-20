import React from 'react'
import StudentCard from './StudentCard'

const App = () => {
    return (
        <>
            <StudentCard name="a" marks="12" course="web designing"/>
            <StudentCard name="b" marks="12" course="python"/>
            <StudentCard name="c" marks="12" course="springboot"/>
        </>
    )
}

export default App

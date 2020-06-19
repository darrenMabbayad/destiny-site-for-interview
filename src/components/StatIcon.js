import React from 'react'

function StatIcon({ icon, statValue }) {
    return (
        <div className='stat-icon'>
            <img src={icon} alt=''/>
            <p className='stat-icon-value'>{ statValue }</p>
        </div>
    )
}

export default StatIcon

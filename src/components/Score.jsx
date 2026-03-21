import React from 'react'


const Score = ({TotalScore}) => {
  return (

    <div className='p-4 flex flex-col items-center'>
      <h1 className='text-7xl font-bold '>{TotalScore}</h1>
      <p className='text-2xl font-medium'>Score</p>
    </div>
  )
}

export default Score

import React from 'react'

import Image from 'next/image'

const TestScores = () => {
  return (
    <div>
        <h2 className="text-2xl font-semibold mb-4">Test Scores</h2>
        <div className='bg-white shadow-lg rounded-xl p-6 flex flex-col sm:flex-row gap-6'>
            <div className='flex-1'>
                <div className="flex gap-2">
                    
                    {/* <h3 className='text-xl font-medium mb-2 self-center'>GRE</h3> */}
                    <img src='/images/gre.png' alt="GRE" className='h-10 w-auto mr-4' />
                </div>
                <ul className='list-disc list-inside ml-4 py-3'>
                    <li>Overall: 311</li>
                    <li>Quant: 163</li>
                    <li>Verbal: 148</li>
                    <li>AWA: 3.5</li>
                </ul>
            </div>
            <div className='h-auto w-[1px] bg-primary'></div>
            <div className='flex-1'>
                <div className="flex gap-2">

                    {/* <h3 className='text-xl font-medium mb-2 self-center'>IELTS</h3> */}
                    <img src='/images/ielts.png' alt="IELTS" className='h-10 w-auto mr-4' />
                </div>
                <ul className='list-disc list-inside ml-4 py-3'>
                    <li>Overall: 8.0</li>
                    <li>Listening: 8.5</li>
                    <li>Reading: 9</li>
                    <li>Writing: 7</li>
                    <li>Speaking: 7</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default TestScores
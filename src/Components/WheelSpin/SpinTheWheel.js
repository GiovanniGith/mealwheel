import React, { useState } from 'react'

export const SpinTheWheel = () => {
    const [cuisine , setCuisine] = useState([])
    

    useEffect(
        () => {
            fetch("http://localhost:8088/cuisine")
                .then(res => res.json())
                .then((data) => {
                    setCuisine(data)
                })
        },
        []
    )


  return (
    <div>
        <h1>What type of Cuisine are you in the Mood for ??</h1>
        <button type={}>

        </button>


      
    </div>
  )
}



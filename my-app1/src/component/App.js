import React from "react"

function App()
{
    const date=new Date()
    const hours=date.getHours()
    const styles={fontSize:30}
    let timeOfDay
    if(hours<12)
    {
        timeOfDay="morning"
        styles.color="red"
        styles.backgroundColor="green"

    }
    else if(hours>=12 && hours<=17)
    {
        timeOfDay="afternoon"
        styles.color="orange"
        styles.backgroundColor="blue"
    }
    else
    {
        timeOfDay="night"
        styles.color="black"
        styles.backgroundColor="white"
    }
return (<h1 style={styles}>Good {`${timeOfDay}`}. I hope you have an excellent {timeOfDay}.</h1>)
}

export default App
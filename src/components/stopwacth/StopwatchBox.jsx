// import components
import GridRow from "../ui/GridRow"

import { formatTime } from "../../functions/formatTime"


function StopwatchBox({lap,lapTime,time,className}) {
    const  formatLapTime=formatTime(lapTime)
    const formatRealTime=formatTime(time)

    return (
        <GridRow  className={`mx-auto h-auto w-[100%] max-w-[1000px] grid-cols-[1fr_2fr_2fr] justify-items-center  text-stone-400 ${className ? className: ""}`}>
            <div>{lap>=10 ? lap : ("0"+lap)}</div>
            <div>{formatLapTime}</div>
            <div className="text-stone-50">{formatRealTime}</div>
        </GridRow>
            
    )
}

export default StopwatchBox

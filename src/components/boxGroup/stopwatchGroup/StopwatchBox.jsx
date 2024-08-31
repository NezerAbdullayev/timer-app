// import components
import  {formatTime}  from "../../../functions/formatTime"
import GridRow from "../../GridRow"

function StopwatchBox({lap,lapTime,time}) {
    const  formatLapTime=formatTime(lapTime)
    const formatRealTime=formatTime(time)

    return (
        <GridRow  className="mx-auto h-auto w-[100%] max-w-[1000px] grid-cols-[1fr_2fr__2fr] justify-items-center  text-stone-400">
            <div>{lap}</div>
            <div>{formatLapTime}</div>
            <div className="text-stone-50">{formatRealTime}</div>
        </GridRow>
            
    )
}

export default StopwatchBox

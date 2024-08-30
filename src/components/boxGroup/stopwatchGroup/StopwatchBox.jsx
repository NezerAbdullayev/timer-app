// import components
import GridRow from "../../GridRow"

function StopwatchBox({lap,lapTimes,overallTime}) {
    return (
        <GridRow  className="mx-auto h-auto w-[100%] max-w-[1000px] grid-cols-[1fr_2fr__2fr] justify-items-center  text-stone-400">
            <div>{lap}</div>
            <div>{lapTimes}</div>
            <div className="text-stone-50">{overallTime}</div>
        </GridRow>
            
    )
}

export default StopwatchBox

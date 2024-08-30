import { useContext } from "react"
import AlarmsContext from "../context/AlarmsProvider"


function useAlarms() {

    const alarms=useContext(AlarmsContext)

    if(alarms) return alarms 
}

export default useAlarms

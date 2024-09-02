import { Toolbar } from "@mui/material"
import GridColoms from "../../components/ui/GridColoms"
import PageTitle from "../../components/ui/PageTitle"

function Timer() {
    return (
        <GridColoms className="grid-rows-[20%_15%_65%]">
            <PageTitle
                className="justify-end"
                headerTitle="23:37:38"
                headerDesc="Azerbaijan Standard Time"
            />

            <Toolbar />

            {/* <WorldClockBoxGroup items={worldClock} /> */}
        </GridColoms>
    )
}

export default Timer

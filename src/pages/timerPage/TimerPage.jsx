import GridColoms from "../../components/ui/GridColoms"
import PageTitle from "../../components/ui/PageTitle"
import TimerInputContainer from "./components/TimerInputContainer"


function TimerPage() {
    return (
        <GridColoms className="grid-rows-[20%_15%_65%]">
            <PageTitle
                className="justify-end"
                headerTitle="23:37:38"
                headerDesc="Azerbaijan Standard Time"
            />

            <TimerInputContainer  />

        </GridColoms>
    )
}

export default TimerPage

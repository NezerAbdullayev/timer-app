// import component 
import AlarmsContainer from '../components/boxContainer/BoxContainer';
import PageTitle from '../components/pagetitle/PageTitle';






function Alarms() {
    return (
        <div>

            {/* title start */}
            <PageTitle
                title="alarm in 10 hours 51 minutes"
                desc="the 29 Aug, 07:50"
            />
            {/* title end */}

            {/* buttonlar olan yer */}

            {/* buttonlar olan yer */}


            {/* alarms container start */}
            <AlarmsContainer>salam</AlarmsContainer>
            {/* alarms container end */}

        </div>
    );
}

export default Alarms;

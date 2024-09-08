// import hooks
import { useState } from 'react';
// import components
import GridColoms from '../../components/GridColoms';
import TimerControl from './components/TimerControl';
import TimerInputContainer from './components/TimerInputContainer';
import TimerTitle from './components/TimerTitle';

function TimerPage() {

    return (
        <GridColoms className="grid-rows-[15%_20%_10%_55%]">
            <TimerTitle />

            <TimerInputContainer />

            <TimerControl />
        </GridColoms>
    );
}

export default TimerPage;

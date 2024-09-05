// fake data
import { worldClock } from '../../fakeData/fakeDate';

// import  components
import GridColoms from '../../components/ui/GridColoms';
import PageTitle from '../../components/ui/PageTitle';
import Toolbar from '../../components/ui/Toolbar';
import WorldClockBoxGroup from './components/WorldClockBoxGroup';
import TimerTitle from '../timerPage/components/TimerTitle';

function WorldClockPage() {
    const timeZones = [
        { name: 'New York', id:"437679", offset: -4 },
        { name: 'London', id:"385793", offset: 1 },
        { name: 'Tokyo', id:"4243343", offset: 9 },
        { name: 'Sydney', id:"2442424", offset: 10 },
        { name: 'Los Angeles', id:"54532", offset: -7 },
        { name: 'Moscow', id:"23535", offset: 3 },
        { name: 'Paris', id:"3523", offset: 2 },
        { name: 'Dubai', id:"43762555", offset: 4 },
        { name: 'Beijing', id:"32452", offset: 8 },
        { name: 'Mumbai', id:"25523532", offset: 5.5 },
        { name: 'Berlin', id:"2352352", offset: 2 },
        { name: 'Cape Town', id:"25323", offset: 2 },
        { name: 'Buenos Aires', id:"235233d", offset: -3 },
        { name: 'Sao Paulo', id:"efewf4", offset: -3 },
        { name: 'Mexico City', id:"frg34g3", offset: -5 },
        { name: 'Cairo', id:"4t43f34", offset: 2 },
        { name: 'Seoul', id:"4fefef", offset: 9 },
        { name: 'Toronto', id:"3fef3", offset: -4 },
        { name: 'Jakarta', id:"efe3f", offset: 7 },
        { name: 'Istanbul', id:"ef3f3", offset: 3 },
        { name: 'Singapore', id:"43efef7679", offset: 8 },
        { name: 'Bangkok', id:"ef3f3f", offset: 7 },
        { name: 'Honolulu', id:"454d3g", offset: -10 },
        { name: 'Rome', id:"rrg4gr", offset: 2 },
        { name: 'Vancouver', id:"5434f3f", offset: -7 },
    ];

    return (
        <GridColoms className="grid-rows-[20%_15%_65%]">
            <TimerTitle />


            <Toolbar />

            <WorldClockBoxGroup items={timeZones} />
        </GridColoms>
    );
}

export default WorldClockPage;

// import hooks
import { useState } from 'react';
import { useAlarms } from '../../../Hooks/useAlarms';

// mui
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from '@mui/material/Select';
import { Button, FormControl, InputLabel } from '@mui/material';

// components
import Row from '../../../components/Row';
import FlexRow from '../../../components/FlexRow';

// utils
import {
    formatDate,
    formatReverseDayAndMonth,
    realTimeAndHistory,
} from '../../../utils/formatTime';
import { parseDate } from '../../../utils/parseDate';
import NumberInput from '../../../components/NumberInput';

function AddAlarmPopup({ onToggleAlarmPopup }) {
    // context
    const { dispatch } = useAlarms();

    // hours
    const [hour, setHour] = useState({
        hh: '06',
        mm: '00',
    });

    console.log(hour);

    // history
    const [selectedDate, setSelectedDate] = useState(null);
    const [sound, setSound] = useState('samsung_prelude.mp3');

    //
    const handleChangeHour = (e) => {
        let { name, value, min, max } = e.target;

        if (value.startsWith('0') && value.length > 1) {
            value = value.replace(/^0+/, '');
        }

        if (value === '' || (value >= Number(min) && value <= Number(max))) {
            setHour((hour) => ({ ...hour, [name]: value.toString().padStart(2, '0') }));
        }
    };

    function handleChangeSound(event) {
        setSound(event.target.value);
    }

    // add new alarms button
    function addAlarm({ hour, history, sound }) {
        let newDate = formatDate(history);

        const {
            curTime: { hh, mm },
            history: curRealHistory,
        } = realTimeAndHistory();

        // current alarm time <= real Time ? Realhistory +1 : history

        if (
            (Number(hour.mm) <= Number(mm) &&
                Number(hour.hh) <= Number(hh) &&
                parseDate(newDate) <= parseDate(curRealHistory)) ||
            parseDate(newDate) < parseDate(curRealHistory)
        ) {
            const newDateObj = new Date(curRealHistory);
            newDateObj.setDate(newDateObj.getDate() + 1);

            newDate = formatReverseDayAndMonth(newDateObj);
        }
        dispatch({ type: 'ADD_ALARM', payload: { hour, history: newDate, sound } });

        // close popup
        onToggleAlarmPopup();
    }

    return (
        <>
            {/* hours  hh,mm start */}
            <FlexRow className="mb-3 items-center justify-between gap-3">
                {/* hour */}
                <NumberInput
                    label={'Hour'}
                    min={0}
                    max={23}
                    onChange={handleChangeHour}
                    value={hour.hh}
                    name="hh"
                />
                {/* minute */}
                <NumberInput
                    label={'Minute'}
                    min={0}
                    max={59}
                    onChange={handleChangeHour}
                    value={hour.mm}
                    name="mm"
                />
            </FlexRow>
            {/* hours end */}

            {/* history start */}
            <Row className="w-full">
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ minWidth: '100%' }}>
                    <DatePicker
                        label="Select Date"
                        value={selectedDate}
                        onChange={(newValue) => setSelectedDate(newValue)}
                        slots={{ textField: TextField }}
                    />
                </LocalizationProvider>
            </Row>
            {/* history end */}

            {/* sound start */}
            <Row className="my-2">
                <FormControl variant="filled" sx={{ m: 0, minWidth: '90%' }}>
                    <InputLabel id="demo-simple-select-filled-label">sound</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={sound}
                        onChange={handleChangeSound}
                    >
                        {/* buraya musiqileri qoyacam */}
                        <MenuItem value="samsung_prelude.mp3">samsung</MenuItem>
                        <MenuItem value="iphone_alarm.mp3">Iphone alarm</MenuItem>
                        <MenuItem value="morning_flower.mp3">morning</MenuItem>
                    </Select>
                </FormControl>
            </Row>
            {/* sound end */}

            {/* control buttons */}
            <FlexRow className="items-center justify-between">
                {/* close button */}
                <Button
                    onClick={onToggleAlarmPopup}
                    variant="contained"
                    color="secondary"
                    sx={{ background: '#281b1b' }}
                    className="mt-4"
                >
                    Close
                </Button>

                {/* add alarm */}
                <Button
                    onClick={() => addAlarm({ hour, history: selectedDate, sound })}
                    variant="contained"
                    className="mt-4"
                >
                    Add Alarm
                </Button>
            </FlexRow>
        </>
    );
}

export default AddAlarmPopup;

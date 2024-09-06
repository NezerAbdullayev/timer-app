import { useState } from 'react';

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
import { formatDate, formatReverseDayAndMonth, realTimeAndHistory } from '../../../utils/formatTime';
import { useAlarms } from '../../../Hooks/useAlarms';

function AddAlarmPopup({ onToggleAlarmPopup }) {
    const { dispatch } = useAlarms();

    const [hh, setHh] = useState('06');
    const [mm, setMm] = useState('00');
    const [selectedDate, setSelectedDate] = useState(null);
    const [sound, setSound] = useState('samsung_prelude.mp3');

    function handleChangeSound(event) {
        setSound(event.target.value);
    }

    const handleHourChange = (event) => {
        setHh(event.target.value);
    };

    const handleMinuteChange = (event) => {
        setMm(event.target.value);
    };

    // add new alarms button
    function addAlarm({ hour, history, sound }) {
        let newDate = formatDate(history);

        const {
            curTime: { hh, mm },
            history: curRealHistory,
        } = realTimeAndHistory();

        // current budilniq time < real Time ?
        if (
            Number(hour.mm) < Number(mm) &&
            Number(hour.hh) < Number(hh) &&
            newDate == curRealHistory
        ){
            const newDateObj = new Date(newDate); 
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
            <FlexRow className="items-center justify-between">
                <TextField
                    select
                    label="hh"
                    value={hh}
                    onChange={handleHourChange}
                    variant="outlined"
                    sx={{ m: 1, minWidth: 120 }}
                >
                    {Array.from({ length: 24 }).map((_, index) => (
                        <MenuItem key={index} value={index < 10 ? `0${index}` : `${index}`}>
                            {index < 10 ? `0${index}` : `${index}`}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    select
                    label="mm"
                    value={mm}
                    onChange={handleMinuteChange}
                    variant="outlined"
                    sx={{ m: 1, minWidth: 120 }}
                >
                    {Array.from({ length: 60 }).map((_, index) => (
                        <MenuItem key={index} value={index < 10 ? `0${index}` : `${index}`}>
                            {index < 10 ? `0${index}` : `${index}`}
                        </MenuItem>
                    ))}
                </TextField>
            </FlexRow>
            {/* hours end */}

            {/* date start */}
            <Row className="ml-2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select Date"
                        value={selectedDate}
                        onChange={(newValue) => setSelectedDate(newValue)}
                        slots={{ textField: TextField }}
                    />
                </LocalizationProvider>
            </Row>
            {/* date end */}

            {/* sound start */}
            <Row className="my-2">
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
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
                    onClick={() => addAlarm({ hour: { hh, mm }, history: selectedDate, sound })}
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

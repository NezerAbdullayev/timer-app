import { useState } from 'react';

// mui
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from '@mui/material/Select';

// components
import Row from '../../../components/ui/Row';
import { FormControl, InputLabel } from '@mui/material';
import FlexRow from '../../../components/ui/FlexRow';

export default function AddAlarmPopup() {
    const [hh, setHh] = useState('');
    const [mm, setMm] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [sound,setSound]=useState("")



    function handleChangeSound(event){
      setSound(event.target.value)
    }


    const handleHourChange = (event) => {
        setHh(event.target.value);
    };

    const handleMinuteChange = (event) => {
        setMm(event.target.value);
    };

    return (
        <>
            {/* hours start */}
            <FlexRow className="justify-between items-center">
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
                    sx={{ m: 1, minWidth: 120, }}
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
            <Row  className="ml-2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select Date"
                        value={selectedDate}
                        onChange={(newValue) => setSelectedDate(newValue)}
                        slots={{ textField: TextField }} // Yeni prop
                    />
                </LocalizationProvider>
            </Row>
            {/* date end */}

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
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Row>
        </>
    );
}

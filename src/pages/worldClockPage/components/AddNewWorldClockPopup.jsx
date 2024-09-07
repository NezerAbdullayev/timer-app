import { useWorldClock } from '../../../Hooks/useWorldClock';
import * as React from 'react';

import { toast } from 'react-toastify';

// material ui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box, ListItem } from '@mui/material';

// data
import { timeZones } from '../../../data/worldClockData';

import {getSecondaryText} from "../../../utils/getSecondaryText"

// mui function
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function AddNewWorldClockPipup({ onTogglePopupOpen, openNewClockBtn }) {
    // context reducer
    const {
        state: { worldClock },
        dispatch,
    } = useWorldClock();

    function addClock({ id, name, offset }) {
        const newAlarm = { id, name, offset };

        dispatch({ type: 'ADD_CLOCK', payload: newAlarm });
        toast.success('Clock added to the list');
    }

    function isClockCheck(id) {
        return worldClock && worldClock.length > 0 && worldClock?.find((clock) => clock.id === id);
    }

    return (
        <Dialog
            fullScreen
            open={openNewClockBtn}
            onClose={onTogglePopupOpen}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        World Clock
                    </Typography>
                    <Button autoFocus color="inherit" onClick={onTogglePopupOpen}>
                        <CloseIcon />
                    </Button>
                </Toolbar>
            </AppBar>
            <List sx={{ overflowY: 'auto' }}>
                {timeZones &&
                    timeZones.map((clock) => {
                        const clockExists = isClockCheck(clock.id);

                        return (
                            <ListItem key={clock.id}>
                                <ListItemButton
                                    sx={{
                                        marginX: 'auto',
                                        width: '1000px',
                                        background: `${clockExists ? '#c6c3c3 ' : 'transparent'}`,
                                        cursor: `${clockExists ? 'not-allowed' : 'pointer'}`,
                                        '&:hover': {
                                            backgroundColor: `${clockExists ? '#c6c3c3' : '#f0f0f0'}`,
                                        },
                                    }}
                                    className="w-[1000px] max-w-[100%] sm:max-w-[90%] lg:max-w-[1000px]"
                                >
                                    <ListItemText
                                        primary={clock.name}
                                        secondary={getSecondaryText(clock.offset)}
                                        sx={{ marginX: 'auto' }}
                                    />
                                    {/* add button */}
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        {clockExists ? (
                                            <div className="text-sm font-bold text-red-500">
                                                clock is available
                                            </div>
                                        ) : (
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() =>
                                                    addClock({
                                                        id: clock.id,
                                                        name: clock.name,
                                                        offset: clock.offset,
                                                    })
                                                }
                                            >
                                                Add
                                            </Button>
                                        )}
                                    </Box>
                                    {/* add button  end*/}
                                </ListItemButton>
                                {/* border bottom */}
                                <Divider />
                            </ListItem>
                        );
                    })}
            </List>
        </Dialog>
    );
}

{
    /* <Button variant="outlined" onClick={openNewClockBtn}>
                Open full-screen dialog
            </Button> */
}
export default AddNewWorldClockPipup;

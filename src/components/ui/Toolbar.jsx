// import icons
import { BsSortDown } from 'react-icons/bs';
import { BsSortUp } from 'react-icons/bs';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// import components
import Button from './Button';
import FlexRow from './FlexRow';
import { memo } from 'react';

function Toolbar( {onToggleAlarmPopup,onDeleteButton,OpenDelete }) {
    return (
        <FlexRow className="items-center justify-end gap-4">
            {/* create button */}
            <Fab
                color="primary"
                aria-label="add"
                onClick={onToggleAlarmPopup}
                sx={{ width: '35px', height: '35px' }}
            >
                <AddIcon sx={{ fontSize: '16px' }} />
            </Fab>
            {/* create button end */}

            {/* theme button */}
            <Button onClick={onDeleteButton} type="open">
                {OpenDelete ? 'Hidden Delete' : 'Show Delete'}
            </Button>
        </FlexRow>
    );
}

export default memo(Toolbar);

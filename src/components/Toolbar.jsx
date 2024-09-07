// import icons
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// import components
import Button from './Button';
import FlexRow from './FlexRow';
import { memo } from 'react';

function Toolbar({ onTogglePopupOpen, onDeleteButton, openDelete }) {
    return (
        <FlexRow className="items-center justify-end gap-4">
            {/* create button */}
            <Fab
                color="primary"
                aria-label="add"
                onClick={onTogglePopupOpen}
                sx={{ width: '35px', height: '35px' }}
            >
                <AddIcon sx={{ fontSize: '16px' }} />
            </Fab>
            {/* create button end */}

            {/* theme button */}
            <Button onClick={onDeleteButton} type="open">
                {openDelete ? 'Hidden Delete' : 'Show Delete'}
            </Button>
        </FlexRow>
    );
}

export default memo(Toolbar);

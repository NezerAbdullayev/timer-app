// import components
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Button from '../buttons/Button';

// import icons
import { BsSortDown } from 'react-icons/bs';
import { BsSortUp } from 'react-icons/bs';
import FlexRow from '../FlexRow';

function Toolbar({ sort = true }) {
    return (
        <FlexRow className="items-center justify-end gap-4">

            {/* create button */}
            <Fab
                color="primary"
                aria-label="add"
                sx={{ width: '35px', height: '35px' }}
            >
                <AddIcon sx={{ fontSize: '16px' }} />
            </Fab>
            {/* create button end */}


            {/* sort and edit button */}
            <Button type="sort">{sort ? <BsSortDown /> : <BsSortUp />} </Button>

            {/* theme button */}
            <Button type="them">dark</Button>
        </FlexRow>
    );
}

export default Toolbar;

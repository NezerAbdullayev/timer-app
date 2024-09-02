import { Backdrop, Box, Button, Modal } from '@mui/material';
import { useState } from 'react';
import Row from './Row';
import FlexRow from './FlexRow';

export default function Popup({ children }) {
    const [open, setOpen] = useState(true);

    const handleOpenPopup = () => setOpen(true);
    const handleClosePopup = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClosePopup}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius:6,
                    padding: "30px 40px",
                    outline: 'none',
                }}
            >
                {/* children */}
                {children}

                <FlexRow className=" justify-between items-center">
                    {/* close button */}
                    <Button
                        onClick={handleOpenPopup}
                        variant="contained"
                        color="secondary"
                        sx={{background:"#281b1b"}}
                        className="mt-4 "
                    >
                        Close
                    </Button>

                    {/* add alarm */}
                    <Button onClick={handleOpenPopup} variant="contained" className="mt-4">
                        Add Alarm
                    </Button>
                </FlexRow>
            </Box>
        </Modal>
    );
}

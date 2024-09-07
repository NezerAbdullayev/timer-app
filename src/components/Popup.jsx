import { Backdrop, Box, Modal } from '@mui/material';

export default function Popup({ children, openNewItermBtn, onTogglePopupOpen }) {

    return (
        <Modal
            open={openNewItermBtn}
            onClose={onTogglePopupOpen}
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
                    borderRadius: 6,
                    padding: '30px 40px',
                    outline: 'none',
                }}
            >
                {/* children */}
                {children}

            </Box>
        </Modal>
    );
}

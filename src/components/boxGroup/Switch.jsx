import { styled, Switch as SwitchControl } from '@mui/material';

function SwitchButton({ isActive, onClick }) {
    const IOSSwitch = styled((props) => (
        <SwitchControl
            focusVisibleClassName=".Mui-focusVisible"
            disableRipple
            checked={isActive}
            {...props}
        />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transition: 'all 0.6s', 
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#b8b8b8',
                '& + .MuiSwitch-track': {
                    backgroundColor: '#3f599f',
                    opacity: 1,
                    border: 0,
                    transition: 'all 0.6s', 
                    ...theme.applyStyles('dark', {
                        backgroundColor: '#3f599f',
                    }),
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#3f599f',
                border: '6px solid #c4c4c4',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color: theme.palette.grey[100],
                ...theme.applyStyles('dark', {
                    color: theme.palette.grey[600],
                }),
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.7,
                ...theme.applyStyles('dark', {
                    opacity: 0.3,
                }),
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: '#E9E9EA',
            opacity: 1,
            transition: 'all 0.6s', 
            ...theme.applyStyles('dark', {
                backgroundColor: '#39393D',
            }),
        },
    }));

    return (
        <IOSSwitch 
            sx={{ m: 1, transition:" all 6s !important" }} 
            onClick={onClick}
        />
    );
}

export default SwitchButton;

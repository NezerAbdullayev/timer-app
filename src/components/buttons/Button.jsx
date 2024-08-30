import {  Button as MuiButton } from '@mui/material';

function Button({ children, type, className }) {
    let baseClassnames = '';

    switch (type) {
        case 'sort':
            baseClassnames +=
                ' text-4xl text-blue-600  transition-all hover:text-blue-700 flex items-center justify-center  ';
            break;

        case 'theme':
            baseClassnames += ' bg-blue-500 ';
            break;

        case 'muiBlue':
            baseClassnames += '';
            break;

        case 'muiGray':
            baseClassnames += ' bg-gray-50';
            break;

        default:
            baseClassnames;
    }

    if (type === 'muiBlue' || type === 'muiGray')
        return (
            <MuiButton
                variant="contained"
                sx={{
                    background: type === 'muiGray' ? '#504c4a' : '',
                    borderRadius: '50px',
                    padding: '20px 30px',
                    textTransform: 'capitalize',
                }}
                className={`h-6 ${baseClassnames} ${className ? className : ''}`}
            >
                {children}
            </MuiButton>
        );

    return (
        <button className={`${baseClassnames} ${className ? className : ''} `}>
            {children}
        </button>
    );
}

export default Button;

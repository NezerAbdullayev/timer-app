import { Button as MuiButton } from '@mui/material';

function Button({ children, type, className, onClick, disabled = false }) {
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
            disabled={disabled}
            onClick={onClick}
            variant="contained"
            sx={{
                background: type === 'muiGray' ? 'gray' : '#007bff', 
                borderRadius: '50px',
                padding: '20px 30px',
                width:"90px",
                textTransform: 'capitalize',
                display: 'inline-flex',
                color:'#ffffff' , 
                cursor: disabled ? "not-allowed" : "pointer",
                '&.Mui-disabled': {
                    backgroundColor: type === 'muiGray' ? '#3e3d3d8f' : '#0056b3', 
                    color: '#ffffff', 
                    boxShadow: 'none', 
                    cursor: "not-allowed" 
                },
            }}
            className={`h-6 ${baseClassnames} ${className ? className : ''}`}
        >
            {children}
        </MuiButton>
        );

    return (
        <button className={`${baseClassnames} ${className ? className : ''} `}>{children}</button>
    );
}

export default Button;

import { toast } from 'react-toastify';
import FlexRow from './FlexRow';
import Row from './Row';

function ToastPopup({ message, dispatch, setIsPlaying }) {
    return (
        <FlexRow className="min-h-[150px] w-full flex-col justify-between">
            {/* message */}
            <Row className="mt-10 text-center">{message}</Row>
            {/* control buttons */}
            <FlexRow className="items-center justify-between">
                {/* close button */}
                <button
                    onClick={() => toast.dismiss()}
                    style={{
                        marginRight: '10px',
                        border: 'none',
                        fontSize: '35px',
                    }}
                >
                    &times;
                </button>
                {/* cancel music button */}
                <button
                    onClick={() => {
                        dispatch({ type:'RESET_MUSIC'});
                        {
                            setIsPlaying ? setIsPlaying(false) : '';
                        }
                        toast.dismiss();
                    }}
                    style={{
                        background: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '5px 10px',
                    }}
                    className="text-stone-700 shadow"
                >
                    OK
                </button>
            </FlexRow>
        </FlexRow>
    );
}

export default ToastPopup;

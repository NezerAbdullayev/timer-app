import { Button } from '@mui/material';
import FlexRow from '../../../components/FlexRow';
import GridRow from '../../../components/GridRow';
import Row from '../../../components/Row';
import { memo } from 'react';

function TimerBox({ id, time: { hh, mm, ss }, date,dispatch }) {

    const deleteHistoryItem=(id)=>{
        dispatch({type:"DELETE_HISTORY_ITEM",payload:id})
    }

    return (
        <GridRow className="grid-cols-3 text-stone-600 dark:text-stone-400 justify-items-center">
            <Row>{date}</Row>

            <FlexRow className="items-center gap-[2px]">
                <Row>{hh}</Row>
                <span>:</span>
                <Row>{mm}</Row>
                <span>:</span>
                <Row>{ss}</Row>
            </FlexRow>

            <Row>
                <Button
                onClick={()=>deleteHistoryItem(id)}
                    sx={{
                        fontSize: '30px',
                        background: '#1876d2',
                        color: 'white',
                        fontWeight: '700',
                        height:"32px",
                    }}
                >
                    &times;
                </Button>
            </Row>
        </GridRow>
    );
}

export default memo(TimerBox);

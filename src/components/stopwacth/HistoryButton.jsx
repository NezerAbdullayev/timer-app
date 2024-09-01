import { memo } from 'react';
import FlexRow from '../ui/FlexRow';
import Button from '../ui/Button';

function HistoryButton({ historyOpen, onOpenHistory }) {
    return (
        <FlexRow className="lg:mr-3 h-full items-center justify-end ">
            <Button onClick={onOpenHistory} type="open">
                {historyOpen ? 'Hidden History' : 'Show History'}
            </Button>
        </FlexRow>
    );
}

export default memo(HistoryButton);

import FlexRow from  "../../../components/FlexRow"
import Button from  "../../../components/Button"

function HistoryButton({ historyOpen, onOpenHistory }) {
    console.log("button history")
    return (
        <FlexRow className="lg:mr-3 h-full items-center justify-end ">
            <Button onClick={onOpenHistory} type="open">
                {historyOpen ? 'Hidden History' : 'Show History'}
            </Button>
        </FlexRow>
    );
}

export default HistoryButton;

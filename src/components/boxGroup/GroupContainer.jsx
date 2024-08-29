import FlexRow from "../FlexRow";

function GroupContainer({ children }) {
    return (
        <FlexRow className="mb-5 mt-1 w-full flex-col  gap-4 overflow-y-auto">
            {children}
        </FlexRow>
    );
}

export default GroupContainer;

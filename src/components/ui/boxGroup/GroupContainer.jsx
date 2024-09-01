// import components
import FlexRow from "../FlexRow";

function GroupContainer({ children, className }) {
    return (
        <FlexRow
            className={`no-scrollbar mb-5 mt-1 w-full flex-col gap-4 overflow-y-auto ${className ? className : ''}`}
        >
            {children}
        </FlexRow>
    );
}

export default GroupContainer;

// import components
import FlexRow from "../FlexRow";

function GroupContainer({ children, className }) {
    return (
        <FlexRow
            className={`mb-5 mt-1 px-2.5 w-full flex-col gap-4 overflow-y-auto ${className ? className : ''}`}
        >
            {children}
        </FlexRow>
    );
}

export default GroupContainer;


// import components
import Box from './Box';
import FlexRow from "../FlexRow"

function BoxGroup({ items }) {
    return (
        <FlexRow className="flex-col-reverse justify-center gap-4 overflow-y-auto w-full mb-5 mt-1">
            {/* items map */}
            {items.length &&
                items.map((item) => (
                    <Box
                        key={item.id}
                        id={item.id}
                        date={item.date}
                        hour={item.hour}
                        isActive={item.isActive}
                        history={item.history}
                    />
                ))}

        </FlexRow>
    );
}

export default BoxGroup;

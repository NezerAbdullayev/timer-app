import FlexRow from './FlexRow';

function BoxContainer({ children }) {
    return (
        <FlexRow className="mx-auto w-[1000px] max-w-[100%] items-center justify-between rounded-lg  flex-wrap gap-y-2 bg-[#181515] 
        p-6 transition-all hover:bg-[#131111] xl:max-w-[90%]">
            {children}
        </FlexRow>
    );
}

export default BoxContainer;

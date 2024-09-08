import FlexRow from '../FlexRow';

function BoxContainer({ children }) {
    return (
        <FlexRow className="mx-auto w-[1000px] max-w-[100%] flex-wrap items-center gap-3 gap-y-2 rounded-lg bg-[#2e9683] p-6 transition-all dark:bg-[#181515] dark:hover:bg-[#131111] xl:max-w-[90%]">
            {children}
        </FlexRow>
    );
}

export default BoxContainer;

import FlexRow from './FlexRow';

function PageTitle({ title, desc }) {
    return (
        <FlexRow className="flex-col justify-end text-center">
            <h3 className="mb-2 text-3xl sm:text-4xl">{title}</h3>
            <span className="text-base text-stone-600 sm:text-xl">{desc}</span>
        </FlexRow>
    );
}

export default PageTitle;

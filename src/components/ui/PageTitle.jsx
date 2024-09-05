
function PageTitle({ headerTitle, headerDesc,className }) {
    return (
        <header className={`flex flex-col text-center  ${className ? className : ""}`}>
            <div className="mb-2 text-3xl sm:text-4xl">{headerTitle}</div>
            <div className="text-base text-stone-600 sm:text-xl">{headerDesc}</div>
        </header>
    );
}

export default PageTitle;

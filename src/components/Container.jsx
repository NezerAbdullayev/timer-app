function Container({ children }) {
    return (
        <div className="bg-lightMain dark:bg-darkMain dark:text-lightMain text-darkMain h-screen min-h-[500px] w-screen">
            <div className="mx-auto grid h-full min-h-[500px] w-[1440px] max-w-[90%] grid-rows-[5%_85%_10%]">
                {children}
            </div>
        </div>
    );
}

export default Container;

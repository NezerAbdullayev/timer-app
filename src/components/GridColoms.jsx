function GridColoms({children,className}) {
    return (
        <div className={`grid  h-full grid-rows-[20%_15%_65%] ${className ? className : ""}`}>
            {children}
        </div>
    )
}

export default GridColoms

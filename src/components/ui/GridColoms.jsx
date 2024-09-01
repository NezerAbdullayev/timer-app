function GridColoms({children,className,}) {
    return (
        <div className={`grid  h-full   ${className ? className : ""}`} >
            {children}
        </div>
    )
}

export default GridColoms

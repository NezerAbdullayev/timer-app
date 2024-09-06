function Row({children,className}) {
    return (
        <div className={className ? className : ''}>
            {children}
        </div>
    )
}

export default Row

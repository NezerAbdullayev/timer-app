function GridRow({ children, className }) {
    return <div className={`grid ${className ? className : ''}`}>{children}</div>;
}

export default GridRow;

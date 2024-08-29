function Button({ children, type, classname }) {
    let baseClassnames = '';

    switch (type) {
                    
        case "sort":
            baseClassnames+= " text-4xl text-blue-600  transition-all hover:text-blue-700 flex items-center justify-center  ";
            break

        case "theme":
            baseClassnames+=" bg-blue-500 "
            break

        default:
            baseClassnames;
    }

    return (
        <button className={`${baseClassnames} ${classname ? classname : ''} `}>
            {children}
        </button>
    );
}

export default Button;

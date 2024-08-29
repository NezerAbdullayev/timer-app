function Button({ children, type, classname }) {
    let baseClassnames = '';

    switch (type) {
        case 'create':
            baseClassnames += '  text-5xl dark:text-stone-50 mb-[6px]  ';
            break;
            
        case "sort":
            baseClassnames+= " text-4xl text-blue-600  transition-all hover:text-blue-700 flex items-center justify-center  ";
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

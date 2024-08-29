function PageTitle({ title, desc }) {
    return (
        <div className="text-center pt-14">
            <h3 className="text-3xl sm:text-4xl mb-1">{title}</h3>
            <span className="text-base sm:text-xl text-stone-600">{desc}</span>
        </div>
    );
}

export default PageTitle;

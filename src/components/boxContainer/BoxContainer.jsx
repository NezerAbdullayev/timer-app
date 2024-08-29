import Box from './Box';

function BoxContainer({ items }) {
    return (
        <div className="flex flex-col-reverse gap-5">
            {items.length &&
                items.map((item) => (
                    <Box key={item.id} date={item.date} hour={item.hour} />
                ))}
        </div>
    );
}

export default BoxContainer;

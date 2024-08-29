// import components
import Button from '../Button/Button';

// import icons
import { FaSortDown, FaSortUp } from 'react-icons/fa6';

import { BsSortDown } from "react-icons/bs";
import { BsSortUp } from "react-icons/bs";

function Toolbar({sort=true}) {


    return (
        <div className='flex justify-end items-center gap-8'>
            {/* create new button */}
            <Button type="create">+</Button>

            {/* sort and edit button */}
            <Button type="sort"> {sort ? <BsSortDown />: <BsSortUp /> } </Button>
        </div>
    );
}

export default Toolbar;

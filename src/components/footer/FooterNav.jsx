import { NavLink } from 'react-router-dom';

function FooterNav({ children, to }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? 'dark:text-lightMain border-b pb-[2px] transition-all'
                    : 'hover:dark:text-lightMain pb-[2px] text-stone-500 transition-all'
            }
        >
            {children}
        </NavLink>
    );
}

export default FooterNav;

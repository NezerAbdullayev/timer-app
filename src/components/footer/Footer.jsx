// components
import FooterNav from './FooterNav';

function Footer() {
    return (
        <footer className="text-stone sm:text-base text-sm  flex items-start justify-center gap-5 sm:gap-10">
            <FooterNav to="/alarms">Alarm</FooterNav>
            <FooterNav to="/worldclock">World Clock</FooterNav>
            <FooterNav to="/stopwatch">Stopwatch</FooterNav>
            <FooterNav to="/timer">Timer</FooterNav>
        </footer>
    );
}

export default Footer;

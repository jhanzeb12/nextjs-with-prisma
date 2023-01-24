import Link from 'next/link';
import PropTypes from 'prop-types';

export interface INavItemProps {
    text: string;
    href: string;
    active: boolean;
}

const NavItem = ({ text, href, active }: INavItemProps) => {
    return (
        <Link href={href}>
            <a className={`nav__item ${active ? 'active' : ''}`}>{text}</a>
        </Link>
    );
}

NavItem.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    active: PropTypes.bool,
}

NavItem.defaultProps = {
    active: true,
    text: void 0,
    href: void 0,
}

export default NavItem;
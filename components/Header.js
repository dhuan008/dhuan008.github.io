import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFileCode from '@fortawesome/fontawesome-free-regular/faFileCode';

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <FontAwesomeIcon icon={faFileCode} transform="grow-18" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>David Huang</h1>
                <p>Web Developer</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('intro') }}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('projects') }}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('skills') }}>Skills</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header;

import logo from '.././assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto mb-5" src={logo} alt="Logo" />
            <p className="text-lg text-[#706F6F] mb-[10px]">Journalism Without Fear or Favour</p>
            <div className="text-xl">
                <span className="text-[#403F3F]">{moment().format('dddd')}</span>,{' '}
                <span className="text-[#706F6F]">{moment().format('MMMM D, YYYY')}</span>
            </div>
        </div>
    );
};

export default Header;
import {Link, useLocation} from 'react-router-dom'

function Navbar() {

    const location = useLocation();

    return ( 
        <nav>
            <ul className='text-lg flex gap-3 ml-3 text-white'>
                <li className={`${location.pathname === '/' ? 'border-b-2 px-2 border-yellow-500 text-yellow-500 hover:tracking-widest transition-all ' : 'border-b-2 px-2 border-yellow-500  hover:tracking-widest transition-all'}`}>
                    <Link to = "/">HOME</Link>
                </li>

                <li className={`${location.pathname === '/cliente' ? 'border-b-2 px-2 border-yellow-500 text-yellow-500 hover:tracking-widest transition-all ' : 'border-b-2 px-2 border-yellow-500  hover:tracking-widest transition-all'}`}>
                    <Link to = "cliente">CLIENTE</Link></li>

                <li className={`${location.pathname === '/afiliado' ? 'border-b-2 px-2 border-yellow-500 text-yellow-500 hover:tracking-widest transition-all ' : 'border-b-2 px-2 border-yellow-500 hover:tracking-widest transition-all'}`}>
                    <Link to = "afiliado">AFILIADO</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar;
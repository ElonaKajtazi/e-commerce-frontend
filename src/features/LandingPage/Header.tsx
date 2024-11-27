import logo from '../../../public/assets/landingPage/logo.svg'

const Header = () => {
    return (
        <header className='bg-white flex items-center justify-between px-24 py-6 sticky top-0 z-50'>
            <img src={logo} alt='Furniture Logo'/>
            <nav>
                <ul className='flex space-x-8'>
                    <li className='font-sans text-primaryFont hover:text-gray-950 cursor-pointer'>Home</li>
                    <li className='font-sans text-primaryFont hover:text-gray-950 cursor-pointer'>Services</li>
                    <li className='font-sans text-primaryFont hover:text-gray-950 cursor-pointer'>Products</li>
                    <li className='font-sans text-primaryFont hover:text-gray-950 cursor-pointer'>Gallery</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
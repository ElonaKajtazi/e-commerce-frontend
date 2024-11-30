import instaShop1 from '../../../public/assets/landingPage/insta-shop1.png'
import instaShop2 from '../../../public/assets/landingPage/insta-shop2.png'
import instaShop3 from '../../../public/assets/landingPage/insta-shop3.png'
import instaShop4 from '../../../public/assets/landingPage/insta-shop4.png'
import instagramIcon from '../../../public/assets/landingPage/instagram.svg'
import facenookIcon from '../../../public/assets/landingPage/facebook.svg'
import xIcon from '../../../public/assets/landingPage/twitterx1.svg'
const Footer = () => {
    return (
        <footer className='bg-[#03344F] h-[368px] flex justify-center space-x-20 py-12'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col'>
                    <h4 className='text-white text-2xl font-sans font-bold mb-8'>Beauty Care</h4>
                    <p className='text-white font-sans text-[16px] leading-8 w-[400px]'>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                <div>
                    <h4 className='text-white text-2xl font-sans font-bold mt-2 mb-4'>Follow Us</h4>
                    <ul className='flex gap-2'>
                        <li>
                            <a href='#'>
                                <img src={instagramIcon} alt='Instagram icon' className='h-[30px]' />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src={facenookIcon} alt='Instagram icon' className='h-[30px]'/>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src={xIcon} alt='Instagram icon' className='h-[30px]' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h4 className='text-white text-2xl font-sans font-bold mb-4'>Instagram Shop</h4>
                <ul className='flex justify-center space-x-4'>
                    <li>
                        <img src={instaShop1} alt='Image from Instagram shop' />
                    </li>
                    <li>
                        <img src={instaShop2} alt='Image from Instagram shop'/>
                    </li>
                    <li>
                        <img src={instaShop3} alt='Image from Instagram shop'/>
                    </li>
                    <li>
                        <img src={instaShop4} alt='Image from Instagram shop'/>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
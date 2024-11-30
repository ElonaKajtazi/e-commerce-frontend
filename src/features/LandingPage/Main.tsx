import authenticIcon from '../../../public/assets/landingPage/authentic.svg'
import deliveryIcon from '../../../public/assets/landingPage/delivery.svg'
import supportIcon from '../../../public/assets/landingPage/support.svg'
import greenCircle from '../../../public/assets/landingPage/green-circle.png'
import chandelier from '../../../public/assets/landingPage/chandelier.png'
import warehouse from '../../../public/assets/landingPage/warehouse.png'
import cupboard from '../../../public/assets/landingPage/cupboard.png'
import bedroom from '../../../public/assets/landingPage/bedroom.png'
import table1 from '../../../public/assets/landingPage/table-1.png'
import girl from '../../../public/assets/landingPage/some-girl.png'
import living from '../../../public/assets/landingPage/living.png'
import dining from '../../../public/assets/landingPage/dining.png'
import person from '../../../public/assets/landingPage/person.png'
import table from '../../../public/assets/landingPage/table.png'
import Button from '../../shared/button'
import Input from '../../shared/input'

const Main = () => {
    let buttonCssClass = 'bg-primaryColor w-[229px] h-[70px] text-white rounded-[50px] font-sans font-medium mt-6 cursor-pointer'

    return (
        <main>
            <section className=' relative flex bg-cover bg-center bg-no-repeat h-[749px]' style={{ backgroundImage: 'url(/assets/landingPage/mask-group.jpg)' }}>
                <div className='absolute left-[850px] top-[277px] w-[600px] h-[430px] bg-[rgb(223,233,244)] p-9 rounded-[10px]'>
                    <p className='font-sans text-base leading-[20px] w-[126px] text-primaryFont tracking-[3px]'>New Arrival</p>
                    <h1 className='font-semibold text-5xl w-[350px] text-primaryColor leading-[65px] my-4'>Discover Our New Collection</h1>
                    <p className='text-lg leading-[39px] text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus, nulla inventore facere quam recusandae.</p>
                    <Button className={buttonCssClass} label='Buy Now'/>
                </div>
            </section>

            <section className='bg-secondaryColor h-[150px] flex items-center'>
                <ul className='flex justify-evenly w-full'>
                    <li className='flex flex-row space-x-4 items-center'>
                        <img src={deliveryIcon} alt='Delivery Icon' className='h-[50px]'/>
                        <div>
                            <h2 className='text-2xl font-medium font-sans text-primaryFont'>Free Delivry</h2>
                            <p className='font-sans text-base text-primaryFont'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </li>
                    <li className='flex flex-row space-x-4'>
                        <img src={supportIcon} alt='Support Icon' className='h-[50px]'/>
                        <div>
                            <h2 className='text-2xl font-medium font-sans text-primaryFont'>Support 24/7</h2>
                            <p className='font-sans text-base text-primaryFont'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </li>
                    <li className='flex flex-row space-x-4'>
                        <img src={authenticIcon} alt='Authentic Icon' className='h-[50px]'/>
                        <div>
                            <h2 className='text-2xl font-medium font-sans text-primaryFont'>100% Authentic</h2>
                            <p className='font-sans text-base text-primaryFont'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className='flex flex-col items-center gap-8 py-8'>
                <h2 className='text-3xl font-sans font-semibold text-primaryFont'>Inspiration Collection</h2>
                <p className='text-xl font-sans text-primaryFont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex flex-row space-x-9 mt-4'>
                    <img src={table} alt='Table image' className='h-[434px] mt-[50px]'/>
                    <img src={cupboard} alt='Cupboard image' className='h-[434px]' />
                    <img src={chandelier} alt='Chandelier image' className='h-[434px] mt-[50px]' />
                </div>
            </section>

            <section className='bg-secondaryColor h-[874px] flex items-center justify-center gap-10 py-8'>
                <div className='flex flex-col justify-center max-w-md px-8'>
                    <h2 className='text-3xl font-sans font-semibold text-primaryFont mb-4'>Beautify Your Space</h2>
                    <p className='mb-6 text-secondaryFont leading-9'>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <Button className={buttonCssClass} label='LEARN MORE'/>
                </div>
                <div className='relative flex items-center'>
                    <img src={girl} alt='A girl image' className='rounded-lg max-h-[600px] relative z-10'/>
                    <img src={greenCircle} alt='A green circle' className="absolute rounded-full w-[372px] h-[372px] right-[-85px] top-1/2 transform -translate-y-1/2 z-0"/>
                </div>
            </section>

            <section className='flex flex-col items-center gap-8 py-10'>
                <h2 className='text-3xl font-sans font-semibold text-primaryFont'>Browse The Range</h2>
                <p className='text-xl font-sans text-primaryFont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul className='flex flex-row space-x-9 mt-4'>
                    <li className='flex flex-col gap-3 items-center'>
                        <img src={dining} alt='Dining room image' className='h-[434px]'/>
                        <span className='text-[24px] text-center font-sans text-primaryFont font-medium'>Dining</span>
                    </li>
                    <li className='flex flex-col gap-3 items-center'>
                        <img src={living} alt='Living room image' className='h-[434px]' />
                        <span className='text-[24px] text-center font-sans text-primaryFont font-medium'>Living</span>
                    </li>
                    <li className='flex flex-col gap-3 items-center'>
                        <img src={bedroom} alt='Bedroom image' className='h-[434px]' />
                        <span className='text-[24px] text-center font-sans text-primaryFont font-medium'>Beddroom</span>
                    </li>
                </ul>
            </section>

            <div className='h-[1px] bg-[#D7D6D6]'></div>

            <section className='flex flex-col items-center gap-8 py-14'>
                <h2 className='text-3xl font-sans font-semibold text-primaryFont'>How It Works</h2>
                <p className='text-xl font-sans text-primaryFont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul className='flex flex-row space-x-9 mt-4'>
                    <li className='flex flex-col gap-3 items-center'>
                        <div className='relative h-[450px]'>
                            <img src={person} alt='Person image' className='h-[400px]'/>
                            <div className='absolute bottom-1 left-[145px] w-[90px] h-[90px] bg-white text-white flex justify-center items-center rounded-full text-[24px] font-bold font-sans'>
                                <span className='bg-black w-[60px] h-[60px] flex justify-center items-center rounded-full'>1.</span>
                            </div>
                        </div>
                        <h3 className='text-[24px] text-center font-sans text-primaryFont font-bold'>Purchase Securely</h3>
                        <p className='font-sans text-[20px] text-primaryFont leading-7 w-[380px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li className='flex flex-col gap-3 items-center'>
                        <div className='relative h-[450px]'>
                            <img src={warehouse} alt='warehouse image' className='h-[400px]' />
                            <div className='absolute bottom-1 left-[145px] w-[90px] h-[90px] bg-white text-white flex justify-center items-center rounded-full text-[24px] font-bold font-sans'>
                                <span className='bg-black w-[60px] h-[60px] flex justify-center items-center rounded-full'>2.</span>
                            </div>
                        </div>
                        <h3 className='text-[24px] text-center font-sans text-primaryFont font-bold'>Ships From Warehouse</h3>
                        <p className='font-sans text-[20px] text-primaryFont leading-7 w-[380px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li className='flex flex-col gap-3 items-center'>
                        <div className='relative h-[450px]'> 
                            <img src={table1} alt='Table image' className='h-[400px]' />
                            <div className='absolute bottom-1 left-[145px] w-[90px] h-[90px] bg-white text-white flex justify-center items-center rounded-full text-[24px] font-bold font-sans'>
                                <span className='bg-black w-[60px] h-[60px] flex justify-center items-center rounded-full'>3.</span>
                            </div>
                        </div>
                        <h3 className='text-[24px] text-center font-sans text-primaryFont font-bold'>Style Your Room</h3>
                        <p className='font-sans text-[20px] text-primaryFont leading-7 w-[380px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                </ul>
            </section>

            <section className='h-[363px] bg-secondaryColor flex flex-col items-center justify-center gap-8'>
                <h2 className='text-3xl font-sans font-bold text-primaryFont'>Join Our Mailing List</h2>
                <p className='font-sans text-[20px] text-primaryFont leading-7 w-[380px] text-center'>Sign up to receive inspiration, product updates, and special offers from our team.</p>
                <form className='border-solid border-[1px] border-primaryColor rounded-[3px]'>
                    <Input type='email' placeholder='example@gmail.com'/>
                    <Button label='Submit' className='bg-primaryColor w-[153px] h-[60px] text-white  font-sans font-small cursor-pointer'/>
                </form>
            </section>
        </main>
    )
}

export default Main
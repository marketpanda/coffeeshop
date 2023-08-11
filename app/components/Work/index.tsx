"use client"
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Fade } from "react-awesome-reveal";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


interface cardDataType {
    imgSrc: string;
    heading: string;
    subheading: string;
    link: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: "Menu variations",
        subheading: "Sed ut perspiciatis unde omnis iste natus error",
        link: 'Learn more'
    },
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: "Cooking warw",
        subheading: "Sed ut perspiciatis unde omnis iste natus error",
        link: 'Learn more'
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: "Best chef",
        subheading: "Sed ut perspiciatis unde omnis iste natus error",
        link: 'Learn more'
    },
    {
        imgSrc: '/images/Features/featureFour.svg',
        heading: "Fast food",
        subheading: "Sed ut perspiciatis unde omnis iste natus error",
        link: 'Learn more'
    }

]

const Work = () => {
 
    return (

        <div>
            <div className='mx-auto max-w-7xl py-40 px-6' id="about-section">
                <div className='text-center mb-14' >
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className='text-pink text-lg font-normal mb-3 ls-51 uppercase'>Features</h3>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <p className='text-3xl lg:text-5xl font-semibold text-lightgrey'>Take a visit<br />and get your coffee .</p>
                    </Fade>
                </div> 

                <div className='mx-auto p-2  w-full flex-col border-8 border-rose-600 overflow-hidden md:w-full flex md:flex-row-reverse'>
                    {/* <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                        {cardData.map((items, i) => (
                            <div className='card-b p-8 relative rounded-3xl' key={i}>
                                <div className='work-img-bg rounded-full flex justify-center absolute top-[-50%] sm:top-[-40%] md:top-[-55%] lg:top-[-45%] left-[0%]'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={510} height={10} />
                                </div>
                                <h3 className='text-2xl text-black font-semibold text-center mt-16'>{items.heading}</h3>
                                <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
                                <div className='flex items-center justify-center'>
                                    <Link href='/'><p className='text-center text-lg font-medium text-pink mt-2 hover-underline'>{items.link}<ChevronRightIcon width={20} height={20} /></p></Link>
                                </div>
                            </div>
                        ))}
                    </Fade> */}
                   

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310.29855791714874!2d-0.03444747712118841!3d51.52443447984209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d3017dc1939%3A0xdf61bf1dbacaae16!2sInternational%20Comrades%20Coffee%20Shop!5e0!3m2!1sen!2sph!4v1691734226074!5m2!1sen!2sph" width="100%" height="400" loading="lazy"></iframe>

                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <div className='text-right md:mr-2 md:w-96'>
                            <h3 className='text-2xl mb-2'>Opening Hours</h3>
                            <ul>
                                <li>Monday 07:30 - 17:30</li>
                                <li>Tuesday 07:30 - 17:30</li>
                                <li>Wednesday 07:30 - 17:30</li>
                                <li>Thursday 07:30 - 17:30</li>
                                <li>Friday 07:30 - 17:30</li>
                                <li>Saturday 07:30 - 17:30</li>
                                <li>Sunday 07:30 - 17:30</li>
                            </ul> 
                        </div>
                    </Fade>
                    
                </div>
            </div>
        </div> 
    )
}

export default Work;

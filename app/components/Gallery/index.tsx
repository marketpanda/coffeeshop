"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
 
 
const Gallery = () => {
    const [emblaRef] = useEmblaCarousel({loop:true}, [Autoplay()])

    const image = ['1', '2', '3']

    //1.jpg, 2..jpg and so on
    const pics = Array.from({ length: 15 }, (_, index) => index + 1);

    const repeat = () => {
        return (
            <> {
                pics.map((i) => {
                    
                    const imageUrl = `/images/Gallery/${i}.jpg`; 
                    return (
                        // <div key={i} className="flex-none flex-grow-0 flex-shrink-0 w-full min-w-0">
                        <div key={i} className="flex-none flex-grow-0 flex-shrink-0 w-full min-w-0">
                            <Image src={imageUrl} alt={`Image ${i}`}  width={800} height={300}  />  
                        </div> 
                    ) 
                })
            }
            </>
        )  
    }
    
    return (
        <div id="location">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24'>
                <div className="text-center">
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h2 className='text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51'>Our Gallery</h2>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className="text-3xl lg:text-5xl font-semibold text-black">
                            Coffee Shop Gallery
                        </h3>
                    </Fade>

                </div>

                {/* <div className='grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6'>

                    <div className='col-span-6 flex justify-center overflow-hidden rounded-3xl'>
                        <Image src="/images/Gallery/foodone.jpg" alt="pizza-one" width={1000} height={805} className="inner-img"/>
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <div className="grid grid-rows-1 grid-flow-row gap-4">
                            <div className="row-span-1 overflow-hidden rounded-3xl">
                                <Image src="/images/Gallery/foodtwo.jpg" alt="pizza-two" width={700} height={405} className="inner-img"/>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <div className='overflow-hidden rounded-3xl'>
                                    <Image src="/images/Gallery/foodthree.jpg" alt="pizza-three" width={500} height={405} className="inner-img"/>
                                </div>
                                <div className='overflow-hidden rounded-3xl'>
                                    <Image src="/images/Gallery/foodfour.jpg" alt="pizza-four" width={500} height={405} className="inner-img"/>
                                </div>
                            </div>
                        </div>
                    </div> 

                </div> */}
            </div>
              
            {/* .embla */}
            <div className="w-full sm:w-7/12 overflow-hidden border-4 mx-auto" ref={emblaRef}> 
            
                {/* .embla__container */}
                <div className="flex">
                    {/* .embla__slide */}
                    {repeat()} 
                    {/* <div className="flex-none flex-grow-0 flex-shrink-0 w-full min-w-0">
                        <Image src="/images/Gallery/1.jpg" alt="pizza-four" width={300} height={300} />
                    </div>
                    <div className="flex-none flex-grow-0 flex-shrink-0 w-full min-w-0">
                        <Image src="/images/Gallery/2.jpg" alt="pizza-four" width={300} height={300} />
                    </div>
                    <div className="flex-none flex-grow-0 flex-shrink-0 w-full min-w-0">
                        <Image src="/images/Gallery/3.jpg" alt="pizza-four" width={300} height={300}/>
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
}

export default Gallery;

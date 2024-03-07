import React from 'react'
import styles from "style.module.scss";
import Image from "next/image";

const hero_img = [
  
    { src: "/images/hero1.jpg"}, 
    { src: "/images/hero2.jpg" },
    { src: "/images/hero3.jpg" },
    { src: "/images/hero2.jpg" },
    { src: "/images/hero4.jpg" },
    { src: "/images/hero5.jpg" },
    { src: "/images/hero2.jpg" },
    { src: "/images/hero3.jpg" },
    { src: "/images/hero6.jpg"},
    { src: "/images/hero7.jpg"},
    { src: "/images/hero8.jpg"},
    { src: "/images/hero9.jpg"},
    { src: "/images/hero10.jpg"},
    { src: "/images/hero11.jpg"},
    { src: "/images/hero12.jpg"},
    { src: "/images/hero13.jpg"}
  ]
  


const imageSlider = () => {
  return (

    <div>
        <div className='flex flex-col'>
            {hero_img.map((image, index) => (
            <div key={index} className={styles.activeSlide}>
              <Image
                src={image.src}
                alt="advert"
                height={1080}
                width={1920}
                objectFit='cover'
              />
            </div>
            ))}
      </div>  

        <div>
      {/**Slider */}
            <div className={styles.slider}>
                {/* slides */}
                <div className={styles.slide} id='slide-1'>
                {/*slide-copy*/}
                    <div className={styles.copy}>
                        <p>Neo Elegance</p>
                        <p id='index'>(Industry: Luxary)</p>
                    </div>
                    {/* slide image*/}
                    <div className={styles.slideimg}>
                        <Image
                           src="/images/hero1.jpg" 
                           alt='Image'
                        />
                    </div>
                </div>

                <div className={styles.slide} id='slide-2'>
                {/*slide-copy*/}
                    <div className={styles.copy}>
                        <p>Neo Elegance</p>
                        <p id='index'>(Industry: Luxary)</p>
                    </div>
                    {/* slide image*/}
                    <div className={styles.slideimg}>
                        <Image
                           src="/images/hero2.jpg" 
                           alt='Image'
                        />
                    </div>
                </div>
                <div className={styles.slide} id='slide-3'>
                {/*slide-copy*/}
                    <div className={styles.copy}>
                        <p>Neo Elegance</p>
                        <p id='index'>(Industry: Luxary)</p>
                    </div>
                    {/* slide image*/}
                    <div className={styles.slideimg}>
                        <Image
                           src="/images/hero3.jpg" 
                           alt='Image'
                        />
                    </div>
                </div>
                <div className={styles.slide} id='slide-4'>
                {/*slide-copy*/}
                    <div className={styles.copy}>
                        <p>Neo Elegance</p>
                        <p id='index'>(Industry: Luxary)</p>
                    </div>
                    {/* slide image*/}
                    <div className={styles.slideimg}>
                        <Image
                           src="/images/hero4.jpg" 
                           alt='Image'
                        />
                    </div>
                </div>
                <div className={styles.slide} id='slide-5'>
                {/*slide-copy*/}
                    <div className={styles.copy}>
                        <p>Neo Elegance</p>
                        <p id='index'>(Industry: Luxary)</p>
                    </div>
                    {/* slide image*/}
                    <div className={styles.slideimg}>
                        <Image
                           src="/images/hero5.jpg" 
                           alt='Image'
                        />
                    </div>
                </div>
                <div className={styles.slide} id='slide-6'>
                {/*slide-copy*/}
                    <div className={styles.copy}>
                        <p>Neo Elegance</p>
                        <p id='index'>(Industry: Luxary)</p>
                    </div>
                    {/* slide image*/}
                    <div className={styles.slideimg}>
                        <Image
                           src="/images/hero6.jpg" 
                           alt='Image'
                        />
                    </div>
                </div>
                <div className={styles.slide} id='slide-7'>
                {/*slide-copy*/}
                    <div className={styles.copy}>
                        <p>Neo Elegance</p>
                        <p id='index'>(Industry: Luxary)</p>
                    </div>
                    {/* slide image*/}
                    <div className={styles.slideimg}>
                        <Image
                           src="/images/hero7.jpg" 
                           alt='Image'
                        />
                    </div>
                </div>
                <div className={styles.slide} id='slide-8'>
                {/*slide-copy*/}
                    <div className={styles.copy}>
                        <p>Neo Elegance</p>
                        <p id='index'>(Industry: Luxary)</p>
                    </div>
                    {/* slide image*/}
                    <div className={styles.slideimg}>
                        <Image
                           src="/images/hero8.jpg" 
                           alt='Image'
                        />
                    </div>
                </div>
                <div className={styles.slide} id='slide-9'>
                {/*slide-copy*/}
                    <div className={styles.copy}>
                        <p>Neo Elegance</p>
                        <p id='index'>(Industry: Luxary)</p>
                    </div>
                    {/* slide image*/}
                    <div className={styles.slideimg}>
                        <Image
                           src="/images/hero9.jpg" 
                           alt='Image'
                        />
                    </div>
                </div>
                <div className={styles.slide} id='slide-10'>
                {/*slide-copy*/}
                    <div className={styles.copy}>
                        <p>Neo Elegance</p>
                        <p id='index'>(Industry: Luxary)</p>
                    </div>
                    {/* slide image*/}
                    <div className={styles.slideimg}>
                        <Image
                           src="/images/hero10.jpg" 
                           alt='Image'
                        />
                    </div>
                </div>

            </div>
        </div>


    </div>
  )
}

export default imageSlider;

import Image from 'next/image';
import React from 'react';
import bannerImage from '@/public/assets/hero/banner.png';

export default function Banner() {
  return (
    <div className='max-w-[1920px] w-full '>
      <Image src={bannerImage}
      alt='banner'
      width={1920}
      height={571} />
    </div>
  )
}

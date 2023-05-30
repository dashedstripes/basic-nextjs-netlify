import Image from 'next/image'

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  };
}

export default function Home() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-800'>
      <div className='flex flex-col items-center'>
        <Image src="/netlify.svg" width={200} height={100} alt="Netlify" className='mb-10'/>
        <h1 className='font-bold text-6xl text-white'>We&apos;re online!</h1>
      </div>
    </div>
  )
}

import Image from 'next/image'

const Home: React.FC = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-800'>
      <div className='flex flex-col items-center'>
        <Image src="/netlify.svg" width={200} height={100} alt="Netlify" className='mb-10'/>
        <h1 className='font-bold text-6xl text-white mb-8'>We&apos;re deployed!</h1>
      </div>
    </div>
  )
}

export default Home;

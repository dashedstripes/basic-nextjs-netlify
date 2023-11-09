import { Logo } from '@/components/Logo';
import Image from 'next/image'

export async function getStaticProps() {
  const date = new Date();
  return {
    props: {
      hours: date.getHours(),
      minutes: date.getMinutes()
    },
    revalidate: 60,
  };
}

interface Props {
  hours: number;
  minutes: number;
}

const Home: React.FC<Props> = ({ hours, minutes }) => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-800'>
      <div className='flex flex-col items-center'>
        <Logo/>
        <Image src="/netlify.svg" width={200} height={100} alt="Netlify" className='mb-10'/>
        <h1 className='font-bold text-6xl text-white mb-8'>We&apos;re online!</h1>
        <p className='text-2xl text-white'>{hours}:{minutes}</p>
        <p>Woah everything is different on this branch!</p>
      </div>
    </div>
  )
}

export default Home;
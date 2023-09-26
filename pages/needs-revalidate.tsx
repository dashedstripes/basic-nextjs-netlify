export async function getStaticProps() {
  const date = new Date();
  return {
    props: {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    },
    revalidate: 6000,
  };
}

interface Props {
  hours: number;
  minutes: number;
  seconds: number;
}

const Test: React.FC<Props> = ({ hours, minutes, seconds }) => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-800'>
      <div className='flex flex-col items-center'>
        <h1 className='font-bold text-6xl text-white mb-8'>We&apos;re online!</h1>
        <p className='text-2xl text-white'>{hours}:{minutes}:{seconds}</p>
      </div>
    </div>
  )
}

export default Test;
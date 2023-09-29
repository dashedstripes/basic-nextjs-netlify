const Unavailable: React.FC = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-800'>
      <div className='flex flex-col items-center text-white'>
        <p>This is the custom page hit onError of an edge function</p>
      </div>
    </div>
  )
}

export default Unavailable;
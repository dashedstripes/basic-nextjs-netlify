export async function getServerSideProps(context: any) {
  context.res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

  return {
    props: {}
  };
}

const Backend: React.FC = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-800'>
      <div className='flex flex-col items-center text-white'>
        <p>This page should include the preload CSP header</p>
      </div>
    </div>
  )
}

export default Backend;
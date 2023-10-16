import { Audio } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center' >
      
      <Audio
            height="100"
            width="100"
            color="#4b49ac"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
      
    </div>
  )
}

export default Loader
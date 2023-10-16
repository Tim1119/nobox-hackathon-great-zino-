import noboxLogo from '../assets/nobox-logo.png'
import medalLogo from '../assets/medal.png'
import giftBox from '../assets/box.png'
import avatar2 from '../assets/avatar-2.jpg'
import avatar3 from '../assets/avatar-3.jpg'
import avatar4 from '../assets/avatar-4.jpg'


const InformationBar = () => {
  return (
    <div className='w-[400px] text-black hidden lg:inline-flex flex-col' >
      <div className='grid w-full  border-gray-200 shadow-md' >
        <h3 className='font-medium text-base w-full border-b border-gray-300 p-2' >Events</h3>
        <div className='flex items-center justify-between gap-4 p-2' >
          <img className='w-10 h-10' src={noboxLogo} alt="" />
          <div>
            <h3 className='text-sm' >Nobox Hackathon Commences</h3>
            <p className='font-light text-xs' >Nobox hackathon commences on the 3rd of october to 15th of october</p>
          </div>
        </div>
        
        <div className='flex items-center justify-between gap-2 p-2' >
          <img className='w-10 h-10' src={medalLogo} alt="" />
          <div>
            <h3 className='text-sm' >Nobox Announce Winner</h3>
            <p className='font-light text-xs' >Nobox hackathon winner announced on the 15th of october</p>
          </div>
        </div>
        <div className='flex items-center justify-between gap-2 p-2' >
          <img className='w-10 h-10' src={giftBox} alt="" />
          <div>
            <h3 className='text-sm' >Nobox Reward Winners</h3>
            <p className='font-light text-xs' >Nobox hackathon winner announced on the 15th of october</p>
          </div>
        </div>
      </div>
      <div className='grid w-full  border-gray-200 shadow-md my-5' >
        <h3 className='font-medium text-base w-full border-b border-gray-300 p-2 ' >Connect With Friends </h3>
        <div className='flex items-center justify-between gap-4 p-2 my-1' >
          <img className='w-10 h-10 rounded-full' src={avatar2} alt="" />
          <div>
            <h3 className='text-sm' >Dr Akintunde Nobox</h3>
            <p className='font-light text-xs' >Hi Im the ceo of Nobox ans  on the 3rd of october to 15th of october</p>
          
          </div>
        </div>
        <div className='flex items-center justify-between gap-4 p-2  my-1' >
          <img className='w-10 h-10 rounded-full' src={avatar3} alt="" />
          <div>
            <h3 className='text-sm' >Dr Milaar Nobox</h3>
            <p className='font-light text-xs' >Hi Im the sales repo of Nobox from the 3rd of october to 15th of october</p>
          </div>
        </div>
        <div className='flex items-center justify-between gap-4 p-2  my-1' >
          <img className='w-10 h-10 rounded-full' src={avatar4} alt="" />
          <div>
            <h3 className='text-sm' >Dr Cj Nobox</h3>
            <p className='font-light text-xs' >Hi Im the team lead of Nobox from the 3rd of october to 15th of october</p>
          </div>
        </div>
       
      
      </div>
    </div>
  )
}

export default InformationBar
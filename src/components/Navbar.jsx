import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile} from '.';
import { useStateContext } from '../context/ContextProvider'

const NavButton = ({ title, cusFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type='button' onClick={cusFunc} style={{ color }} className="relative text-xl rounded-t-full p-3 hover:bg-light-gray">
      <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 top-2 right-2" />
      {icon}
    </button>
  </TooltipComponent>
)


const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize]);
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton 
        title="Menu" 
        cusFunc={() => setActiveMenu(prev => !prev)} 
        color={currentColor} 
        icon={<AiOutlineMenu />} 
      />

      <div className='flex'>
        <NavButton 
          title="Cart" 
          cusFunc={() => handleClick('cart')} 
          color={currentColor} 
          icon={<FiShoppingCart />} 
        />
        <NavButton 
          title="Chat"
          dotColor="#03c9d7"
          cusFunc={() => handleClick('chat')} 
          color={currentColor} 
          icon={<BsChatLeft />} 
        />
        <NavButton 
          title="Notification"
          dotColor="#03c9d7"
          cusFunc={() => handleClick('notification')} 
          color={currentColor} 
          icon={<RiNotification3Line />} 
        />

        <TooltipComponent
          content="Profile"
          position='BottomCenter'
        >
          <div 
            className='flex gap-2 p-1 items-center hover:bg-light-gray rounded-lg cursor-pointer'
            onClick={() => handleClick('userProfile')}
          >
            <img 
              src={avatar}
              className="rounded-full w-8 h-8 "
            />
            <p className='flex items-center gap-2'>
              <span className='text-gray-400 hover:text-gray-600 transition'>
                Hi, <span className='font-bold ml-1 '>AbdAlmjed</span>
              </span>
              <MdKeyboardArrowDown className='text-gray-400 hover:text-gray-600 transition' />
            </p>
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar
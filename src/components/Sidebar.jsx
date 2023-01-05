import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  const activeLink = 'flex items-center gap-4 pl-4 pt-3 pb-3 rounded-lg transition text-white text-md m-2';
  const normalLink = 'flex items-center gap-4 pl-4 pt-3 pb-3 rounded-lg transition text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to="/" className='items-center flex ml-3 gap-3 mt-4 text-xl font-extrabold tracking-tighter dark:text-white text-slate-900' onClick={handleCloseSideBar}>
            <SiShopware /> <span>Shoppy</span>
          </Link>
          <TooltipComponent content="Menu" position='BottomCenter'>
            <button type='button'
              onClick={() => setActiveMenu(prev => !prev)}
              className="text-xl rounded-full mr-1 mt-3 transition block hover:shadow-lg hover:bg-light-gray p-2"
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>

        <div className='mt-10'>
          {links.map((item, i) => (
            <div key={i}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p>
              {item.links.map((link, i) => (
                <NavLink 
                  key={i} 
                  to={`/${link.name}`}
                  onClick={handleCloseSideBar}
                  style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : '' })}
                  className={({ isActive }) => isActive ? activeLink : normalLink}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </div>

          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar
import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faBars,
  faXmark,
  faHouse,
  faUser,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons'

import dog from '../Assets/dog.avif'
const AnimatedNavigation = () => {
  const [showNav, setShownav] = useState(false)
  const handleOpenNav = () => {
    setShownav(true)
  }
  const handleCloseNav = () => {
    setShownav(false)
  }
  return (
    <div>
      <div className="bg-[#333]">
        <div
          className={` ${
            showNav ? 'rotate-[-22deg]' : 'rotate-[0deg]'
          } wrapper origin-top-left transition-transform duration-500 ease-linear bg-gray-100`}
        >
          <div className="container mx-auto bg-gray-100">
            <div className="mx-40 py-24">
              <h1 className="font-bold text-[32px] text-[#222] font-sans">
                Amazing Article
              </h1>
              <p className="text-sm  font-sans ">
                <i>Florin Pop</i>
              </p>
              <p className="mt-4  font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium quia in ratione dolores cupiditate, maxime aliquid
                impedit dolorem nam dolor omnis atque fuga labore modi veritatis
                porro laborum minus, illo, maiores recusandae cumque ipsa quos.
                Tenetur, consequuntur mollitia labore pariatur sunt quia harum
                aut. Eum maxime dolorem provident natus veritatis molestiae
                cumque quod voluptates ab non, tempore cupiditate? Voluptatem,
                molestias culpa. Corrupti, laudantium iure aliquam rerum sint
                nam quas dolor dignissimos in error placeat quae temporibus
                minus optio eum soluta cupiditate! Cupiditate saepe voluptates
                laudantium. Ducimus consequuntur perferendis consequatur nobis
                exercitationem molestias fugiat commodi omnis. Asperiores quia
                tenetur nemo ipsa.
              </p>
              <h2 className="mt-4 font-bold font-sans mb-4 text-[#222]">
                My Dog
              </h2>
              <img src={dog} alt="" />
              <p className=" font-sans mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                libero deleniti rerum quo, incidunt vel consequatur culpa ullam.
                Magnam facere earum unde harum. Ea culpa veritatis magnam at
                aliquid. Perferendis totam placeat molestias illo laudantium?
                Minus id minima doloribus dolorum fugit deserunt qui vero
                voluptas, ut quia cum amet temporibus veniam ad ea ab
                perspiciatis, enim accusamus asperiores explicabo provident.
                Voluptates sint, neque fuga cum illum, tempore autem maxime
                similique laborum odio, magnam esse. Aperiam?
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${
            showNav ? 'rotate-[-90deg]' : 'rotate-[0deg]'
          } circle flex items-end justify-between bg-[#ff7979] w-48 h-48 px-12 py-10 rounded-full fixed 
             transition-transform duration-500 ease-linear -top-24 -left-24`}
        >
          <div className="close cursor-pointer" onClick={handleCloseNav}>
            <FontAwesomeIcon icon={faXmark} className="text-white h-8" />
          </div>

          <div className="Open cursor-pointer" onClick={handleOpenNav}>
            <FontAwesomeIcon icon={faBars} className="text-white h-8" />
          </div>
        </div>
        <div className="fixed bottom-10 z-10 -left-32">
          <nav>
            <ul>
              <li
                className={`${
                  showNav ? 'translate-x-40 delay-100' : 'translate-x-0'
                } text-white  transition-all duration-150 cursor-pointer flex items-center ease-in-out mb-8`}
              >
                <FontAwesomeIcon icon={faHouse} className=" h-6" />
                <span className="uppercase ml-2 font-semibold text-base">
                  Home
                </span>
              </li>
              <li
                className={`${
                  showNav ? 'translate-x-44 delay-300' : 'translate-x-0'
                }  text-white transition-all duration-300 cursor-pointer flex items-center ease-out mb-8`}
              >
                <FontAwesomeIcon icon={faUser} className="h-7" />
                <span className="uppercase ml-2 font-semibold text-base">
                  about
                </span>
              </li>
              <li
                className={`${
                  showNav ? 'translate-x-48 delay-500' : 'translate-x-0'
                }  text-white transition-all duration-300 cursor-pointer flex items-center ease-out mb-8`}
              >
                <FontAwesomeIcon icon={faAddressBook} className="h-6" />
                <span className="uppercase ml-2 font-semibold text-base">
                  Contact
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default AnimatedNavigation

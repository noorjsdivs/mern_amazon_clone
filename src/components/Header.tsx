
import { logo } from '@/app/assets'
import Image from 'next/image'
import Link from 'next/link'
import { IoLocationSharp } from 'react-icons/io5'
import SearchInput from './SearchInput'
import SignInButton from './SignInButton'
import FavoriteButton from './FavoriteButton'
import CartButton from './CartButton'
import HeaderBottom from './HeaderBottom'

const Header = () => {
  return (
    <header className=' static top-0 z-50'>
      <div className='w-full h-20 bg-amazonBule text-lightText'>
        <div className='h-full w-full mx-auto inline-flex items-center gap-2 md:gap-3 px-4'>
          <Link href={"/"}>
          <Image
                className="w-28 object-cover "
                src={logo}
                alt="logo"
                priority
              />
          </Link>
          <div className='headerItem hidden lg:inline-flex gap-2'>
          <IoLocationSharp className='text-lg text-white'/>
          <div className='text-xs'>
            <p>Deliver to</p>
            <p className=' text-white font-bold uppercase'>USA</p>
          </div>
          </div>
        <SearchInput/>

        <SignInButton/>
        <FavoriteButton/>
        <CartButton/>
        </div>
      </div>
      <HeaderBottom/>
    </header>
  )
}

export default Header
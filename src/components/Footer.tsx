
import { footerData } from '@/constants/intex'
import Container from './Container'
import FooterMiddleList from './FooterMiddleList'

const Footer = () => {
  return (
    <footer className='bg-footerBg '>
        <Container>
           <div className='py-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
           {footerData?.map((item)=>(
                <FooterMiddleList 
                key={item?._id}
                title={item?.title}
                listItem={item.listItem}/>
            ))}
           </div>
        </Container>
        <div className="flex flex-col justify-center items-center bg-footerBottom py-2">
        <div>
          <ul className="text-gray-300 text-sm gap-4 py-2 flex">
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Conditions of Use
            </li>
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Privacy Notice
            </li>
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Your Ads Privacy Choices
            </li>
          </ul>
        </div>
        <div>
          <p className="font-normal text-[12px] text-[#DDD] leading-3">
            © 1996-2022, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
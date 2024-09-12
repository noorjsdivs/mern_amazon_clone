

import { calculateCartTotals } from "../lib/utility";
import PriceFormate from "../PriceFormate";


const BillingSummary = () => {

    const { totalAmt } = calculateCartTotals();
    console.log("totlaprice", totalAmt)

    
 
    
  return (
    <div>
    <h2 className="text-2xl font-medium text-gray-900 mt-3">
       Order summary
     </h2>
     <div className="mt-6 space-y-4">
       <div className="flex items-center justify-between">
         <p className="text-sm text-gray-600">Subtotal</p>
         <p className="text-sm font-medium text-gray-900"><PriceFormate amount={totalAmt.regular}/></p>
       </div>

       <div className="flex items-center justify-between border-t border-gray-200 pt-4">
         <p className="text-base font-medium text-gray-900">
           Total Discount
         </p>
         <p className="text-sm font-medium text-gray-900"><PriceFormate amount={totalAmt.discounted}/></p>
       </div>
       <div className="flex items-center justify-between border-t border-gray-200 pt-4">
         <p className="text-base font-medium text-gray-900">
           Payable total
         </p>
         <p className="text-lg font-bold text-gray-900"><PriceFormate amount={totalAmt?.regular - totalAmt?.discounted}/></p>
       </div>

       <div>
       <button className="w-full">
            <p className="px-6 py-3 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transition ease-in-out">
              Payment
            </p>
          </button>
       </div>
      
     </div>
    </div>
  )
}

export default BillingSummary
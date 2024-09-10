"use client"
import { calculateCartTotals } from "@/lib/utility";
import Container from "../Container";
import PriceFormat from "../PriceFormate";

const CartSummary = () => {
      
      const { totalAmt } = calculateCartTotals()

      return (
            <Container className="">
                  <div className="border-2 border-amazonYellow bg-yellow-100 px-4 py-2 sm:gap-6 h-48 lg:col-span-5 mt-4 lg:mt-0 text-2xl">
                        <h2 className="text-2xl font-medium text-gray-800">
                              Order summary
                        </h2>

                        <div className="mt-2">

                              <div className="flex items-center justify-between">
                                    <p className="text-base font-medium text-gray-900">Subtotal</p>
                                    <p className="text-sm font-medium text-gray-900"><PriceFormat amount={totalAmt?.regular} /></p>
                              </div>

                              <div className="flex items-center justify-between mt-2">
                                    <p className="text-base font-medium text-gray-900">
                                          Total Discount
                                    </p>
                                    <p className="text-sm font-medium text-gray-900"><PriceFormat amount={totalAmt?.discounted} /></p>
                              </div>
                              <div className="flex items-center justify-between mt-2 mb-1">
                                    <p className="text-base font-medium text-gray-900">
                                          Payable total
                                    </p>
                                    <p className="text-sm font-medium text-gray-900"><PriceFormat amount={totalAmt?.regular - totalAmt?.discounted} /></p>
                              </div>
                              <div>
                                    <button className="w-full ">
                                          <p className="px-6 py-0.5 text-green-600 bg-amazonYellow/75 text-[16px]">
                                                Payment
                                          </p>
                                    </button>
                              </div>

                        </div>


                  </div>
            </Container>
      );
};

export default CartSummary;
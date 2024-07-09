import React from "react";

const Checkout = ({ cartItems, updateQuantity, totalPrice }) => {
  return (
    <div className="flex items-center pt-[42px] pb-16 justify-center ">
      <div className="bg-white p-10">
        <div className="mb-4">
          <h2 className="text-[32px] md:text-5xl font-bold py-6">Checkout</h2>
        </div>
        <div className="py-2">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-[#BABABA] py-10"
            >
              <div className="border-[#D4AF37] sm:h-[143px] border sm:py-[30px] sm:pr-[36px] sm:pl-[37px] rounded mr-9 ">
                <img
                  src={item.image}
                  alt={item.name}
                  width={75}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex justify-between  lg:text-3xl gap-[10%] lg:min-w-[501px] font-semibold">
                  <h3 className="  pb-[15px]">{item.name}</h3>
                  <p className="">${item.price.toFixed(2)}</p>
                </div>
                <div>
                  <p>
                    Quantity: <span>{updateQuantity}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <div className=" md:flex items-center md:border pl-2 md:rounded-md my-10 md:my-[59px]">
              <input
                type="text"
                placeholder="Coupon code"
                className="w-full p-2 focus:outline-none border rounded-md md:rounded-none md:border-none"
              />
              <button className="bg-[#C99A9A] text-white px-4 py-2 w-full md:w-[187px] rounded-md mt-2 md:mt-0 md:ml-2">
                Apply
              </button>
            </div>
            <div className="flex justify-between ">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg">${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between my-8">
              <p className="text-lg">Discount</p>
              <p className="text-lg">$0</p>
            </div>
            <div className="flex justify-between ">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
            </div>
       
              <button className="bg-[#C99A9A] text-white w-full py-4 rounded-lg text-lg mt-10">
                Pay with card
              </button>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

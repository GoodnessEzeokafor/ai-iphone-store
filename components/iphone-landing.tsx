import React from 'react'

const iphones = [
  { id: 1, name: "iPhone 16", color: "Midnight", storage: "128GB", price: 1000000 },
  { id: 2, name: "iPhone 16 Pro", color: "Sierra Blue", storage: "256GB", price: 1000000 },
  { id: 3, name: "iPhone 14", color: "Purple", storage: "64GB", price: 1000000 },
  { id: 4, name: "iPhone 13", color: "Red", storage: "128GB", price: 1000000 },
]

export default function IPhoneLandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-3xl font-extrabold text-black mb-6">Available iPhones</h2>
                {iphones.map((iphone) => (
                  <div key={iphone.id} className="bg-gray-50 p-4 rounded-lg shadow mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{iphone.name}</h3>
                    <p className="text-gray-600">{iphone.color} - {iphone.storage}</p>
                    <p className="text-gray-800 font-semibold mt-2">₦{iphone.price.toLocaleString()}</p>
                    <a
                      href='https://paystack.com/pay/3avociyw0i'
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 inline-block"
                    >
                      Buy Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// 
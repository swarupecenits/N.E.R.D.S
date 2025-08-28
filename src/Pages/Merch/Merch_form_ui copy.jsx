import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
function Merch_form_ui() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    tshirtSize: '',
    tshirtStyle: '',
    photo: null,
    paymentScreenshot: null,
  })
  const [currentSection, setCurrentSection] = useState(0)
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleFileChange = (e) => {
    const { name, files } = e.target
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }))
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    alert('Order submitted successfully!')
  }
  const scrollToSection = (index) => {
    setCurrentSection(index)
    const sections = document.querySelectorAll('.form-section')
    if (sections[index]) {
      sections[index].scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen w-full">
      {/* Background patterns */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-purple-400 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-400 blur-3xl"></div>
      </div>

      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSection === index ? 'bg-blue-500 scale-150' : 'bg-gray-300 hover:bg-gray-400'}`}
            aria-label={`Navigate to section ${index + 1}`}
          />
        ))}
      </div>

      <main className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <section className="form-section min-h-screen flex flex-col justify-center items-center">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              NERDS Robotics Club
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
              T-Shirt Order Form
            </h2>
            <p className="mt-6 text-gray-600 max-w-md mx-auto">
              Complete the form below to order your exclusive robotics club
              t-shirt. Scroll down to get started.
            </p>
          </div>
          <div className="mt-12 animate-bounce">
            <button
              onClick={() => scrollToSection(1)}
              className="p-2 rounded-full bg-white bg-opacity-50 backdrop-blur-sm shadow-lg"
              aria-label="Scroll down"
            >
              <ChevronDownIcon className="w-8 h-8 text-blue-500" />
            </button>
          </div>
        </section>

        {/* Personal Details Section */}
        <section className="form-section min-h-screen py-16 flex flex-col justify-center">
          <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">
              Personal Details
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="college"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    College/Branch
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your college/branch"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => scrollToSection(2)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Continue to T-Shirt Selection
            </button>
          </div>
        </section>

        {/* T-Shirt Selection Section */}
        <section className="form-section min-h-screen py-16 flex flex-col justify-center">
          <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">
              T-Shirt Selection
            </h2>
            <div className="space-y-8">
              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Upload Your Photo (PNG format)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept=".png"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="photo" className="cursor-pointer">
                    <div className="space-y-2">
                      <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                      <div className="text-gray-600">
                        <span className="font-medium text-blue-500">
                          Click to upload
                        </span>{' '}
                        or drag and drop
                      </div>
                      <p className="text-xs text-gray-500">PNG files only</p>
                    </div>
                  </label>
                  {formData.photo && (
                    <p className="mt-2 text-sm text-green-600">
                      File selected: {formData.photo.name}
                    </p>
                  )}
                </div>
              </div>

              {/* T-Shirt Size Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select T-Shirt Size
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <label key={size} className="cursor-pointer">
                      <input
                        type="radio"
                        name="tshirtSize"
                        value={size}
                        checked={formData.tshirtSize === size}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`
                        flex items-center justify-center p-4 rounded-lg border-2 transition-all
                        ${formData.tshirtSize === size ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 bg-white hover:border-gray-300'}
                      `}
                      >
                        <span
                          className={`
                          text-lg font-bold 
                          ${formData.tshirtSize === size ? 'text-blue-600' : 'text-gray-700'}
                        `}
                        >
                          {size}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* T-Shirt Style Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select T-Shirt Style
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      id: 'regular',
                      name: 'Regular Fit',
                      image:
                        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    },
                    {
                      id: 'oversized',
                      name: 'Oversized Fit',
                      image:
                        'https://images.unsplash.com/photo-1622445275576-721325763afe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    },
                  ].map((style) => (
                    <label key={style.id} className="cursor-pointer">
                      <input
                        type="radio"
                        name="tshirtStyle"
                        value={style.id}
                        checked={formData.tshirtStyle === style.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`
                        rounded-xl overflow-hidden border-2 transition-all
                        ${formData.tshirtStyle === style.id ? 'border-blue-500 shadow-lg' : 'border-transparent hover:shadow-md'}
                      `}
                      >
                        <div className="aspect-w-16 aspect-h-9 h-48">
                          <img
                            src={style.image}
                            alt={style.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div
                          className={`
                          p-4 text-center
                          ${formData.tshirtStyle === style.id ? 'bg-blue-50' : 'bg-white'}
                        `}
                        >
                          <span
                            className={`
                            font-medium
                            ${formData.tshirtStyle === style.id ? 'text-blue-600' : 'text-gray-700'}
                          `}
                          >
                            {style.name}
                          </span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => scrollToSection(3)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Continue to Payment
            </button>
          </div>
        </section>

        {/* Payment Section */}
        <section className="form-section min-h-screen py-16 flex flex-col justify-center">
          <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">
              Payment Details
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="bg-white p-4 rounded-xl shadow-md mb-4">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com/payment"
                    alt="Payment QR Code"
                    className="w-48 h-48"
                  />
                </div>
                <p className="text-center text-gray-600 text-sm">
                  Scan the QR code to make payment
                </p>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="mb-6">
                  <p className="font-medium text-gray-800 mb-2">
                    Payment Instructions:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Scan the QR code with your payment app</li>
                    <li>Complete the payment of ₹499</li>
                    <li>Take a screenshot of your payment confirmation</li>
                    <li>Upload the screenshot below</li>
                  </ol>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Upload Payment Screenshot
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      id="paymentScreenshot"
                      name="paymentScreenshot"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="paymentScreenshot"
                      className="cursor-pointer"
                    >
                      <div className="space-y-2">
                        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 text-blue-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </div>
                        <div className="text-gray-600">
                          <span className="font-medium text-blue-500">
                            Click to upload
                          </span>{' '}
                          screenshot
                        </div>
                      </div>
                    </label>
                    {formData.paymentScreenshot && (
                      <p className="mt-2 text-sm text-green-600">
                        File selected: {formData.paymentScreenshot.name}
                      </p>
                    )}
                  </div>
                </div>
                <button className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => scrollToSection(4)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Continue to Review Order
            </button>
          </div>
        </section>

        {/* Final Section - Order Summary */}
        <section className="form-section min-h-screen py-16 flex flex-col justify-center">
          <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">
              Order Summary
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-sm text-gray-500">Personal Details</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-800">
                      <span className="font-medium">Name:</span>{' '}
                      {formData.name || 'Not provided'}
                    </p>
                    <p className="text-gray-800">
                      <span className="font-medium">Email:</span>{' '}
                      {formData.email || 'Not provided'}
                    </p>
                    <p className="text-gray-800">
                      <span className="font-medium">Phone:</span>{' '}
                      {formData.phone || 'Not provided'}
                    </p>
                    <p className="text-gray-800">
                      <span className="font-medium">College:</span>{' '}
                      {formData.college || 'Not provided'}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-gray-500">T-Shirt Details</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-800">
                      <span className="font-medium">Size:</span>{' '}
                      {formData.tshirtSize || 'Not selected'}
                    </p>
                    <p className="text-gray-800">
                      <span className="font-medium">Style:</span>{' '}
                      {formData.tshirtStyle === 'regular'
                        ? 'Regular Fit'
                        : formData.tshirtStyle === 'oversized'
                          ? 'Oversized Fit'
                          : 'Not selected'}
                    </p>
                    <p className="text-gray-800">
                      <span className="font-medium">Photo:</span>{' '}
                      {formData.photo ? 'Uploaded' : 'Not uploaded'}
                    </p>
                    <p className="text-gray-800">
                      <span className="font-medium">Payment:</span>{' '}
                      {formData.paymentScreenshot ? 'Completed' : 'Pending'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-center text-blue-800">
                  Please verify all details before submitting your order. Once
                  submitted, changes cannot be made.
                </p>
              </div>
              <div className="flex justify-center pt-6">
                <button
                  onClick={handleSubmit}
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:animate-pulse"
                >
                  Submit Order
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-600">
            <p>Thank you for your order!</p>
            <p className="mt-2 text-sm">
              For any queries, contact:{' '}
              <a
                href="mailto:nerds@robotics.club"
                className="text-blue-600 hover:underline"
              >
                nerds@robotics.club
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Merch_form_ui;

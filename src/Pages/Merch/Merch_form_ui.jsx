import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

function Merch_form_ui() {
  const [formData, setFormData] = useState({
    name: "",
    fromNITSilchar: "No",
    scholarId: "",
    type: "",
    size: "",
    wantName: "No",
    nameInTShirt: "",
    address: "",
    phone: "",
    paymentScreenshot: null,
  });
  const [currentSection, setCurrentSection] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Order submitted successfully!");
  };

  const scrollToSection = (index) => {
    setCurrentSection(index);
    const sections = document.querySelectorAll(".form-section");
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    }
  };

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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index
                ? "bg-blue-500 scale-150"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Navigate to section ${index + 1}`}
          />
        ))}
      </div>

      <main className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="form-section min-h-screen flex flex-col justify-center items-center">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Merchandise Order
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
              NIT Silchar / External
            </h2>
            <p className="mt-6 text-gray-600 max-w-md mx-auto">
              Fill in your details and place your order for our exclusive
              merchandise. Scroll down to begin.
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  From NIT Silchar?
                </label>
                <select
                  name="fromNITSilchar"
                  value={formData.fromNITSilchar}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {formData.fromNITSilchar === "Yes" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Scholar ID
                  </label>
                  <input
                    type="text"
                    name="scholarId"
                    value={formData.scholarId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Scholar ID"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="[0-9]{10,15}"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  placeholder={
                    formData.fromNITSilchar === "Yes"
                      ? "Enter Hostel Number"
                      : "Enter Full Address"
                  }
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => scrollToSection(2)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-lg"
            >
              Continue to Merchandise Selection
            </button>
          </div>
        </section>

        {/* Merchandise Section */}
        <section className="form-section min-h-screen py-16 flex flex-col justify-center">
          <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">
              Merchandise Selection
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Type</option>
                  <option value="T-Shirt">T-Shirt</option>
                  <option value="Hoodie">Hoodie</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Size
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <label key={size} className="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={formData.size === size}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`flex items-center justify-center p-4 rounded-lg border-2 transition-all ${
                          formData.size === size
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 bg-white hover:border-gray-300"
                        }`}
                      >
                        <span
                          className={`font-bold ${
                            formData.size === size
                              ? "text-blue-600"
                              : "text-gray-700"
                          }`}
                        >
                          {size}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Want Name in T-Shirt?
                </label>
                <select
                  name="wantName"
                  value={formData.wantName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {formData.wantName === "Yes" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name in T-Shirt
                  </label>
                  <input
                    type="text"
                    name="nameInTShirt"
                    value={formData.nameInTShirt}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter name to be printed"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => scrollToSection(3)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-lg"
            >
              Continue to Payment
            </button>
          </div>
        </section>

        {/* Payment Section */}
        <section className="form-section min-h-screen py-16 flex flex-col justify-center">
          <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">
              Payment
            </h2>
            <div>
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
                <label htmlFor="paymentScreenshot" className="cursor-pointer">
                  <div className="space-y-2">
                    <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 text-blue-500">
                      +
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium text-blue-500">
                        Click to upload
                      </span>{" "}
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
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => scrollToSection(4)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-lg"
            >
              Continue to Review Order
            </button>
          </div>
        </section>

        {/* Summary Section */}
        <section className="form-section min-h-screen py-16 flex flex-col justify-center">
          <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">
              Order Summary
            </h2>
            <div className="space-y-4">
              <p>
                <b>Name:</b> {formData.name}
              </p>
              <p>
                <b>From NIT Silchar:</b> {formData.fromNITSilchar}
              </p>
              {formData.fromNITSilchar === "Yes" && (
                <p>
                  <b>Scholar ID:</b> {formData.scholarId}
                </p>
              )}
              <p>
                <b>Phone:</b> {formData.phone}
              </p>
              <p>
                <b>Address:</b> {formData.address}
              </p>
              <p>
                <b>Type:</b> {formData.type}
              </p>
              <p>
                <b>Size:</b> {formData.size}
              </p>
              <p>
                <b>Want Name in T-Shirt:</b> {formData.wantName}
              </p>
              {formData.wantName === "Yes" && (
                <p>
                  <b>Name in T-Shirt:</b> {formData.nameInTShirt}
                </p>
              )}
              <p>
                <b>Payment:</b>{" "}
                {formData.paymentScreenshot ? "Uploaded" : "Pending"}
              </p>
            </div>
            <div className="flex justify-center pt-6">
              <button
                onClick={handleSubmit}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-lg shadow-lg"
              >
                Submit Order
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Merch_form_ui;

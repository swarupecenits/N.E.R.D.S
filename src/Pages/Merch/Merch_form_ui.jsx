
import React, { useState } from 'react';

const tshirtSizes = ['S', 'M', 'L', 'XL', 'XXL'];
const tshirtFits = [
  { label: 'Regular Fit', value: 'regular', img: '/tshirt/regular.jpg' },
  { label: 'Oversized Fit', value: 'oversized', img: '/tshirt/oversized.jpg' },
];

export default function Merch_form_ui() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    size: '',
    fit: '',
    tshirtImage: null,
    paymentScreenshot: null,
  });

  // Handlers
  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = (e) => setForm({ ...form, [e.target.name]: e.target.files[0] });
  const handleSelect = (key, value) => setForm({ ...form, [key]: value });

  // Dummy QR code image
  const qrCode = '/public/qr-code.png';

  // Glassmorphism style helpers for dark theme
  const glass = 'bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl border border-white/10';
  const sectionPad = 'p-6 md:p-10 my-6';
  const labelStyle = 'block text-lg font-bold mb-2 text-gray-200 tracking-wide';
  const inputStyle = 'w-full p-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/10 text-gray-100 mb-4 placeholder-gray-400';
  const cardBtn = 'flex flex-col items-center justify-center cursor-pointer transition-all border-2 border-transparent hover:border-blue-400 ' + glass + ' p-4 m-2 min-w-[120px] min-h-[120px]';
  const selectedCard = 'border-blue-500 ring-2 ring-blue-300';

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0f1c] via-[#1a2236] to-[#232946] relative overflow-x-hidden text-gray-100">
      {/* Subtle futuristic pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{backgroundImage:'url(/grid.svg)', backgroundSize:'40vw'}} />

      {/* Header Section */}
      <header className={`w-full text-center py-12 ${glass} ${sectionPad} mx-auto max-w-2xl mt-8`}> 
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-100 mb-2" style={{letterSpacing:'0.08em'}}>NERDS <span className="text-blue-400">Robotics Club</span> T-Shirt Order</h1>
        <p className="text-lg text-gray-400 font-medium">Minimal. Futuristic. For Makers.</p>
      </header>

      {/* Personal Details Section */}
      <section className={`max-w-2xl mx-auto ${glass} ${sectionPad}`}> 
        <h2 className="text-2xl font-bold mb-4 text-blue-300">Personal Details</h2>
        <label className={labelStyle}>Name
          <input className={inputStyle} name="name" value={form.name} onChange={handleInput} placeholder="Your Name" autoComplete="off" />
        </label>
        <label className={labelStyle}>Email
          <input className={inputStyle} name="email" value={form.email} onChange={handleInput} placeholder="you@email.com" type="email" autoComplete="off" />
        </label>
        <label className={labelStyle}>Phone Number
          <input className={inputStyle} name="phone" value={form.phone} onChange={handleInput} placeholder="1234567890" type="tel" autoComplete="off" />
        </label>
        <label className={labelStyle}>College / Branch
          <input className={inputStyle} name="college" value={form.college} onChange={handleInput} placeholder="College / Branch" autoComplete="off" />
        </label>
      </section>

      {/* T-Shirt Selection Section */}
      <section className={`max-w-2xl mx-auto ${glass} ${sectionPad}`}> 
        <h2 className="text-2xl font-bold mb-4 text-blue-300">T-Shirt Selection</h2>
        <div className="mb-4">
          <label className={labelStyle}>Upload PNG Photo (optional)
            <input className="block w-full text-gray-300" type="file" name="tshirtImage" accept="image/png" onChange={handleFile} />
          </label>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tshirtSizes.map(size => (
            <button key={size} type="button" onClick={()=>handleSelect('size', size)}
              className={`px-6 py-2 rounded-xl font-bold text-lg ${glass} m-1 border-2 ${form.size===size ? 'border-blue-400 bg-blue-900/40' : 'border-transparent bg-white/5'} transition-all`}>{size}</button>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {tshirtFits.map(fit => (
            <div key={fit.value} className={`${cardBtn} ${form.fit===fit.value ? selectedCard : ''}`} onClick={()=>handleSelect('fit', fit.value)}>
              <img src={fit.img} alt={fit.label} className="w-20 h-20 object-contain mb-2" />
              <span className="font-semibold text-gray-200 text-base">{fit.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Section */}
      <section className={`max-w-2xl mx-auto ${glass} ${sectionPad}`}> 
        <h2 className="text-2xl font-bold mb-4 text-blue-300">Payment</h2>
        <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
          <div className="flex-1 flex flex-col items-center">
            <img src={qrCode} alt="QR Code" className="w-40 h-40 rounded-xl shadow-lg border-2 border-blue-900 bg-white/10" />
            <span className="text-xs text-gray-400 mt-2">Scan to Pay</span>
          </div>
          <div className="flex-1 w-full">
            <button className="w-full py-3 mb-4 rounded-xl font-bold text-lg bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-lg hover:scale-105 transition-all">Pay Now</button>
            <label className={labelStyle}>Upload Payment Screenshot
              <input className="block w-full text-gray-300" type="file" name="paymentScreenshot" accept="image/*" onChange={handleFile} />
            </label>
          </div>
        </div>
      </section>

      {/* Final Section: Summary & Submit */}
      <section className={`max-w-2xl mx-auto ${glass} ${sectionPad} mb-10`}> 
        <h2 className="text-2xl font-bold mb-4 text-blue-300">Summary</h2>
        <div className="bg-white/5 rounded-xl p-4 mb-6 shadow-inner">
          <div className="grid grid-cols-2 gap-4 text-gray-200 text-base">
            <div><span className="font-semibold">Name:</span> {form.name}</div>
            <div><span className="font-semibold">Email:</span> {form.email}</div>
            <div><span className="font-semibold">Phone:</span> {form.phone}</div>
            <div><span className="font-semibold">College:</span> {form.college}</div>
            <div><span className="font-semibold">Size:</span> {form.size}</div>
            <div><span className="font-semibold">Fit:</span> {form.fit}</div>
            <div><span className="font-semibold">T-shirt Image:</span> {form.tshirtImage ? form.tshirtImage.name : 'None'}</div>
            <div><span className="font-semibold">Payment Screenshot:</span> {form.paymentScreenshot ? form.paymentScreenshot.name : 'None'}</div>
          </div>
        </div>
        <button className="w-full py-4 rounded-2xl font-extrabold text-2xl bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-2xl hover:scale-105 transition-all tracking-wider glow-effect" style={{textShadow:'0 0 16px #0ff, 0 0 32px #09f'}}>Submit Order</button>
      </section>
    </div>
  );
}



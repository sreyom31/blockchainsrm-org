import { useState } from 'react';
import db from '../db/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const collectionRef = collection(db, 'contact');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await addDoc(collectionRef, {
        name,
        email,
        message,
      });
      if (res) {
        setName('');
        setEmail('');
        setMessage('');
        toast.success('Thank you', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    } catch (error) {
      toast.error('you broke us!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <div className="overflow-hidden bg-bgcontact bg-no-repeat relative bg-cover bg-fixed md:h-screen sm:px-8">
      <div className="mt-32 flex flex-col items-center"> 
        <p className="text-white text-5xl font-bold uppercase text-center mb-4">
          Contact Us
        </p>
        <div className="my-10 2xl:w-1/2 text-white 2xl:px-16 flex items-center justify-center">
          <div className="box mx-8 md:m-0 p-8 2xl:p-10 2xl:w-9/12">
            <div className="mb-4">
              <p className="text-3xl lg:text-4xl font-bold text-center">
                Let&apos;s Get in Touch!
              </p>
            </div>
            <div className="lg:my-2 lg:py-2 flex flex-col items-center w-full">
              <form className="w-full">
                <input
                  className="bg-transparent border-x border-y rounded-lg mt-4 mb-6 block p-3 w-full text-xl"
                  placeholder="Full Name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  className="bg-transparent border-x border-y rounded-lg mb-6 block p-3 w-full text-xl"
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <textarea
                  className="bg-transparent border-x border-y rounded-lg p-3 w-full text-xl"
                  placeholder="Your Message"
                  name="message"
                  id="message"
                  cols={30}
                  rows={5}
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
              </form>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleSubmit}
                className="p-2 px-4 outline-none border-2 border-secondary rounded-full font-semibold transition ease-out delay-100 hover:border-primary flex text-xl"
              >
                Submit{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contact;

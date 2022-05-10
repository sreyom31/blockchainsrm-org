import Navbar from '../components/navbar';

const Contact = () => {
  return (
    <div className="overflow-hidden bg-bgcontact bg-no-repeat relative bg-cover bg-fixed md:h-screen px-8">
      <Navbar />
      <div className="px-6 lg:px-8 xl:px-9 2xl:px-10 mt-4">
        <p className="text-white text-5xl font-bold uppercase text-center">
          Contact Us
        </p>
        <div className="flex flex-col items-center md:flex-row mt-8 2xl:mt-4">
          <div className="md:w-1/2 text-white">
            <div className="flex flex-col items-end py-4 px-8 lg:px-16 mr-20">
              <p className="text-2xl lg:text-3xl mb-2">Have a doubt?</p>
              <p className="text-2xl lg:text-3xl mb-2">
                Drop&apos;us an email at
              </p>
              <p className="font-bold text-2xl lg:text-3xl mb-2">abc@xyz.com</p>
            </div>
            <div className="flex flex-col items-end py-4 px-8 lg:px-16 mr-20">
              <p className="text-2xl lg:text-3xl mb-2">Phone Number</p>
              <p className="font-bold text-2xl lg:text-3xl mb-2">7715248960</p>
              <p className="font-bold text-2xl lg:text-3xl mb-2">7715248960</p>
            </div>
          </div>
          <div className="my-10 xl:my-0 mb-10 md:w-1/2 text-white xl:p-8 2xl:p-16 flex items-center justify-center">
            <div className="box m-8 md:m-0 p-8 xl:p-8 2xl:p-12 border-2 lg:w-9/12">
              <div className="mb-4">
                <p className="text-4xl md:text-3xl lg:text-4xl font-bold">
                  Let&apos;s Get in Touch!
                </p>
              </div>
              <div className="lg:my-2 lg:py-2 flex flex-col items-center w-full">
                <form className="w-full">
                  <input
                    className="bg-transparent border-x border-y rounded-lg mt-4 mb-6 block p-3 w-full text-xl"
                    placeholder="Full Name"
                    type="text"
                  />
                  <input
                    className="bg-transparent border-x border-y rounded-lg mb-6 block p-3 w-full text-xl"
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    id="email"
                  />
                  <textarea
                    className="bg-transparent border-x border-y rounded-lg p-3 w-full text-xl"
                    placeholder="Your Message"
                    name="message"
                    id="message"
                    cols={30}
                    rows={5}
                  ></textarea>
                </form>
              </div>
              <div className="mt-4 flex justify-end">
                <button className="p-2 px-4 outline-none border-2 border-secondary rounded-full font-semibold transition ease-out delay-100 hover:border-primary flex text-xl">
                  Submit{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

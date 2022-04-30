import { ArrowRight } from 'react-feather';

const Landing = () => {
  return (
    <div className="2xl:p-10 my-5 mb-10">
      <div className="flex flex-col items-center md:flex-row">
        <div className="md:w-1/2 flex items-center">
          <img src="/images/landingimg.svg" alt="landing image" />
        </div>
        <div className="my-10 md:my-0 md:w-1/2 text-white xl:p-8 2xl:p-16 flex items-center">
          <div className="box m-8 md:m-0 p-8 xl:p-8 2xl:p-12 border-2">
            <div className="mb-4 lg:mb-8">
              <p className="text-4xl md:text-2xl lg:text-4xl xl:text-6xl font-bold">Cool tagline goes here</p>
            </div>
            <div className="lg:my-8 lg:py-4">
              <p className="text-xl md:text-lg lg:text-xl xl:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores recusandae a repellendus quis, in quo omnis suscipit ut quos facere vitae facilis adipisci placeat quae numquam veritatis quasi ipsa. Rem cumque earum facere hic impedit enim nam iure nesciunt quibusdam, in architecto repudiandae nisi qui quod totam aperiam ipsam soluta.
              </p>
            </div>
            <div className="mt-4 lg:mt-0">
              <button className="p-2 px-4 outline-none border-2 border-secondary rounded-full font-semibold transition ease-out delay-100 hover:border-primary flex">Explore <ArrowRight className="ml-4" /> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

import Image from 'next/image';
import Card from '../shared/card';
import Fade from 'react-reveal/Fade';

// grid auto-cols-auto lg:grid-cols-2 gap-20 xl:gap-40 px-10 lg:px-12 xl:px-16 2xl:px-24 pt-10 lg:pt-12 xl:pt-16 2xl:pt-24 pb-96 mt-24
const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 lg:gap-32 w-full items-center justify-center mx-auto pb-96 mt-32 relative">
      <img
        src="/images/mvimg.svg"
        className="absolute bottom-14 left-[50%] translate-x-[-50%]"
      />
      <Card className="max-w-2xl">
        <Fade top>
          <h2 className="text-center font-bold">Our Mission</h2>
        </Fade>
        <Fade bottom>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis id odio dolorem nemo facere quae eveniet fuga? Optio
            quae molestias nemo maxime nam, earum sit, libero repudiandae,
            corrupti at quibusdam.
          </p>
        </Fade>
      </Card>
      <Card className="max-w-2xl">
        <Fade top>
          <h2 className="text-center font-bold">Our Mission</h2>
        </Fade>
        <Fade bottom>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis id odio dolorem nemo facere quae eveniet fuga? Optio
            quae molestias nemo maxime nam, earum sit, libero repudiandae,
            corrupti at quibusdam.
          </p>
        </Fade>
      </Card>
    </div>
  );
};

export default About;

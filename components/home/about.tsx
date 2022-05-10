import Image from 'next/image';
import Card from '../shared/card';
import Fade from 'react-reveal/Fade';

import Bubbles from '../../public/images/mvimg.svg';
import { ReactSVG } from 'react-svg';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 lg:gap-32 w-full items-center justify-center mx-auto pb-96 mt-32 relative">
      <div className="mvimg absolute bottom-14 left-[50%] translate-x-[-50%]">
        {/* <Image width={269} height={452} src="/images/mvimg.svg" /> */}
        <ReactSVG src="/images/mvimg.svg" />
        {/* <Bubbles /> */}
      </div>
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

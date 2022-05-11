import Card from '../shared/Card';
import Fade from 'react-reveal/Fade';

import { ReactSVG } from 'react-svg';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 lg:gap-32 w-full items-center md:items-start justify-center mx-auto relative min-h-screen pt-32">
      <Fade left>
        <Card className="max-w-2xl h-max">
          <Fade top>
            <h2 className="text-center font-bold">Our Vision</h2>
          </Fade>
          <Fade bottom>
            <p className="text-justify">
              Empowering blockchain professionals and enthusiasts, and
              instilling knowledge to be trailblazers in the industry. Providing
              support and guidance and educating the students with latest
              advancements in this technology.
            </p>
          </Fade>
        </Card>
      </Fade>
      <Fade right>
        <Card className="max-w-2xl h-max">
          <Fade top>
            <h2 className="text-center font-bold">Our Mission</h2>
          </Fade>
          <Fade bottom>
            <p className="text-justify">
              Providing students with opportunities and mock up projects on a
              regular basis. Educating them on new terms in blockchain and
              encouraging them to participate in events, hackathons, ideathons
              and conferences.
            </p>
          </Fade>
        </Card>
      </Fade>
      <div className="mvimg md:absolute mx-auto top-[40%]">
        <ReactSVG src="/images/mvimg.svg" />
      </div>
    </div>
  );
};

export default About;

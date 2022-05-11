import Card from '../shared/Card';
import Fade from 'react-reveal/Fade';

import { ReactSVG } from 'react-svg';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 lg:gap-32 w-full items-center md:items-start justify-center mx-auto relative min-h-screen pt-32">
      <Card className="max-w-2xl h-max">
        <Fade top>
          <h2 className="text-center font-bold">Our Mission</h2>
        </Fade>
        <Fade bottom>
          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            numquam accusamus illo sed eum, qui fugit sint aliquid similique
            magnam? Magnam deserunt distinctio voluptates placeat minima
            corrupti. Voluptates, repudiandae libero voluptatibus amet itaque
            dolores eos, placeat ipsum suscipit perspiciatis sit ab odit
            nesciunt dignissimos aspernatur porro facilis, numquam unde ea
            nostrum ipsam eum dolorum repellendus accusantium? Unde, in rerum?
            Non.
          </p>
        </Fade>
      </Card>
      <Card className="max-w-2xl h-max">
        <Fade top>
          <h2 className="text-center font-bold">Our Mission</h2>
        </Fade>
        <Fade bottom>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            omnis sequi temporibus itaque voluptas a esse quibusdam voluptatibus
            molestiae tempore molestias reiciendis quidem, blanditiis mollitia
            similique modi nam dolor quae necessitatibus nesciunt odio quos
            ipsum corporis perspiciatis. Impedit dolor, iste magni ad quos autem
            amet possimus, provident esse magnam facere ea vitae nostrum
            voluptates dicta rem consequatur. Deserunt, iusto veniam.
          </p>
        </Fade>
      </Card>
      <div className="mvimg md:absolute mx-auto top-[40%]">
        <ReactSVG src="/images/mvimg.svg" />
      </div>
    </div>
  );
};

export default About;

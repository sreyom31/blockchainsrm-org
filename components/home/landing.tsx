import Image from 'next/image';
import { ArrowRight } from 'react-feather';
import Card from '../shared/Card';

const Landing = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mx-auto gap-12 min-h-screen pt-32 md:pt-0">
      <div className="w-full md:w-5/12 lg:w-1/2 max-w-2xl">
        <Image
          width={897}
          height={607}
          src="/images/landingimg.svg"
          alt="landing image"
        />
      </div>
      <Card
        className="md:w-1/2 max-w-2xl"
        heading="Changing the world one block at a time"
        paragraph="Pioneer student-led blockchain-centered community to foster young and inquisitive minds, that believes in implementing concepts of Web3 and Decentralization while educating students about Fundamentals and technical aspects of Trading"
      >
        <button className="outline-none border-2 border-secondary rounded-full font-semibold transition ease-out delay-100 hover:border-primary flex w-fit p-2 pl-4">
          Explore <ArrowRight className="ml-4" />
        </button>
      </Card>
    </div>
  );
};

export default Landing;

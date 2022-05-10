import Image from 'next/image';
import { ArrowRight } from 'react-feather';
import Card from '../shared/card';

const Landing = () => {
  return (
    <div className="pt-32">
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto gap-12">
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
          heading="Cool tagline goes here"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            recusandae a repellendus quis, in quo omnis suscipit ut quos facere
            vitae facilis adipisci placeat quae numquam veritatis quasi ipsa.
            Rem cumque earum facere hic impedit enim nam iure nesciunt
            quibusdam, in architecto repudiandae nisi qui quod totam aperiam
            ipsam soluta."
        >
          <button className="outline-none border-2 border-secondary rounded-full font-semibold transition ease-out delay-100 hover:border-primary flex w-fit p-2">
            Explore <ArrowRight className="ml-4" />
          </button>
        </Card>
      </div>
    </div>
  );
};

export default Landing;

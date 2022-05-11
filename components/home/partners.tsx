import Image from 'next/image';
import Link from 'next/link';

const partners = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="mb-24">Our Partners</h1>
      <div className="flex flex-wrap flex-col md:flex-row gap-24 justify-evenly">
        <Link href="https://rockhoster.com/" passHref>
          <Image
            width={500}
            height={188}
            src={'/images/partners/Rockhoster.png'}
            alt="Rockhoster"
          />
        </Link>
        <Link href="https://tezos.com/" passHref>
          <Image
            width={150}
            height={202}
            src={'/images/partners/Tezos.png'}
            alt="Tezos"
          />
        </Link>
        <Link href="https://moralis.io/" passHref>
          <Image
            width={200}
            height={188}
            src={'/images/partners/Moralis.png'}
            alt="Moralis"
          />
        </Link>
        <Link href="https://kriyatec.com/" passHref>
          <Image
            width={500}
            height={50}
            src={'/images/partners/KriyaTec.png'}
            alt="KriyaTec"
          />
        </Link>
      </div>
    </div>
  );
};

export default partners;

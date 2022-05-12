import Footer from '../components/shared/Footer';

const team1 = [
  {
    name: 'Aditya Jain',
    designation: 'President',
    img: '/images/team/ADITYA.png',
  },
  {
    name: 'Sreyom Sresaan',
    designation: 'Vice-President',
    img: '/images/team/SREYOM.png',
  },
];

const team2 = [
  {
    name: 'Deepak Kumar',
    designation: 'Tech Lead',
    img: '/images/team/DEEPAK.png',
  },
  {
    name: 'Viraj Agarwal',
    designation: 'Web Lead',
    img: '/images/team/VIRAJ.png',
  },
  {
    name: 'Abhivansh',
    designation: 'App Lead',
    img: '/images/team/ABHIVANSH.png',
  },
  {
    name: 'Yash Khandelwal',
    designation: 'Crypto Lead',
    img: '/images/team/YASHK.png',
  },
  {
    name: 'Pranay Goenka',
    designation: 'Crypto Lead',
    img: '/images/team/PRANAY.png',
  },
  {
    name: 'Yuvraj Patel',
    designation: 'Operations Lead',
    img: '/images/team/YUVRAJ.png',
  },
  {
    name: 'Shweta Sanadhya',
    designation: 'Creatives Lead',
    img: '/images/team/SHWETA.png',
  },
  {
    name: 'Akshita Singh',
    designation: 'Creatives Lead',
    img: '/images/team/AKSHITA.png',
  },
  {
    name: 'Yash Saini',
    designation: 'PR Lead',
    img: '/images/team/YASHS.png',
  },
  {
    name: 'Saketh Donepudi',
    designation: 'Corporate Lead',
    img: '/images/team/SAKETH.png',
  },
];

const Team = () => {
  return (
    <div className="overflow-hidden bg-bgteam bg-no-repeat relative bg-cover bg-fixed">
      <div className="mt-24">
        <div className="mt-5 py-10">
          <p className="uppercase text-white text-center text-5xl font-bold tracking-wide pageHeading">
            Meet The Team
          </p>
        </div>
        <div className="text-white flex flex-wrap justify-center">
          {team1.map((mem, index) => (
            <div
              className="my-4 mx-12 p-10 overflow-hidden rounded-2xl min-w-[15%] hover:bg-[#001823] transition-all duration-300 ease-linear"
              key={index}
            >
              <img
                className="w-52 mx-auto hover:scale-110 transition-all duration-300 ease-linear transform-gpu rounded-[4rem]"
                src={mem.img}
                alt="Member Image"
              />
              <p className="my-2 mt-4 text-2xl text-center teamName">
                {mem.name}
              </p>
              <p className="my-2 text-xl text-center teamDesignation">
                {mem.designation}
              </p>
            </div>
          ))}
        </div>
        <div className="text-white flex flex-wrap justify-center px-0 2xl:px-40 xl:px-4 max-w-[1600px] mx-auto">
          {team2.map((mem, index) => (
            <div
              className="my-4 mx-10 p-12 overflow-hidden rounded-2xl min-w-[15%] hover:bg-[#001823] transition-all duration-300 ease-linear"
              key={index}
            >
              <img
                className="rounded-[4rem] w-52 mx-auto hover:scale-110 transition-all duration-300 ease-linear"
                src={mem.img}
                alt="Member Image"
              />
              <p className="my-2 mt-4 text-2xl text-center teamName">
                {mem.name}
              </p>
              <p className="my-2 text-xl text-center teamDesignation">
                {mem.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;

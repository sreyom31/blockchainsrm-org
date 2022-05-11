const team1 = [
  {
    name: 'Aditya Jain',
    designation: 'President',
    img: '/images/team/ADITYA.jpeg',
  },
  {
    name: 'Sreyom Sresaan',
    designation: 'Vice-President',
    img: '/images/team/SREYOM.jpeg',
  },
];

const team2 = [
  {
    name: 'Yash Khandelwal',
    designation: 'Crypto Lead',
    img: '/images/team/YASH.jpeg',
  },
  {
    name: 'Deepak Kumar',
    designation: 'Tech Lead',
    img: '/images/team/DEEPAK.jpeg',
  },
  {
    name: 'Abhivansh',
    designation: 'App Lead',
    img: '/images/team/ABHIVANSH.jpeg',
  },
  {
    name: 'Yuvraj Patel',
    designation: 'Non-Tech Lead',
    img: '/images/team/YUVRAJ.jpeg',
  },
  {
    name: 'Akshita Singh',
    designation: 'Creatives Lead',
    img: '/images/team/AKSHITA.jpeg',
  },
];

const Team = () => {
  return (
    <div className="overflow-hidden bg-bgteam bg-no-repeat relative bg-cover bg-fixed sm:px-8">
      <div>
        <div className="mt-5 py-10">
          <p className="uppercase text-white text-center text-5xl font-bold tracking-wide">
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
                className="rounded-full w-52 mx-auto hover:scale-110 transition-all duration-300 ease-linear"
                src={mem.img}
                alt="Member Image"
              />
              <p className="my-2 mt-4 text-2xl text-center">{mem.name}</p>
              <p className="my-2 text-xl text-center">{mem.designation}</p>
            </div>
          ))}
        </div>
        <div className="text-white flex flex-wrap justify-center px-0 2xl:px-40 xl:px-4">
          {team2.map((mem, index) => (
            <div
              className="my-4 mx-10 p-12 overflow-hidden rounded-2xl min-w-[15%] hover:bg-[#001823] transition-all duration-300 ease-linear"
              key={index}
            >
              <img
                className="rounded-full w-52 mx-auto hover:scale-110 transition-all duration-300 ease-linear"
                src={mem.img}
                alt="Member Image"
              />
              <p className="my-2 mt-4 text-2xl text-center">{mem.name}</p>
              <p className="my-2 text-xl text-center">{mem.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

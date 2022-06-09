import React from 'react';
interface eventType {
  name: string;
  link?: string;
  description: string;
  date?: string;
}

const events = () => {
  const events: eventType[] = [
    {
      name: 'recruitments',
      link: 'https://m4v7oxop5a9.typeform.com/to/bDbnyk1G',
      description: `pull up your socks, to flow your pond of web3.0- smartness,  and creativity.
We blockchainclub of SRM started with our recruitment process with new home and an elated spirit. 
With all the excitement for doing something unheard of , join us to explore , learn and teach`,
      date: '',
    },
    {
      name: 'Byzantine',
      link: 'https://m4v7oxop5a9.typeform.com/to/ldwEXqzr',
      description: `We bring to you - Byzantine, an event in the chain of events lined up for you all. We believe it will help you get in touch with blockchain and will be opening the doorway for new horizons of understanding about the topics.\n \nRegister ASAP, and do not miss to get a chance to catch a glimpse of this vast network and be a part of it, starting, "one block at a time"`,
      date: '13.06.22',
    },
  ];
  const EventCard = ({ event }: { event: eventType }) => (
    <div className="events-card p-8 grid w-[85vw] md:w-[20rem] lg:w-[28rem] md:max-w-[30rem] bg-black bg-opacity-60 m-3 md:mx-auto h-full">
      <div className="h-min">
        <h4 className="capitalize text-3xl font-bold">{event.name}</h4>
        {event.date && <span>{event.date}</span>}
      </div>
      <div className="mt-3">
        {event.description.split('\n').map((para, id) => (
          <p className="text-sm capitalize mt-3" key={id}>
            {para}
          </p>
        ))}
      </div>
      {event.link && (
        <button className="px-2 py-1 border-2 border-white w-max mt-5 rounded-lg mx-auto">
          <a href={event.link} target="_blank" rel="noopener noreferrer">
            Register Now
          </a>
        </button>
      )}
    </div>
  );

  return (
    <div className="w-screen min-h-screen bg-bgevents bg-center bg-cover flex items-center justify-center flex-col pt-32 pb-8">
      <h1 className="mb-12">EVENTS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-max gap-12 text-center">
        {events.map((event, id) => (
          <EventCard key={id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default events;

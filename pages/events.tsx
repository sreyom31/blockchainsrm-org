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
      link: 'https://google.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae aliquam molestias sit et quam illum a cum minus totam?',
      date: '',
    },
    {
      name: 'Verve',
      link: 'https://google.com',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae aliquam molestias sit et quam illum a cum minus totam?',
      date: '13.06.22',
    },
  ];
  const EventCard = ({ event }: { event: eventType }) => (
    <div className="events-card p-8 flex flex-col md:w-96 max-w-xs bg-black bg-opacity-60">
      <h4 className="capitalize text-3xl font-bold">{event.name}</h4>
      {event.date && <span>{event.date}</span>}
      <p className="mt-6">{event.description}</p>
      {event.link && (
        <button className="px-4 py-2 border-2 border-white w-max mt-3 rounded-lg mx-auto">
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

      <div className="flex justify-center items-center w-full gap-12 text-center flex-col md:flex-row">
        {events.map((event, id) => (
          <EventCard key={id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default events;

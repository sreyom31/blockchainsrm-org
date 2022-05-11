const Events = () => {
  return (
    <div className="overflow-hidden bg-cover bg-bgevents bg-center relative min-h-screen flex items-center md:items-end justify-center">
      <div className="md:p-24 p-2">
        <h1 className="text-center font-bold mb-10">Events</h1>
        <div className="flex flex-col events-card p-6 max-w-sm text-center">
          <div className="mb-8">
            <h2 className="mb-2">Inauguration</h2>
            <p className="text-xl text-gray-300 mb-4">11th Feb 2022</p>
          </div>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            cupiditate ullam assumenda in qui dicta a quisquam similique
            voluptatibus? Quisquam dolor doloribus quaerat voluptatibus
            consequatur cupiditate ipsam possimus labore maiores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;

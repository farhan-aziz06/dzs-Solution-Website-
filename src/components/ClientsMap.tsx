import React from "react";

// Country coordinates
const countryCoords = {
  Pakistan: { lat: 30.3753, lng: 69.3451 },
  Israel: { lat: 31.0461, lng: 34.8516 },
  UK: { lat: 55.3781, lng: -3.4360 },
  USA: { lat: 37.0902, lng: -95.7129 },
  Germany: { lat: 51.1657, lng: 10.4515 },
};

const CountryClientsMap = ({ data }) => {
  // Convert lat/lng to approximate map coordinates
  const getPosition = (country) => {
    const c = countryCoords[country];
    return {
      top: 50 - c.lat / 2,
      left: 50 + c.lng / 3,
    };
  };

  return (
    <div>
    <div className="w-full text-center mb-4 text-2xl font-semibold text-gray-800">
      We Are Proud to Work With Clients Around the Globe
    </div>
    <div className="relative w-full h-[500px] bg-gray-100 rounded-xl overflow-hidden p-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2000px-World_map_-_low_resolution.svg.png"
        alt="World Map"
        loading="lazy"
        className="w-full h-full object-cover opacity-30"
      />

      {/* Connecting Lines */}
      

      {/* Markers */}
      {data.map((item, i) => {
        const pos = getPosition(item.country);
        return (
          <div
            key={i}
            className="absolute flex flex-col items-center text-center"
            style={{ top: `${pos.top}%`, left: `${pos.left}%` }}
          >
            <div className="w-4 h-4 bg-purple-600 rounded-full shadow-lg border border-white animate-bounce" />
            <span className="mt-1 px-2 py-1 text-xs text-white backdrop-blur-md bg-white/20 border border-white/30 rounded shadow">
              {item.country}: {item.clients}
            </span>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default CountryClientsMap;

import React, { useEffect, useState } from 'react';

const Cuaca = () => {
    const [city, setCity] = useState("Banda Aceh");
    const [forecastData, setForecastData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = "704d6c9d5901c5fd4c407434b6f5dfd3"; // API cuaca
        const latitude = 5.5483;
        const longitude = 95.3238;
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const dailyData = data.list
                    .filter((entry, index) => index % 8 === 0)
                    .slice(0, 5)
                    .map((entry) => ({
                        date: new Date(entry.dt * 1000).toLocaleDateString("en-US", { weekday: 'long', day: 'numeric', month: 'short' }),
                        temperature: entry.main.temp,
                        condition: entry.weather[0].main.toLowerCase() // Contoh: clear, rain, clouds
                    }));

                setForecastData(dailyData);
            })
            .catch((error) => {
                console.error("Error:", error);
                setError("Could not fetch weather data. Please try again later.");
            });
    }, [city]);

    // Fungsi untuk memetakan kondisi cuaca ke ikon milik Anda
    const getIcon = (condition) => {
        const iconMapping = {
            clear: "/icons/weather/clear.png",
            rain: "/icons/weather/rain.png",
            clouds: "/icons/weather/clouds.png",
            snow: "/icons/weather/snowy.png",
            thunderstorm: "/icons/weather/thunderstorm.png",
            drizzle: "/icons/weather/drizzle.png",
            mist: "/icons/weather/mist.png"
        };
        return iconMapping[condition] || "/icons/default.png";
    };

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div className="flex space-x-5 mb-10">
            <div className="relative bg-hijau w-[394.87px] h-[230px] rounded-[30px] flex flex-col items-center justify-center p-4 z-0">
                {!forecastData && (
                    <div className="absolute inset-0 flex items-center justify-center bg-hijau rounded-[30px]">
                        <div className="spinner"></div>
                    </div>
                )}
                {forecastData && (
                    <div className="flex flex-col">
                        {forecastData.map((day, index) => (
                            <div key={index} className="flex items-center">
                                <img
                                    src={getIcon(day.condition)}
                                    alt={`Weather Icon for ${day.condition}`}
                                    className="w-10 h-10"
                                    onError={() => console.error("Failed to load icon for condition:", day.condition)}
                                />
                                <div className="ml-4 flex space-x-2 justify-between">
                                    <h2 className="font-semibold text-white text-sm mr-10">{day.temperature}°C</h2>
                                    <h5 className="font-semibold text-white text-sm">{day.date}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cuaca;

const WeatherDetails = ({ data }) => {
    const details = [
        { label: 'Humidity', value: `${data.main.humidity}%` },
        { label: 'Wind Speed', value: `${data.wind.speed} m/s` },
        { label: 'Visibility', value: `${data.visibility / 1000} km` },
        { label: 'Pressure', value: `${data.main.pressure} hPa` },
    ];

    return (
        <div className="weather-details">
            {details.map((item) => (
                <div key={item.label} className="detail-card glass">
                    <p className="detail-label">{item.label}</p>
                    <p className="detail-value">{item.value}</p>
                </div>
            ))}
        </div>
    );
};

export default WeatherDetails;
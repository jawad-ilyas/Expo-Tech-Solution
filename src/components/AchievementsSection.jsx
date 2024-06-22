import React from 'react';
import Statistics from './Statistics';

const statisticsData = [
    { heading: "50+", text: "Happy clients" },
    { heading: "75", text: "Projects completed" },
    { heading: "99%", text: "Customer Satisfaction" },
    { heading: "75", text: "Positive Reviews" },
];

function AchievementsSection() {
    return (
        <div
            className="bg-lightBg grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 rounded-3xl my-8 p-4 mx-2"
        >
            {statisticsData.map((item, index) => (
                <div key={index} className={`border-r-2 border-gray-200 `}>
                    <Statistics heading={item.heading} text={item.text} isFlex={true} />
                </div>
            ))}
        </div>
    );
}

export default AchievementsSection;

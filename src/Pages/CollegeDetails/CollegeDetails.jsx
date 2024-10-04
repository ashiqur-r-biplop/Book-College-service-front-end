import { useParams } from 'react-router-dom';

const collegeDetails = {
    1: {
        name: 'College A',
        events: ['Event 1', 'Event 2'],
        sports: ['Football', 'Basketball'],
        research: 20,
    },
    // Add more details for other colleges
};

const CollegeDetails = () => {
    const { id } = useParams();
    const college = collegeDetails[id];

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">{college.name}</h1>
            <p>Research Papers: {college.research}</p>
            <h2 className="text-2xl font-bold mt-4">Events</h2>
            <ul>
                {college.events.map((event, index) => (
                    <li key={index}>{event}</li>
                ))}
            </ul>
            <h2 className="text-2xl font-bold mt-4">Sports</h2>
            <ul>
                {college.sports.map((sport, index) => (
                    <li key={index}>{sport}</li>
                ))}
            </ul>
        </div>
    );
};

export default CollegeDetails;

import { LineChart, Line, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const marksArray = [
        {
          "id": 1,
          "name": "Student 1",
          "phy": 87,
          "chem": 42,
          "math": 68
        },
        {
          "id": 2,
          "name": "Student 2",
          "phy": 15,
          "chem": 93,
          "math": 27
        },
        {
          "id": 3,
          "name": "Student 3",
          "phy": 50,
          "chem": 78,
          "math": 89
        },
        {
          "id": 4,
          "name": "Student 4",
          "phy": 34,
          "chem": 61,
          "math": 73
        },
        {
          "id": 5,
          "name": "Student 5",
          "phy": 91,
          "chem": 12,
          "math": 56
        },
        {
          "id": 6,
          "name": "Student 6",
          "phy": 70,
          "chem": 5,
          "math": 99
        },
        {
          "id": 7,
          "name": "Student 7",
          "phy": 38,
          "chem": 82,
          "math": 44
        },
        {
          "id": 8,
          "name": "Student 8",
          "phy": 77,
          "chem": 29,
          "math": 10
        },
        {
          "id": 9,
          "name": "Student 9",
          "phy": 64,
          "chem": 18,
          "math": 59
        },
        {
          "id": 10,
          "name": "Student 10",
          "phy": 23,
          "chem": 97,
          "math": 81
        },
        {
          "id": 11,
          "name": "Student 11",
          "phy": 53,
          "chem": 67,
          "math": 39
        },
        {
          "id": 12,
          "name": "Student 12",
          "phy": 84,
          "chem": 25,
          "math": 48
        }
      ];
      
    return (
        <div>
            <LineChart
              width={500}
              height={300}
              data={marksArray}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Line dataKey="phy" />
              <Line dataKey="math" />
            </LineChart>
        </div>
    );
};

export default Dashboard;
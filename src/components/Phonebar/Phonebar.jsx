import { BarChart, Bar, XAxis, YAxis} from 'recharts';
import axios from "axios";
import { useState } from "react";

const Phonebar = () => {
    // eslint-disable-next-line no-unused-vars
    const [phones, setPhones] = useState([]);
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
        const loadedData = data.data.data;
        const phonesData = loadedData.map(phone => {
            const parts = phone.slug.split('-');
            const price = parseInt(parts[1]);
            const phoneInfo = {
                name: phone.phone_name,
                price: price
            }
            return phoneInfo;
        })
        setPhones(phonesData);
    })
    return (
        <div>
            <BarChart 
                width={1000} height={500} data = {phones}
            >
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart>
        </div>
    );
};

export default Phonebar;

// 
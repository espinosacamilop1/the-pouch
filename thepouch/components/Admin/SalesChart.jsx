import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import styles from '../styles/Home.module.css'

export const SalesChart = () => {
    const data = [
        {name: 'Jan', uv: 25},
        {name:'Feb', uv: 33} ,
        {name:'March', uv: 15},
        {name:'Apr', uv: 50},
        {name:'May', uv: 49},
        {name:'Jun', },
        {name:'Jul', },
        {name:'Aug', },
        {name:'Sep', },{name:'Oct', },
        {name:'Nov', },{name:'Dec', },];
    
    return(
        <div>
            <h2 className={styles.padding}>Sales</h2>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
 )
};


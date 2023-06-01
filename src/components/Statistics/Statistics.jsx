import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const Statistics = () => {
  const data = [
    {
      name: 'A1',
      mark: 60,
    },
    {
      name: 'A2',
      mark: 60,
    },
    {
      name: 'A3',
      mark: 60,
    },
    {
      name: 'A4',
      mark: 60,
    },
    {
      name: 'A5',
      mark: 60,
    },
    {
      name: 'A6',
      mark: 60,
    },
    {
      name: 'A7',
      mark: 59,
    },
    {
      name: 'A8',
      mark: 58,
    },
  ];
    return (
        <div className='text-center mb-40'>
            <h1 className='text-2xl font-bold my-3'>Assignment Marks</h1>
            <AreaChart
          width={1200}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </div>
    );
};

export default Statistics;
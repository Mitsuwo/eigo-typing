import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

type Props<T> = {
  data: T[];
};

function ChartComponent<T>(props: Props<T>) {
  return (
    <BarChart
      width={500}
      height={300}
      data={props.data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="key" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="interval" fill="#82ca9d" />
    </BarChart>
  );
}

export const Chart = React.memo(ChartComponent);

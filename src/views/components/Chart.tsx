import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

type Props<T> = {
  data: T[];
  barDataKey: string;
  barColor: string;
};

function ChartComponent<T>(props: Props<T>) {
  return (
    <BarChart
      width={500}
      height={300}
      data={props.data.slice(0, 10)}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="keyText" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={props.barDataKey} fill={props.barColor} />
    </BarChart>
  );
}

export const Chart = React.memo(ChartComponent);

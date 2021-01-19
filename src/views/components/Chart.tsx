import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Interval } from '../../store/PageManager/types';

type Props = {
  data: Interval[];
};

const ChartComponent: React.FC<Props> = (props: Props) => {
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
};

export const Chart = React.memo(ChartComponent);

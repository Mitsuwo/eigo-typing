import React from 'react';
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export interface BarChartData {
  keyText: string;
  volume: number;
}

type Props = {
  data: BarChartData[];
  barName: string;
  barColor: string;
  ascending: boolean;
};

const BarChartComponent: React.FC<Props> = (props: Props) => {
  const data = React.useMemo(() => {
    return props.data
      .sort((a: BarChartData, b: BarChartData) => {
        if (props.ascending) {
          return a.volume - b.volume;
        } else {
          return b.volume - a.volume;
        }
      })
      .slice(0, 10);
  }, [props.data]);
  return (
    <div style={{ width: '50%', margin: '4vh auto 0 auto', minWidth: '600px' }}>
      <Chart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
        style={{ fontFamily: 'koruri' }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="keyText" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="volume" fill={props.barColor} name={props.barName} />
      </Chart>
    </div>
  );
};

export const BarChart = React.memo(BarChartComponent);

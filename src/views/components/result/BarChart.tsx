import React from 'react';
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';

export type BarChartData = {
  keyText: string;
  volume: number;
};

type Props = {
  data?: BarChartData[];
  barName: string;
  barColor: string;
  ascending: boolean;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return (
    <Chart
      className={props.className}
      width={600}
      height={300}
      data={props.data}
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
      <Bar dataKey="volume" fill={props.barColor} name={props.barName} />
    </Chart>
  );
};

const StyledView = styled(View)`
  width: 50%;
  margin: 4vh auto 0 auto;
  min-width: 600px;
  font-family: Noto Sans JP;
`;

export const BarChart: React.FC<Props> = (props: Props) => {
  const data = React.useMemo(() => {
    return props.data
      ? props.data
          .sort((a: BarChartData, b: BarChartData) => {
            if (props.ascending) {
              return a.volume - b.volume;
            } else {
              return b.volume - a.volume;
            }
          })
          .slice(0, 10)
      : [];
  }, [props.data]);
  return React.useMemo(
    () => (
      <StyledView
        data={data}
        barName={props.barName}
        barColor={props.barColor}
        ascending={props.ascending}
      />
    ),
    []
  );
};

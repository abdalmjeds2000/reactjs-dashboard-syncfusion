import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();
  return (
    <div>
      <ChartComponent
        id='line-chart'
        height='420px'
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        background={currentMode === "Dark" ? '#33373e' : '#fff'}
        tooltip={{ enable: true }}
        legendSettings={{ background: '#fff' }}

      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, i) => (
            <SeriesDirective key={i} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default LineChart
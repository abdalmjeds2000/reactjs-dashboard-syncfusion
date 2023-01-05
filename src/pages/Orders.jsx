import { Inject } from '@syncfusion/ej2-react-charts';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, PdfExport, Edit, ExcelExport, ContextMenu, Resize, Sort, Filter } from '@syncfusion/ej2-react-grids';
import React from 'react';
import { Header } from '../components';
import { ordersData, ordersGrid } from '../data/dummy';

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders" />

      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowFiltering
      >
        <ColumnsDirective>
          {ordersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, PdfExport, Edit, ExcelExport, ContextMenu, Resize, Sort, Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Orders
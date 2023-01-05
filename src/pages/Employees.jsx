import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Search } from '@syncfusion/ej2-react-grids';
import React from 'react';
import { Header } from '../components';
import { employeesData, employeesGrid } from '../data/dummy';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees" />

      <GridComponent
        id='gridcomp'
        dataSource={employeesData}
        allowPaging
        allowSorting
        allowFiltering
      >
        <ColumnsDirective>
          {employeesGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search]}/>
      </GridComponent>
    </div>
  )
}

export default Employees
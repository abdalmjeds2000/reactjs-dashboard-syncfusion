import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers" />

      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        width="auto"
        toolbar={['Add', 'Edit', 'Delete', 'Search', 'CsvExport']}
        editSettings={{ allowDeleting: true, allowAdding: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Edit, Toolbar, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers
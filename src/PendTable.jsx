import React from 'react';
import { useTable } from 'react-table';
import {  useState } from 'react';
// import ReactPaginate from 'react-paginate';

const MyTableComponent = () => {

    const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 10;

  

 
    const data = [
        {
          id: 1,
          name: 'John Doe',
          age: 25,
        },
        {
          id: 2,
          name: 'Jane Smith',
          age: 30,
        },
        {
          id: 3,
          name: 'Alice Johnson',
          age: 28,
        },
        {
          id: 4,
          name: 'Bob Williams',
          age: 32,
        },
        {
          id: 5,
          name: 'Eve Brown',
          age: 22,
        },
        {
          id: 6,
          name: 'Charlie Davis',
          age: 27,
        },
        {
          id: 7,
          name: 'Grace Taylor',
          age: 29,
        },
        {
          id: 8,
          name: 'Daniel Anderson',
          age: 31,
        },
        {
          id: 9,
          name: 'Sophia Wilson',
          age: 24,
        },
        {
          id: 10,
          name: 'Liam Lee',
          age: 26,
        },
        {
          id: 11,
          name: 'Olivia Clark',
          age: 33,
        },
        {
          id: 12,
          name: 'Olivia Clark',
          age: 33,
        },
        // Add more data as needed
      ];
      const startIndex = currentPage * rowsPerPage;
      const endIndex = startIndex + rowsPerPage;
    
      // Slice the data array to get the rows to display on the current page
      const rowsToDisplay = data.slice(startIndex, endIndex);
    
      const columns = [
        {
          Header: 'ID',
          accessor: 'id',
        },
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Age',
          accessor: 'age',
        },
        // Add more columns as needed
      ];
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data: rowsToDisplay, // Use the sliced data for the current page
      });
    
      // Function to navigate to the next page
      const nextPage = () => {
        if (currentPage < Math.ceil(data.length / rowsPerPage) - 1) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      // Function to navigate to the previous page
      const prevPage = () => {
        if (currentPage > 0) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      // Total number of pages
      const totalPages = Math.ceil(data.length / rowsPerPage);
    
      return (
        <div>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
    
          <div>
            <button onClick={()=>prevPage()} disabled={currentPage === 0}>
              Previous
            </button>
            <span>Page {currentPage + 1} of {totalPages}</span>
            <button onClick={()=>nextPage()} disabled={currentPage === totalPages - 1}>
              Next
            </button>
          </div>
        </div>
      );
    };
    export default MyTableComponent;
    
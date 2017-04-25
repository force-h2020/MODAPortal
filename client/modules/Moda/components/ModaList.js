import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// ES6
import ReactTable from 'react-table';
import 'react-table/react-table.css';

function ModaList(props) {
  // Create some column definitions
  const columns = [{
    header: 'Info',
    columns: [{
      header: 'ID',
      accessor: 'cuid',
      render: ({ value, row }) => (<span><Link to={`/modas/${row.slug}-${row.cuid}`}>{value}</Link></span>),
      // render: (props) => {console.log(props); return props.value;}
    }, {
      header: 'User Case',
      accessor: 'userCase',
    }],
  }, {
    header: 'Actions',
    columns: [{
      header: 'Edit',
      width: 100,
      // accessor: 'cuid',
      render: ({ row }) => (<span><Link to={`/modas/${row.slug}-${row.cuid}`}>Edit</Link></span>),
      // render: (props) => {console.log(props); return props.value;}
    }, {
      header: 'Delete',
      width: 100,
      // accessor: 'userCase',
      // row vs {row}: row is everything, {row} is the real ’row’
      render: ({ row }) => (<span><a onClick={() => props.handleDeleteModa(row.cuid)}>Delete</a></span>),
    }],
  }];

  return (
    <ReactTable
      manual
      showFilters={false}
      data={props.modas}
      columns={columns}
      defaultPageSize={10}
      sorting={[{
        id: 'cuid',
        asc: true,
      }, {
        id: 'userCase',
        asc: true,
      }]}
      getTdProps={(state, rowInfo, column, instance) => {
        return {
          onClick: e => {
            console.log('it produced this event:', e, rowInfo, column, instance);
          },
        };
      }}
    />
  );
}

ModaList.propTypes = {
  modas: PropTypes.arrayOf(PropTypes.shape({
    userCase: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteModa: PropTypes.func.isRequired,
  value: PropTypes.any,
  row: PropTypes.any,
};

export default ModaList;

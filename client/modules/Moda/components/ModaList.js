import React, { PropTypes } from 'react';

// ES6
import ReactTable from 'react-table';
import 'react-table/react-table.css';

// Import Components
import ModaListItem from './ModaListItem/ModaListItem';

// Create some column definitions
const columns = [{
  header: 'Simulation',
  columns: [{
    header: 'Title',
    accessor: 'title'
  }]
}, {
  header: 'Info',
  columns: [{
    header: 'User Case',
    accessor: 'userCase'
  }]
}];

function ModaList1(props) {
  return (
    <div className="listView">
      {
        props.modas.map(moda => (
          <ModaListItem
            moda={moda}
            key={moda.cuid}
            onDelete={() => props.handleDeleteModa(moda.cuid)}
          />
        ))
      }
    </div>
  );
}

function ModaList(props) {
  console.log(props.modas);
  return (
    <ReactTable
      manual
      showFilters={false}
      data={props.modas}
      columns={columns}
      defaultPageSize={10}
    />
  );
}

ModaList.propTypes = {
  modas: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteModa: PropTypes.func.isRequired,
};

export default ModaList;
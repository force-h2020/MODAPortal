import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router'

import ReactTable from 'react-table'
import 'react-table/react-table.css'

function ModaList(props) {
  const columns = [
    {
      Header: 'Title',
      id: 'title',
      accessor: row => {
        return <Link to={{
          pathname: `/modas/${row.slug}-${row.cuid}`,
          //query: { cuid: row.cuid },
          //state: {modas: props.modas}
        }}> {row.title} </Link>
      },
      filterMethod: (filter, row) => {
        return row.title.props.children.startsWith(filter.value)
      }
    }, {
      Header: 'Project',
      accessor: 'project',
    }, {
      Header: 'Author',
      id: 'author',
      accessor: row => { return row.author.firstName + ' ' + row.author.familyName },
    }, {
      Header: 'User',
      id: 'submittedBy',
      accessor: row => { return row.submittedBy.displayname },
    }, {
      Header: 'Created On',
      id: 'createdOn',
      accessor:  row => { return row.creationDate ? new Date(row.creationDate).toLocaleString() : '' },
    }, {
      Header: 'Modified On',
      id: 'modifiedOn',
      accessor: row => { return row.modificationDate ? new Date(row.modificationDate).toLocaleString() : '' },
    }, {
      Header: 'Edit',
      id: 'edit',
      width: 100,
      filterable: false,
      sortable: false,
      accessor:  row => { return <Link to={`/modas/${row.slug}-${row.cuid}`}>Edit</Link> },
    }, {
      Header: 'Delete',
      id: 'delete',
      width: 100,
      filterable: false,
      sortable: false,
      accessor: row => { return <Link onClick={() => props.handleDeleteModa(row.cuid)}>Delete</Link> },
    }]

  return (
    <ReactTable
      className="-striped"
      data={props.modas}
      columns={columns}
      defaultPageSize={10}
      sorting={[{
        id: 'cuid',
        asc: true,
      }]}
      sortable
      filterable
    />
  )
}

ModaList.propTypes = {
  modas: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteModa: PropTypes.func.isRequired,
}

export default ModaList

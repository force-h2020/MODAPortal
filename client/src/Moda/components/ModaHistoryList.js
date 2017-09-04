import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router'

import ReactTable from 'react-table'
import 'react-table/react-table.css'

function ModaHistoryList(props) {
  const columns = [
    {
      Header: 'Title',
      id: 'title',
      accessor: row => {
        return <Link to={{
          pathname: `/modas/${row.slug}-${row.cuid}/history/${row._index}`,
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
      Header: 'Created On',
      id: 'createdOn',
      accessor:  row => { return row.creationDate ? new Date(row.creationDate).toLocaleString() : '' },
    }, {
      Header: 'Modified On',
      id: 'modifiedOn',
      accessor: row => { return row.modificationDate ? new Date(row.modificationDate).toLocaleString() : '' },
    }]

  const data = props.history.versions.map((item, index) => {
    return Object.assign({'_index': index}, item)
  })
  return (
    <ReactTable
      className="-striped"
      data={data}
      columns={columns}
      defaultPageSize={10}
      sorting={[{
        id: 'cuid',
        asc: true,
      }]}
      sortable
    />
  )
}

/*ModaHistoryList.propTypes = {
  history: PropTypes.shape({
    modified: PropTypes.Date.isRequired,
    created: PropTypes.Date.isRequired,
    refId: PropTypes.string.isRequired,
  }).isRequired,
  moda: PropTypes.shape({
    userCase: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
}
*/
export default ModaHistoryList

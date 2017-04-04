import React, { PropTypes } from 'react';

// Import Components
import ModaListItem from './ModaListItem/ModaListItem';

function ModaList(props) {
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

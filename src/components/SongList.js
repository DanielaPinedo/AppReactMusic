import React from 'react';
import InfoSong from './InfoSong';
import PropTypes from 'prop-types';

const strToComponents = titles => (
    // El mapeo de un componente siempre deberá tener la key
  titles.map( title => (<InfoSong key ={title} title={title}/>))
);

const SongList = ({titles}) => (
    <div>
        {strToComponents(titles)}
    </div>
);

SongList.propTypes = {
    titles : PropTypes.array.isRequired,
}
export default SongList;
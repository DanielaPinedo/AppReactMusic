import React from 'react';
import PropTypes from 'prop-types'; 
import './styles.css' 
const DataSong = ({data : {singer,genre} }) =>(
    <div className="DataSongCont">
            <li>Artista: {singer}</li>
            <li>Genero: {genre}</li>
    </div>
);
   

DataSong.propTypes = {
    data: PropTypes.shape({
        singer: PropTypes.string.isRequired,
        genre : PropTypes.string.isRequired,
    })
};

export default DataSong;
import React from 'react';
import PropTypes from 'prop-types'; 
//import {IoIosMusicalNotes} from "react-icons/io";
//<IoIosMusicalNotes className="Icon"/>
import './styles.css' 

const TitleSong = ({title}) =>(
    <div className="TitleSongContent">
         <h3 className = "TitleSongletter">
         {title}
        </h3>
    </div>
    );

    TitleSong.propTypes = {
        title: PropTypes.string.isRequired,
    }


export default TitleSong;
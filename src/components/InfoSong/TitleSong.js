import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
//import {IoIosMusicalNotes} from "react-icons/io";
//<IoIosMusicalNotes className="Icon"/>
import './styles.css' 

class TitleSong extends Component {
    constructor(props){
        super(props);
        const {title} = props;
        // this.satate solo se usa en el constructor
        this.state = {
            title
        };
    };

    render (){
        const{title} = this.state;
        const{onTitleClick} = this.props;
        return(
            <div className="TitleSongContent" onClick={onTitleClick}>
                <h3 className = "TitleSongletter">
                    {title}
                </h3>
            </div>
        );
    }

        
}

TitleSong.propTypes = {
    title: PropTypes.string.isRequired,
    TitleClick: PropTypes.func,
}


export default TitleSong;
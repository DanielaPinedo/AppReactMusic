import React, {Component} from 'react'
import TitleSong from './TitleSong'
import DataSong from './DataSong'
import './styles.css' 

const location = "Buenos Aires,ar";
const api_key= "666f26e4191063a92831a28e97c09ae8";
const URL = `api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

const data = {
    singer: "Romeo Santos",
    genre: "Bachata"
}

const data2 = {
    singer: "John Legend",
    genre: "Pop romántico"
}

/*const InfoSong = () => (
    <div className="InfoSongCont">
       <TitleSong title= {"All of me"}/>
       <DataSong  data= {data}/>
    </div>
);*/

class InfoSong extends Component{

    constructor(){
        super();
        // this.satate solo se usa en el constructor
        this.state = {
            title: 'Propuesta indecente',
            data : data,
        };
    };

    handleUpdateClick = () =>{

        fetch (URL);

        this.setState({
            title: 'All of me',
            data: data2,
        });
    }

    render (){
        const{title,data} = this.state;
        return(
            <div className="InfoSongCont">
                <TitleSong title= {title}></TitleSong>
                <DataSong  data= {data}></DataSong>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default InfoSong;
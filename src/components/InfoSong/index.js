import React, {component} from 'react'
import TitleSong from './TitleSong'
import DataSong from './DataSong'
import './styles.css' 

const data = {
    singer: "Romeo Santos",
    genre: "Bachata"
}

/*const InfoSong = () => (
    <div className="InfoSongCont">
       <TitleSong title= {"All of me"}/>
       <DataSong  data= {data}/>
    </div>
);*/

class InfoSong extends component{
    render (){
        return(
            <div className="InfoSongCont">
                <TitleSong title= {"All of me"}/>
                <DataSong  data= {data}/>
            </div>
        );
    }
}

export default InfoSong;
import React from 'react'
import TitleSong from './TitleSong'
import DataSong from './DataSong'


const InfoSong = () => (
    <div>
       <TitleSong title= {"all of me"}/>
       <DataSong  singer={'Romeo Santos'}  genre={'Bachata'}/>
    </div>
);

export default InfoSong;
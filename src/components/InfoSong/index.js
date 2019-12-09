import React, {Component} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from  'prop-types';
import getURL from './../../Services/getURL';
import TitleSong from './TitleSong';
import DataSong from './DataSong';
import transformData from './../../Services/transformData';
import './styles.css';

/*const InfoSong = () => (
    <div className="InfoSongCont">
       <TitleSong title= {"All of me"}/>
       <DataSong  data= {data}/>
    </div>
);*/
class InfoSong extends Component{

    constructor(props){
        super(props);
        const {title} = props;
        // this.satate solo se usa en el constructor
        this.state = {
            title,
            data : null,
        };
    };

    componentDidMount(){
        this.handleUpdateClick();
    };

    componentDidUpdate(){
    };

    handleUpdateClick = () =>{
        const api_weather = getURL(this.state.title);
        fetch (api_weather).then(resolve=>{
        return resolve.json();
    }).then( data => {
        const newData = transformData(data);
        this.setState({
            title: this.state.title,
            data: newData.details,
            });
        });     
    }

    render (){
        const{title,data} = this.state;
        const handleTitleClick = (title,onSelectedTitle) =>{
            console.log(title);
            onSelectedTitle(title);
        };
        return(
            <div className="InfoSongCont">
                {<TitleSong title= {title}
                    onTitleClick ={()=>handleTitleClick(title)}
                />}
                {data?<DataSong  data= {data}></DataSong>:<CircularProgress/>}
            </div>
        );
    }
}

InfoSong.propTypes ={
    title: PropTypes.string.isRequired,
    onSelectedTitle: PropTypes.func,
}
export default InfoSong;
import React, {Component} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from  'prop-types';
import getURL from './../../Services/getURL';
import TitleSong from './TitleSong';
import DataSong from './DataSong';
import transformData from './../../Services/transformData';
import {Grid, Col, Row} from 'react-flexbox-grid';

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
        const toke = window.location.hash;
        if (!toke) window.location.href = getURL();
        else{
            const token0 = toke.split("&");
            const token1 = token0[0].split ("=");
            console.log(token1[1]);
            const url = "https://api.spotify.com/v1/playlists/37i9dQZF1DX9L93gfg5cPa/tracks";
            const config = {
                method: 'GET',
               headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer ${token1[1]}`
               }
            }
            fetch(url,config).then( resolve => {
                return resolve.json();
            }).then (data => {
                const newData = transformData(data);
                this.setState({
                    title: newData.title,
                    data: newData.details,
                    
                });     
            });
        }
    }

    render (){
        const{title,data} = this.state;
        const handleTitleClick = (title) =>{
            console.log(title);
        };
        return(
            <Grid fluid>
                <Row center="xs">
                    <Col xs={10} sm={6} md= {3} lg={3}>
                        {<TitleSong title= {title}
                        onTitleClick ={()=>handleTitleClick(title)}
                        />}
                        {data?<DataSong  data= {data}></DataSong>:<CircularProgress/>}
                    </Col>
                    <Col xs={10} sm={6} md= {3} lg={3}>
                        {<TitleSong title= {title}
                        onTitleClick ={()=>handleTitleClick(title)}
                        />}
                        {data?<DataSong  data= {data}></DataSong>:<CircularProgress/>}
                    </Col>
                    <Col xs={10} sm={6} md= {3} lg={3}>
                        {<TitleSong title= {title}
                        onTitleClick ={()=>handleTitleClick(title)}
                        />}
                        {data?<DataSong  data= {data}></DataSong>:<CircularProgress/>}
                    </Col>
                    <Col xs={10} sm={6} md= {3} lg={3}>
                        {<TitleSong title= {title}
                        onTitleClick ={()=>handleTitleClick(title)}
                        />}
                        {data?<DataSong  data= {data}></DataSong>:<CircularProgress/>}
                    </Col>
                </Row>

            </Grid>
        );
    }
}

InfoSong.propTypes ={
    title: PropTypes.string.isRequired,
}
export default InfoSong;
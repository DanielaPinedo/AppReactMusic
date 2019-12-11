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
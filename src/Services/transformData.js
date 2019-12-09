const transformData = song_data => {
    const title = song_data.name
    const singer = song_data.weather[0].description;
    const genre = song_data.weather[0].main;
    const data =  {
        title,
        details : {
            singer,
            genre,
        }
    }
    return  data;
}

export default transformData;
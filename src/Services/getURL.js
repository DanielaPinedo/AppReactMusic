import {client_id,response_type,url,redirect_uri,scope} from './../constants/api_url';

const getURL = () => {
    return `${url}client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}`;
}

export default getURL;
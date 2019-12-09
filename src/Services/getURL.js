import {url,api_key} from './../constants/api_url';

const getURL = title => {
    return `${url}${title}&appid=${api_key}`;
}

export default getURL;
import axios from 'axios';

const KEY = 'BNz25dqw1ntZCAMRt8w7IE4kTynlBK4ypWo5f1I190taNY3qQ4FIBxepg9mdtbIAyBZD3gNzUh8-2bgZqPNZzsFT2gYXa9Fw13WE-zZ5SZo9t-BpTDnTcjdqyK_NX3Yx';

export default axios.create({
    baseURL: `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3`,
    headers: {
        Authorization: `Bearer ${KEY}`
    }
    
});
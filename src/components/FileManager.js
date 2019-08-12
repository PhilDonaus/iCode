import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'http://35.231.207.42';


export default class FileManager extends Component {
  
  GetProjectsList(){
    const url = `${API_URL}/api_v1/projects/`;
    return axios.get(url).then(response => response.data);
    
  }
  
  CreateProject(data){
    const data = {
      "title": "Phil's Sample Project"
    };
    
    const url = `${API_URL}/projects/`;
    return axios.post(url,data);
  }
  
}
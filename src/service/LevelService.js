import React,{Component} from "react";
import axios from "axios";

const LEVEL_API_BASE_URL = "http://localhost:8080/levels"

class LevelService {

    getLevels(){
        return axios.get(LEVEL_API_BASE_URL)
    }
}

export default new LevelService();
import React,{Component} from "react";
import axios from "axios";

const TOPIC_API_BASE_URL = "http://localhost:8080/topic/";

class TopicService {

    getTopics(){
        return axios.get(TOPIC_API_BASE_URL)
    }

}

export default new TopicService();
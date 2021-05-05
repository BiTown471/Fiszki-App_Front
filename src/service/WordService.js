import React from "react";
import axios from "axios";

const WordApiBase ="http://localhost:8080/oneflashcard";

class WordService {
    getWords(){
        return axios.get(WordApiBase);
    }
}

export default new WordService()
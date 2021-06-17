import React,{Component} from "react";
import axios from "axios";

const FLASHCARD_API_BASE_URL = "http://localhost:8080/flashcard/";

class FlashcardService {

    getFlashcards(){
        return axios.get(FLASHCARD_API_BASE_URL)
    }

    getFlashcardById(id){
        return axios.get(FLASHCARD_API_BASE_URL+id)
    }
    getFlashcardByTopicId(id){
        return axios.get(FLASHCARD_API_BASE_URL+"topic/"+id)
    }

    postFlashcard(fc){
        //fc = JSON.stringify(fc)
        //http://localhost:8080/flashcard/?englishWord=1&englishWordDesc=1&polishWord=1&polishWordDesc=1&partOfSpeech=1&topic=1&level=1
        console.log(fc)
        return axios.post(FLASHCARD_API_BASE_URL+
            "?englishWord="+fc.englishWord+
            "&englishWordDesc="+fc.englishWordDesc+
            "&polishWord="+fc.polishWord+
            "&polishWordDesc="+fc.polishWordDesc+
            "&partOfSpeech="+fc.partsOfSpeechId+
            "&topic="+fc.topicId+
            "&level="+fc.levelId)
    }
}

export default new FlashcardService();
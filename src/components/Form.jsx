import React from 'react'

import './form.css'
import { GoogleGenAI } from "@google/genai";
import { useNavigate } from "react-router";

export default function Form(props) {
    const navigate = useNavigate();

    const handleInput = async (event) => {

        alert("Req Submitted Response will be generated in 10 seconds.")
        const ai = new GoogleGenAI({ apiKey: event.target.apiKey.value });
        apikey.value=event.target.apiKey.value;

        props.setStatement(event.target.statement.value);
        props.setLanguage((event.target.language.value));

        let aiPromt
        if(
        event.target.language.value.toLowerCase().replace(" ","")=="python"
        ||event.target.language.value.toLowerCase().replace(" ","")=="pygame"
        ||event.target.language.value.toLowerCase().replace(" ","")=="numpy"
        ||event.target.language.value.toLowerCase().replace(" ","")=="pandas"
        ||event.target.language.value.toLowerCase().replace(" ","")=="sklearn"
        ||event.target.language.value.toLowerCase().replace(" ","")=="matplotlib"
        ||event.target.language.value.toLowerCase().replace(" ","")=="seaborn"
        ||event.target.language.value.toLowerCase().replace(" ","")=="pytorch"
        ||event.target.language.value.toLowerCase().replace(" ","")=="scipy"
        ||event.target.language.value.toLowerCase().replace(" ","")=="keras"
        ||event.target.language.value.toLowerCase().replace(" ","")=="tensorflow"
        ||event.target.language.value.toLowerCase().replace(" ","")=="django"
        ||event.target.language.value.toLowerCase().replace(" ","")=="flask"
        ||event.target.language.value.toLowerCase().replace(" ","")=="ruby"
        ){
            aiPromt=`${event.target.statement.value} explain each word of this ${event.target.language.value.toLowerCase().replace(" ","")} statement in one line sentence don't take nextline whitespace and don't use any symbols in response except . : ;`
        }
        else{
            aiPromt=`${event.target.statement.value} explain use of each word of this ${event.target.language.value.toLowerCase().replace(" ","")} statement in one line sentence don't take nextline whitespace and don't use any symbols in your response except . :`
        }


        event.preventDefault();
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",

            contents: aiPromt,

        });
        // console.log(response.text);
        props.setSemantics((response.text));
        navigate("/s");
    }


    return (
        <>
            <div className="formBody">
                <h1>KNOW WHAT YOU TYPE</h1>
                <p>Enter the statement of any prog lang and get detailed explanation of each keyword, symbol, syntax of it Within seconds.</p>

                <form onSubmit={handleInput}>
                    <input type="text" name="statement" placeholder="Enter Statement" required/>
                    <input type="text" name="language" placeholder="Enter Language/Library" required/>
                    <input id='apikey' type="password" name="apiKey" placeholder="Enter Gemini API Key" required/>
                    <button type="submit">Get Semantics</button>
                </form>
            </div>
        </>
    )
}

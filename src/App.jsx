
import React, { useState } from 'react';
import './App.css';
import Logo from './components/homepage/Logo';
import Dashboard from './components/homepage/Dashboard';
import Input from './components/homepage/Input';
import Questionbox from './components/homepage/questionbox';
import Answerbox from './components/homepage/Answerbox';

import { Configuration, OpenAIApi } from "openai";




const App = () => {
  const [initialui, setInitialui] = useState(true);
  const [inputValue, setInputValue] = useState('');


  const [messages, setMessages] = useState();
  
  // const configuration = new Configuration({
  //   apiKey: "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",
  // });
  const openAi = new OpenAIApi(
    new Configuration({
      apiKey: "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",
    })
  )
  
  // const openai = new OpenAIApi(configuration);

  const responseGenerate = async (input, setInput) => {
    // let options = {
    //   prompt: `Complete this sentence: "${input}"`,
    //   model: 'text-davinci-003',
    //   max_tokens: 50,
    //   n: 1,
    //   stop: ".",
    // };

    // let completeOptions = {
    //   ...options,
    //   prompt: input,
    // };

    // const response = await openai.createChatCompletion(completeOptions);
    const response = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "My project name is sanjeevani(it is you) which is a ai tool for finding ayurvedic herbs based on syntoms of diseases.. this software is for ayurvedic practitioner and students. can you generate a result for query " + input + '" so that It can help me build an interface demo and suggest only one herb that is best for that particular symptom in this format : Name of the herb and describe a little bit, How to use that herb in that particular disease, Dosage to take it, Precaution while taking it, and lastly suggest only the name of two releated herb. And suppose if ayurveda is not able to reply to the query and then only you say sorry to assist you' }],
})
    setMessages(response.data.choices[0].message.content)
    // console.log(response.data.choices[0].message.content)
    // userInterface.prompt()
  
    //  if (response.data.choices) {
    //         setMessages([
    //             {
    //                 question: input,
    //                 answer: response.data.choices[0].text,
    //             },
    //             ...messages,
    //         ]);
    //         setInput('');
    //     }
  };
  return (
    <>
      <Logo />
      
      {initialui && <Dashboard />}
      {!initialui && <div>
        <Questionbox message={inputValue} />
        <Answerbox messages={messages}></Answerbox>
      </div>}
      <Input setInputValue={setInputValue} setInitialui={setInitialui} responseGenerate={responseGenerate}></Input>
    </>
  )
}

export default App;

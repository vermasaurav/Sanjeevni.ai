import {Configuration, OpenAIApi} from 'openai';
// const {Configuration, OpenAIApi}=require('openai');
const configuration = new Configuration({ apiKey: "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"});
const openai = new OpenAIApi(configuration);





export async function sendMsg(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: "hello",
        temperature: 0.7,
        max_token: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.data.choices[0].text;
}
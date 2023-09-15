
const {Configuration,OpenAIApi} = require("openai");
const configuration = new Configuration({ apiKey: "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"});
const openai = new OpenAIApi(configuration);


export async function sendMsg(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_token: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.data.choices[0].text;
}
import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
  apiKey:process.env.NEXT_OPENAI_API_KEY ,
});
// console.log("process.env.NEXT_OPENAI_API_KEY",process.env.NEXT_OPENAI_API_KEY);/

const openai = new OpenAIApi(configuration);

export const chatCompletion = async (prompt: string) => {
  if (prompt !== undefined) {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 3000,
    });
    console.log("completion", completion);
    return completion.data.choices[0].text;
    // res.status(200).json({ text: `${completion.data.choices[0].text}` });
  } else {
    // res.status(400).json({ text: "No prompt provided." });
  }
};

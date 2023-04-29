import { config } from "dotenv";
config();

import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
);

const userInferface = readline.createInterface({
  input: process.stdin,
  ouput: process.stdout,
});

userInferface.prompt();
userInferface.on("line", async (input) => {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  });
  userInferface.prompt();
  console.log(response.data.choices[0].message.content);
});

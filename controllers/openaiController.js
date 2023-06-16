const openai = require('../config/openaiConfig')

const getColors = async (req, res) => {

  const { title } = req.body
  const description = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { "role": "system", "content": `You are an assistant that generates color palettes based on ${title}. You should generate on single palette color that fits the the theme, mood, or instructions in the ${title}. The palette should have max of 8 colors. Desired format: an array with the colors in hexadecimal value, without your comments or any description in the output, just the array. remove the word colors in the output`},
      {"role": "user", "content": `${title}`},
      {"role": "assistant", "content": "Desired Format: an array of colors in hex format, without any comments like: Here is, just the array" }
    ],
    max_tokens: 100
  })

  res.status(200).json({
    description: description.data.choices[0].message
  })
}

module.exports = { getColors }
var $2A20x$express = require("express");
var $2A20x$dotenv = require("dotenv");
var $2A20x$openai = require("openai");



$2A20x$dotenv.config();
var $36d25467303d7e6e$exports = {};
var $d6d3e66fb8801c49$exports = {};

var $d6d3e66fb8801c49$require$Configuration = $2A20x$openai.Configuration;
var $d6d3e66fb8801c49$require$OpenAIApi = $2A20x$openai.OpenAIApi;

$2A20x$dotenv.config();
const $d6d3e66fb8801c49$var$configuration = new $d6d3e66fb8801c49$require$Configuration({
    apiKey: "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"
});
const $d6d3e66fb8801c49$var$openai = new $d6d3e66fb8801c49$require$OpenAIApi($d6d3e66fb8801c49$var$configuration);
$d6d3e66fb8801c49$exports = $d6d3e66fb8801c49$var$openai;


const $36d25467303d7e6e$var$getColors = async (req, res)=>{
    const { title: title  } = req.body;
    const description = await $d6d3e66fb8801c49$exports.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": `You are an assistant that generates color palettes based on ${title}. You should generate on single palette color that fits the the theme, mood, or instructions in the ${title}. The palette should have max of 8 colors. Desired format: an array with the colors in hexadecimal value, without your comments or any description in the output, just the array. remove the word colors in the output`
            },
            {
                "role": "user",
                "content": `${title}`
            },
            {
                "role": "assistant",
                "content": "Desired Format: an array of colors in hex format, without any comments like: Here is, just the array"
            }
        ],
        max_tokens: 100
    });
    res.status(200).json({
        description: description.data.choices[0].message
    });
};
$36d25467303d7e6e$exports = {
    getColors: $36d25467303d7e6e$var$getColors
};


var $84a264530b3fb4fb$require$getColors = $36d25467303d7e6e$exports.getColors;
const $84a264530b3fb4fb$var$port = "5000";
const $84a264530b3fb4fb$var$localhost = "192.168.0.11";
const $84a264530b3fb4fb$var$app = $2A20x$express();
//APP SETUP
$84a264530b3fb4fb$var$app.listen($84a264530b3fb4fb$var$port, $84a264530b3fb4fb$var$localhost, ()=>{
    console.log(`server listening on ${$84a264530b3fb4fb$var$port} on ${$84a264530b3fb4fb$var$localhost}`);
});
//MIDDLEWARE
$84a264530b3fb4fb$var$app.use($2A20x$express.json());
$84a264530b3fb4fb$var$app.use($2A20x$express.static("public"));
//ROUTES
$84a264530b3fb4fb$var$app.post("/palette", $84a264530b3fb4fb$require$getColors);


//# sourceMappingURL=index.js.map

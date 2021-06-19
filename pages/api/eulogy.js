var openai = require("openai-node");

openai.api_key = process.env.OPENAI_API_KEY;
// openai.organization = "YOUR ORGANIZATION ID"; // optional

export default async (req, res) => {
	const body = req.body

	// Eulogy Completion. Creates a few sentances based on notes
	const response = await openai.Completion.create({
    engine: "davinci-instruct-beta",
    prompt: `Write a paragraph eulogy based on these notes:\n\nName: ${body.name}\n${body.prompt}\n\nEulogy:`,
    temperature: 1,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 1,
    n: 1,
    stream: false,
    logprobs: null,
    echo: false,
    best_of: 1,
    stop: null
	}).then((response) => {
	    return response
	});

  res.statusCode = 200
  res.json({ response: response })
}

const OpenAI = require('openai');
const youtubeExec = require("youtube-exec");
const Whisper = require('whisper-nodejs');
const fs = require('fs');
const whisper = new Whisper('ENTER_YOUR_SECRET_KEY');
const openai = new OpenAI({ apiKey: 'ENTER_YOUR_SECRET_KEY' });


const process = async (url) => {
  const start = new Date();
  const end = new Date();
   const startTime = start.getTime();
     await youtubeExec.dlAudioVideo({
      url: url,
      folder: "downloads",
      filename: "video",
      resolution: 720,
    }); 


  console.log(`Proceding to transcribed video...`)
  let file = './downloads/video.mp4'

  // Transcribe audio
  await whisper.transcribe(file, 'whisper-1')
    .then(async (text) => {
      console.log(text);
      console.log("Video transcribed successfully! 🔊🎉");
       const gptResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { "role": "system", "content": "You are a helpful assistant." },
          {
            "role": "user", "content": `
          You are watching a YouTube video and you want to write a summary of it for your blog. The transcript of the video is given below. Write a summary of the video in your own words, using no more than 150 words. Make sure to cover the main idea, the supporting points, and the outcome of the video. Also, come up with five creative titles for the video that would attract more viewers.
          \n\n
          ${text}
          ` },],
        max_tokens: 500
      });

      fs.writeFileSync('summary.txt', 'The Summary is below \n \n' + gptResponse.choices[0].message.content)

      try {
        fs.rmSync('./downloads', { recursive: true, force: true });
      } catch (err) {
        console.error(`Error while deleting ${dir}.`);
      }

     const endTime = end.getTime();

      console.log('The Summary is below \n \n' + gptResponse.choices[0].message.content)
      console.log(`Process tool ${Math.round((endTime - startTime) / 1000)} seconds`)
    })
    .catch(error => {
      console.error(error);
    });

}

process("your youtube link");
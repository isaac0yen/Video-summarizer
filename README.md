---

# YouTube Video Transcription and Summary Tool

## Overview

This tool is designed to transcribe YouTube videos and generate a concise summary using OpenAI's Whisper ASR API and GPT-3.5 Turbo. It is particularly useful for content creators who want to quickly summarize the main points of a video for their blogs or other platforms.

## Features

- **YouTube Video Transcription:** Downloads and transcribes YouTube videos into text format.
- **GPT-3.5 Turbo Integration:** Uses OpenAI's powerful language model to generate a summary of the transcribed content.
- **File Management:** Automatically cleans up downloaded files after processing to maintain a clean workspace.

## Prerequisites

Before using the tool, ensure you have the following:

- Node.js installed on your machine.
- OpenAI API key for both Whisper ASR and GPT-3.5 Turbo.
- Whisper Node.js library installed (`npm install whisper-nodejs`).
- OpenAI Node.js library installed (`npm install openai`).
- YouTube Exec library installed (`npm install youtube-exec`).

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/isaac0yen/Video-summarizer.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Replace `ENTER_YOUR_SECRET_KEY` with your actual OpenAI API key in the `index.js` file.

4. Run the tool with a YouTube video URL:

   ```bash
   node index.js
   ```

   Make sure the youtube URL is being put into the `index.js` file

5. The tool will download, transcribe, and summarize the video, providing a summary in the console and saving it in a `summary.txt` file.

## Acknowledgments

- OpenAI for providing powerful natural language processing tools.
- Whisper for efficient audio transcription.

Feel free to contribute or open issues to improve the tool!

---
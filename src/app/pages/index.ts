import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

const main = async () => {
    const result = await generateText({
        model: google('gemini-2.0-flash-lite'),
        prompt: 'Hello World'
    });
    console.log(result.text);
    
}

main()
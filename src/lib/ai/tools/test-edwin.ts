// test-edwin.ts
import { getTopicNames, readAboutEdwin } from './ed-google-files';

async function testReadAboutEdwin() {
    try {
        const topic = 'elevator-pitch'; 
        console.log(`✨ Testing readAboutEdwin with topic: "${topic}" …`);

        const result = await readAboutEdwin(topic);
        console.log('\n🎯 Result:\n');
        console.log('-------------------');
        console.log(result);
        console.log('-------------------\n');
    } catch (error) {
        console.error('❌ Error while reading about Edwin:', (error as Error).message);
    }
}

async function testGetTopicNames() {
    try {
        console.log('📜 Fetching available topic names …');
        const topicNames = await getTopicNames();
        console.log('\n✅ Available Topics:\n');
        topicNames.forEach((name, index) => {
            console.log(`${index + 1}. ${name}`);
        });
        console.log('');
    } catch (error) {
        console.error('❌ Error fetching topic names:', (error as Error).message);
    }
}

(async () => {
    console.log('\n🧪 Running tests for Edwin’s Topics …\n');

    await testGetTopicNames();
    await testReadAboutEdwin();

    console.log('✅ Tests completed.\n');
})();

export default {

    name: 'timer',
    description: 'Prints hello message',

    handle: async function ({ seconds }) {
        await timerBySecond(seconds);
    }
}
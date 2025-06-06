export default {

    name: 'say:hello',
    description: 'Prints hello message',

    handle: function (args) {
        console.log('Hello from Node ESM command!');
        console.log(args);
        console.log(CONSTANTS);
    }
}
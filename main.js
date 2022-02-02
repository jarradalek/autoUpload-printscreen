const open = require('open');
const screenshot = require('screenshot-desktop')
const { ImgurClient } = require('imgur');
const client = new ImgurClient({ clientId: '.-.-.-...-.-' });
const kp = require("node-global-key-listener");
const keypress = new kp.GlobalKeyboardListener();

keypress.addListener((key) => {
    if (key.rawKey._nameRaw === 'VK_SNAPSHOT' && key.state === 'UP') {
      console.log(key.rawKey._nameRaw, key.state);
        screenshot().then(async(img) => {
            console.log(img)
            const response = await client.upload({
                image: img,
                title: 'Screenshot',
                description: 'Screenshot using nodeJS',
            });
            open(response.data.link);

        })
    }
    
});

process.stdin.setRawMode(true);
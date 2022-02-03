const open = require('open');
const screenshot = require('screenshot-desktop')
const { ImgurClient } = require('imgur');
const client = new ImgurClient({ clientId: 'xDD' });
const gkl = require("node-global-key-listener");
const keypress = new gkl.GlobalKeyboardListener();

keypress.addListener((key) => {
    
    if (key.rawKey._nameRaw === 'VK_SNAPSHOT' && key.state === 'UP') {
        
        screenshot().then(async(img) => {
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

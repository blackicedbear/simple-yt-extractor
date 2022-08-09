const fastify = require('fastify')({
  logger: true
});
const axios = require('axios').default;
const cheerio = require('cheerio');

function getUrl(signatureCipher) {
    let url = new URL("http://example.com/path/index.html?" + signatureCipher)
    let s = decodeURIComponent(url.searchParams.get('s'));
    let furl = decodeURIComponent(url.searchParams.get('url'));

    sy = function(a) {
        a = a.split("");
        ry.Pm(a, 2);
        ry.ii(a, 1);
        ry.sS(a, 54);
        ry.ii(a, 3);
        return a.join("");
    };
    
    var ry = {
        sS: function(a) {
            a.reverse()
        },
        Pm: function(a, b) {
            var c = a[0];
            a[0] = a[b % a.length];
            a[b % a.length] = c
        },
        ii: function(a, b) {
            a.splice(0, b)
        }
    };

    furl += "&sig=" + sy(s);
    return furl;
}

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

fastify.get('/video/:id', async (request, reply) => {
    const { id } = request.params;
    const video = await axios.get('https://m.youtube.com/watch?v=' + id, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G973U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.2 Chrome/87.0.4280.141 Mobile Safari/537.36'
        }
    });
    let playerString = video.data;
    playerString = playerString.substring(playerString.indexOf('>var ytInitialPlayerResponse = {') + 30, playerString.indexOf('}}}}]};</script><script nonce=')) + "}}}}]}";
    playerObj = JSON.parse(playerString);

    for (let i = 0; i < playerObj.streamingData.formats.length; i++) {
        if(!playerObj.streamingData.formats[i].url) {
            playerObj.streamingData.formats[i].url = getUrl(playerObj.streamingData.formats[i].signatureCipher);
        }
    }

    for (let t = 0; t < playerObj.streamingData.adaptiveFormats.length; t++) {
        if(!playerObj.streamingData.adaptiveFormats[t].url) {
            playerObj.streamingData.adaptiveFormats[t].url = getUrl(playerObj.streamingData.adaptiveFormats[t].signatureCipher);
        }
    }

    reply.send({ status: 'ok', video: id, data: playerObj });
})

fastify.get('/videodata/:id', async (request, reply) => {
    const { id } = request.params;
    const video = await axios.get('https://m.youtube.com/watch?v=' + id, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G973U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.2 Chrome/87.0.4280.141 Mobile Safari/537.36'
        }
    });
    let playerString = video.data;

    reply.type('text/plain');
    reply.send(playerString);    
})

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
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

console.log(getUrl("s=o%3D%3DBt9kqWfJyGk_1uSDGu5UXm2VgrxAuWwNMMjyLdPAn6AEiAKT0hTapbAfveHqx2pq7x5XEEkIwmryxPsf6skvba-bPAhIgRw8JQ0qOAqOA&sp=sig&url=https://rr6---sn-uxax3vh50nugp5-8pxy.googlevideo.com/videoplayback%3Fexpire%3D1660082564%26ei%3DJIXyYpTxFo2x1gL4h5moAw%26ip%3D188.23.201.163%26id%3Do-AMumgohMtL0mjDZk7EXqu5iSgAu1dgcj3C7RalKMO8tf%26itag%3D18%26source%3Dyoutube%26requiressl%3Dyes%26mh%3DoA%26mm%3D31%252C29%26mn%3Dsn-uxax3vh50nugp5-8pxy%252Csn-c0q7lnly%26ms%3Dau%252Crdu%26mv%3Dm%26mvi%3D6%26pl%3D21%26initcwndbps%3D1131250%26spc%3DlT-KhrVNudjuBokXkzq_C5A_jTCbLDU%26vprv%3D1%26mime%3Dvideo%252Fmp4%26ns%3DzOy3XczQNs57SBZ_KkMH6RwH%26gir%3Dyes%26clen%3D4927806%26ratebypass%3Dyes%26dur%3D171.990%26lmt%3D1560458019270899%26mt%3D1660060635%26fvip%3D2%26fexp%3D24001373%252C24007246%26beids%3D24239129%26c%3DWEB%26rbqsm%3Dfr%26txp%3D5431432%26n%3DaQW61RX0jo31Y7lG%26sparams%3Dexpire%252Cei%252Cip%252Cid%252Citag%252Csource%252Crequiressl%252Cspc%252Cvprv%252Cmime%252Cns%252Cgir%252Cclen%252Cratebypass%252Cdur%252Clmt%26lsparams%3Dmh%252Cmm%252Cmn%252Cms%252Cmv%252Cmvi%252Cpl%252Cinitcwndbps%26lsig%3DAG3C_xAwRAIgXHYscMaUUi_bF1n0lz3IppEwfeEJwnoAH1qX0yeYmNICIGoxeu8SL1R5rWM7olnAN0mjl8G3_nPJ4y-h0sDRJg01"));
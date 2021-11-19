import faviconmeups from "../../images/favicons/faviconmeups.png";
import faviconign from "../../images/favicons/faviconign.png";
import favicong1 from "../../images/favicons/favicong1.png";
import faviconolhar from "../../images/favicons/faviconolhar.png";
import faviconcinrapa from "../../images/favicons/faviconcinrapa.png";
import constants from "../util/constants";

const iconUri = {
    getIconFromUri: function (uri) {
        var targ = constants.targets;

        if (targ.meups == uri) {
            return faviconmeups;
        } else if (targ.ignpc == uri || targ.ignxbox == uri || targ.ignswitch == uri) {
            return faviconign;
        } else if (targ.g1 == uri) {
            return favicong1;
        } else if (targ.olhar == uri) {
            return faviconolhar;
        } else if (targ.cinemarapadura == uri) {
            return faviconcinrapa;
        }
    },
    getUriClean: function (uri) {
        var targ = constants.targets;

        if (targ.meups == uri) {
            return "meups.com.br";
        } else if (targ.ignpc == uri || targ.ignxbox == uri || targ.ignswitch == uri) {
            return "br.ign.com";
        } else if (targ.g1 == uri) {
            return "g1.globo.com";
        } else if (targ.olhar == uri) {
            return "olhardigital.com.br";
        } else if (targ.cinemarapadura == uri) {
            return "cinemacomrapadura.com.br";
        }
    }
}

export default iconUri;
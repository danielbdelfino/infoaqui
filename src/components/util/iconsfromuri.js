import faviconmeups from "../../images/favicons/faviconmeups.png";
import faviconign from "../../images/favicons/faviconign.png";
import constants from "../util/constants";

const iconUri = {
    getIconFromUri: function (uri) {
        var targ = constants.targets;

        if (targ.meups == uri) {
            return faviconmeups;
        } else if (targ.ignpc == uri || targ.ignxbox == uri || targ.ignswitch == uri) {
            return faviconign;
        }
    },
    getUriClean: function (uri) {
        var targ = constants.targets;

        if (targ.meups == uri) {
            return "meups.com.br";
        } else if (targ.ignpc == uri || targ.ignxbox == uri || targ.ignswitch == uri) {
            return "br.ign.com";
        }
    }
}

export default iconUri;
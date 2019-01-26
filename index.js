module.exports = function NoCustomLoadingScreens(mod) {
    if(mod.proxyAuthor !== 'caali' || !global.TeraProxy) {
        mod.warn('You are trying to use NoCustomLoadingScreens on an unsupported legacy version of tera-proxy.');
        mod.warn('The module may not work as expected, and even if it works for now, it may break at any point in the future!');
        mod.warn('It is highly recommended that you download the latest official version from the #proxy channel in https://discord.gg/dUNDDtw');
    }

    mod.hook('S_LOADING_SCREEN_CONTROL_INFO', 2, event => {
        if (event.enableCustom) {
            event.enableCustom = false;
            return true;
        }
    });
}

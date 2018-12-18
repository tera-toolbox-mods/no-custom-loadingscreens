module.exports = function NoCustomLoadingScreens(mod) {
    if(mod.proxyAuthor !== 'caali')
        mod.warn('You are trying to use NoCustomLoadingScreens on an unsupported version of tera-proxy. It may not work as expected, and even if it does now it may break at any point in the future!');

    mod.hook('S_LOADING_SCREEN_CONTROL_INFO', 2, event => {
        if (event.enableCustom) {
            event.enableCustom = false;
            return true;
        }
    });
}

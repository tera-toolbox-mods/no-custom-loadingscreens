module.exports = function NoCustomLoadingScreens(mod) {
    mod.hook('S_LOADING_SCREEN_CONTROL_INFO', 2, event => {
        if (event.enableCustom) {
            event.enableCustom = false;
            return true;
        }
    });
}

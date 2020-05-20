(function(window, global) {
    let LiveCast = window.LiveCast || function() {};

    LiveCast.prototype.init = function() { bindEvents(); }

    function bindEvents() {
        settings.addEventListener('click', () => {
            settingMenu.classList.toggle('active');
        }, false);

        screenCount.addEventListener('click', () => {
            screenPalette.classList.toggle('active');
        }, false);

        fullScreenMode.addEventListener('click', toggleFullscreen, false);
        hideSidebar.addEventListener('click', toggleFullscreen, false);

        tabNav.addEventListener('click', (event) => {
            event.stopImmediatePropagation();
            const target = event.target;
            if (target.nodeName === 'BUTTON') {
                let tabId = target.dataset.href;
                removeActiveClass();
                target.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            }
        }, false);

        closeSetting.addEventListener('click', () => {
            const target = tabNav.querySelector('.tabBtn');
            removeActiveClass();
            target.classList.add('active');
            chatBox.classList.add('active');
        }, false);

        colorPalette.addEventListener('click', (event) => {
            const target = event.target;
            if (target.nodeName === 'LI') {
                const items = colorPalette.querySelectorAll('li');
                items.forEach(item => {
                    item.classList.remove('active');
                });
                target.classList.add('active');
            }
        }, false);

        videoControlBox.addEventListener('click', (event) => {
            const target = event.target;
            if (target.nodeName === 'BUTTON') {
                if (target.classList.contains('btn-video')) {
                    target.classList.toggle('disabled')
                }

                if (target.classList.contains('btn-mic')) {
                    target.classList.toggle('disabled')
                }
            }
        });
    }

    function toggleFullscreen() {
        wrapper.classList.toggle('fullScreenMode');
        if (wrapper.classList.contains('fullScreenMode')) {
            screenPalette.classList.remove('active');
        }
        settingMenu.classList.remove('active');
    }

    function removeActiveClass() {
        const tabBtns = tabNav.querySelectorAll('.tabBtn');
        const tabs = tabsWrapper.querySelectorAll('.tab');
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
    }


    if (!window.LiveCast) {
        window.LiveCast = LiveCast;
    }

    window.addEventListener('DOMContentLoaded', () => {
        let cast = new LiveCast();
        cast.init();
    }, false);
}(window))
(function(window, global) {
    let LiveCast = window.LiveCast || function() {};

    LiveCast.prototype.init = function() { bindEvents(); }

    function bindEvents() {
        if (typeof settings !== 'undefined') settings.addEventListener('click', () => {
            settingMenu.classList.toggle('active');
        }, false);

        if (typeof screenCount !== 'undefined') screenCount.addEventListener('click', () => {
            screenPalette.classList.toggle('active');
        }, false);

        if (typeof fullScreenMode !== 'undefined') fullScreenMode.addEventListener('click', toggleFullscreen, false);
        hideSidebar.addEventListener('click', toggleFullscreen.bind(event, false), false);

        const tabNavBtns = document.querySelectorAll('.tabBtn');
        if (tabNavBtns.length) tabNavBtns.forEach(btn => {
            btn.addEventListener('click', (event) => {
                const target = event.target;
                const tabId = target.dataset.href;
                removeActiveClass();
                tabNav.querySelector(`[data-href='${tabId}']`).classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });

        if (typeof closeSetting !== 'undefined') closeSetting.addEventListener('click', () => {
            const target = tabNav.querySelector('.tabBtn');
            removeActiveClass();
            target.classList.add('active');
            chatBox.classList.add('active');
        }, false);

        if (typeof colorPalette !== 'undefined') colorPalette.addEventListener('click', (event) => {
            const target = event.target;
            if (target.nodeName === 'LI') {
                const items = colorPalette.querySelectorAll('li');
                items.forEach(item => {
                    item.classList.remove('active');
                });
                target.classList.add('active');
            }
        }, false);

        if (typeof videoControlBox !== 'undefined') videoControlBox.addEventListener('click', (event) => {
            const target = event.target;
            if (target.nodeName === 'BUTTON') {
                if (target.classList.contains('btn-video')) {
                    target.classList.toggle('disabled')
                }

                if (target.classList.contains('btn-audio')) {
                    target.classList.toggle('disabled')
                }
            }
        });

        const toggleActionBtns = document.querySelectorAll('[data-model="toggle"]');
        if (toggleActionBtns.length) toggleActionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('disabled');
            }, false);
        });

        if (typeof hideScreenController !== 'undefined') hideScreenController.addEventListener('click', () => {
            screenPalette.classList.remove('active');
        }, false);

        if (typeof showSidebar !== 'undefined') showSidebar.addEventListener('click', () => {
            wrapper.classList.remove('fullScreenMode');
        }, false);

        if (typeof showScreenAdder !== 'undefined') showScreenAdder.addEventListener('click', () => {
            screensMob.classList.toggle('active');
        }, false);

        if (typeof showTools !== 'undefined') showTools.addEventListener('click', () => {
            tools.classList.toggle('active');
            overlay.classList.toggle('d-none');
        }, false);

        if (typeof overlay !== 'undefined') overlay.addEventListener('click', () => {
            tools.classList.remove('active');
            overlay.classList.add('d-none');
        }, false);

        if (window.innerWidth <= 992) {
            const menus = document.querySelectorAll('.menu');
            if (menus.length) {
                menus.forEach(menu => {
                    menu.addEventListener('click', event => {
                        const submenus = document.querySelectorAll('.submenu-box .submenu');
                        const target = event.target;
                        const menuId = target.dataset.submenu;
                        submenus.forEach((sub) => sub.classList.remove('active'));
                        document.getElementById(menuId).classList.add('active')
                    }, false);
                });
            }
        }
    }

    function toggleFullscreen(isScreenOff = true) {
        wrapper.classList.toggle('fullScreenMode');
        if (isScreenOff && wrapper.classList.contains('fullScreenMode') && typeof screenPalette !== 'undefined') {
            screenPalette.classList.remove('active');
        }
        if (typeof settingMenu !== 'undefined') settingMenu.classList.remove('active');
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
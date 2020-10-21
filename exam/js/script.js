document.addEventListener('DOMContentLoaded', function() {
    // accordian
    const accBtns = document.querySelectorAll(".content-card .header");
    for (let i=0; i<accBtns.length; i++) {
        accBtns[i].addEventListener("click", function() {
            const panel = this.nextElementSibling;
            if(panel) {
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                    this.parentNode.classList.remove('active');
                } else {
                    this.parentNode.classList.add('active');
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
            this.classList.remove("active");
        });
    }
    const accActiveBtns = document.querySelectorAll(".content-card .header.active");
    if(accActiveBtns.length) {
        for (let i=0; i<accActiveBtns.length; i++) {
            accActiveBtns[i].parentElement.classList.add('active');
            const panel = accActiveBtns[i].nextElementSibling;
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
    const cusAccBtns = document.querySelectorAll(".custom-select .custom-select-head");
    for (let i=0; i<cusAccBtns.length; i++) {
        cusAccBtns[i].addEventListener("click", function() {
            const panel = this.nextElementSibling;
            if(panel) {
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    const parentPanel = this.parentElement.parentElement.parentElement;
                    parentPanel.style.maxHeight = parseInt(parentPanel.style.maxHeight) + panel.scrollHeight + "px";
                }
            }
        });
    }
    // accordian end

    // modal
    const modalBtns = document.querySelectorAll('.openModal');
    if(modalBtns.length) {
        for (let i=0; i<modalBtns.length; i++) {
            modalBtns[i].addEventListener("click", function() {
                const modalName = this.dataset.target;
                const isModalOpen = document.body.classList.contains('modal-active');
                if(!isModalOpen && modalName) {
                    const modal = document.getElementById(modalName);
                    document.body.classList.add('modal-active');
                    modal.classList.add('active');
                    if(modalName == 'examModal') {
                        CKEDITOR.replace( 'editor3' );
                    }
                    if(modalName == 'newExamModal') {
                        CKEDITOR.replace( 'editor1' );
                        CKEDITOR.replace( 'editor2' );
                    }
                }
            })
        }
    }
    const modalCloseBtn = document.querySelectorAll('.btn-close');
    if(modalCloseBtn.length) {
        for (let i=0; i<modalCloseBtn.length; i++) {
            modalCloseBtn[i].addEventListener("click", function() {
                const isModalOpen = document.body.classList.contains('modal-active');
                if(isModalOpen) {
                    document.body.classList.remove('modal-active');
                    document.querySelectorAll('.modal').forEach(function(modal) {
                        modal.classList.remove('active');
                    })
                }
            })
        }
    }
    // modal end

    // steps
    const step1Btns = document.querySelectorAll("#queType .btn");
    if(step1Btns) {
        for (let i=0; i<step1Btns.length; i++) {
            step1Btns[i].addEventListener("click", function() {
                document.querySelector('.new-exam-wrapper .step-1').classList.remove('active');
                document.querySelector('.new-exam-wrapper .step-2').classList.add('active');
            });
        }
    }

    // hamburger menu
    const menuBtn = document.querySelector("#hamburger");
    if(menuBtn) {
        menuBtn.addEventListener("click", function() {
            document.body.classList.add('menu-active')
        });
    }

    const closeNavBtn = document.querySelector("#navOverlay");
    if(closeNavBtn) {
        closeNavBtn.addEventListener("click", function() {
            document.body.classList.remove('menu-active')
        });
    }

    // suffle switch
    const suffleBtns = document.querySelectorAll(".suffle-switch .box");
    if(suffleBtns) {
        for (let i=0; i<suffleBtns.length; i++) {
            suffleBtns[i].addEventListener("click", function() {
                suffleBtns.forEach((btn) => btn.classList.remove('active'));
                this.classList.add('active');
                if(this.classList.contains('first')) {
                    return suffleBox.classList.remove('noShuffle');
                }
                suffleBox.classList.add('noShuffle');
            });
        }
    }

    const uploadPdfBtn = document.querySelector("#uploadPdf");
    if(uploadPdfBtn) {
        uploadPdfBtn.addEventListener('change', function(event) {
            var file = event.target.files[0]
            if(file.type == "application/pdf"){
                var fileReader = new FileReader();  
                fileReader.onload = function() {
                    var pdfData = new Uint8Array(this.result);
                    pdfPreview(pdfData);
                    modalBody.classList.remove('d-none');
                    uploadText.innerText = 'Choose Another PDF document';
                }
                fileReader.readAsArrayBuffer(file);
            }
        })
    }

    function pdfPreview(pdfData) {
        var pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
        var pdfDoc = null,
            pageNum = 1,
            pageRendering = false,
            pageNumPending = null,
            scale = 1,
            canvas = document.getElementById('the-canvas'),
            ctx = canvas.getContext('2d');
        function renderPage(num) {
            pageRendering = true;
            pdfDoc.getPage(num).then(function(page) {
                var viewport = page.getViewport({scale: scale});
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                var renderContext = {
                    canvasContext: ctx,
                    viewport: viewport
                };
                var renderTask = page.render(renderContext);
                renderTask.promise.then(function() {
                    pageRendering = false;
                    if (pageNumPending !== null) {
                        renderPage(pageNumPending);
                        pageNumPending = null;
                    }
                });
            });
            document.getElementById('page_num').textContent = num;
        }
        function queueRenderPage(num) {
            if (pageRendering) {
                pageNumPending = num;
            } else {
                renderPage(num);
            }
        }
        function onPrevPage() {
            if (pageNum <= 1) {
                return;
            }
            pageNum--;
            queueRenderPage(pageNum);
        }
        document.getElementById('prev').addEventListener('click', onPrevPage);
        function onNextPage() {
            if (pageNum >= pdfDoc.numPages) {
                return;
            }
            pageNum++;
            queueRenderPage(pageNum);
        }
        document.getElementById('next').addEventListener('click', onNextPage);

        pdfjsLib.getDocument({data: pdfData}).promise.then(function(pdfDoc_) {
            pdfDoc = pdfDoc_;
            document.getElementById('page_count').textContent = pdfDoc.numPages;
            renderPage(pageNum);
        });
    }

    // edit option list 
    const editOptionList = document.querySelectorAll('.option-list .option-content');
    if(editOptionList) {
        for (let i=0; i<editOptionList.length; i++) {
            editOptionList[i].addEventListener("click", function() {
                editOptionList.forEach((item) => item.classList.remove('edit-on'));
                this.classList.add('edit-on');
            });
        }
    }

    // last step
    const nextStep = document.querySelector("#nextStep");
    if(nextStep) {
        nextStep.addEventListener("click", function() {
            document.querySelector('.new-exam-wrapper .step-1').classList.remove('active');
            document.querySelector('.new-exam-wrapper .step-2').classList.remove('active');
            document.querySelector('.new-exam-wrapper .step-3').classList.add('active');
        });
    }

    // accordian right box
    const _btns = document.querySelectorAll(".accordian-box a");
    if(_btns.length) {
        for (let i=0; i<_btns.length; i++) {
            _btns[i].addEventListener("click", function(event) {
                event.preventDefault();
                const buttons = this.parentElement.children;
                const mainBox = this.parentElement.parentElement.children[1].children;
                for(let i=0; i<buttons.length; i++) {
                    buttons[i].classList.remove('active');
                    mainBox[i].classList.remove('active');
                }
                this.classList.add('active');
                const boxId = this.getAttribute('href');
                document.querySelector(boxId).classList.add('active')
            });
        }
    }

    const userViewBtn = document.querySelector("#userView");
    if(userViewBtn) {
        userViewBtn.addEventListener('change', function() {
            if(this.value == 0) return false;
            examWrapper.classList.add('d-none');
            userWrapper.classList.remove('d-none');
        });
    }

    const profileBtn = document.querySelector('.user-box');
    if(profileBtn && window.innerWidth > 767) {
        profileBtn.addEventListener('click', function() {
            this.classList.toggle('profile-active');
        });
    }
    
    const btnCols = document.querySelectorAll('.btn-col');
    if(btnCols) {
        for (let i = 0; i < btnCols.length; i++) {
            btnCols[i].addEventListener('click', function() {
                const type = this.getAttribute('data-type');
                for (let j = 0; j < btnCols.length; j++) {
                    btnCols[j].classList.remove('active');
                }
                this.classList.add('active');
                if(type === 'col') {
                    bordWrapper.classList.remove('rows');
                    bordWrapper.classList.add('colm');
                }
                if(type === 'row') {
                    bordWrapper.classList.remove('colm');
                    bordWrapper.classList.add('rows');
                }
            });
        }
    }

    // document.addEventListener('click', function(event) {
        // event.preventDefault();
        // const target = event.target;
        // const isProfileActive = document.querySelector('.user-box.profile-active');
        // if(!isParents(target, 'user-box') && isProfileActive) {
        //     document.querySelector('.user-box').classList.remove('profile-active');
        // }
    // });
    
    const customDDBtn = document.querySelector('.dd-title');
    if(customDDBtn) {
        customDDBtn.addEventListener('click', function() {
            this.classList.toggle('active');
        })
    }

    // function isParents(currentElm, parentSelector) {
    //     while(currentElm.parentNode != null && currentElm.parentNode != document.documentElement) {
    //         if(currentElm.classList.contains(parentSelector)) {
    //             return true;
    //             break;
    //         }
    //         currentElm = currentElm.parentNode;
    //     }
    //     return false; 
    //  }

});
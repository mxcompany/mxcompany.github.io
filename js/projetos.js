        function openModal(modalId, iframeSrc) {
            var modal = document.getElementById(modalId);
            var iframe = document.getElementById("iframe" + modalId.replace("myModal", ""));
            iframe.src = iframeSrc;
            modal.style.display = "block";
        }

        function closeModal(modalId) {
            var modal = document.getElementById(modalId);
            var iframe = document.getElementById("iframe" + modalId.replace("myModal", ""));
            modal.style.display = "none";
            iframe.src = "";
        }

        document.getElementById("openModal1").onclick = function() {
            openModal("myModal1", "https://duartefx.github.io/fundamentos_java/");
        }

        document.getElementById("openModal2").onclick = function() {
            openModal("myModal2", "https://gymratgi0.github.io/case-de-testes/"); 
        }

        document.getElementById("openModal3").onclick = function() {
            openModal("myModal3", "https://paol4zchs.github.io/Interclasses-Gamer-SENAI-Sorocaba/desktop.html");
        }

        document.getElementById("openModal4").onclick = function() {
            openModal("myModal4", "https://vitorh07.github.io/InterclasseSenai/indexDESKTOP.html"); 
        }

        var closeButtons = document.getElementsByClassName("close");
        for (var i = 0; i < closeButtons.length; i++) {
            closeButtons[i].onclick = function() {
                var modalId = this.getAttribute("data-modal");
                closeModal(modalId);
            }
        }

        window.onclick = function(event) {
            if (event.target.classList.contains("modal")) {
                closeModal(event.target.id);
            }
        }
//import {win, doc, log, al, addEv, que, queAll, gId} from "../general/var"

export const modal = () => {
    var modal = document.getElementById("modalC");
    var btn = document.getElementById("btnModal");
    var span = document.querySelector("#close");
    var body = document.getElementsByTagName("body");

    btn.onclick = function (e) {
        e.preventDefault();
        modal.style.display = "block";

        body.style.position = "absolute";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function () {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}
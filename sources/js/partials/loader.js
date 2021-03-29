import {win, doc, log, al, addEv, que, queAll, gId} from "../general/var.js";

export const openLoader = () => {
    const oLoader = doc.queAll(`.oLoader, a[href*="/"], a[href*="."]`);

    if( oLoader.length > 0 ){
        [...oLoader].map( el => {
            el.addEventListener('click', () => {
                doc.que('.loader').classList.remove('hide');
            });
        } );
    }
    
}
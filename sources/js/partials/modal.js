import {win, doc, log, al, addEv, que, queAll, gId} from "../general/var"

export const modal = () => {
    const modal = doc.queAll('.modal'),
        closeModal = e => {
            let el = e.target;
            if( e.target === e.currentTarget ){
                if( !el.classList.contains('modal') ){
                    e.preventDefault();
                }
                [...doc.queAll('.modal')].map( el => {
                    el.classList.add('hide');
                } );
            }
        },
        openModal = e => {
            let dataEl = e.currentTarget.dataset.modal;
            if( !e.currentTarget.classList.contains('modal') ){
                e.preventDefault();
                doc.que(`.modal[data-modal="${dataEl}"]`).classList.remove('hide');
            }
        };

    if( modal.length > 0 ){
        [...doc.queAll('.modal, .modal__close, .modal__btn--close')].map( el => {
            el.addEventListener('click', e => {
                closeModal(e);
            });
        } );

        [...doc.queAll('[data-modal]:not(.modal)')].map( el => {
            el.addEventListener('click', e => {
                openModal(e);
            });
        } );
    }
}
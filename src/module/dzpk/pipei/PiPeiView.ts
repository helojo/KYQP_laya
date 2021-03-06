import { PiPeiVM } from './PiPeiVM';
    export class PiPeiView extends ui.pipei.PiPeiViewUI{

        private onCancel(){
            (this.vm as PiPeiVM).cancelPiPei();
        }
        
        protected comInit(){
            this.btn_close.on(Laya.Event.CLICK,this,this.onCancel);
        }

        constructor(vm:PiPeiVM){
            super();
            this._vm = vm;

            this._view_type = ComView.WINDOW_NO_CLOSEAUTO;
        }
    }

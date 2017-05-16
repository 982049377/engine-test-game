class Role extends engine.DisplayObjectContainer {
      public _role: engine.Bitmap;
      private _State: State;
      private idlelist: string[] = [];
      private walklist: string[] = [];
      public constructor() {
            super();
            this._role = new engine.Bitmap()
      }
      public SetState(e: State) {
            if (this._State != e) {
                  this._State.onExit();
            }
            this._State = e;
            this._State.onEnter();
      }
      // setx(targetx: number) {
      //       if (this._role.img == null) return;
      //       this.x = targetx - this._role.img.bitmapData.width / 2;
      // }
      // sety(targety: number) {
      //       if (this._role.img == null) return;
      //       this.y = targety - this._role.img.bitmapData.height / 2;
      // }
      public call(idlelist: string[], walklist: string[]) {
            this.idlelist = idlelist;
            this.walklist = walklist;

            this._role.src = "Idle0.png";
            tool.anch(this._role);
            this._role.scaleX = 1.5;
            this._role.scaleY = 1.5;
            this.addChild(this._role);
            var idle: Idle = new Idle(this, this.idlelist);
            // console.log(this.idlelist.length)
            this._State = idle;
            this._State.onEnter();
      }

}
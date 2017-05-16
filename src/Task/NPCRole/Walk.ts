class Walk implements State {
      private Walklist: string[];
      private Walkcount = -1;
      private person: Role;
      private temp: () => void;
      public constructor(pperson: Role, walk: string[]) {
            this.person = pperson;
            this.Walklist = walk;
      }
      onEnter() {
            this.temp = this.PlayWalk;
            engine.startTick(this.temp);
      }

      onExit() {
            this.temp = this.PlayWalk;
            engine.stopTick(this.temp);
      }
      offset: number = 0;
      private PlayWalk=()=> {
            this.offset++;
            if (this.offset > 10) {
                  if (this.Walkcount >= this.Walklist.length - 1)
                        this.Walkcount = -1;
                  this.Walkcount++;
                  this.person._role.src = this.Walklist[this.Walkcount];
                  this.offset = 0;
            }
            return true;
      }
}
class Idle implements State {
    public constructor(pperson: Role, idle: string[]) {
        this.person = pperson;
        this.Idlelist = idle;
    }
    private person: Role;
    private Idlelist: string[];
    private count: number = -1;
    private temp: () => void;
    public onEnter() {
        this.temp = this.PlayIdle;
        engine.startTick(this.temp);
    }

    public onExit() {
        this.temp = this.PlayIdle;
        engine.stopTick(this.temp);
        //console.log("IdleExit");
    }
    offset: number = 0;
    private PlayIdle = () => {
        this.offset++;
        if (this.offset > 10) {
            if (this.count >= this.Idlelist.length - 1)
                this.count = -1;
            //var na=(i+10000).toString()+"_png";
            //console.log("Idle");
            this.count++;
            this.person._role.src = this.Idlelist[this.count];
            this.offset = 0;
        }
        return true;
    }
}
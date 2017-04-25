namespace QuickSearch
{
    export class Clock
    {
        private clock: JQuery = $("#clock");
        private separator: string = ":";



        public constructor()
        {
            this.initInterval();
        }



        public set Seperator(value: string)
        {
            this.separator = value;

            this.updateTime();
        }

        public set Color(value: string)
        {
            this.clock.css("color", value);

            this.updateTime();
        }



        private initInterval(): void
        {
            this.updateTime();
            setInterval(this.updateTime.bind(this), 10000);
        }
            
        private updateTime(): void
        {
            let date: Date = new Date();
            let hours: string = this.format(date.getHours());
            let minutes: string = this.format(date.getMinutes());

            this.clock.text(hours + this.separator + minutes);
        }

        private format(num: number): string
        {
            return ("0" + num.toString()).slice(-2);
        }
    }
}
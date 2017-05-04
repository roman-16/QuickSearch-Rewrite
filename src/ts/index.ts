/// <reference path="Clock/Clock.ts" />

namespace QuickSearch
{
    export class Index
    {
        public static main(): void
        {
            let clock = new Clock("main-clock");
            
            clock.initInterval();
        }
    }

    Index.main();
}
namespace QuickSearch.QuickSearchKey
{
    export class QuickSearches
    {
        private keys: Array<QuickSearchKeyStructure> = new Array<QuickSearchKeyStructure>();



        public constructor()
        {

        }



        /**
         * Add a new QuickSearch
         * @param key Key for QuickSearch
         * @param site Site to link too
         */
        public addQuickSearch(key: string, site: string): void
        {
            this.keys.push({ Key: key, Site: site });
        }

        /**
         * Tests if a text start with a quick key
         * @param text Text to check
         */
        // public startsWithKey(text: string): boolean
        // {
        //     if (this.getKeyObjectFromKey(text).Key === "")
        //         return false;

        //     return true;
        // }

        public existsKeyObject(key: string): boolean;
        public existsKeyObject(key: QuickSearchKeyStructure): boolean;
        public existsKeyObject(key: string | QuickSearchKeyStructure): boolean
        {
            if (typeof(key) === "string")
            {
                return this.getKeyObjectFromKey(key) !== { Key: "", Site: "" };
            }
            else
            {
                return key !== { Key: "", Site: "" };
            }
        }

        /**
         * Gets a key object from a key
         * @param text Key to get a key object from
         */
        public getKeyObjectFromKey(key: string): QuickSearchKeyStructure
        {
            let retKey: QuickSearchKeyStructure = { Key: "", Site: "" };

            this.keys.forEach(function(currentKey: QuickSearchKeyStructure)
            {
                if (key == currentKey.Key)
                {
                    retKey.Key = currentKey.Key;
                    retKey.Site = currentKey.Site;
                }
            }.bind(this));

            return retKey;
        }

        /**
         * Removes a key from a text
         * @param text Text to remove the key from
         */
        // public removeKey(text: string): string
        // {
        //     return text.replace(this.getKeyObjectFromKey(text).Key + " ", "");
        // }



        public get Keys(): QuickSearchKeyStructure[]
        {
            return this.keys;
        }
    }
}
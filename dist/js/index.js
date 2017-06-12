"use strict";
String.prototype.isEmpty = function isEmpty() {
    return (this.length === 0 || !this.trim());
};
String.prototype.format = function format(valuesParm) {
    var values = valuesParm;
    var formatted = this;
    if (values instanceof Array) {
        for (var i = 0; i < values.length; i++) {
            formatted = formatted.replaceAll("{" + i + "}", values[i]);
        }
    }
    else {
        formatted = formatted.replaceAll("{0}", values);
    }
    return formatted;
};
String.prototype.startsWith = function startsWith(value) {
    return this.lastIndexOf(value, 0) === 0;
};
String.prototype.startsWithAny = function startsWithAny(valuesParm) {
    var values = valuesParm;
    for (var i = 0; i < values.length; i++) {
        if (this.startsWith(values[i])) {
            return true;
        }
    }
    return false;
};
String.prototype.replaceAll = function replaceAll(searchValue, replaceValue) {
    var text = this;
    return text.split(searchValue).join(replaceValue);
};
String.prototype.upperFirstChar = function upperFirstChar() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
(function ($) {
    $.fn.clickOutside = function (callback) {
        $(document).mouseup(function (ev) {
            if (!this.is(ev.target) && this.has(ev.target).length === 0) {
                callback();
            }
        }.bind(this));
        return this;
    };
}(jQuery));
var QuickSearch;
(function (QuickSearch) {
    var Utilities;
    (function (Utilities) {
        var KeyCodes;
        (function (KeyCodes) {
            KeyCodes[KeyCodes["BACKSPACE"] = 8] = "BACKSPACE";
            KeyCodes[KeyCodes["TAB"] = 9] = "TAB";
            KeyCodes[KeyCodes["ENTER"] = 13] = "ENTER";
            KeyCodes[KeyCodes["SHIFT"] = 16] = "SHIFT";
            KeyCodes[KeyCodes["CTRL"] = 17] = "CTRL";
            KeyCodes[KeyCodes["ALT"] = 18] = "ALT";
            KeyCodes[KeyCodes["PAUSE_BREAK"] = 19] = "PAUSE_BREAK";
            KeyCodes[KeyCodes["CAPSLOCK"] = 20] = "CAPSLOCK";
            KeyCodes[KeyCodes["ESCAPE"] = 27] = "ESCAPE";
            KeyCodes[KeyCodes["PAGE_UP"] = 33] = "PAGE_UP";
            KeyCodes[KeyCodes["PAGE_DOWN"] = 34] = "PAGE_DOWN";
            KeyCodes[KeyCodes["END"] = 35] = "END";
            KeyCodes[KeyCodes["HOME"] = 36] = "HOME";
            KeyCodes[KeyCodes["LEFT_ARROW"] = 37] = "LEFT_ARROW";
            KeyCodes[KeyCodes["UP_ARROW"] = 38] = "UP_ARROW";
            KeyCodes[KeyCodes["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
            KeyCodes[KeyCodes["DOWN_ARROW"] = 40] = "DOWN_ARROW";
            KeyCodes[KeyCodes["INSERT"] = 45] = "INSERT";
            KeyCodes[KeyCodes["DELETE"] = 46] = "DELETE";
            KeyCodes[KeyCodes["KEY_0"] = 48] = "KEY_0";
            KeyCodes[KeyCodes["KEY_1"] = 49] = "KEY_1";
            KeyCodes[KeyCodes["KEY_2"] = 50] = "KEY_2";
            KeyCodes[KeyCodes["KEY_3"] = 51] = "KEY_3";
            KeyCodes[KeyCodes["KEY_4"] = 52] = "KEY_4";
            KeyCodes[KeyCodes["KEY_5"] = 53] = "KEY_5";
            KeyCodes[KeyCodes["KEY_6"] = 54] = "KEY_6";
            KeyCodes[KeyCodes["KEY_7"] = 55] = "KEY_7";
            KeyCodes[KeyCodes["KEY_8"] = 56] = "KEY_8";
            KeyCodes[KeyCodes["KEY_9"] = 57] = "KEY_9";
            KeyCodes[KeyCodes["KEY_A"] = 65] = "KEY_A";
            KeyCodes[KeyCodes["KEY_B"] = 66] = "KEY_B";
            KeyCodes[KeyCodes["KEY_C"] = 67] = "KEY_C";
            KeyCodes[KeyCodes["KEY_D"] = 68] = "KEY_D";
            KeyCodes[KeyCodes["KEY_E"] = 69] = "KEY_E";
            KeyCodes[KeyCodes["KEY_F"] = 70] = "KEY_F";
            KeyCodes[KeyCodes["KEY_G"] = 71] = "KEY_G";
            KeyCodes[KeyCodes["KEY_H"] = 72] = "KEY_H";
            KeyCodes[KeyCodes["KEY_I"] = 73] = "KEY_I";
            KeyCodes[KeyCodes["KEY_J"] = 74] = "KEY_J";
            KeyCodes[KeyCodes["KEY_K"] = 75] = "KEY_K";
            KeyCodes[KeyCodes["KEY_L"] = 76] = "KEY_L";
            KeyCodes[KeyCodes["KEY_M"] = 77] = "KEY_M";
            KeyCodes[KeyCodes["KEY_N"] = 78] = "KEY_N";
            KeyCodes[KeyCodes["KEY_O"] = 79] = "KEY_O";
            KeyCodes[KeyCodes["KEY_P"] = 80] = "KEY_P";
            KeyCodes[KeyCodes["KEY_Q"] = 81] = "KEY_Q";
            KeyCodes[KeyCodes["KEY_R"] = 82] = "KEY_R";
            KeyCodes[KeyCodes["KEY_S"] = 83] = "KEY_S";
            KeyCodes[KeyCodes["KEY_T"] = 84] = "KEY_T";
            KeyCodes[KeyCodes["KEY_U"] = 85] = "KEY_U";
            KeyCodes[KeyCodes["KEY_V"] = 86] = "KEY_V";
            KeyCodes[KeyCodes["KEY_W"] = 87] = "KEY_W";
            KeyCodes[KeyCodes["KEY_X"] = 88] = "KEY_X";
            KeyCodes[KeyCodes["KEY_Y"] = 89] = "KEY_Y";
            KeyCodes[KeyCodes["KEY_Z"] = 90] = "KEY_Z";
            KeyCodes[KeyCodes["LEFT_WINDOW_KEY"] = 91] = "LEFT_WINDOW_KEY";
            KeyCodes[KeyCodes["RIGHT_WINDOW_KEY"] = 92] = "RIGHT_WINDOW_KEY";
            KeyCodes[KeyCodes["SELECT_KEY"] = 93] = "SELECT_KEY";
            KeyCodes[KeyCodes["NUMPAD_0"] = 96] = "NUMPAD_0";
            KeyCodes[KeyCodes["NUMPAD_1"] = 97] = "NUMPAD_1";
            KeyCodes[KeyCodes["NUMPAD_2"] = 98] = "NUMPAD_2";
            KeyCodes[KeyCodes["NUMPAD_3"] = 99] = "NUMPAD_3";
            KeyCodes[KeyCodes["NUMPAD_4"] = 100] = "NUMPAD_4";
            KeyCodes[KeyCodes["NUMPAD_5"] = 101] = "NUMPAD_5";
            KeyCodes[KeyCodes["NUMPAD_6"] = 102] = "NUMPAD_6";
            KeyCodes[KeyCodes["NUMPAD_7"] = 103] = "NUMPAD_7";
            KeyCodes[KeyCodes["NUMPAD_8"] = 104] = "NUMPAD_8";
            KeyCodes[KeyCodes["NUMPAD_9"] = 105] = "NUMPAD_9";
            KeyCodes[KeyCodes["MULTIPLY"] = 106] = "MULTIPLY";
            KeyCodes[KeyCodes["ADD"] = 107] = "ADD";
            KeyCodes[KeyCodes["SUBTRACT"] = 109] = "SUBTRACT";
            KeyCodes[KeyCodes["DECIMAL_POINT"] = 110] = "DECIMAL_POINT";
            KeyCodes[KeyCodes["DIVIDE"] = 111] = "DIVIDE";
            KeyCodes[KeyCodes["F1"] = 112] = "F1";
            KeyCodes[KeyCodes["F2"] = 113] = "F2";
            KeyCodes[KeyCodes["F3"] = 114] = "F3";
            KeyCodes[KeyCodes["F4"] = 115] = "F4";
            KeyCodes[KeyCodes["F5"] = 116] = "F5";
            KeyCodes[KeyCodes["F6"] = 117] = "F6";
            KeyCodes[KeyCodes["F7"] = 118] = "F7";
            KeyCodes[KeyCodes["F8"] = 119] = "F8";
            KeyCodes[KeyCodes["F9"] = 120] = "F9";
            KeyCodes[KeyCodes["F10"] = 121] = "F10";
            KeyCodes[KeyCodes["F11"] = 122] = "F11";
            KeyCodes[KeyCodes["F12"] = 123] = "F12";
            KeyCodes[KeyCodes["NUM_LOCK"] = 144] = "NUM_LOCK";
            KeyCodes[KeyCodes["SCROLL_LOCK"] = 145] = "SCROLL_LOCK";
            KeyCodes[KeyCodes["SEMICOLON"] = 186] = "SEMICOLON";
            KeyCodes[KeyCodes["EQUAL_SIGN"] = 187] = "EQUAL_SIGN";
            KeyCodes[KeyCodes["COMMA"] = 188] = "COMMA";
            KeyCodes[KeyCodes["DASH"] = 189] = "DASH";
            KeyCodes[KeyCodes["PERIOD"] = 190] = "PERIOD";
            KeyCodes[KeyCodes["FORWARD_SLASH"] = 191] = "FORWARD_SLASH";
            KeyCodes[KeyCodes["GRAVE_ACCENT"] = 192] = "GRAVE_ACCENT";
            KeyCodes[KeyCodes["OPEN_BRACKET"] = 219] = "OPEN_BRACKET";
            KeyCodes[KeyCodes["BACK_SLASH"] = 220] = "BACK_SLASH";
            KeyCodes[KeyCodes["CLOSE_BRAKET"] = 221] = "CLOSE_BRAKET";
            KeyCodes[KeyCodes["SINGLE_QUOTE"] = 222] = "SINGLE_QUOTE";
        })(KeyCodes = Utilities.KeyCodes || (Utilities.KeyCodes = {}));
    })(Utilities = QuickSearch.Utilities || (QuickSearch.Utilities = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var Utilities;
    (function (Utilities) {
        var Validation = (function () {
            function Validation() {
            }
            Validation.isFQDN = function (url) {
                var regex = new RegExp(/^([-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?)$/gmi);
                return regex.test(url);
            };
            Validation.isIPAddress = function (ipAdress) {
                var regex = new RegExp(/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\b([/:][-a-zA-Z0-9@:%_\+.~#?&//=]*)?$/gmi);
                return regex.test(ipAdress);
            };
            Validation.isHTTPAddress = function (value) {
                return this.isFQDN(value) || this.isIPAddress(value) || value.trim().toLowerCase() === "localhost";
            };
            return Validation;
        }());
        Utilities.Validation = Validation;
    })(Utilities = QuickSearch.Utilities || (QuickSearch.Utilities = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var QuickSearchKey;
    (function (QuickSearchKey) {
        var QuickSearches = (function () {
            function QuickSearches() {
            }
            QuickSearches.prototype.addSearch = function (key, site) {
                this.keys.push({ key: key, site: site });
            };
            Object.defineProperty(QuickSearches.prototype, "Keys", {
                get: function () {
                    return this.keys;
                },
                enumerable: true,
                configurable: true
            });
            return QuickSearches;
        }());
        QuickSearchKey.QuickSearches = QuickSearches;
    })(QuickSearchKey = QuickSearch.QuickSearchKey || (QuickSearch.QuickSearchKey = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var Data;
    (function (Data) {
        var GoogleData = (function () {
            function GoogleData() {
            }
            GoogleData.getSearchSuggestions = function (value, callback) {
                var id = "i" + Math.random().toString(36).slice(2);
                var executionTime = $.now();
                GoogleData.getSearchSuggestions[id] = function (data) {
                    data.executionTime = executionTime;
                    callback(data);
                    delete GoogleData.getSearchSuggestions[id];
                    var script = document.getElementById("searchSuggestionsQuery" + id);
                    if (script !== null)
                        script.remove();
                };
                var script = document.createElement("script");
                script.src = "http://suggestqueries.google.com/complete/search?client=chrome&q=" + encodeURIComponent(value) + "&callback=QuickSearch.Data.GoogleData.getSearchSuggestions." + id;
                script.id = "searchSuggestionsQuery" + id;
                document.head.appendChild(script);
            };
            return GoogleData;
        }());
        Data.GoogleData = GoogleData;
    })(Data = QuickSearch.Data || (QuickSearch.Data = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var Config = (function () {
        function Config() {
            this.useSearchSuggestions = true;
            this.numberOfSearchSuggestions = 4;
            this.homepage = "https://start.duckduckgo.com/?q={0}";
            this.quickSearchPattern = "{0} ";
            this.clockSeperator = ":";
            this.shapeColor = "#3a5b83";
            this.quickSearches = new QuickSearch.QuickSearchKey.QuickSearches();
            this.quickSearches.addSearch("d", "https://start.duckduckgo.com/?q={0}");
            this.quickSearches.addSearch("s", "https://startpage.com/do/search?query={0}");
            this.quickSearches.addSearch("g", "https://encrypted.google.com/#q={0}");
            this.quickSearches.addSearch("y", "https://youtube.com/results?search_query={0}");
            this.quickSearches.addSearch("r", "https://reddit.com/search?q={0}");
            this.quickSearches.addSearch("sr", "https://reddit.com/r/{0}");
            this.quickSearches.addSearch("sx", "https://stackexchange.com/search?q={0}");
            this.quickSearches.addSearch("so", "https://stackoverflow.com/search?q={0}");
            this.quickSearches.addSearch("gh", "https://github.com/search?q={0}");
            this.quickSearches.addSearch("f", "https://www.facebook.com/public?query={0}");
            this.quickSearches.addSearch("dict", "http://www.dict.cc/?s={0}");
        }
        Config.prototype.parseJSON = function (json) {
            var parsedConfig = JSON.parse(json);
            this.useSearchSuggestions = parsedConfig.UseSearchSuggestions;
            this.numberOfSearchSuggestions = parsedConfig.NumberOfSearchSuggestions;
            this.homepage = parsedConfig.Homepage;
            this.quickSearchPattern = parsedConfig.QuickSearchPattern;
            this.clockSeperator = parsedConfig.ClockSeperator;
            this.shapeColor = parsedConfig.ShapeColor;
            this.quickSearches = parsedConfig.QuickSearches;
        };
        Object.defineProperty(Config.prototype, "UseSearchSuggestions", {
            get: function () {
                return this.useSearchSuggestions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "NumberOfSearchSuggestions", {
            get: function () {
                return this.numberOfSearchSuggestions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "Homepage", {
            get: function () {
                return this.homepage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "QuickSearchPattern", {
            get: function () {
                return this.quickSearchPattern;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "ClockSeperator", {
            get: function () {
                return this.clockSeperator;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "ShapeColor", {
            get: function () {
                return this.shapeColor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "QuickSearches", {
            get: function () {
                return this.quickSearches;
            },
            enumerable: true,
            configurable: true
        });
        return Config;
    }());
    QuickSearch.Config = Config;
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var ClockTime;
    (function (ClockTime) {
        var Clock = (function () {
            function Clock(clockID) {
                this.separator = ":";
                this.clock = $("#" + clockID);
            }
            Clock.prototype.initInterval = function (timeout) {
                if (timeout === void 0) { timeout = 10000; }
                this.updateTime();
                setInterval(this.updateTime.bind(this), timeout);
            };
            Clock.prototype.updateTime = function () {
                var date = new Date();
                var hours = this.format(date.getHours());
                var minutes = this.format(date.getMinutes());
                this.clock.text(hours + this.separator + minutes);
            };
            Clock.prototype.format = function (num) {
                return ("0" + num.toString()).slice(-2);
            };
            return Clock;
        }());
        ClockTime.Clock = Clock;
    })(ClockTime = QuickSearch.ClockTime || (QuickSearch.ClockTime = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var SearchInput;
    (function (SearchInput) {
        var Homepage = (function () {
            function Homepage(homepage) {
                this.homepage = homepage;
            }
            Homepage.prototype.openSite = function (value) {
                if (value === void 0) { value = ""; }
                if (QuickSearch.Utilities.Validation.isHTTPAddress(value)) {
                    if (!value.startsWith("http")) {
                        window.open("http://" + value, "_self");
                    }
                    else {
                        window.open(value, "_self");
                    }
                    return;
                }
                window.open(this.homepage.format(encodeURIComponent(value)), "_self");
            };
            return Homepage;
        }());
        SearchInput.Homepage = Homepage;
    })(SearchInput = QuickSearch.SearchInput || (QuickSearch.SearchInput = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var SearchInput;
    (function (SearchInput) {
        var SearchSuggestions = (function () {
            function SearchSuggestions(parentID) {
                this.backgroundColor = "#757575";
                this.backgroundColorFocus = "#3a5b83";
                this.fontColor = "#000000";
                this.fontColorFocus = "#FFFFFF";
                this.selectedSuggestion = null;
                this.maxResults = 4;
                this.searchSuggestionsDiv = $("#" + parentID);
                this.searchSuggestionsDiv.mouseout(this.resetSelectedSuggestion.bind(this));
                this.searchSuggestionsDiv.clickOutside(this.hideSuggestions.bind(this));
            }
            SearchSuggestions.prototype.showSuggestions = function (text) {
                this.inputValue = text;
                this.resetSelectedSuggestion();
                if (!text.isEmpty()) {
                    QuickSearch.Data.GoogleData.getSearchSuggestions(text, function (data) {
                        if (this.currentSearchSuggestionsData === undefined) {
                            this.currentSearchSuggestionsData = data;
                        }
                        if (this.currentSearchSuggestionsData.executionTime <= data.executionTime && !this.inputValue.isEmpty()) {
                            this.currentSearchSuggestionsData = data;
                            this.createSearchSuggestions(data[1]);
                        }
                    }.bind(this));
                }
                else {
                    this.hideSuggestions();
                }
            };
            SearchSuggestions.prototype.hideSuggestions = function () {
                this.searchSuggestionsDiv.html("");
            };
            SearchSuggestions.prototype.selectDownwards = function () {
                var searchSuggestionButtons = this.searchSuggestionsDiv.children();
                if (searchSuggestionButtons.length !== 0) {
                    if (this.selectedSuggestion === null) {
                        this.selectedSuggestion = 0;
                    }
                    else {
                        var searchSuggestionButton_1 = searchSuggestionButtons[this.selectedSuggestion];
                        searchSuggestionButton_1.style.background = this.backgroundColor;
                        searchSuggestionButton_1.style.color = this.fontColor;
                        this.selectedSuggestion++;
                        if (this.selectedSuggestion > searchSuggestionButtons.length - 1) {
                            this.selectedSuggestion = null;
                            return this.inputValue;
                        }
                    }
                    var searchSuggestionButton = searchSuggestionButtons[this.selectedSuggestion];
                    searchSuggestionButton.style.background = this.backgroundColorFocus;
                    searchSuggestionButton.style.color = this.fontColorFocus;
                    return searchSuggestionButton.value;
                }
                else if (this.inputValue === undefined) {
                    return "";
                }
                else {
                    return this.inputValue;
                }
            };
            SearchSuggestions.prototype.selectUpwards = function () {
                var searchSuggestionButtons = this.searchSuggestionsDiv.children();
                if (searchSuggestionButtons.length != 0) {
                    if (this.selectedSuggestion === null) {
                        this.selectedSuggestion = searchSuggestionButtons.length - 1;
                    }
                    else {
                        var searchSuggestionButton_2 = searchSuggestionButtons[this.selectedSuggestion];
                        searchSuggestionButton_2.style.background = this.backgroundColor;
                        searchSuggestionButton_2.style.color = this.fontColor;
                        this.selectedSuggestion--;
                        if (this.selectedSuggestion < 0) {
                            this.selectedSuggestion = null;
                            return this.inputValue;
                        }
                    }
                    var searchSuggestionButton = searchSuggestionButtons[this.selectedSuggestion];
                    searchSuggestionButton.style.background = this.backgroundColorFocus;
                    searchSuggestionButton.style.color = this.fontColorFocus;
                    return searchSuggestionButton.value;
                }
                else if (this.inputValue === null) {
                    return "";
                }
                else {
                    return this.inputValue;
                }
            };
            Object.defineProperty(SearchSuggestions.prototype, "onclick", {
                set: function (callback) {
                    this.onClickCallback = callback;
                },
                enumerable: true,
                configurable: true
            });
            SearchSuggestions.prototype.selectMouseOver = function (ev) {
                var searchSuggestionButtons = this.searchSuggestionsDiv.children();
                if (this.selectedSuggestion !== null) {
                    var searchSuggestionButton = searchSuggestionButtons[this.selectedSuggestion];
                    searchSuggestionButton.style.background = this.backgroundColor;
                    searchSuggestionButton.style.color = this.fontColor;
                }
                for (var i = 0; i < searchSuggestionButtons.length; i++) {
                    var searchSuggestionButton = searchSuggestionButtons[i];
                    if (searchSuggestionButton.value === ev.target.value) {
                        this.selectedSuggestion = i;
                    }
                }
                if (this.selectedSuggestion !== null) {
                    var searchSuggestionButton = searchSuggestionButtons[this.selectedSuggestion];
                    searchSuggestionButton.style.background = this.backgroundColorFocus;
                    searchSuggestionButton.style.color = this.fontColorFocus;
                    return searchSuggestionButton.value;
                }
                return "";
            };
            SearchSuggestions.prototype.resetSelectedSuggestion = function () {
                if (this.selectedSuggestion !== null) {
                    var searchSuggestionButtons = this.searchSuggestionsDiv.children();
                    if (searchSuggestionButtons !== undefined && this.selectedSuggestion <= searchSuggestionButtons.length - 1) {
                        searchSuggestionButtons.css("background-color", this.backgroundColor);
                        searchSuggestionButtons.css("color", this.fontColor);
                    }
                    this.selectedSuggestion = null;
                }
            };
            SearchSuggestions.prototype.createSearchSuggestions = function (data) {
                if (data !== null) {
                    var results = data;
                    this.searchSuggestionsDiv.html("");
                    if (results !== null) {
                        if (this.maxResults > results.length) {
                            this.maxResults = results.length;
                        }
                        for (var i = 0; i < this.maxResults; i++) {
                            this.searchSuggestionsDiv.append(this.createSearchSuggestion(results[i]));
                        }
                    }
                    else {
                        this.searchSuggestionsDiv.html("");
                    }
                }
                else {
                    this.searchSuggestionsDiv.html("");
                }
            };
            SearchSuggestions.prototype.createSearchSuggestion = function (value) {
                var searchSuggestionButton = document.createElement("input");
                searchSuggestionButton.type = "button";
                searchSuggestionButton.value = value;
                searchSuggestionButton.style.backgroundColor = this.backgroundColor;
                searchSuggestionButton.style.color = this.fontColor;
                searchSuggestionButton.onmouseover = this.selectMouseOver.bind(this);
                searchSuggestionButton.onclick = this.onClickCallback;
                return searchSuggestionButton;
            };
            return SearchSuggestions;
        }());
        SearchInput.SearchSuggestions = SearchSuggestions;
    })(SearchInput = QuickSearch.SearchInput || (QuickSearch.SearchInput = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var SearchInput;
    (function (SearchInput) {
        var Search = (function () {
            function Search(searchID) {
                this.searchSuggestions = new SearchInput.SearchSuggestions("main-searchSuggestions");
                this.homepage = new SearchInput.Homepage("https://start.duckduckgo.com/?q={0}");
                this.keyCodes = QuickSearch.Utilities.KeyCodes;
                this.searchInput = $("#" + searchID);
                this.searchInput.keyup(this.keyPressed.bind(this));
                this.searchSuggestions.onclick = this.searchSuggestionClicked.bind(this);
            }
            Search.prototype.keyPressed = function (ev) {
                var originalEvent = ev.originalEvent;
                var value = this.searchInput.val();
                switch (originalEvent.keyCode) {
                    case this.keyCodes.ENTER:
                        this.homepage.openSite(value);
                        break;
                    case this.keyCodes.PAGE_UP:
                    case this.keyCodes.UP_ARROW:
                        value = this.searchSuggestions.selectUpwards();
                        break;
                    case this.keyCodes.PAGE_DOWN:
                    case this.keyCodes.DOWN_ARROW:
                        value = this.searchSuggestions.selectDownwards();
                        break;
                    case this.keyCodes.ESCAPE:
                        this.searchSuggestions.hideSuggestions();
                        break;
                    default:
                        this.searchSuggestions.showSuggestions(value);
                        break;
                }
                this.searchInput.focus();
                this.searchInput.val(value);
            };
            Search.prototype.searchSuggestionClicked = function (ev) {
                this.searchInput.val(ev.target.value);
                this.searchInput.focus();
                this.searchSuggestions.showSuggestions(this.searchInput.val());
            };
            return Search;
        }());
        SearchInput.Search = Search;
    })(SearchInput = QuickSearch.SearchInput || (QuickSearch.SearchInput = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var Main = (function () {
        function Main() {
        }
        Main.main = function () {
            var clock = new QuickSearch.ClockTime.Clock("main-clock");
            clock.initInterval();
            var search = new QuickSearch.SearchInput.Search("main-searchInput");
        };
        return Main;
    }());
    QuickSearch.Main = Main;
})(QuickSearch || (QuickSearch = {}));
QuickSearch.Main.main();

//# sourceMappingURL=index.js.map

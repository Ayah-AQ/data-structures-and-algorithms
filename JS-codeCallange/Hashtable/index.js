class Hashtable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        const asciiCodeSum = key.split("").reduce((acc, char) => {
            return acc + char.charCodeAt();
        }, 0);
        const multiPrime = asciiCodeSum * 599;
        const theIndex = multiPrime % this.size;
        return theIndex;
    }

    set(key, value) {
        const index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        for (const entry of this.table[index]) {
            if (entry.hasOwnProperty(key)) {
                entry[key] = value;
                return;
            }
        }

        this.table[index].push({ [key]: value });
    }

    get(key) {
        const index = this.hash(key);

        if (!this.table[index]) {
            return undefined;
        }

        for (const entry of this.table[index]) {
            if (entry.hasOwnProperty(key)) {
                return entry[key];
            }
        }

        return undefined;
    }

    has(key) {
        const index = this.hash(key);

        if (!this.table[index]) {
            return false;
        }

        for (const entry of this.table[index]) {
            if (entry.hasOwnProperty(key)) {
                return true;
            }
        }

        return false;
    }

    keys() {
        const allKeys = [];
        for (const bucket of this.table) {
            if (bucket) {
                for (const entry of bucket) {
                    const key = Object.keys(entry)[0];
                    allKeys.push(key);
                }
            }
        }
        return allKeys;
    }

    hashIndex(key) {
        return this.hash(key);
    }
}

module.exports = Hashtable;
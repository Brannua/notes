export type Callback<T, U> = (key: T, val: U) => void;

export class Dictionary<K, V> {

    private keys: K[] = [];//保存键名的数组,键名类型统一(使用泛型)
    private vals: V[] = [];//保存值名的数组,值名类型统一(使用泛型)

    set(key: K, val: V) {
        const index = this.keys.indexOf(key);
        if (index < 0) {
            this.keys.push(key);
            this.vals.push(val);
        } else {
            this.vals[index] = val;
        }
    }

    delete(key: K) {
        const i = this.keys.indexOf(key);
        if (i === -1) {
            return;
        } else {
            this.keys.splice(i, 1);
            this.vals.splice(i, 1);
        }
    }

    has(key: K) {
        return this.keys.includes(key);
    }

    forEach(callback: Callback<K, V>) {
        this.keys.forEach((k, i) => {
            const v = this.vals[i];
            callback(k, v);
        });
    }

    // 使用访问器属性返回私有属性
    get size(): number {
        return this.keys.length;
    }

}
// src/counter.js
export function createCounter(initialValue = 0) {
    let count = initialValue
    const listeners = new Set()

    function notify() {
        listeners.forEach(fn => fn(count))
    }

    return {
        increment() {
            count++
            notify()
        },
        decrement() {
            count--
            notify()
        },
        getCount() {
            return count
        },
        subscribe(fn) {
            listeners.add(fn)
            fn(count)
            return () => listeners.delete(fn)
        },
    }
}

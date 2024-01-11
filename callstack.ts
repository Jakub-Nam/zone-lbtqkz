function c() {
    // capturing stack trace
    try {
        new Function('throw new Error()')();
    } catch (e) {
        console.log(e.stack);
    }
}

function b() { c() }
export function a() { b() }


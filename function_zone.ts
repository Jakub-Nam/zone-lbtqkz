function c() {
    console.log(Zone.current.name);  // <root>
}
function b() {
    console.log(Zone.current.name);  // <root>
    c();
}
export function a() {
    console.log(Zone.current.name);  // <root>
    b();
}

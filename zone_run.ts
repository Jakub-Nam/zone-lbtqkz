export const zoneAC = Zone.current.fork({name: 'AC'});
const zoneB = Zone.current.fork({name: 'B'});

function c() {
    console.log(Zone.current.name);  // AC
}
function b() {
    console.log(Zone.current.name);  // B
    zoneAC.run(c);
}
export function a() {
    console.log(Zone.current.name);  // AC
    zoneB.run(b);
}

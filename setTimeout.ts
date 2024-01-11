const zoneBC = Zone.current.fork({name: 'BC'});

function c() {
    console.log(Zone.current.name);  // BC
}

function b() {
    console.log(Zone.current.name);  // BC
    setTimeout(c, 2000);
}

export function a() {
    console.log(Zone.current.name);  // <root>
    zoneBC.run(b);
}
/**
 * Scalar property
 */
const zoneBC = Zone.current.fork({
    name: 'BC',
    properties: {
        data: 'initial'
    }
});

function a() {
    console.log(Zone.current.get('data')); // 'initial'
}

function b() {
    console.log(Zone.current.get('data')); // 'initial'
    setTimeout(a, 2000);
}

zoneBC.run(b);

/**
 * Object property
 */
const zoneBCObjectProperty = Zone.current.fork({
    name: 'BC',
    properties: {
        data: {
            value: 'initial'
        }
    }
});

function aObjectProperty() {
    console.log(Zone.current.get('data').value); // 'updated'
}

function bObjectProperty() {
    console.log(Zone.current.get('data').value); // 'initial'
    Zone.current.get('data').value = 'updated';
    setTimeout(a, 2000);
}

zoneBCObjectProperty.run(bObjectProperty);

/**
 * Extend property from parent zone.
 */
const parentZone = Zone.current.fork({
    name: 'parent',
    properties: { data: 'data from parent' }
});

const child = parentZone.fork({name: 'child'});

child.run(() => {
    console.log(Zone.current.name); // 'child'
    console.log(Zone.current.get('data')); // 'data from parent'
});
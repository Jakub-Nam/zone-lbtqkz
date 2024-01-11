const zOnInvoke = Zone.current.fork({
    name: 'z',
    onInvoke(delegate, current, target, callback, ...args) {
        console.log(`entering zone '${target.name}'`);
        return delegate.invoke(target, callback, ...args);
    }
});

function bzOnInvoke() {}

zOnInvoke.run(bzOnInvoke);
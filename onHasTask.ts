const z = Zone.current.fork({
    name: 'z',
    onHasTask(delegate, current, target, hasTaskState) {
        console.log(hasTaskState.change);          // "macroTask"
        console.log(hasTaskState.macroTask);       // true
        console.log(JSON.stringify(hasTaskState));
    }
});

function aonHasTask() {}

function bonHasTask() {
    // synchronously triggers `onHasTask` event with
    // change === "macroTask" since `setTimeout` is a macrotask
    setTimeout(aonHasTask, 4000);
}

z.run(bonHasTask);
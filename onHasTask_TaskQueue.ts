let timer;

const z_TaskQueue = Zone.current.fork({
    name: 'z',
    onHasTask(delegate, current, target, hasTaskState) {
        console.log(Date.now() - timer);
        console.log(hasTaskState.change);
        console.log(hasTaskState.macroTask);
    }
});

function a1_TaskQueue() {}
function a2_TaskQueue() {}

function b_TaskQueue() {
    timer = Date.now();
    setTimeout(a1_TaskQueue, 2000);
    setTimeout(a2_TaskQueue, 4000);
}

z_TaskQueue.run(b_TaskQueue);
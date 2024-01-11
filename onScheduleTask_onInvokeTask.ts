let timerScheduleInvoke;

const zScheduleInvoke = Zone.current.fork({
    name: 'z',
    onScheduleTask(delegate, currentZone, targetZone, task) {
      const result = delegate.scheduleTask(targetZone, task);
      const name = task.callback.name;
      console.log(
          Date.now() - timerScheduleInvoke, 
         `task with callback '${name}' is added to the task queue`
      );
      return result;
    },
    onInvokeTask(delegate, currentZone, targetZone, task, ...args) {
      const result = delegate.invokeTask(targetZone, task, ...args);
      const name = task.callback.name;
      console.log(
        Date.now() - timerScheduleInvoke, 
       `task with callback '${name}' is removed from the task queue`
     );
     return result;
    }
});

function a1() {}
function a2() {}

function bScheduleInvoke() {
    timerScheduleInvoke = Date.now();
    setTimeout(a1, 2000);
    setTimeout(a2, 4000);
}

zScheduleInvoke.run(bScheduleInvoke);
What is happening behind the scenes?

- Node.js uses only one single javaScript thread. So how does it handle multiple requests?
- This is a question about security and performance. Both are taken care of node.js.
- Example: a code accesses the fileSystem (fs)
- The event loop gets started automatically when node.js starts.
- The event loop is responsible for handling callbacks. So it handles all the requests that come along.
- On the other hand, the event loop does not handle the file handling operation.
- The event loop handles only callbacks and hence, fast operations.
- Instead, all the long taking operations are handled by the Worker Pool.
- It is detached from the js we build as developers and instead it runs on different threads, not the js thread.
- The one connection that the Worker has is that when it is done, it will trigger the callback for the read file operation.
- Since the event loop is responsible for the events and callbacks, the read file callback will be assigned to the event loop so that js can execute it.

- The event loop is started by node.js.
- TIMERS: At the beginning of each iteration, it checks on Timers that might exist (timeout and intervals).
- PENDING CALLBACKS: Executes I/O (input output) callbacks so operations that are related to file handling, network operations and anything else that takes a long time to execute.
- If this phase takes too long, node.js might postpone these callbacks for the next iteration in order to execute them.
- POLL: After working on the I/O callbacks, it will enter a Poll phase. This is the phase where node.js will get new I/O events and try to execute their callbacks as soon as possible.
- If the execution is not possible, it will be defered and registered as a pending callback.
- Also the Poll will check if there are any new timer callbacks that need to be executed. If so, it will try to jump to the Timer phase (intervals, timeouts) and try to execute them right away.
- CHECK: After these processes, it will move to the Check phase, where it wil execute setImmediate() callbacks.
- setImmediate() executes immediately after any callbacks happen. It happensa after the open callbacks that were due to be handled in the current iteration are finished.
- CLOSE CALLBACKS: Executes all close event callbacks.
- If nodejs does not have any more events to handle, it can close executing (process.exit)
- node has a counter that registers the callbacks (refs). Every new event listener that is registered, it reduces the counter by 1 for every event listener that it does not need anymore

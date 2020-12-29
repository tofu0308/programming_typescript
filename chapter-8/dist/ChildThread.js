"use strict";
function handle(data) {
    switch (data.command) {
        case 'determinant': return determinant(...data.args);
        case 'dot-product': return dotProduct(...data.args);
        case 'invert': return invert(...data.args);
    }
}
process.on('message', data => process.send(handle(data)));
//# sourceMappingURL=ChildThread.js.map
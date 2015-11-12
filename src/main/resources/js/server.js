var Application = require('./../app/index.jsx');

export default function (path) {
    var bootstrap = {
        path: path
    };
    return Application.start(bootstrap);
};
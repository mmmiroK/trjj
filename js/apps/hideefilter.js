app.filter('hidee', function () {
    return function (data) {
        return data.replace(/(\w{3})(\w*)(\w{4})/, "$1****$3")
    }
});
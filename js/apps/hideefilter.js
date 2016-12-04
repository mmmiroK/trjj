/**
 * Created by miroK on 2016/10/6.
 */
app.filter('hidee', function () {
    return function (data) {
        return data.replace(/(\w{3})(\w*)(\w{4})/, "$1****$3")
    }
});
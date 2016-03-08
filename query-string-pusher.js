var QueryString = (function(window) {
    function changeQuery(string) {
        var currentQuery = window.location.search

        var indexOfQuery = currentQuery.indexOf(string.split('=')[0])
        if (indexOfQuery != -1) {
            currentQuery = currentQuery.split('&')
            currentQuery = currentQuery.filter(function(item) {
                return item.indexOf(string.split('=')[0]) == -1
            }).join('')
        }
        currentQuery += '&' + string
        window.location.search = currentQuery
    }

    function push(localQuery) {
        if (typeof localQuery == 'string') {
            changeQuery(localQuery)
        } else if (typeof localQuery == 'object') {
            var holdingCell = []
            for (var prop in localQuery) {
                holdingCell.push(prop + '=' + localQuery[prop])
            }
            changeQuery(holdingCell.join('&'))
        }
    }

    return {
        push: push
    }
})(window)

module.exports = QueryString

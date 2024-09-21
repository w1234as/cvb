$(document).ready(function() {
    $searchButtonclick(function() {
        var searchTerm = $searchInputval(); // 获取搜索框中的文本
        if (searchTerm) {
            $.ajax({
                url:https://api.example.com/search // 替换为实际的API URL
                data: { query: searchTerm },
                success: function(data) {
                    $searchResultshtml(data); // 将搜索结果显示在页面上
                },
                error: function(xhr, status, error) {
                    console.logError error.message);
                }
            });
        }
    });
});

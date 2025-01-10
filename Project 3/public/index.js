$(".create-post-btn").on("click", () => {
    if (checkOpenTab()) {
        $(".create-post").removeClass("transparent");
        $(".black-background").removeClass("transparent")
    }
});

$(".close-post-btn").on("click", () => {
    $(".create-post").addClass("transparent");
    $(".black-background").addClass("transparent")
});

$(".view-blog-btn").on("click", function() {
    if (checkOpenTab()) {
        $(".view-post").removeClass("transparent");
        $(".black-background").removeClass("transparent")
        
        var title = $(this).parent().parent().children("div").eq(0).children("h2")[0].textContent;
        var body = $(this).parent().parent().children("div").eq(0).children("p")[0].textContent;

        var viewPostDiv = $(".view-post");
        viewPostDiv.children("div").children("h2").text(title);
        viewPostDiv.children("div").children("p").text(body);

        $(".change-value").val($(this).parent().parent().children("div").eq(0).children("p")[1].textContent);
    }
});

$(".view-post-close").on("click", function() {
    $(".view-post").addClass("transparent");
    $(".black-background").addClass("transparent")
});

$(".view-post-edit").on("click", function() {
    if (checkOpenTab()) {
        $(".edit-blog").removeClass("transparent");
        $(".black-background").removeClass("transparent")
        $(".change-value").val($(this).parent().parent().children("div").eq(0).children("p")[1].textContent);
    }
});

$(".view-post-edit-close").on("click", function() {
    $(".edit-blog").addClass("transparent");
    $(".black-background").addClass("transparent")
});

function checkOpenTab() {
    var createPost = $(".create-post").hasClass("transparent");
    var viewPost = $(".view-post").hasClass("transparent");
    var editPost = $(".edit-blog").hasClass("transparent");

    if (createPost && viewPost && editPost) {
        return true;
    } else {
        return false;
    }
}
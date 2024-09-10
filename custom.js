// 霸都丶傲天 2019.10.10
$(function () {
    let dom = document.createElement("span");
    let delay = 3000;
    let fadeDuration = 2000;
    config.texts.forEach(function (item) {
        let p = document.createElement("p");
        p.innerHTML = item;
        p.style.display = 'none';
        if (config.imgs && config.imgs[item]) {
            let img = document.createElement("img");
            img.src = config.imgs[item];
            img.setAttribute("class", 'text-img');
            p.appendChild(img);
        }
        dom.appendChild(p);
        setTimeout(function () {
            $(p).fadeIn(fadeDuration); // Dùng fadeIn để hiển thị từ từ
        }, delay * (index + 1));
    });
    $("#texts-container").append(dom.innerHTML);
});

$(function () {
    for (let k in config.desc) {
        let dom = $("#" + k);
        if (dom.length > 0 && config.desc[k]) {
            dom.html(config.desc[k]);
        }
    }
});

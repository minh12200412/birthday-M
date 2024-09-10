// 霸都丶傲天 2019.10.10
$(function () {
    let dom = document.createElement("span");
    let delay = 2000;
    config.texts.forEach(function (item, index) {
        let p = document.createElement("p");
        p.innerHTML = item;
        if (config.imgs && config.imgs[item]) {
            let img = document.createElement("img");
            img.src = config.imgs[item];
            img.setAttribute("class", 'text-img');
            p.appendChild(img);
        }
       // setTimeout(function() {
            dom.appendChild(p);
        // }, index * delay);
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

// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Hôm nay ngày 10/9/2024",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Ngày sinh nhật của bạn Long(chú bé rồng)",  // 同上...
        "Chúc bạn tôi có thật nhiều sức khoẻ",
        "Thật nhiều niềm vui",
        "Thật nhiều may mắn",
        "Thật nhiều tiền",
        "Thật nhiều điều tốt lành trên thế giới này sẽ ùa vậy lấy bạn",
        "Sớm kiếm được một bạn người yêu để nương tựa, san sẻ những lúc vui buồn, nhớ yêu bạn nào trong trường thôi nhé!",
        "Tương lai còn dài, hãy luôn cố gắng tiến về phía trước để thực hiện những hoài bão, ước mơ, mong muốn của bản thân nhé!",
        "Đừng bao giờ bỏ cuộc vì bất kì điều gì. Trying",
        "Sinh nhật vui vẻ nhé! Friend Minh Send",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Long": "./imgs/long.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Nhấn vào đây đi nè",
        play: "Nhân tiếp đi nè",
        bannar_coming: "Nhân tiếp đi Long",
        balloons_flying: "Nhân tiếp nữa đi...",
        cake_fadein: "Tiếp đi tiếp đi",
        light_candle: "Bất ngờ chưa, lại ấn tiếp đi",
        wish_message: "Thổi nến đi rồi ấn tiếp đi đi ...",
        story: "Gửi bạn tôi đôi lời, nhấn để đọc",
    }
};

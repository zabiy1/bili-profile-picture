let face = $('<input style="display:none" id="file" type="file"/>').click().change(() => {
    let formData = new FormData();
    formData.append("dopost", "save");
    formData.append("DisplayRank", "10000");
    formData.append('face', face[0].files[0]);
    $.ajax({
        url: 'https://api.bilibili.com',   //本行用作示例，请您填入自己 的接口
        type: 'POST',
        cache: false,
        data: formData,
        processData: false,
        contentType: false
    }).done(function (res) {
        console.log(res);
    })
});

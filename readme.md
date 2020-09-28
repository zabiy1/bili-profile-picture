<h1>#Bilibili动态头像的上传以及预览（思路）</h1>
------------------------------------------

*B站官方的动态头像上传在几年前就已被关闭，本文不会提供具体接口，仅提供思路。*

动态头像效果的演示地址：[https://t.bilibili.com/test][1]

请合理使用，您的个人行为所产生的后果本人不负任何责任，请悉知。

如果需要联络本人请通过[邮箱联系][2]或[B站联系][3]

上传的要求为以下：

1.图片要使用.apng，且小于B站的2MB上传限制；

2.横款比尽量接近1:1，否则图像显示会很别扭；

3.上传后可能要等几分钟才会生效，无需着急再次上传；


上传思路：

图像为APNG，大小小于2MB，通过调用接口上传，具体可以表现为通过console等多种方式实现上传。

可能要用到的工具：[APNG转换工具（支持win与mac）][5] 提取码：*awsl*

console实现代码（示例）：

    let face = $('<input style="display:none" id="file" type="file"/>').click().change(() => {
        let formData = new FormData();
        formData.append("dopost", "save");
        formData.append("DisplayRank", "10000");
        formData.append('face', face[0].files[0]);
        $.ajax({
            url: 'https://api.bilibili.com',   //本行用作示例，请您填入自己的接口,如果在该项遇到问题，请通过下方给出的联系方式联系本人
            type: 'POST
            cache: false,
            data: formData,
            processData: false,
            contentType: false
        }).done(function (res) {
            console.log(res);
        })
    });



如果遇到问题欢迎到[我的博客][4]留言

  [1]: https://space.bilibili.com/2031
  [2]: mailto:i@awsl.tv
  [3]: https://space.bilibili.com/64719640
  [4]: https://awsl.tv
  [5]: https://pan.baidu.com/s/1Q1E5QycTOXC4hxFSfc2fxg

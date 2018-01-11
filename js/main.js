/**
 * Created by keyang on 2018/1/8.
 */

//数据赋值
function appendData(data,modal) {
    data.forEach(function(e,i) {
        insertData(e,e.sign,modal,'.modal' + e.sign);
    })
}

//插入数据
function insertData(data,sign,modal,target) {
    var selector,bool;
    bool = modal && Number(document.querySelector(target).length) === 0;
    if (bool) {
        var example = document.querySelector('.modal_' + sign + '').cloneNode(true);
        for (var item in data) {
            selector =  example.querySelector('[data-name=' + item + ']' + ' ' + sign);
            appendToSel(selector,data[item]);
        }
        document.querySelector(target).appendChild(example);
    } else {
        for (var item in data) {
            selector = document.querySelector('[data-name=' + item + ']' + ' ' + sign);
            appendToSel(selector, data[item]);
        }
    }
}

//根据元素种类赋值
function appendToSel(selector,data) {
    var text;
    if (selector.tagName.trim() === 'INPUT') {
        selector.value = data.toString().trim();
    } else {
        text = document.createTextNode(data.toString().trim());
        selector.appendChild(text);
    }
}

//获取URL参数
function getUrlData(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null) return unescape(r[2]);
    return null;
}

//mui.ajax

//上拉刷新，下拉加载

//判断UserAgent
function textUserAgent() {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        return 'ios';
    } else if (/(Android)/i.test(navigator.userAgent)) {
        return 'adr';
    } else {
        return 'pc';
    }
}
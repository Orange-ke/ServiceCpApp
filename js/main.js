/**
 * Created by keyang on 2018/1/8.
 */

//数据赋值
function appendData(data,modal,sign) {
    if (Array.isArray(data)) {
        data.forEach(function(e,i) {
            insertData(e,sign,modal,'modal_' + sign);
        })
    } else {
        insertData(data,sign,modal);
    }
}

//插入数据
function insertData(data,sign,modal,target) {
    var selector,bool;
    bool = modal;
    if (bool) {
        var example = document.querySelector("." + target).cloneNode(true);
        for (var item in data) {
            selector =  example.querySelector("[data-name = '" + item + "']");
            appendToSel(selector,data[item]);
        }
        example.classList.remove(target);
        example.removeAttribute("hidden");
        document.querySelector("." + sign).appendChild(example);
    } else {
        for (var item in data) {
            selector = document.querySelector("." + sign + " " + "[data-name = '" + item + "']");
            appendToSel(selector, data[item]);
        }
    }
}

//根据元素种类赋值
function appendToSel(selector,data) {
    if (selector) {
        if (selector.getAttribute("data-format")) {
            formatIt(selector,data,selector.getAttribute("data-format"));
        } else {
            if (selector.tagName.trim() === 'INPUT') {
                selector.value = data.toString().trim();
            } else {
                var text = document.createTextNode(data.toString().trim());
                selector.appendChild(text);
            }
        }
    }
}

//格式选择
function formatIt(selector,data,sign) {
    switch (sign) {
        case "money":
            if (selector.tagName.trim() === 'INPUT') {
                selector.value = (Number(data.toString().trim())/10000).toFixed(2);
            } else {
                var text = document.createTextNode((Number(data.toString().trim())/10000).toFixed(2));
                selector.appendChild(text);
            }
            break;
        case "image":
            selector.setAttribute("src",data);
            break;
    }
}

//hasClass
function hasClass(selector,className) {
    var bool = false;
    for (var i = 0;i < selector.classList.length;i++) {
        if (selector.classList[i].toString() === className) {
            bool = true;
            break;
        }
    }
    return bool;
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

//title转化
function titileConvert(type) {
    switch (type) {
        case 'up':
            return '好评';
            break;
        case 'middle':
            return '中评';
            break;
        case 'down':
            return '差评';
            break;
    }
}

function sorts(Arr,Id) {
    Arr.sort(function(a,b) {
        if (a.Id && b.Id) {
            return a[Id] - b[Id];
        }
    });
    return Arr;
}
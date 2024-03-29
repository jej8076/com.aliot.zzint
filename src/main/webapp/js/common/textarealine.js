const TextareaLine = {
    eventList: {},
    updateLineNumber: function(e, t) {
        let n = e.value.split("\n").length - t.children.length;
        if (n > 0) {
            const e = document.createDocumentFragment();
            for (; n > 0;) {
                const t = document.createElement("span");
                t.className = "textarea-line", e.appendChild(t), n--
            }
            t.appendChild(e)
        }
        for (; n < 0;) t.removeChild(t.lastChild), n++
    },
    appendLineNumber: function(e) {
        const t = document.getElementById(e);
        if (null == t){
            return console.warn("Couldn't find textarea of id '" + e + "'");
        }

        if (-1 != t.className.indexOf("textarea-active")){
            return console.warn("Textarea of id '" + e + "' is already numbered");
        }

        t.classList.add("textarea-active"), t.style = {};
        const n = document.createElement("div");
        n.className = "textarea-wrapper", t.parentNode.insertBefore(n, t), TextareaLine.updateLineNumber(t, n), TextareaLine.eventList[e] = [];
        const a = ["propertychange", "input", "keydown", "keyup"],
            r = function(e, t) {
                return function(n) {
                    (10 == +e.scrollLeft && 37 == n.keyCode || 37 == n.which || "ArrowLeft" == n.code || "ArrowLeft" == n.key || 36 == n.keyCode || 36 == n.which || "Home" == n.code || "Home" == n.key || 13 == n.keyCode || 13 == n.which || "Enter" == n.code || "Enter" == n.key || "NumpadEnter" == n.code) && (e.scrollLeft = 0), TextareaLine.updateLineNumber(e, t)
                }
            }(t, n);
        for (let n = a.length - 1; n >= 0; n--) t.addEventListener(a[n], r), TextareaLine.eventList[e].push({
            event: a[n],
            handler: r
        });
        const i = ["change", "mousewheel", "scroll"],
            o = function(e, t) {
                return function() {
                    t.scrollTop = e.scrollTop
                }
            }(t, n);
        for (let n = i.length - 1; n >= 0; n--) t.addEventListener(i[n], o), TextareaLine.eventList[e].push({
            event: i[n],
            handler: o
        })
    },
    removeLineNumb: function(e) {
        const t = document.getElementById(e);
        if (null == t) return console.warn("Couldn't find textarea of id '" + e + "'");
        if (-1 != t.className.indexOf("textarea-active")) return console.warn("Textarea of id '" + e + "' is already numbered");
        t.classList.add("textarea-active");
        const n = t.previousSibling;
        if ("textarea-wrapper" == n.className && n.remove(), TextareaLine.eventList[e]) {
            for (let n = TextareaLine.eventList[e].length - 1; n >= 0; n--) {
                const a = TextareaLine.eventList[e][n];
                t.removeEventListener(a.event, a.handler)
            }
            delete TextareaLine.eventList[e]
        }
    }
};
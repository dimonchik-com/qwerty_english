function convert_qwerty () {
    var map={q:"й",w:"ц",e:"у",r:"к",t:"е",y:"н",u:"г",i:"ш",o:"щ",p:"з","[":"х","{":"Х","]":"ъ","}":"Ъ","|":"/","`":"ё","~":"Ё",a:"ф",s:"ы",d:"в",f:"а",g:"п",h:"р",j:"о",k:"л",l:"д",";":"ж",":":"Ж","'":"э",'"':"Э",z:"я",x:"ч",c:"с",v:"м",b:"и",n:"т",m:"ь",",":"б","<":"Б",".":"ю",">":"Ю","/":".","?":",","@":'"',"#":"№",$:";","^":":","&":"?"};

    function replace (map) {
        return function (str) {
            return str.split('').map(function (i) {
                return map[i] || i
            }).join('');
        }
    }

    var reverse = { }
    var full = { }

    for (var key in map) {
        var value = map[key]
        full[key] = value
        reverse[value] = key

        var upper = key.toUpperCase()
        if (upper !== key) {
            full[upper] = value.toUpperCase()
            reverse[full[upper]] = upper
        }
    }

    return { fromEn: replace(full), toEn: replace(reverse) }
}

var one=convert_qwerty();
console.log(one.fromEn("QwerTy"));
console.log(one.toEn("Йцукен"));
package com.aliot.zzint.service.app

import com.aliot.zzint.dto.Convert
import org.springframework.stereotype.Service

@Service
class AppService {

    fun convertContent(convert: Convert): String {
        var contentBuilder = StringBuilder(convert.orgContent)

        // addFront
        if(convert.addFront?.isNotBlank() == true){
            contentBuilder.insert(0, convert.addFront)
            contentBuilder = contentBuilder.replace("\n", "\n" + convert.addFront)
        }

        // addBack
        if(convert.addBack?.isNotBlank() == true){
            contentBuilder.insert(contentBuilder.length, convert.addBack)
            contentBuilder = contentBuilder.replace("\n", convert.addBack + "\n")
        }

        // addLine
        if(convert.addLine){
            contentBuilder = contentBuilder.replace("\n",  "\n\n")
        }

        /**
         * extract(추출)
         * convert.extract[0] : 몇번 째 문자열을 추출할 것인지
         * convert.extract[1] : 무슨 문자열을 기준으로 할 것인지
         */
        if(convert.extract?.isNotEmpty() == true){
            val extract = convert.extract.split(",")
            val pickNum = Integer.parseInt(extract[0]) - 1
            val standardChar = extract[1]
            val newContent = StringBuilder()
            for(line: String in contentBuilder.toString().split("\n")){
                val unit = line.split(standardChar)
                var picked = ""
                if(pickNum < unit.size){
                    picked = unit[pickNum]
                }

                newContent.append(picked + "\n")
            }

            contentBuilder.clear()
            contentBuilder = newContent
        }

        return contentBuilder.toString()
    }

    private fun StringBuilder.replace(pattern: String, value: String): StringBuilder {
        return StringBuilder(this.toString().replace(pattern, value))
    }
}




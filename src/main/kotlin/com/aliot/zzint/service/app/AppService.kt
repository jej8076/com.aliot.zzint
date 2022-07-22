package com.aliot.zzint.service.app

import com.aliot.zzint.dto.Convert
import org.springframework.stereotype.Service
import java.util.*

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

        return contentBuilder.toString()
    }

    private fun StringBuilder.replace(pattern: String, value: String): StringBuilder {
        return StringBuilder(this.toString().replace(pattern, value))
    }
}




package com.aliot.zzint.service.app

import com.aliot.zzint.dto.ConvertDto
import org.springframework.stereotype.Service

@Service
class AppService {

    val lineSeparator: String = System.getProperty("line.separator")

    fun converContent(convert: ConvertDto): String {
        val contentBuilder = StringBuilder(convert.orgContent)

        // convert 로직
        if(convert.frontAdd.isNotBlank()){
            val regex = lineSeparator.toRegex()
            contentBuilder.replace(regex, lineSeparator + convert.frontAdd)
        }
        return contentBuilder.toString()
    }
}

private fun StringBuilder.replace(regex: String, s: String): StringBuilder {
    this.toString().replace(regex, s)
    return StringBuilder(toString().replace(regex, s))
}

package com.aliot.zzint.service.App

import com.aliot.zzint.Dto.ConvertDto
import org.springframework.stereotype.Service;

@Service
class AppService {

    fun converContent(content: String): String {
        var contentBuilder = StringBuilder();
        contentBuilder.append(content)
        contentBuilder.append("test!!")
        return contentBuilder.toString();
    }
}
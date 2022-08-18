package com.aliot.zzint.controller.app

import com.aliot.zzint.common.CommonUtils
import com.aliot.zzint.dto.Convert
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.http.ResponseEntity
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import com.aliot.zzint.service.app.AppService

@Controller
@RequestMapping("/app")
class AppController {

    @Autowired private lateinit var appService: AppService
    @Autowired private lateinit var commonUtils: CommonUtils

    @RequestMapping("/editor")
    fun editorPage(m: Model, locale: String?): String{
        if (locale != null) commonUtils.setLocale(locale)
        return "editor"
    }

    @RequestMapping("/convert")
    fun convert(convert: Convert) = ResponseEntity.ok().body(appService.convertContent(convert))
}
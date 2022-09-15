package com.aliot.zzint.controller.app

import com.aliot.zzint.common.CommonUtils
import com.aliot.zzint.common.ExtendReloadableResourceBundleMessageSource
import com.aliot.zzint.dto.Convert
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.http.ResponseEntity
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import com.aliot.zzint.service.app.AppService
import org.springframework.ui.set
import java.util.*

@Controller
@RequestMapping("/app")
class AppController {

    @Autowired private lateinit var appService: AppService
    @Autowired private lateinit var commonUtils: CommonUtils
    @Autowired private lateinit var extMessageSource: ExtendReloadableResourceBundleMessageSource

    @RequestMapping("/editor")
    fun editorPage(m: Model, lang: String?): String{
        if (lang != null) commonUtils.setLocale(lang)
        val globalLanguage = Locale.getDefault().toString()
        val globalLocale = Locale(globalLanguage,"","")
        m["globalMessage"] = extMessageSource.getGlobalMessage(globalLocale, "editor")
        m["globalLanguage"] = globalLanguage
        return "editor"
    }

    @RequestMapping("/convert")
    fun convert(convert: Convert) = ResponseEntity.ok().body(appService.convertContent(convert))
}
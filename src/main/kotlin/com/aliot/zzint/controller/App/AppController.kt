package com.aliot.zzint.controller.App

import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.http.ResponseEntity
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.apache.tomcat.util.http.ResponseUtil
import com.fasterxml.jackson.module.kotlin.jsonMapper
import com.aliot.zzint.Dto.ConvertDto
import com.aliot.zzint.service.App.AppService

@Controller
@RequestMapping("/app")
class AppController {

    @Autowired
    private lateinit var appService: AppService

    @RequestMapping("/editor")
    fun editorPage(m: Model): String{
        return "editor"
    }

    @RequestMapping("/convert")
    fun convert(content: String) = ResponseEntity.ok().body(appService.converContent(content))
}
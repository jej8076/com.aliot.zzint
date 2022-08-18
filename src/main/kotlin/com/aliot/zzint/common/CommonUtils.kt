package com.aliot.zzint.common

import org.springframework.stereotype.Service
import java.util.*

@Service
class CommonUtils {

    fun setLocale(locale: String){
        when(locale) {
            "ko" -> Locale.setDefault(Locale.KOREA)
            "us" -> Locale.setDefault(Locale.US)
        }
    }
}
package com.aliot.zzint.common

import org.springframework.context.support.ReloadableResourceBundleMessageSource
import java.util.*

class ExtendReloadableResourceBundleMessageSource: ReloadableResourceBundleMessageSource() {
    fun getMessages(locale: Locale): Properties{
        return getMergedProperties(locale).properties!!
    }
}
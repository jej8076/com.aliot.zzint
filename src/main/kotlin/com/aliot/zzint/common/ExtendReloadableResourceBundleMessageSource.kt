package com.aliot.zzint.common

import org.springframework.context.support.ReloadableResourceBundleMessageSource
import java.util.*

@Suppress("CAST_NEVER_SUCCEEDS")
class ExtendReloadableResourceBundleMessageSource: ReloadableResourceBundleMessageSource() {

    /**
     * param : 언어, message.properties의 .구분자 기준 첫번째 문자
     */
    fun getGlobalMessage(locale: Locale, firstDepth: String): Map<Any, Any> {
        val properties = getMergedProperties(locale).properties?: throw Exception()
        return properties
            .filterKeys { k -> k.toString().startsWith(firstDepth) }
            .map { e -> e.key.toString().replace("$firstDepth.", "") to e.value }
            .toMap()
    }
}
package chapter9._09_01.begin

import kotlinx.coroutines.*
import kotlin.system.measureTimeMillis

fun main() {
    val time = measureTimeMillis {

    }
    println("$time ms")
}

suspend fun longCalc(startNum: Int): Int {
    delay(1000)
    return startNum + 1
}

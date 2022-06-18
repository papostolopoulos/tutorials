package chapter9._09_02.begin

import kotlinx.coroutines.*
import kotlin.system.measureTimeMillis

fun main() {
    val time = measureTimeMillis {
        timeOut()
    }
    println("$time ms")
}

suspend fun longCalc(startNum: Int): Int {
    delay(1000)
    return startNum + 1
}

fun timeOut() = runBlocking {
    println("async/await beginning")
    val x1 = async { longCalc(100) }
    val x2 = async { longCalc(200) }
    val x3 = async { longCalc(300) }
    val sum1 = listOf(x1, x2, x3).awaitAll().sum()
    println("async/await results = $sum1")
}

fun cancel() = runBlocking {
    val job = launch(Dispatchers.Default) {
        var i = 0
        var nextPrintTime = System.currentTimeMillis()
        while (isActive) {
            if (System.currentTimeMillis() >= nextPrintTime) {
                println("working for ${i * 100} milliseconds ...")
                nextPrintTime += 100L
                i++
            }
        }
    }
    delay(1000L)
    job.cancelAndJoin()
    println("done")
}

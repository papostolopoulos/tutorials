package chapter4._04_06.begin

fun main() {
    val result = (100 until 200)
        .map { println("doubling $it"); it * 2 }
        .filter { println("filtering $it"); it % 3 == 0 }
        .first()
    println("results = $result")
    println()
}

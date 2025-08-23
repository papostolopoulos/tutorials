package chapter5._05_02.begin
import java.util.Scanner

fun main() {
    print("Enter text: ")
    val txt = readLine()  // ?: ""
    print("You entered: $txt, length = ${txt?.length}}")
}

fun scanner() {
}

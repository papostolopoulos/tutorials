package chapter5._05_03.begin

import java.io.File

fun main() {
    val res = "./resources"
    val pets = "pets.txt"
    val pFile = File("${res}/$pets")
}



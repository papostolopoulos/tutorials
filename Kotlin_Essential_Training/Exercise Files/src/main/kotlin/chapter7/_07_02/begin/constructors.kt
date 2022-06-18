package chapter7._07_02.begin

class Vehicle(
    val make: String, val model: String,
    val year: Int, val state: String = "CA"
) {
    override fun toString(): String {
        return "$year $make $model ($state)"
    }
}

fun main() {
}

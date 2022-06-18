package chapter7._07_03.begin

class Student(val firstName: String, val lastName: String, val grade: Int) {
}

fun main() {
    val students = mutableListOf<Student>(
        Student("abel", "baker", 11),
        Student("abel", "baker", 11),
        Student("delta", "echo", 12)
    )
}

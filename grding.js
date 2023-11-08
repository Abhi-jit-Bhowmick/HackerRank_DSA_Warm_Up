//! https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true


function gradingStudents(grades) {
    // Write your code here
    let resArr = []

    for (let i in grades) {

        if (grades[i] > 37) {

            let roundedGrade = Math.ceil(grades[i] / 5) * 5;
            resArr.push(roundedGrade - grades[i] < 3 ? roundedGrade : grades[i])
        }

        else {
            resArr.push(grades[i])
        }
    }
    return resArr

}



console.log(gradingStudents([73, 67, 38, 33]))


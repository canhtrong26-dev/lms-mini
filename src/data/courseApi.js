import courses from "./courses"

function fetchCourses(shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Lỗi server!"))
            } else {
                resolve(courses)
            }
        }, 1000)
    })
}

export { fetchCourses }
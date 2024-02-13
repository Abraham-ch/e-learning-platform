export const getAllCourse = () => {
  return axios.get("http://localhost:8000/courses/api/v1/course/");
};
